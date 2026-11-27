import { useEffect, useMemo, useRef, useState } from 'react'
import { Building2, CalendarDays, MapPin, ShieldCheck, UserRound, Users } from 'lucide-react'
import Container from './ui/Container'
import SectionEyebrow from './ui/SectionEyebrow'
import { hubs, regions } from '../data/brevikData'
import { useSectionReveal } from '../hooks/useSectionReveal'

const LAT_TOP = 83
const LAT_BOTTOM = -63
const MAP_W = 1000
const MAP_H = 500

function project(lat, lng) {
  const x = ((lng + 180) / 360) * MAP_W
  const y = ((LAT_TOP - lat) / (LAT_TOP - LAT_BOTTOM)) * MAP_H
  return { x, y }
}

const landPolygons = [
  [
    [-168, 66], [-158, 71], [-140, 70], [-125, 70], [-110, 73], [-95, 74], [-82, 73], [-64, 60],
    [-55, 50], [-66, 45], [-70, 42], [-75, 36], [-81, 25], [-90, 29], [-97, 26], [-104, 23],
    [-112, 30], [-118, 34], [-124, 41], [-125, 49], [-132, 55], [-140, 60], [-152, 60], [-164, 60],
  ],
  [
    [-105, 23], [-97, 19], [-91, 16], [-84, 11], [-78, 8], [-80, 9], [-86, 14], [-90, 18], [-96, 22],
  ],
  [
    [-81, 11], [-74, 12], [-66, 11], [-56, 6], [-48, 0], [-35, -6], [-38, -16], [-42, -23],
    [-50, -29], [-58, -38], [-64, -43], [-71, -53], [-74, -44], [-72, -32], [-72, -18], [-79, -6], [-81, 2],
  ],
  [
    [-10, 36], [-9, 43], [-4, 48], [1, 51], [5, 54], [8, 57], [5, 61], [10, 64], [16, 69],
    [25, 71], [31, 70], [35, 64], [30, 57], [28, 50], [24, 45], [19, 41], [13, 39], [8, 38], [3, 36],
  ],
  [
    [-7, 50], [-3, 51], [2, 52], [1, 58], [-3, 59], [-6, 57], [-7, 54],
  ],
  [
    [-24, 65], [-14, 66], [-14, 64], [-22, 63],
  ],
  [
    [-17, 15], [-16, 21], [-11, 28], [-5, 35], [7, 37], [15, 33], [26, 32], [33, 31], [35, 24],
    [43, 12], [51, 12], [44, 1], [40, -10], [38, -17], [34, -25], [27, -33], [19, -35], [13, -29],
    [9, -18], [9, -5], [4, 4], [-5, 5], [-12, 8],
  ],
  [
    [40, -13], [46, -14], [50, -19], [47, -25], [44, -22], [43, -17],
  ],
  [
    [35, 64], [45, 68], [60, 70], [75, 74], [95, 77], [115, 77], [135, 73], [160, 71], [178, 66],
    [170, 60], [158, 57], [150, 50], [143, 44], [135, 36], [128, 32], [122, 24], [113, 18], [108, 10],
    [103, 2], [98, 7], [94, 16], [87, 21], [80, 17], [76, 8], [71, 22], [64, 25], [57, 27],
    [50, 30], [45, 37], [42, 45], [38, 52], [35, 58],
  ],
  [
    [68, 24], [72, 20], [76, 8], [80, 12], [88, 22], [82, 25], [74, 25],
  ],
  [
    [95, 5], [100, -3], [106, -7], [115, -8], [115, -6], [105, 0], [100, 3],
  ],
  [
    [109, 2], [117, 4], [119, -3], [110, -5], [108, -1],
  ],
  [
    [131, -1], [141, -3], [150, -8], [147, -10], [138, -9], [132, -5],
  ],
  [
    [120, 19], [124, 15], [126, 8], [122, 5], [118, 10],
  ],
  [
    [130, 31], [135, 34], [140, 37], [142, 43], [145, 44], [144, 42], [141, 36], [136, 33], [132, 30],
  ],
  [
    [166, -45], [173, -40], [178, -37], [175, -34], [172, -38], [168, -43],
  ],
  [
    [113, -22], [115, -18], [122, -16], [130, -12], [137, -12], [142, -11], [146, -16], [153, -25],
    [153, -33], [147, -38], [140, -38], [132, -33], [124, -34], [116, -33], [113, -27],
  ],
  [
    [145, -41], [148, -42], [147, -44], [144, -43],
  ],
  [
    [-45, 60], [-30, 67], [-20, 70], [-18, 76], [-25, 82], [-45, 83], [-58, 78], [-55, 68],
  ],
  [
    [-84, 22], [-75, 20], [-74, 22], [-82, 24],
  ],
]

function pointInPolygon(point, polygon) {
  let inside = false
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i, i += 1) {
    const xi = polygon[i].x
    const yi = polygon[i].y
    const xj = polygon[j].x
    const yj = polygon[j].y
    const intersects =
      yi > point.y !== yj > point.y && point.x < ((xj - xi) * (point.y - yi)) / (yj - yi) + xi
    if (intersects) inside = !inside
  }
  return inside
}

const projectedLand = landPolygons.map((polygon) =>
  polygon.map(([lng, lat]) => project(lat, lng)),
)

function buildDots() {
  const dots = []
  const step = 9
  for (let x = 6; x <= MAP_W - 6; x += step) {
    for (let y = 6; y <= MAP_H - 6; y += step) {
      const point = { x, y }
      if (projectedLand.some((polygon) => pointInPolygon(point, polygon))) {
        dots.push({ x, y })
      }
    }
  }
  return dots
}

export default function GlobalFootprintMap() {
  const sectionRef = useRef(null)
  const [activeRegion, setActiveRegion] = useState('All Regions')
  const [selectedId, setSelectedId] = useState(hubs[0].id)
  useSectionReveal(sectionRef)

  const dots = useMemo(() => buildDots(), [])

  useEffect(() => {
    const matching = hubs.filter((hub) => activeRegion === 'All Regions' || hub.region === activeRegion)
    if (matching.length && !matching.some((hub) => hub.id === selectedId)) {
      setSelectedId(matching[0].id)
    }
  }, [activeRegion, selectedId])

  const selectedHub = hubs.find((hub) => hub.id === selectedId) || hubs[0]
  const selectedPosition = project(selectedHub.lat, selectedHub.lng)

  return (
    <section
      id="footprint"
      ref={sectionRef}
      aria-labelledby="footprint-heading"
      className="border-y border-[#E2E8F0] bg-white py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end" data-reveal>
          <div className="lg:col-span-8">
            <SectionEyebrow>04 / Global Footprint</SectionEyebrow>
            <h2
              id="footprint-heading"
              className="mt-5 max-w-2xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-[#0A1628] sm:text-4xl lg:text-[2.9rem]"
            >
              Operating where the world's critical systems converge.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="max-w-sm text-[13px] leading-relaxed text-[#475569] lg:ml-auto">
              Six anchor hubs coordinate 42,800 employees and 100 controlled facilities across 38 countries.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" data-reveal>
          {regions.map((region) => {
            const isActive = region === activeRegion
            return (
              <button
                key={region}
                type="button"
                onClick={() => setActiveRegion(region)}
                aria-pressed={isActive}
                className={`border px-3.5 py-2 font-mono text-[9.5px] uppercase tracking-[0.12em] transition-colors ${
                  isActive
                    ? 'border-[#0A1628] bg-[#0A1628] text-white'
                    : 'border-[#E2E8F0] bg-white text-[#475569] hover:border-[#0A1628] hover:text-[#0A1628]'
                }`}
              >
                {region}
              </button>
            )
          })}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-12" data-reveal>
          <div className="border border-[#E2E8F0] bg-white lg:col-span-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E2E8F0] px-4 py-3 sm:px-5">
              <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-[#64748B]">
                <span className="relative flex h-2 w-2">
                  <span className="pin-pulse absolute inline-flex h-full w-full rounded-full bg-[#0052CC]" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0052CC]" />
                </span>
                Corporate hub
              </div>
              <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#94A3B8]">
                {activeRegion}
              </span>
            </div>

            <div className="relative w-full" style={{ aspectRatio: '2 / 1' }}>
              <svg
                viewBox={`0 0 ${MAP_W} ${MAP_H}`}
                className="absolute inset-0 h-full w-full"
                role="img"
                aria-label="Dot-matrix world map showing Brevik corporate hubs"
              >
                <rect width={MAP_W} height={MAP_H} fill="#FFFFFF" />
                {[125, 250, 375].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={y}
                    x2={MAP_W}
                    y2={y}
                    stroke="#F1F5F9"
                    strokeWidth="0.75"
                    strokeDasharray="2 8"
                  />
                ))}
                {[250, 500, 750].map((x) => (
                  <line
                    key={x}
                    x1={x}
                    y1="0"
                    x2={x}
                    y2={MAP_H}
                    stroke="#F1F5F9"
                    strokeWidth="0.75"
                    strokeDasharray="2 8"
                  />
                ))}
                <g>
                  {dots.map((dot) => (
                    <circle
                      key={`${dot.x}-${dot.y}`}
                      cx={dot.x}
                      cy={dot.y}
                      r="1.55"
                      fill="#CBD5E1"
                    />
                  ))}
                </g>
                <g opacity="0.9">
                  <line
                    x1={selectedPosition.x}
                    y1="0"
                    x2={selectedPosition.x}
                    y2={MAP_H}
                    stroke="#0052CC"
                    strokeOpacity="0.12"
                    strokeWidth="1"
                    strokeDasharray="3 6"
                  />
                  <line
                    x1="0"
                    y1={selectedPosition.y}
                    x2={MAP_W}
                    y2={selectedPosition.y}
                    stroke="#0052CC"
                    strokeOpacity="0.12"
                    strokeWidth="1"
                    strokeDasharray="3 6"
                  />
                </g>
              </svg>

              <div className="absolute inset-0">
                {hubs.map((hub) => {
                  const position = project(hub.lat, hub.lng)
                  const muted = activeRegion !== 'All Regions' && hub.region !== activeRegion
                  const active = hub.id === selectedHub.id
                  const labelLeft = position.x > 760
                  return (
                    <button
                      key={hub.id}
                      type="button"
                      onClick={() => setSelectedId(hub.id)}
                      aria-pressed={active}
                      aria-label={`${hub.city} — ${hub.role}`}
                      className={`group absolute -translate-x-1/2 -translate-y-1/2 rounded-full p-2 transition-opacity duration-300 ${
                        muted ? 'pointer-events-none opacity-0' : 'opacity-100'
                      }`}
                      style={{
                        left: `${(position.x / MAP_W) * 100}%`,
                        top: `${(position.y / MAP_H) * 100}%`,
                      }}
                    >
                      <span className="relative flex h-3 w-3 items-center justify-center">
                        {active ? (
                          <span className="pin-pulse absolute inline-flex h-3 w-3 rounded-full bg-[#0052CC]" />
                        ) : null}
                        <span
                          className={`relative inline-flex rounded-full bg-[#0052CC] transition-all ${
                            active ? 'h-2.5 w-2.5 ring-2 ring-white' : 'h-2 w-2 group-hover:h-2.5 group-hover:w-2.5'
                          }`}
                        />
                      </span>
                      <span
                        className={`absolute top-1/2 hidden -translate-y-1/2 whitespace-nowrap border border-[#E2E8F0] bg-white px-2 py-1 font-mono text-[8px] uppercase tracking-[0.1em] shadow-sm transition-opacity sm:block ${
                          active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        } ${labelLeft ? 'right-5' : 'left-5'} ${active ? 'text-[#0A1628]' : 'text-[#475569]'}`}
                      >
                        {hub.city}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-px border-t border-[#E2E8F0] bg-[#E2E8F0]">
              {[
                { value: '06', label: 'Anchor hubs' },
                { value: '38', label: 'Countries' },
                { value: '24/7', label: 'Network control' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white px-4 py-3">
                  <p className="font-mono text-lg font-medium tabular-nums tracking-tight text-[#0A1628]">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 font-mono text-[8.5px] uppercase tracking-[0.12em] text-[#94A3B8]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <div key={selectedHub.id} className="animate-fadeup flex h-full flex-col border border-[#E2E8F0] bg-[#F4F6F9] p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-[#0052CC]">
                  Hub telemetry
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[8.5px] uppercase tracking-[0.12em] text-[#059669]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#059669]" />
                  {selectedHub.status}
                </span>
              </div>

              <div className="mt-5 border-b border-[#D8DFE8] pb-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#64748B]">
                  {selectedHub.role}
                </p>
                <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#0A1628]">
                  {selectedHub.city}
                </h3>
                <p className="mt-1 text-[12px] text-[#475569]">
                  {selectedHub.country} · {selectedHub.region}
                </p>
              </div>

              <div className="flex-1 space-y-4 py-5">
                <div className="flex gap-3">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-[#0052CC]" />
                  <div>
                    <p className="font-mono text-[8.5px] uppercase tracking-[0.12em] text-[#94A3B8]">Address</p>
                    <p className="mt-1 text-[12px] leading-relaxed text-[#334155]">{selectedHub.address}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <UserRound size={14} className="mt-0.5 shrink-0 text-[#0052CC]" />
                  <div>
                    <p className="font-mono text-[8.5px] uppercase tracking-[0.12em] text-[#94A3B8]">Regional head</p>
                    <p className="mt-1 text-[12px] font-medium text-[#0A1628]">{selectedHub.head}</p>
                    <p className="text-[10.5px] text-[#64748B]">{selectedHub.headTitle}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Users size={14} className="mt-0.5 shrink-0 text-[#0052CC]" />
                  <div>
                    <p className="font-mono text-[8.5px] uppercase tracking-[0.12em] text-[#94A3B8]">Headcount</p>
                    <p className="mt-1 font-mono text-[12px] tabular-nums text-[#0A1628]">
                      {selectedHub.headcount}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Building2 size={14} className="mt-0.5 shrink-0 text-[#0052CC]" />
                  <div>
                    <p className="font-mono text-[8.5px] uppercase tracking-[0.12em] text-[#94A3B8]">
                      Primary specialization
                    </p>
                    <p className="mt-1 text-[12px] leading-relaxed text-[#334155]">
                      {selectedHub.specialization}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 border-t border-[#D8DFE8] pt-4">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex items-center gap-1.5 font-mono text-[8.5px] uppercase tracking-[0.1em] text-[#94A3B8]">
                    <CalendarDays size={11} />
                    Established
                  </span>
                  <span className="font-mono text-[10px] tabular-nums text-[#0A1628]">
                    {selectedHub.established}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span className="flex items-center gap-1.5 font-mono text-[8.5px] uppercase tracking-[0.1em] text-[#94A3B8]">
                    <ShieldCheck size={11} />
                    Certification
                  </span>
                  <span className="text-right font-mono text-[9.5px] text-[#0A1628]">
                    {selectedHub.certification}
                  </span>
                </div>
                <div className="flex items-center justify-between border-t border-[#D8DFE8] pt-3 font-mono text-[8.5px] uppercase tracking-[0.1em] text-[#94A3B8]">
                  <span>Coordinates</span>
                  <span className="tabular-nums text-[#475569]">
                    {selectedHub.lat.toFixed(4)} / {selectedHub.lng.toFixed(4)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
