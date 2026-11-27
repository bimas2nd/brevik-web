const asciiMap = {
  '\u2018': "'",
  '\u2019': "'",
  '\u201a': ',',
  '\u201c': '"',
  '\u201d': '"',
  '\u201e': '"',
  '\u2013': '-',
  '\u2014': '-',
  '\u2015': '-',
  '\u2022': '-',
  '\u00b7': '-',
  '\u2026': '...',
  '\u2192': '->',
  '\u2190': '<-',
  '\u00b0': 'deg',
  '\u00a0': ' ',
  '\u00ae': '(R)',
  '\u2122': '(TM)',
  '\u20ac': 'EUR ',
  '\u00a3': 'GBP ',
  '\u00a5': 'JPY ',
  '\u00a9': '(c)',
}

function sanitize(value) {
  let text = String(value ?? '')
  Object.entries(asciiMap).forEach(([from, to]) => {
    text = text.split(from).join(to)
  })
  return text.replace(/[^\x20-\x7E\n]/g, '')
}

function wrapText(text, maxChars) {
  const words = sanitize(text).split(/\s+/).filter(Boolean)
  const lines = []
  let line = ''

  words.forEach((word) => {
    const candidate = line ? `${line} ${word}` : word
    if (candidate.length > maxChars && line) {
      lines.push(line)
      line = word
    } else {
      line = candidate
    }
  })

  if (line) lines.push(line)
  return lines
}

function escapePdfText(text) {
  return sanitize(text).replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)')
}

function pageChrome() {
  return [
    'q',
    '0.039 0.086 0.157 rg',
    '0 802 595 40 re',
    'f',
    'Q',
    'BT',
    '/F2 9 Tf',
    '1 1 1 rg',
    '40 822 Td',
    '(BREVIK CORPORATION) Tj',
    'ET',
    'BT',
    '/F1 8 Tf',
    '0.70 0.76 0.84 rg',
    '420 822 Td',
    '(NYSE: BVK / INVESTOR DOCUMENT) Tj',
    'ET',
  ].join('\n')
}

function addFooter(content, pageNumber, totalPages) {
  return [
    content,
    'q',
    '0.886 0.910 0.941 RG',
    '0.6 w',
    '40 48 m',
    '555 48 l',
    'S',
    'Q',
    'BT',
    '/F1 7.5 Tf',
    '0.28 0.33 0.41 rg',
    '40 34 Td',
    '(Brevik Corporation  |  Bahnhofstrasse 42, 8001 Zurich  |  ir@brevik.com) Tj',
    'ET',
    'BT',
    '/F1 7.5 Tf',
    '0.28 0.33 0.41 rg',
    '492 34 Td',
    `(Page ${pageNumber} of ${totalPages}) Tj`,
    'ET',
  ].join('\n')
}

export function downloadPdf(payload) {
  if (typeof window === 'undefined') return
  const {
    filename = 'brevik-document.pdf',
    title = 'Brevik Corporation',
    subtitle = '',
    meta = '',
    summary = [],
    metrics = [],
    sections = [],
  } = payload

  const pages = []
  let content = pageChrome()
  let y = 748

  const startPage = () => {
    content = pageChrome()
    y = 748
  }

  const pushPage = () => {
    pages.push(content)
    content = ''
  }

  const needPage = (height) => {
    if (y - height < 72) {
      pushPage()
      startPage()
    }
  }

  const textLine = (text, { size = 10, font = 'F1', color = '0.08 0.13 0.22', gap = 15, x = 40 } = {}) => {
    needPage(gap + 6)
    content += `\nBT\n/${font} ${size} Tf\n${color} rg\n${x} ${y} Td\n(${escapePdfText(text)}) Tj\nET`
    y -= gap
  }

  const rule = (gap = 14) => {
    needPage(gap + 6)
    content += `\nq\n0.886 0.910 0.941 RG\n0.7 w\n40 ${y} m\n555 ${y} l\nS\nQ`
    y -= gap
  }

  content += `\nBT\n/F2 22 Tf\n0.039 0.086 0.157 rg\n40 ${y} Td\n(${escapePdfText(title)}) Tj\nET`
  y -= 28

  if (subtitle) {
    wrapText(subtitle, 88).forEach((line) => textLine(line, { size: 11, color: '0.28 0.33 0.41', gap: 15 }))
    y -= 4
  }

  if (meta) {
    textLine(meta, { size: 8.5, font: 'F2', color: '0.0 0.32 0.80', gap: 18 })
  }

  rule(20)

  if (summary.length) {
    textLine('EXECUTIVE SUMMARY', { size: 9, font: 'F2', color: '0.0 0.32 0.80', gap: 18 })
    summary.forEach((item) => {
      wrapText(item, 92).forEach((line, index) => {
        textLine(index === 0 ? `- ${line}` : `  ${line}`, { size: 9.5, gap: 14 })
      })
      y -= 4
    })
    y -= 6
  }

  if (metrics.length) {
    textLine('KEY FIGURES', { size: 9, font: 'F2', color: '0.0 0.32 0.80', gap: 18 })
    metrics.forEach((metric) => {
      needPage(18)
      content += `\nBT\n/F2 9 Tf\n0.28 0.33 0.41 rg\n40 ${y} Td\n(${escapePdfText(metric.label)}) Tj\nET`
      content += `\nBT\n/F2 9 Tf\n0.039 0.086 0.157 rg\n492 ${y} Td\n(${escapePdfText(metric.value)}) Tj\nET`
      content += `\nq\n0.886 0.910 0.941 RG\n0.4 w\n40 ${y - 6} m\n555 ${y - 6} l\nS\nQ`
      y -= 17
    })
    y -= 8
  }

  sections.forEach((section) => {
    if (section.heading) {
      needPage(42)
      rule(14)
      textLine(section.heading.toUpperCase(), { size: 10, font: 'F2', color: '0.0 0.32 0.80', gap: 18 })
    }
    ;(section.paragraphs || []).forEach((paragraph) => {
      wrapText(paragraph, 94).forEach((line) => textLine(line, { size: 9.5, gap: 14 }))
      y -= 6
    })
    ;(section.bullets || []).forEach((bullet) => {
      wrapText(bullet, 90).forEach((line, index) => {
        textLine(index === 0 ? `- ${line}` : `  ${line}`, { size: 9.5, gap: 14 })
      })
      y -= 3
    })
    y -= 6
  })

  if (content) pushPage()

  const totalPages = pages.length
  const withFooters = pages.map((page, index) => addFooter(page, index + 1, totalPages))

  const objects = []
  const pageObjectStart = 5

  objects[1] = '<< /Type /Catalog /Pages 2 0 R >>'
  objects[2] = `<< /Type /Pages /Kids [${withFooters
    .map((_, index) => `${pageObjectStart + index * 2} 0 R`)
    .join(' ')}] /Count ${totalPages} >>`
  objects[3] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>'
  objects[4] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>'

  withFooters.forEach((page, index) => {
    const pageObject = pageObjectStart + index * 2
    const contentObject = pageObject + 1
    objects[pageObject] =
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentObject} 0 R >>`
    objects[contentObject] = `<< /Length ${page.length} >>\nstream\n${page}\nendstream`
  })

  let pdf = '%PDF-1.4\n'
  const offsets = [0]

  objects.forEach((body, number) => {
    if (!body) return
    offsets[number] = pdf.length
    pdf += `${number} 0 obj\n${body}\nendobj\n`
  })

  const maxObject = objects.length - 1
  const xrefStart = pdf.length
  pdf += `xref\n0 ${maxObject + 1}\n`
  pdf += '0000000000 65535 f \n'
  for (let number = 1; number <= maxObject; number += 1) {
    pdf += `${String(offsets[number] || 0).padStart(10, '0')} 00000 n \n`
  }
  pdf += `trailer\n<< /Size ${maxObject + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`

  const blob = new Blob([pdf], { type: 'application/pdf' })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  document.body.appendChild(anchor)
  anchor.click()
  document.body.removeChild(anchor)
  window.setTimeout(() => URL.revokeObjectURL(url), 1500)
}
