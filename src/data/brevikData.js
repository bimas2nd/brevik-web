export const company = {
  name: 'BREVIK CORPORATION',
  shortName: 'Brevik',
  legalName: 'Brevik Corporation',
  ticker: 'NYSE: BVK',
  founded: 1984,
  headquarters: ['Zurich, Switzerland', 'Singapore'],
  description:
    'Brevik Corporation is a global industrial infrastructure company operating high-voltage grid systems, semiconductor precision supply chains, maritime and port automation, and industrial robotics across 38 countries.',
  employees: '42,800+',
  countries: 38,
  creditRating: 'AA- (S&P)',
  revenue: '$18.4B',
}

export const stock = {
  exchange: 'NYSE',
  ticker: 'BVK',
  price: 148.4,
  change: 2.08,
  changePercent: 1.42,
  previousClose: 146.32,
  marketCap: '$61.4B',
  volume: '2.84M',
  dayRange: '146.10 - 149.22',
  yearRange: '112.60 - 156.85',
  updated: '25 Nov 2026 · 16:00 ET',
  note: 'Delayed 15m',
}

export const heroKpis = [
  {
    id: 'revenue',
    value: 18.4,
    decimals: 1,
    prefix: '$',
    suffix: 'B',
    label: 'Annual Revenue',
    detail: 'FY2025 · +14.3% YoY',
  },
  {
    id: 'employees',
    value: 42800,
    decimals: 0,
    prefix: '',
    suffix: '+',
    label: 'Global Employees',
    detail: 'Six regional platforms',
  },
  {
    id: 'countries',
    value: 38,
    decimals: 0,
    prefix: '',
    suffix: '',
    label: 'Countries of Operation',
    detail: 'Europe · APAC · Americas',
  },
  {
    id: 'rating',
    display: 'AA-',
    label: 'S&P Credit Rating',
    detail: 'Stable outlook',
  },
]

export const annualReport = {
  title: '2026 Integrated Annual Report',
  subtitle: 'Resilient infrastructure. Enduring value.',
  kicker: 'INTEGRATED ANNUAL REPORT',
  published: 'Published 5 November 2026',
  pages: '164 pages',
  filename: 'Brevik_2026_Integrated_Annual_Report.pdf',
  meta: '5 November 2026 · 164 pages · 18.6 MB',
  stats: [
    { label: 'Revenue', value: '$18.4B' },
    { label: 'Adjusted EBITDA', value: '$3.62B' },
    { label: 'Backlog', value: '$29.8B' },
    { label: 'Countries', value: '38' },
  ],
  highlights: [
    'Revenue growth of 14.3% with adjusted EBITDA margin expansion of 80 basis points to 19.7%.',
    'Contracted backlog reached $29.8 billion, providing 1.6x coverage of FY2025 revenue.',
    'Scope 1 and 2 emissions reduced 64% against the 2019 baseline; 88% renewable electricity across operations.',
    'Returned $1.9 billion to shareholders through dividends and disciplined share repurchases.',
    'Maintained AA- credit rating with 1.8x net leverage and $6.2 billion of available liquidity.',
  ],
  chapters: [
    {
      id: 'strategic',
      label: 'Strategic Report',
      title: 'Letter from the CEO',
      points: [
        'Brevik enters 2027 with the strongest order book in its history and a clearer operating model than at any point since our founding.',
        'Demand for resilient grid capacity, advanced semiconductor supply, and automated trade corridors is structural rather than cyclical.',
        'Our dual-headquarters structure in Zurich and Singapore keeps capital allocation close to both policy and customer decision-making.',
      ],
    },
    {
      id: 'operating',
      label: 'Operating Review',
      title: 'Four integrated platforms',
      points: [
        'Grid & Power Systems delivered $7.8 billion in revenue and a $12.4 billion contracted backlog.',
        'Semiconductor Supply grew 12.4% as cleanroom logistics capacity expanded across Penang, Dresden, and Hillsboro.',
        'Maritime & Port Automation completed 240,000 autonomous container moves across three live corridors.',
        'Industrial Robotics improved segment operating margin to 14.8% on higher software attach rates.',
      ],
    },
    {
      id: 'financials',
      label: 'Financial Statements',
      title: 'Consolidated performance',
      points: [
        'Consolidated revenue of $18.4 billion; adjusted EBITDA of $3.62 billion at a 19.7% margin.',
        'Operating cash flow of $3.1 billion and capital expenditure of $1.7 billion, weighted to growth infrastructure.',
        'Net debt of $6.5 billion; net leverage of 1.8x adjusted EBITDA.',
        'Proposed final dividend of CHF 1.42 per share, subject to shareholder approval at the 2027 AGM.',
      ],
    },
  ],
}

const q3Feature = {
  kicker: 'INTEGRATED ANNUAL REPORT',
  title: 'Q3 2026 Integrated Annual Report',
  description:
    'A complete view of Brevik financial performance, operating progress, and the 2030 decarbonization pathway.',
  meta: 'Published 5 Nov 2026 · 164 pages',
  href: '#investors',
}

export const megaMenus = [
  {
    id: 'company',
    label: 'Company',
    columns: [
      {
        title: 'Corporate Profile',
        links: [
          { label: 'Who We Are', description: 'Purpose, values, and corporate identity', href: '#company' },
          { label: 'Operating Model', description: 'One system across four disciplines', href: '#operating-model' },
          { label: 'Leadership & Board', description: 'Executive committee and directors', href: '#leadership' },
          { label: 'Global Footprint', description: 'Six anchor hubs across 38 countries', href: '#footprint' },
          { label: 'Selected Projects', description: 'Reference portfolio and case studies', href: '#projects' },
        ],
      },
      {
        title: 'Governance & Impact',
        links: [
          { label: 'Corporate Governance', description: 'Board independence and compliance', href: '#company' },
          { label: 'Sustainability', description: '2030 net-zero commitment and ESG data', href: '#sustainability' },
          { label: 'Technology & Innovation', description: 'Research roadmap and patent portfolio', href: '#innovation' },
          { label: 'Newsroom', description: 'Corporate announcements and media', href: '#newsroom' },
          { label: 'Investor Relations', description: 'Results, filings, and shareholder tools', href: '#investors' },
        ],
      },
    ],
    featured: q3Feature,
  },
  {
    id: 'businesses',
    label: 'Businesses',
    columns: [
      {
        title: 'Operating Segments',
        links: [
          { label: 'Grid & Power Systems', description: 'HVDC, substations, and grid stability', href: '#businesses' },
          { label: 'Semiconductor Supply', description: 'Cleanroom logistics and precision materials', href: '#businesses' },
          { label: 'Maritime & Port Automation', description: 'Autonomous corridors and port systems', href: '#businesses' },
          { label: 'Industrial Robotics', description: 'Precision assembly and fleet orchestration', href: '#businesses' },
        ],
      },
      {
        title: 'Integrated Capabilities',
        links: [
          { label: 'High-Voltage Engineering', description: 'Delivery across land and subsea routes', href: '#businesses' },
          { label: 'Cleanroom Logistics', description: 'ISO Class 5 environments at scale', href: '#businesses' },
          { label: 'Autonomous Corridors', description: 'Certified port and yard automation', href: '#businesses' },
          { label: 'Precision Robotics', description: 'Sub-millimeter industrial assembly', href: '#businesses' },
          { label: 'Selected Projects', description: 'Projects delivered in the field', href: '#projects' },
          { label: 'Technology & Innovation', description: 'R&D pipeline and engineering IP', href: '#innovation' },
        ],
      },
    ],
    featured: q3Feature,
  },
  {
    id: 'sustainability',
    label: 'Sustainability',
    columns: [
      {
        title: '2030 Commitment',
        links: [
          { label: 'Net-Zero Pathway', description: 'Scope 1, 2, and 3 reduction plans', href: '#sustainability' },
          { label: 'Renewable Electricity', description: '88% of operations powered by renewables', href: '#sustainability' },
          { label: 'Circular Materials', description: '79% recovery across tier-1 facilities', href: '#sustainability' },
          { label: 'Climate Resilience', description: 'Physical risk and adaptation framework', href: '#sustainability' },
        ],
      },
      {
        title: 'Accountability',
        links: [
          { label: 'ESG Metrics', description: 'Verified performance and targets', href: '#sustainability' },
          { label: 'Assurance & Reporting', description: 'Third-party limited assurance', href: '#sustainability' },
          { label: 'Human Rights', description: 'Supplier and labor standards', href: '#sustainability' },
          { label: 'Technology & Innovation', description: 'Research that improves real assets', href: '#innovation' },
          { label: 'Governance', description: 'Board oversight and remuneration linkage', href: '#company' },
        ],
      },
    ],
    featured: q3Feature,
  },
  {
    id: 'investors',
    label: 'Investors',
    columns: [
      {
        title: 'Financial Performance',
        links: [
          { label: 'Results & Guidance', description: 'Quarterly performance and outlook', href: '#investors' },
          { label: 'Financial Calendar', description: 'Reporting dates and investor events', href: '#investors' },
          { label: 'Annual Reports', description: 'Integrated reporting archive', href: '#investors' },
          { label: 'Selected Projects', description: 'Reference infrastructure portfolio', href: '#projects' },
          { label: 'Segment Data', description: 'Revenue, backlog, and growth metrics', href: '#businesses' },
        ],
      },
      {
        title: 'Shareholder Resources',
        links: [
          { label: 'Stock Information', description: 'NYSE: BVK trading data', href: '#investors' },
          { label: 'SEC Filings', description: 'Regulatory disclosures and forms', href: '#investors' },
          { label: 'Corporate Governance', description: 'Board committees and charters', href: '#company' },
          { label: 'Investor Contacts', description: 'Institutional and media inquiries', href: '#leadership' },
        ],
      },
    ],
    featured: q3Feature,
  },
  {
    id: 'newsroom',
    label: 'Newsroom',
    columns: [
      {
        title: 'Latest Releases',
        links: [
          { label: 'All Press Releases', description: 'Corporate announcements and updates', href: '#newsroom' },
          { label: 'Financial News', description: 'Earnings, guidance, and capital markets', href: '#newsroom' },
          { label: 'Operational Milestones', description: 'Projects, facilities, and contracts', href: '#newsroom' },
          { label: 'Partnerships', description: 'Consortia and strategic agreements', href: '#newsroom' },
        ],
      },
      {
        title: 'Media Resources',
        links: [
          { label: 'Media Contacts', description: 'Global and regional press offices', href: '#newsroom' },
          { label: 'Sustainability News', description: 'Decarbonization and reporting updates', href: '#newsroom' },
          { label: 'Investor Alerts', description: 'Quarterly email notifications', href: '#leadership' },
          { label: 'Annual Report', description: '2026 integrated report', href: '#investors' },
        ],
      },
    ],
    featured: q3Feature,
  },
]

export const corporateIdentity = {
  eyebrow: '01 / CORPORATE IDENTITY',
  heading: 'Built on discipline. Governed for the long term.',
  intro:
    'Brevik operates at the intersection of public infrastructure and private capital. Our identity is defined by engineering rigor, fiduciary restraint, and a long-horizon view of the systems we own.',
  tabs: [
    { id: 'vision', label: 'Vision & Mission', number: '01' },
    { id: 'values', label: 'Core Values', number: '02' },
    { id: 'governance', label: 'Corporate Governance', number: '03' },
  ],
  vision: {
    label: 'Our Vision',
    statement:
      'To be the most trusted operator of the physical systems on which global prosperity depends.',
    body:
      'We believe critical infrastructure should be resilient by design, transparent in operation, and financed for decades rather than quarters. Brevik exists to make that standard the default.',
  },
  mission: {
    label: 'Our Mission',
    statement:
      'We engineer, own, and operate integrated industrial infrastructure that keeps energy, computation, and trade moving.',
    body:
      'Through four operating platforms and a dual-headquarters model, we combine local execution with institutional capital discipline. Every asset is managed against measurable availability, safety, and decarbonization outcomes.',
  },
  ceoNote: {
    quote:
      'Infrastructure is a promise made to the next generation. Our job is to make that promise measurable, financeable, and durable.',
    name: 'Astrid L. Moreau',
    title: 'President & Chief Executive Officer',
  },
  values: [
    {
      number: '01',
      title: 'Operational Integrity',
      description:
        'We operate what we build. Availability, safety, and environmental performance are reported with the same rigor as financial results.',
    },
    {
      number: '02',
      title: 'Engineering Precision',
      description:
        'Tolerances matter. From sub-micron handling to 525 kV transmission, we design for deterministic performance over decades of service.',
    },
    {
      number: '03',
      title: 'Decarbonized Scale',
      description:
        'Growth and emissions must decouple. We invest behind electrification, circular materials, and measurable reductions across our value chain.',
    },
    {
      number: '04',
      title: 'Fiduciary Accountability',
      description:
        'Capital is a trust. We allocate it with discipline, disclose it with clarity, and hold leadership accountable to long-term returns.',
    },
  ],
  governance: {
    independence: 83,
    stats: [
      { label: 'Board Independence', value: '83%' },
      { label: 'Audit Committee Independence', value: '100%' },
      { label: 'Board Meetings in FY25', value: '12' },
      { label: 'Average Director Tenure', value: '6.4 yrs' },
    ],
    frameworks: [
      {
        title: 'Audit Committee',
        detail:
          'Chaired by an independent director. Oversees financial reporting, internal controls, external audit, and enterprise risk.',
      },
      {
        title: 'ISO 27001 / ISO 14001',
        detail:
          'Group-wide certification for information security and environmental management across controlled operating entities.',
      },
      {
        title: 'Code of Business Conduct',
        detail:
          'Annual attestation by 100% of employees and directors. Supported by a confidential, independently operated ethics line.',
      },
      {
        title: 'Enterprise Risk Framework',
        detail:
          'Board-reviewed risk appetite covering safety, climate, cyber, liquidity, and supply-chain concentration.',
      },
    ],
  },
}

export const businessUnits = [
  {
    id: 'grid',
    number: '01',
    name: 'Grid & Power Systems',
    shortName: 'Grid & Power',
    kicker: 'HIGH-VOLTAGE INFRASTRUCTURE',
    headline: 'The transmission layer of the energy transition.',
    thesis:
      'Brevik designs, builds, and operates high-voltage transmission assets and grid-balancing infrastructure for utilities, sovereign funds, and industrial clusters. Our systems integrate HVDC interconnectors, substation automation, and utility-scale storage to keep power flowing with deterministic reliability.',
    capabilities: [
      {
        title: 'HVDC & Interconnector EPC',
        text: 'Turnkey delivery of 320-525 kV transmission corridors across land and subsea routes.',
      },
      {
        title: 'Grid Stability & Storage',
        text: 'Synchronous condensers, STATCOMs, and 4.2 GWh of utility-scale storage under management.',
      },
      {
        title: 'Asset Operations',
        text: '24/7 network control with 99.993% availability across 11 regulated and contracted grids.',
      },
    ],
    metrics: [
      { label: 'Segment Revenue', value: '$7.8B', note: 'FY2025' },
      { label: 'Contracted Backlog', value: '$12.4B', note: 'As of Q3 2026' },
      { label: 'Global Facilities', value: '46', note: 'Across 14 countries' },
      { label: 'YoY Growth', value: '+8.6%', note: 'Constant currency' },
    ],
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Utility-scale solar array and grid infrastructure in daylight',
    imageCaption: 'North Sea Interconnector · 1.4 GW HVDC link',
  },
  {
    id: 'semiconductor',
    number: '02',
    name: 'Semiconductor Supply',
    shortName: 'Semiconductor',
    kicker: 'PRECISION SUPPLY CHAINS',
    headline: 'Precision supply for the most demanding fabs.',
    thesis:
      'Brevik operates the cleanroom logistics, ultra-pure material handling, and metrology infrastructure that semiconductor manufacturers depend on. Our facilities are engineered for sub-micron handling, contamination control, and continuous operation in the world\'s most advanced fabrication clusters.',
    capabilities: [
      {
        title: 'Cleanroom Supply Chains',
        text: 'ISO Class 5 logistics environments serving 18 fabrication campuses across three continents.',
      },
      {
        title: 'Ultra-High-Purity Materials',
        text: 'Closed-loop handling of specialty gases, photoresists, and advanced packaging substrates.',
      },
      {
        title: 'Sub-Micron Metrology',
        text: 'Automated inspection and contamination analytics integrated directly into customer MES platforms.',
      },
    ],
    metrics: [
      { label: 'Segment Revenue', value: '$4.6B', note: 'FY2025' },
      { label: 'Contracted Backlog', value: '$6.1B', note: 'As of Q3 2026' },
      { label: 'Global Facilities', value: '18', note: 'Across 6 countries' },
      { label: 'YoY Growth', value: '+12.4%', note: 'Constant currency' },
    ],
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Semiconductor circuit board and precision electronics at close range',
    imageCaption: 'Penang Precision Campus · ISO Class 5 cleanroom',
  },
  {
    id: 'maritime',
    number: '03',
    name: 'Maritime & Port Automation',
    shortName: 'Maritime',
    kicker: 'AUTONOMOUS TRADE CORRIDORS',
    headline: 'Autonomous corridors for global trade.',
    thesis:
      'Brevik modernizes the physical and digital interfaces of global trade. We deliver port operating systems, autonomous yard equipment, and telemetry platforms that increase throughput, reduce dwell time, and improve safety across high-volume container terminals.',
    capabilities: [
      {
        title: 'Port Operating Systems',
        text: 'Terminal orchestration software deployed across 24 terminals and 11 million annual TEU.',
      },
      {
        title: 'Autonomous Yard Equipment',
        text: 'Certified automated straddle carriers, cranes, and guided vehicles with 99.98% availability.',
      },
      {
        title: 'Digital Twin & Telemetry',
        text: 'Real-time simulation of berth, yard, and gate operations for predictive capacity planning.',
      },
    ],
    metrics: [
      { label: 'Segment Revenue', value: '$3.2B', note: 'FY2025' },
      { label: 'Contracted Backlog', value: '$7.9B', note: 'As of Q3 2026' },
      { label: 'Global Facilities', value: '24', note: 'Across 9 countries' },
      { label: 'YoY Growth', value: '+6.1%', note: 'Constant currency' },
    ],
    image:
      'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Container terminal and cargo shipping infrastructure from above',
    imageCaption: 'Rotterdam Port Lab · Autonomous corridor',
  },
  {
    id: 'robotics',
    number: '04',
    name: 'Industrial Robotics',
    shortName: 'Robotics',
    kicker: 'PRECISION AUTOMATION',
    headline: 'Industrial intelligence, deployed at scale.',
    thesis:
      'Brevik builds precision robotic systems for advanced manufacturing, logistics, and inspection. Our platforms combine sub-millimeter motion control, machine vision, and fleet orchestration software to improve yield, safety, and asset utilization in complex industrial environments.',
    capabilities: [
      {
        title: 'Precision Assembly',
        text: 'Repeatable sub-millimeter assembly for aerospace, medical devices, and power electronics.',
      },
      {
        title: 'Mobile Manipulation',
        text: 'Autonomous mobile robots with adaptive gripping for high-mix production and warehouse flows.',
      },
      {
        title: 'Fleet Orchestration',
        text: 'Vendor-agnostic control software managing 6,400+ deployed units across customer sites.',
      },
    ],
    metrics: [
      { label: 'Segment Revenue', value: '$2.8B', note: 'FY2025' },
      { label: 'Contracted Backlog', value: '$3.4B', note: 'As of Q3 2026' },
      { label: 'Global Facilities', value: '12', note: 'Across 7 countries' },
      { label: 'YoY Growth', value: '+9.8%', note: 'Constant currency' },
    ],
    image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Industrial robot arm in a clean manufacturing environment',
    imageCaption: 'Munich Robotics Center · Precision assembly cell',
  },
]

export const hubs = [
  {
    id: 'zurich',
    city: 'Zurich',
    country: 'Switzerland',
    region: 'Europe & UK',
    role: 'Global Headquarters',
    lat: 47.3769,
    lng: 8.5417,
    address: 'Bahnhofstrasse 42, 8001 Zurich, Switzerland',
    head: 'Astrid L. Moreau',
    headTitle: 'President & Chief Executive Officer',
    headcount: '4,860',
    specialization: 'Group strategy, capital allocation, grid systems engineering',
    established: '1984',
    facilityType: 'Corporate headquarters & engineering campus',
    certification: 'ISO 27001 · ISO 14001',
    status: 'Operational',
  },
  {
    id: 'singapore',
    city: 'Singapore',
    country: 'Singapore',
    region: 'Asia-Pacific',
    role: 'APAC Headquarters',
    lat: 1.3521,
    lng: 103.8198,
    address: '12 Marina Boulevard, Singapore 018982',
    head: 'Mei-Lin Tan',
    headTitle: 'Chief Operating Officer',
    headcount: '3,240',
    specialization: 'APAC operations, maritime automation, supply-chain control',
    established: '1996',
    facilityType: 'Regional headquarters & operations control',
    certification: 'ISO 27001 · ISO 45001',
    status: 'Operational',
  },
  {
    id: 'munich',
    city: 'Munich',
    country: 'Germany',
    region: 'Europe & UK',
    role: 'European R&D Center',
    lat: 48.1351,
    lng: 11.582,
    address: 'Rosenheimer Strasse 116, 81669 Munich, Germany',
    head: 'Henrik Voss',
    headTitle: 'Chief Technology Officer',
    headcount: '2,480',
    specialization: 'Power electronics, industrial robotics, metrology R&D',
    established: '2001',
    facilityType: 'Research & development center',
    certification: 'ISO 9001 · ISO 14001',
    status: 'Operational',
  },
  {
    id: 'houston',
    city: 'Houston',
    country: 'United States',
    region: 'North America',
    role: 'North American Energy Hub',
    lat: 29.7604,
    lng: -95.3698,
    address: '1201 Louisiana Street, Houston, TX 77002, United States',
    head: 'Marcus A. Feld',
    headTitle: 'Chair of the Board',
    headcount: '3,610',
    specialization: 'Grid services, energy storage, Gulf Coast project delivery',
    established: '2008',
    facilityType: 'Energy operations & project delivery hub',
    certification: 'ISO 45001 · ISO 14001',
    status: 'Operational',
  },
  {
    id: 'tokyo',
    city: 'Tokyo',
    country: 'Japan',
    region: 'Asia-Pacific',
    role: 'Precision Components Center',
    lat: 35.6762,
    lng: 139.6503,
    address: '2-1 Marunouchi, Chiyoda City, Tokyo 100-0005, Japan',
    head: 'Priya Raghunathan',
    headTitle: 'Chief Sustainability Officer',
    headcount: '1,920',
    specialization: 'Precision components, cleanroom materials, quality assurance',
    established: '2012',
    facilityType: 'Precision manufacturing & quality center',
    certification: 'ISO 9001 · ISO 27001',
    status: 'Operational',
  },
  {
    id: 'rotterdam',
    city: 'Rotterdam',
    country: 'Netherlands',
    region: 'Europe & UK',
    role: 'Port Automation Lab',
    lat: 51.9244,
    lng: 4.4777,
    address: 'Waalhaven Oostzijde 81, 3087 BM Rotterdam, Netherlands',
    head: 'Mei-Lin Tan',
    headTitle: 'Chief Operating Officer',
    headcount: '1,140',
    specialization: 'Autonomous port systems, digital twins, terminal orchestration',
    established: '2016',
    facilityType: 'Port automation laboratory & operations center',
    certification: 'ISO 27001 · ISO 45001',
    status: 'Operational',
  },
]

export const regions = ['All Regions', 'Europe & UK', 'Asia-Pacific', 'North America']

export const operatingModel = {
  eyebrow: '02 / Operating Model',
  heading: 'One system. Four disciplines.',
  intro:
    'Brevik combines the discipline of an owner-operator with the reach of a global industrial platform. Every asset moves through the same four-stage operating system, from origination to compounding returns.',
  steps: [
    {
      id: 'originate',
      number: '01',
      title: 'Originate',
      label: 'Capital & opportunity',
      statement: 'We originate long-duration infrastructure where policy, demand, and capital converge.',
      description:
        'Our development teams work with sovereigns, utilities, and industrial customers years before construction begins. We underwrite for availability, contracted cash flow, and regulatory durability rather than speculative demand.',
      actions: [
        'Proprietary origination across six anchor markets',
        'Structured partnerships with investment-grade counterparties',
        'Disciplined underwriting with board-level capital gates',
      ],
      metrics: [
        { label: 'Development pipeline', value: '$41.6B' },
        { label: 'Contracted or regulated', value: '63%' },
        { label: 'Active markets', value: '14' },
      ],
    },
    {
      id: 'engineer',
      number: '02',
      title: 'Engineer',
      label: 'Design & delivery',
      statement: 'We engineer to institutional standards, then prove it in operation.',
      description:
        'Nearly 1,900 engineers work to a common technical baseline across four platforms. We design for 30-year service life, modular delivery, maintainability, and measurable availability from the first day of operation.',
      actions: [
        'Common engineering, safety, and quality standards',
        'Digital twins and model-based project delivery',
        'Design for maintainability, resilience, and circularity',
      ],
      metrics: [
        { label: 'Active patents', value: '284' },
        { label: 'Engineers', value: '1,860' },
        { label: 'R&D centers', value: '06' },
      ],
    },
    {
      id: 'operate',
      number: '03',
      title: 'Operate',
      label: 'Availability & trust',
      statement: 'We operate what we build, with transparency measured in minutes.',
      description:
        'Our network control centers run 24/7 across 38 countries. Availability, safety, and emissions are reported with the same rigor as financial performance, supported by independent assurance.',
      actions: [
        '24/7 regional network and operations control',
        'Predictive maintenance across 100 facilities',
        'Independent assurance of ESG and safety data',
      ],
      metrics: [
        { label: 'Controlled facilities', value: '100' },
        { label: 'Grid availability', value: '99.993%' },
        { label: 'Safety observations', value: '184K' },
      ],
    },
    {
      id: 'compound',
      number: '04',
      title: 'Compound',
      label: 'Returns & reinvestment',
      statement: 'We recycle cash flow into the next generation of critical systems.',
      description:
        'Capital allocation is a board discipline. We prioritize growth infrastructure with contracted returns, maintain an investment-grade balance sheet, and return excess capital through a progressive dividend and disciplined buybacks.',
      actions: [
        'Return on invested capital above 12%',
        'Net leverage maintained below 2.0x',
        'Progressive dividend and disciplined buybacks',
      ],
      metrics: [
        { label: 'Return on capital', value: '12.4%' },
        { label: 'Net leverage', value: '1.8x' },
        { label: 'Capital returned', value: '$1.9B' },
      ],
    },
  ],
  stats: [
    { value: '1.6x', label: 'Backlog coverage' },
    { value: '99.993%', label: 'Grid availability' },
    { value: '12.4%', label: 'Return on invested capital' },
    { value: '$3.1B', label: 'Operating cash flow' },
  ],
}

export const projectsOverview = {
  eyebrow: '05 / Selected Projects',
  heading: 'Infrastructure that performs in the real world.',
  intro:
    'A reference portfolio of complex, long-duration projects delivered across the platforms, geographies, and operating conditions that define Brevik.',
  stats: [
    { value: '06', label: 'Flagship projects' },
    { value: '14', label: 'Countries represented' },
    { value: '$9.4B', label: 'Installed asset value' },
  ],
}

export const projects = [
  {
    id: 'north-sea-interconnector',
    name: 'North Sea Interconnector',
    platform: 'Grid & Power',
    filter: 'Grid & Power',
    divisionId: 'grid',
    location: 'North Sea, Europe',
    year: '2026',
    status: 'Operational',
    investment: 'EUR 2.1B',
    scope: '1.4 GW HVDC interconnector',
    summary:
      'A 760-kilometre subsea link balancing Norwegian hydro with UK and Dutch demand, delivered on schedule and under budget.',
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'High-voltage transmission infrastructure at daylight',
    metrics: [
      { label: 'Capacity', value: '1.4 GW' },
      { label: 'Route length', value: '760 km' },
      { label: 'Availability', value: '99.99%' },
      { label: 'CO2 avoided', value: '1.8 Mt/yr' },
    ],
    challenge:
      'Connect three energy markets across one of the world\u2019s most demanding marine environments while maintaining 99.99% availability and meeting a fixed regulatory commissioning date.',
    solution:
      'Brevik delivered the converter stations, subsea cable system, and grid-balancing controls as an integrated EPC package. Offshore installation was sequenced around weather windows using a live digital twin of the route and converter assets.',
    outcomes: [
      '760 km subsea route commissioned with zero lost-time incidents',
      '1.4 GW bidirectional capacity added to the North Sea grid',
      '99.99% availability through the first 12 months of operation',
    ],
  },
  {
    id: 'penang-precision-campus',
    name: 'Penang Precision Campus',
    platform: 'Semiconductor Supply',
    filter: 'Semiconductor',
    divisionId: 'semiconductor',
    location: 'Penang, Malaysia',
    year: '2026',
    status: 'Operational',
    investment: '$620M',
    scope: '180,000 m\u00B2 precision campus',
    summary:
      'An integrated cleanroom logistics, materials handling, and metrology campus serving advanced packaging customers across Asia.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Semiconductor circuit board and precision electronics',
    metrics: [
      { label: 'Cleanroom', value: '42,000 m\u00B2' },
      { label: 'Specialists', value: '1,200' },
      { label: 'Build time', value: '19 months' },
      { label: 'Certification', value: 'ISO Class 5' },
    ],
    challenge:
      'Stand up ISO Class 5 cleanroom capacity at scale while integrating materials handling and metrology directly with customer manufacturing execution systems.',
    solution:
      'Brevik designed a modular campus with 42,000 m\u00B2 of cleanroom logistics, ultra-high-purity materials handling, and a shared metrology laboratory. Construction and commissioning were completed in 19 months.',
    outcomes: [
      '180,000 m\u00B2 campus delivered on schedule and on budget',
      '1,200 specialist roles created across engineering and operations',
      '88% renewable electricity from the first day of commissioning',
    ],
  },
  {
    id: 'rotterdam-autonomous-corridor',
    name: 'Rotterdam Autonomous Corridor',
    platform: 'Maritime & Port Automation',
    filter: 'Maritime & Port',
    divisionId: 'maritime',
    location: 'Rotterdam, Netherlands',
    year: '2026',
    status: 'Operational',
    investment: 'EUR 240M',
    scope: 'Autonomous container corridor',
    summary:
      'An 18-month live trial that completed 240,000 autonomous container moves with 99.98% system availability.',
    image:
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Container terminal and global trade infrastructure',
    metrics: [
      { label: 'Moves completed', value: '240,000' },
      { label: 'Availability', value: '99.98%' },
      { label: 'Dwell reduction', value: '18-24%' },
      { label: 'Serious incidents', value: '0' },
    ],
    challenge:
      'Prove autonomous yard and berth coordination in a live commercial terminal without disrupting throughput, safety, or existing labor agreements.',
    solution:
      'Brevik integrated Port OS, automated straddle carriers, and a real-time digital twin into a single control layer. Human oversight remained at every safety gate while the system coordinated the full container flow.',
    outcomes: [
      '240,000 autonomous container moves completed over 18 months',
      '99.98% system availability across live terminal operations',
      'Zero serious safety incidents and a 21% reduction in equipment idling',
    ],
  },
  {
    id: 'munich-precision-assembly',
    name: 'Munich Precision Assembly Cell',
    platform: 'Industrial Robotics',
    filter: 'Robotics',
    divisionId: 'robotics',
    location: 'Munich, Germany',
    year: '2026',
    status: 'Operational',
    investment: 'EUR 86M',
    scope: 'Sub-millimeter robotic assembly',
    summary:
      'A precision robotic assembly line for power electronics, deployed across three customer sites in Europe.',
    image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Industrial robot arm in a precision manufacturing environment',
    metrics: [
      { label: 'Repeatability', value: '0.02 mm' },
      { label: 'Yield improvement', value: '+42%' },
      { label: 'Reconfiguration', value: '4 hours' },
      { label: 'Units deployed', value: '6,400+' },
    ],
    challenge:
      'Meet sub-millimeter repeatability at high mix and low volume while keeping operators safe and changeover times commercially viable.',
    solution:
      'Brevik combined precision motion control, machine vision, and fleet orchestration software with a modular cell design that can be reconfigured for a new product in under four hours.',
    outcomes: [
      '0.02 mm repeatability sustained across three production lines',
      '42% improvement in first-pass yield for power electronics',
      'Reconfiguration time reduced from three days to four hours',
    ],
  },
  {
    id: 'houston-grid-storage',
    name: 'Houston Grid Storage Complex',
    platform: 'Grid & Power',
    filter: 'Grid & Power',
    divisionId: 'grid',
    location: 'Houston, United States',
    year: '2027',
    status: 'Under construction',
    investment: '$840M',
    scope: '1.2 GWh grid storage complex',
    summary:
      'A utility-scale storage complex providing frequency response and capacity firming to the ERCOT market.',
    image:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Renewable generation and energy infrastructure at scale',
    metrics: [
      { label: 'Storage capacity', value: '1.2 GWh' },
      { label: 'Duration', value: '4 hours' },
      { label: 'CO2 avoided', value: '900 kt/yr' },
      { label: 'Target COD', value: 'Q4 2027' },
    ],
    challenge:
      'Deliver one of the largest storage complexes in North America while managing interconnection queues, supply-chain concentration, and construction risk.',
    solution:
      'Brevik is delivering the project as an integrated EPC and operations package, with long-term capacity contracts secured before construction and a staged energization plan aligned to grid operator requirements.',
    outcomes: [
      '1.2 GWh of storage capacity currently under construction',
      'Long-term capacity contracts with two investment-grade buyers',
      'Targeted commercial operation in Q4 2027',
    ],
  },
  {
    id: 'singapore-apac-control',
    name: 'Singapore APAC Control Center',
    platform: 'Maritime & Port Automation',
    filter: 'Maritime & Port',
    divisionId: 'maritime',
    location: 'Singapore',
    year: '2025',
    status: 'Operational',
    investment: '$310M',
    scope: 'Regional control center & retrofit',
    summary:
      'A regional control center coordinating 11 terminals and 6,400 autonomous assets across Asia-Pacific.',
    image:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85',
    imageAlt: 'Modern corporate operations and control center workspace',
    metrics: [
      { label: 'Terminals integrated', value: '11' },
      { label: 'Assets orchestrated', value: '6,400' },
      { label: 'Countries', value: '05' },
      { label: 'Control uptime', value: '99.99%' },
    ],
    challenge:
      'Unify fragmented terminal systems across five countries into a single operational picture without interrupting live port operations.',
    solution:
      'Brevik deployed a cloud-native control layer with regional redundancy and standardized data contracts, integrating 11 terminals in phased cutovers over 14 months.',
    outcomes: [
      '11 terminals integrated across five Asia-Pacific countries',
      '6,400 autonomous assets under a single orchestration layer',
      '99.99% control-plane uptime in the first year of operation',
    ],
  },
]

export const innovation = {
  eyebrow: '08 / Technology & Innovation',
  heading: 'Research that becomes infrastructure.',
  intro:
    'Brevik invests at the intersection of power electronics, automation, and applied artificial intelligence. Our research agenda is measured by one standard: whether it improves the availability, safety, or decarbonization of real assets.',
  badge: '284 active patents',
  stats: [
    { value: '$1.26B', label: 'R&D investment FY25' },
    { value: '1,860', label: 'Engineers & scientists' },
    { value: '06', label: 'Innovation labs' },
  ],
  domains: [
    {
      id: 'grid-intelligence',
      number: '01',
      label: 'Grid Intelligence',
      headline: 'Autonomous grid orchestration at national scale.',
      description:
        'Machine-learning stability models, adaptive protection, and self-healing substation controls deployed across 11 regulated and contracted grids. The objective is simple: fewer outages, faster restoration, and more renewable capacity on the same copper.',
      initiatives: [
        { title: 'Predictive stability engine', detail: 'Forecasts frequency and voltage stress 15 minutes ahead.', readiness: 82 },
        { title: 'Adaptive protection schemes', detail: 'Reconfigures protection settings as grid topology changes.', readiness: 67 },
        { title: 'Self-healing substations', detail: 'Automated fault isolation and restoration without operator intervention.', readiness: 54 },
      ],
      metrics: [
        { label: 'Live grid nodes', value: '18,400' },
        { label: 'Grid availability', value: '99.993%' },
        { label: 'Patents', value: '96' },
      ],
      labs: 'Zurich · Munich',
    },
    {
      id: 'cleanroom-autonomy',
      number: '02',
      label: 'Cleanroom Autonomy',
      headline: 'Contamination-free logistics, run by software.',
      description:
        'Autonomous material handling, real-time contamination analytics, and closed-loop chemical recovery for advanced fabrication. Our platforms keep people out of the most sensitive environments while improving yield and traceability.',
      initiatives: [
        { title: 'Autonomous material handling', detail: 'Fleet-level routing inside ISO Class 5 environments.', readiness: 76 },
        { title: 'Contamination analytics', detail: 'Predictive airborne and molecular contamination detection.', readiness: 71 },
        { title: 'Closed-loop chemical recovery', detail: 'On-site purification and reuse of high-value process chemicals.', readiness: 48 },
      ],
      metrics: [
        { label: 'Cleanroom footprint', value: '180K m\u00B2' },
        { label: 'Fabs served', value: '18' },
        { label: 'Patents', value: '64' },
      ],
      labs: 'Penang · Tokyo',
    },
    {
      id: 'port-digital-twins',
      number: '03',
      label: 'Port Digital Twins',
      headline: 'A live replica of every berth, yard, and gate.',
      description:
        'Simulation-grade digital twins of terminal operations, connected to autonomous equipment and berth planning systems. Brevik ships can test a new operating model in software before a single container moves in the real world.',
      initiatives: [
        { title: 'Terminal digital twin', detail: 'Live, simulation-grade replica of terminal operations.', readiness: 88 },
        { title: 'Autonomous yard orchestration', detail: 'Coordinated scheduling of cranes, straddles, and guided vehicles.', readiness: 79 },
        { title: 'Predictive berth planning', detail: 'Weather- and demand-aware berth allocation models.', readiness: 62 },
      ],
      metrics: [
        { label: 'Terminals', value: '24' },
        { label: 'TEU managed', value: '11M' },
        { label: 'Patents', value: '51' },
      ],
      labs: 'Rotterdam · Singapore',
    },
    {
      id: 'industrial-ai',
      number: '04',
      label: 'Industrial AI',
      headline: 'Intelligence embedded at the asset edge.',
      description:
        'Edge vision inspection, reinforcement learning for fleet control, and predictive maintenance models trained on operational data. The result is higher yield, lower unplanned downtime, and safer work in demanding environments.',
      initiatives: [
        { title: 'Edge vision inspection', detail: 'Real-time defect detection at production line speed.', readiness: 84 },
        { title: 'Fleet reinforcement learning', detail: 'Adaptive control for mixed autonomous fleets.', readiness: 58 },
        { title: 'Predictive maintenance', detail: 'Failure prediction across 6,400 connected assets.', readiness: 73 },
      ],
      metrics: [
        { label: 'Connected assets', value: '6,400' },
        { label: 'Yield uplift', value: '+42%' },
        { label: 'Patents', value: '73' },
      ],
      labs: 'Munich · Singapore',
    },
  ],
  roadmap: [
    { year: '2026', title: 'Self-healing substations', detail: 'Automated restoration live across 11 grids.' },
    { year: '2028', title: 'Autonomous cleanroom flows', detail: '40% of sensitive material flows fully autonomous.' },
    { year: '2030', title: 'AI-optimized net zero', detail: 'Machine-level optimization across all controlled facilities.' },
  ],
}

export const financialMetrics = [
  {
    id: 'revenue',
    label: 'Total Revenue',
    shortLabel: 'Revenue',
    prefix: '$',
    suffix: 'B',
    decimals: 1,
    values: [13.2, 14.8, 16.1, 18.4, 20.1],
    guidance: '$19.8B - $20.4B',
    note: 'FY2026E reflects midpoint of guidance as of 25 November 2026.',
  },
  {
    id: 'ebitda',
    label: 'Adjusted EBITDA',
    shortLabel: 'Adj. EBITDA',
    prefix: '$',
    suffix: 'B',
    decimals: 2,
    values: [2.41, 2.78, 3.12, 3.62, 4.05],
    guidance: '$3.92B - $4.12B',
    note: 'Adjusted EBITDA excludes transaction costs and non-recurring integration items.',
  },
  {
    id: 'rd',
    label: 'R&D Investment',
    shortLabel: 'R&D',
    prefix: '$',
    suffix: 'B',
    decimals: 2,
    values: [0.82, 0.94, 1.08, 1.26, 1.42],
    guidance: '$1.38B - $1.46B',
    note: 'R&D investment includes capitalized development costs and engineering programs.',
  },
]

export const financialYears = ['FY22', 'FY23', 'FY24', 'FY25', 'FY26E']

export const financialDocs = [
  {
    id: 'q3-2026',
    title: 'Q3 2026 Earnings Release',
    subtitle:
      'Third-quarter results, segment performance, balance-sheet position, and updated full-year guidance.',
    category: 'Quarterly results',
    date: '5 November 2026',
    pages: 24,
    size: '2.4 MB',
    format: 'PDF',
    filename: 'Brevik_Q3_2026_Earnings_Release.pdf',
    summary: [
      'Revenue increased 12.4% year over year to $5.1 billion, led by Grid & Power Systems and Semiconductor Supply.',
      'Adjusted EBITDA was $1.04 billion at a 20.4% margin, up 110 basis points year over year.',
      'Contracted backlog reached $29.8 billion, equivalent to 1.6x FY2025 revenue.',
      'FY2026 revenue guidance narrowed to $19.8 billion - $20.4 billion; adjusted EBITDA guidance of $3.92 billion - $4.12 billion.',
    ],
    metrics: [
      { label: 'Quarterly Revenue', value: '$5.1B' },
      { label: 'Adjusted EBITDA', value: '$1.04B' },
      { label: 'Backlog', value: '$29.8B' },
      { label: 'Net Leverage', value: '1.8x' },
    ],
    sections: [
      {
        heading: 'Chief Executive Commentary',
        paragraphs: [
          'Brevik delivered a strong third quarter as customers accelerated investment in grid resilience, advanced semiconductor capacity, and automated trade infrastructure. Our order book remains weighted toward long-duration, contracted work with investment-grade counterparties.',
          'We are narrowing full-year guidance to the upper half of our previous range while maintaining discipline on capital allocation and operating costs. The integration of our Penang precision campus remains on schedule and on budget.',
        ],
      },
      {
        heading: 'Segment Performance',
        bullets: [
          'Grid & Power Systems revenue of $2.2 billion, up 9.8% year over year; backlog of $12.4 billion.',
          'Semiconductor Supply revenue of $1.3 billion, up 16.2% year over year; six new cleanroom logistics contracts signed.',
          'Maritime & Port Automation revenue of $0.9 billion, up 7.4% year over year; 11 terminals live on Brevik OS.',
          'Industrial Robotics revenue of $0.7 billion, up 11.1% year over year; 640 new units deployed.',
        ],
      },
      {
        heading: 'Balance Sheet and Liquidity',
        paragraphs: [
          'Net debt was $6.5 billion at quarter end, representing 1.8x trailing twelve-month adjusted EBITDA. Available liquidity was $6.2 billion, including $2.4 billion of undrawn revolving credit facilities.',
          'The company repurchased 1.1 million shares for $158 million during the quarter and paid a quarterly dividend of CHF 0.35 per share.',
        ],
      },
    ],
  },
  {
    id: 'fy-2025',
    title: 'FY 2025 Integrated Annual Report',
    subtitle:
      'The complete integrated report covering strategy, operating performance, governance, and sustainability assurance.',
    category: 'Annual report',
    date: '14 March 2026',
    pages: 164,
    size: '18.6 MB',
    format: 'PDF',
    filename: 'Brevik_FY_2025_Integrated_Annual_Report.pdf',
    summary: [
      'Revenue of $18.4 billion, up 14.3%, with growth across all four operating platforms.',
      'Adjusted EBITDA of $3.62 billion and adjusted EBITDA margin of 19.7%.',
      'Scope 1 and 2 emissions down 64% against the 2019 baseline; 88% renewable electricity in operations.',
      'AA- credit rating affirmed by S&P with a stable outlook and 1.8x net leverage.',
    ],
    metrics: [
      { label: 'Revenue', value: '$18.4B' },
      { label: 'Adj. EBITDA', value: '$3.62B' },
      { label: 'Operating Cash Flow', value: '$3.1B' },
      { label: 'Dividend', value: 'CHF 1.42' },
    ],
    sections: [
      {
        heading: 'Strategic Report',
        paragraphs: [
          'The global economy continues to invest in the physical foundations of energy security, digital computation, and trade. Brevik is positioned at the center of these expenditures through four operating platforms with shared engineering, procurement, and capital disciplines.',
          'Our dual-headquarters model in Zurich and Singapore provides proximity to both policy formation and customer decision-making. It also supports a balanced allocation of capital across mature and high-growth markets.',
        ],
      },
      {
        heading: 'Operating Review',
        paragraphs: [
          'Grid & Power Systems delivered $7.8 billion of revenue and ended the year with a $12.4 billion backlog. Semiconductor Supply expanded cleanroom logistics capacity in Malaysia, Germany, and the United States. Maritime & Port Automation completed its first fully autonomous corridor. Industrial Robotics improved software attach rates across its installed base.',
        ],
      },
      {
        heading: 'Sustainability and Governance',
        bullets: [
          '64% reduction in Scope 1 and 2 emissions versus the 2019 baseline.',
          '88% renewable electricity across controlled operations; 4.2 TWh of new power purchase agreements signed.',
          '79% circular material recovery across tier-1 facilities.',
          '83% independent board; 100% independent audit committee.',
        ],
      },
    ],
  },
  {
    id: 'investor-day-2026',
    title: '2026 Investor Day Deck',
    subtitle:
      'Strategic priorities, capital allocation framework, and medium-term financial targets presented in Zurich and Singapore.',
    category: 'Investor presentation',
    date: '25 November 2026',
    pages: 68,
    size: '9.2 MB',
    format: 'PDF',
    filename: 'Brevik_2026_Investor_Day_Deck.pdf',
    summary: [
      'Medium-term target of 8-10% annual organic revenue growth through 2030.',
      'Capital allocation framework prioritizing growth infrastructure, maintenance capital, and progressive dividends.',
      'Target of 21-23% adjusted EBITDA margin by 2029, supported by software and services mix.',
      'Inflation-linked and regulated contract structures now represent 63% of backlog.',
    ],
    metrics: [
      { label: 'Organic Growth Target', value: '8-10%' },
      { label: 'EBITDA Margin Target', value: '21-23%' },
      { label: 'Growth Capex', value: '$8.4B' },
      { label: 'Backlog Coverage', value: '1.6x' },
    ],
    sections: [
      {
        heading: 'Strategic Priorities',
        paragraphs: [
          'Brevik will concentrate incremental capital in grid modernization, semiconductor cleanroom capacity, and port automation, where demand visibility and contractual protections are strongest.',
          'The company will also scale recurring software and services revenue across its installed asset base, improving margin resilience and customer retention.',
        ],
      },
      {
        heading: 'Capital Allocation',
        bullets: [
          'Maintain investment-grade balance sheet with net leverage below 2.5x adjusted EBITDA.',
          'Fund organic growth and selective bolt-on acquisitions with operating cash flow and green bond proceeds.',
          'Maintain a progressive dividend policy with a target payout ratio of 30-35% of free cash flow.',
          'Return excess capital through disciplined share repurchases.',
        ],
      },
      {
        heading: 'Medium-Term Targets',
        paragraphs: [
          'The company targets 8-10% organic revenue growth, 21-23% adjusted EBITDA margin, and return on invested capital above 12% by 2029. These targets assume no material change in the regulatory treatment of transmission assets or semiconductor capital expenditure cycles.',
        ],
      },
    ],
  },
  {
    id: 'esg-assurance-2025',
    title: 'ESG Assurance Statement 2025',
    subtitle:
      'Independent limited assurance over selected environmental, social, and governance indicators.',
    category: 'Sustainability report',
    date: '2 April 2026',
    pages: 42,
    size: '4.1 MB',
    format: 'PDF',
    filename: 'Brevik_ESG_Assurance_Statement_2025.pdf',
    summary: [
      'Limited assurance obtained over Scope 1, Scope 2, renewable electricity, and circular material recovery indicators.',
      'Boundary covers 100% of controlled operating facilities across 38 countries.',
      'No material misstatements identified in the selected indicators for the year ended 31 December 2025.',
      'Recommendations focus on Scope 3 supplier data granularity and regional emissions factor updates.',
    ],
    metrics: [
      { label: 'Scope 1 & 2 Reduction', value: '64%' },
      { label: 'Renewable Electricity', value: '88%' },
      { label: 'Material Recovery', value: '79%' },
      { label: 'Facilities Covered', value: '100%' },
    ],
    sections: [
      {
        heading: 'Assurance Scope',
        paragraphs: [
          'The assurance provider evaluated selected sustainability indicators for the year ended 31 December 2025 using the International Standard on Assurance Engagements 3000 and 3410.',
          'The assurance boundary includes all controlled operating facilities and excludes joint ventures where Brevik does not exercise operational control.',
        ],
      },
      {
        heading: 'Selected Indicators',
        bullets: [
          'Scope 1 greenhouse gas emissions: 148,200 tCO2e.',
          'Scope 2 greenhouse gas emissions (market-based): 92,400 tCO2e.',
          'Renewable electricity share: 88% of total electricity consumption.',
          'Circular material recovery: 79% of operational waste diverted from landfill.',
        ],
      },
      {
        heading: 'Recommendations',
        paragraphs: [
          'The assurance provider recommended further improving supplier-level Scope 3 data granularity and updating regional emissions factors annually. Brevik has incorporated these recommendations into its FY2026 reporting roadmap.',
        ],
      },
    ],
  },
]

export const financialCalendar = [
  { date: '25 Nov 2026', label: '2026 Investor Day', location: 'Zurich & Singapore', type: 'Event' },
  { date: '11 Feb 2027', label: 'FY2026 Results', location: 'Webcast', type: 'Results' },
  { date: '22 Apr 2027', label: 'Q1 2027 Trading Update', location: 'Webcast', type: 'Results' },
  { date: '18 May 2027', label: 'Annual General Meeting', location: 'Zurich', type: 'Meeting' },
]

export const sustainability = {
  eyebrow: '07 / SUSTAINABILITY',
  heading: 'Net zero by 2030. Verified, not promised.',
  intro:
    'Our 2030 commitment is embedded in capital allocation, procurement, and executive remuneration. Progress is independently assured and reported with the same discipline as our financial statements.',
  assuranceBadge: 'SBTi validated · 1.5°C aligned',
  panelKicker: '2030 NET-ZERO COMMITMENT',
  panelHeading: 'Decarbonizing the infrastructure that decarbonizes the world.',
  panelBody:
    'Brevik has reduced Scope 1 and 2 emissions by 64% since 2019 while growing revenue by 39%. We are targeting net zero across Scope 1 and 2 by 2030 and across Scope 3 by 2040, with interim milestones tied to board-approved capital plans.',
  milestones: [
    { year: '2026', target: '90% renewable electricity across controlled operations.' },
    { year: '2028', target: '75% absolute Scope 1 and 2 reduction versus 2019 baseline.' },
    { year: '2030', target: 'Net zero Scope 1 and 2; 50% Scope 3 intensity reduction.' },
  ],
  progress: [
    {
      label: 'Scope 1 & 2 Emissions Reduction',
      value: 64,
      note: 'Against 2019 baseline',
      assurance: 'Limited assurance · FY2025',
    },
    {
      label: 'Renewable Electricity in Operations',
      value: 88,
      note: 'Across 38 countries',
      assurance: 'RE100 progress · FY2025',
    },
    {
      label: 'Circular Material Recovery',
      value: 79,
      note: 'Tier-1 facilities',
      assurance: 'Third-party audited · FY2025',
    },
  ],
  pillars: [
    {
      id: 'environment',
      label: 'Environment',
      title: 'Electrify and decarbonize.',
      metric: 'Net-zero Scope 1 & 2 by 2030',
      description:
        'Renewable power procurement, electrified fleets, high-efficiency substations, and circular material recovery across all controlled facilities.',
      stats: [
        { label: 'Renewable electricity', value: '88%' },
        { label: 'Emissions reduction', value: '64%' },
      ],
    },
    {
      id: 'social',
      label: 'Social',
      title: 'Safety and opportunity at scale.',
      metric: 'Zero life-altering injuries',
      description:
        'Brevik operates a behavior-based safety system across every site, with annual targets for contractor safety, workforce diversity, and technical apprenticeship.',
      stats: [
        { label: 'Women in leadership', value: '31%' },
        { label: 'Safety observations', value: '184K' },
      ],
    },
    {
      id: 'governance',
      label: 'Governance',
      title: 'Accountable by design.',
      metric: '100% tier-1 supplier ESG screening',
      description:
        'Board-level ESG oversight, ethics-line independence, and remuneration linkage ensure that sustainability performance is a fiduciary responsibility.',
      stats: [
        { label: 'Board independence', value: '83%' },
        { label: 'Supplier screening', value: '100%' },
      ],
    },
  ],
  esgDocument: {
    id: 'esg-2025-summary',
    title: '2026 ESG Performance Summary',
    subtitle:
      'Verified environmental, social, and governance metrics for the year ended 31 December 2025.',
    category: 'Sustainability assurance',
    date: '2 April 2026',
    pages: 42,
    size: '4.1 MB',
    format: 'PDF',
    filename: 'Brevik_2026_ESG_Performance_Summary.pdf',
    summary: [
      'Scope 1 and 2 emissions reduced 64% against the 2019 baseline.',
      '88% renewable electricity across controlled operations in 38 countries.',
      '79% circular material recovery across tier-1 facilities.',
      'Independent limited assurance obtained over selected ESG indicators.',
    ],
    metrics: [
      { label: 'Scope 1 & 2', value: '-64%' },
      { label: 'Renewables', value: '88%' },
      { label: 'Recovery', value: '79%' },
      { label: 'Assurance', value: 'Limited' },
    ],
    sections: [
      {
        heading: 'Environmental Performance',
        paragraphs: [
          'Brevik reduced Scope 1 and 2 greenhouse gas emissions by 64% against the 2019 baseline, driven by renewable electricity procurement, electrification of mobile equipment, and efficiency upgrades across high-voltage facilities.',
          'The company signed 4.2 TWh of additional renewable power purchase agreements during the year and increased circular material recovery to 79% across tier-1 facilities.',
        ],
      },
      {
        heading: 'Social Performance',
        bullets: [
          'Lost-time incident frequency rate of 0.18 per 200,000 hours worked.',
          '31% of senior leadership positions held by women, up 400 basis points year over year.',
          '184,000 safety observations recorded through the Brevik Safe program.',
        ],
      },
      {
        heading: 'Governance Performance',
        paragraphs: [
          'The board maintained 83% independence and 100% audit committee independence. ESG performance accounts for 15% of the annual bonus scorecard for the executive committee.',
        ],
      },
    ],
  },
}

export const newsroom = [
  {
    id: 'q3-2026-results',
    date: '18 November 2026',
    isoDate: '2026-11-18',
    category: 'Financial',
    title: 'Brevik reports third-quarter 2026 results: revenue up 12.4% to $5.1 billion',
    excerpt:
      'Adjusted EBITDA reached $1.04 billion at a 20.4% margin as demand for grid resilience, semiconductor capacity, and port automation accelerated.',
    readingTime: '6 min read',
    location: 'Zurich & Singapore',
    body: [
      {
        type: 'p',
        text: 'Brevik Corporation (NYSE: BVK) today reported third-quarter 2026 revenue of $5.1 billion, an increase of 12.4% compared with the prior-year period. Growth was led by Grid & Power Systems and Semiconductor Supply, which together represented 69% of quarterly revenue.',
      },
      {
        type: 'p',
        text: 'Adjusted EBITDA was $1.04 billion, representing a 20.4% margin, up 110 basis points year over year. Operating cash flow was $812 million and free cash flow was $496 million after capital expenditure of $316 million.',
      },
      {
        type: 'h',
        text: 'Segment performance',
      },
      {
        type: 'p',
        text: 'Grid & Power Systems generated revenue of $2.2 billion, up 9.8%, supported by the North Sea Interconnector and three substation automation programs in Central Europe. Contracted backlog for the segment reached $12.4 billion.',
      },
      {
        type: 'p',
        text: 'Semiconductor Supply revenue increased 16.2% to $1.3 billion. Brevik signed six new cleanroom logistics contracts during the quarter, including a multi-year agreement with a leading advanced packaging manufacturer in Penang.',
      },
      {
        type: 'p',
        text: 'Maritime & Port Automation revenue was $0.9 billion, up 7.4%, as 11 terminals now operate on the Brevik OS platform. Industrial Robotics revenue grew 11.1% to $0.7 billion on higher software attach rates and 640 new unit deployments.',
      },
      {
        type: 'h',
        text: 'Guidance and capital allocation',
      },
      {
        type: 'p',
        text: 'Brevik narrowed its full-year 2026 revenue guidance to $19.8 billion - $20.4 billion and adjusted EBITDA guidance to $3.92 billion - $4.12 billion. The company also affirmed its target of net leverage below 2.0x adjusted EBITDA.',
      },
      {
        type: 'p',
        text: 'During the quarter, Brevik repurchased 1.1 million shares for $158 million and paid a quarterly dividend of CHF 0.35 per share. Available liquidity at quarter end was $6.2 billion.',
      },
    ],
    quote: {
      text: 'Our customers are investing for the next decade, not the next quarter. That is why our backlog is weighted toward contracted, inflation-linked infrastructure with investment-grade counterparties.',
      name: 'Astrid L. Moreau',
      title: 'President & Chief Executive Officer',
    },
  },
  {
    id: 'nordic-grid-framework',
    date: '12 November 2026',
    isoDate: '2026-11-12',
    category: 'Partnerships',
    title: 'Brevik and Nordic Grid Authority sign EUR 1.8 billion interconnector framework',
    excerpt:
      'The eight-year framework covers two HVDC links and grid-balancing infrastructure connecting Norway, Denmark, and the United Kingdom.',
    readingTime: '5 min read',
    location: 'Oslo, Norway',
    body: [
      {
        type: 'p',
        text: 'Brevik Corporation has signed an eight-year framework agreement with the Nordic Grid Authority valued at EUR 1.8 billion for the delivery of two high-voltage direct current interconnectors and associated grid-balancing infrastructure.',
      },
      {
        type: 'p',
        text: 'The framework covers engineering, procurement, construction, and a five-year operations and maintenance period. The first link, a 1.2 GW subsea connection between Norway and Denmark, is expected to enter construction in the second half of 2027.',
      },
      {
        type: 'h',
        text: 'Strengthening regional resilience',
      },
      {
        type: 'p',
        text: 'The projects are designed to increase cross-border transmission capacity, improve renewable energy integration, and provide frequency support during periods of high demand. Brevik will deploy its modular converter platform, which reduces installation time by approximately 30%.',
      },
      {
        type: 'p',
        text: 'Brevik will deliver the projects through its Grid & Power Systems platform, with engineering support from its Munich research center and project management from its Zurich headquarters. The framework includes options for a third interconnector subject to regulatory approval.',
      },
      {
        type: 'p',
        text: 'The agreement reinforces Brevik\'s position as one of Europe\'s largest privately contracted transmission delivery partners. The company currently operates 11 regulated and contracted grids with a combined availability of 99.993%.',
      },
    ],
    quote: {
      text: 'This framework is a long-duration commitment to European energy security. It also gives our supply chain and engineering teams the visibility required to invest in capacity ahead of demand.',
      name: 'Astrid L. Moreau',
      title: 'President & Chief Executive Officer',
    },
  },
  {
    id: 'rotterdam-autonomous-corridor',
    date: '29 October 2026',
    isoDate: '2026-10-29',
    category: 'Operations',
    title: 'Rotterdam Port Lab completes autonomous corridor trial with 99.98% availability',
    excerpt:
      'An 18-month trial completed 240,000 autonomous container moves across a live terminal environment with zero serious safety incidents.',
    readingTime: '4 min read',
    location: 'Rotterdam, Netherlands',
    body: [
      {
        type: 'p',
        text: 'Brevik Corporation today announced the successful completion of an 18-month autonomous corridor trial at its Rotterdam Port Lab. The program completed 240,000 container moves across a live terminal environment with 99.98% system availability and zero serious safety incidents.',
      },
      {
        type: 'p',
        text: 'The trial integrated Brevik\'s Port OS orchestration platform, automated straddle carriers, and a real-time digital twin of the terminal. The system coordinated vessel berthing, yard allocation, and gate flows without manual intervention during 94% of operating hours.',
      },
      {
        type: 'h',
        text: 'Commercial deployment',
      },
      {
        type: 'p',
        text: 'The results clear the way for commercial deployment across Brevik\'s 24 terminal customers. The company expects the first three production corridors to go live in 2027, with a combined capacity of 3.4 million TEU annually.',
      },
      {
        type: 'p',
        text: 'Brevik estimates that the platform can reduce average container dwell time by 18-24% and lower yard equipment energy consumption by 12% through optimized routing and reduced idling.',
      },
      {
        type: 'p',
        text: 'The Rotterdam Port Lab employs 1,140 specialists and serves as Brevik\'s global center for port automation research, simulation, and operator training.',
      },
    ],
    quote: {
      text: 'Autonomy only matters if it is safer and more reliable than the alternative. Eighteen months of live operations gives us the evidence to say that it is.',
      name: 'Mei-Lin Tan',
      title: 'Chief Operating Officer',
    },
  },
  {
    id: 'renewable-ppa',
    date: '14 October 2026',
    isoDate: '2026-10-14',
    category: 'Sustainability',
    title: 'Brevik secures 4.2 TWh of additional renewable power across European operations',
    excerpt:
      'New power purchase agreements with offshore wind and hydro producers raise renewable electricity to 88% of Brevik\'s global operations.',
    readingTime: '4 min read',
    location: 'Zurich, Switzerland',
    body: [
      {
        type: 'p',
        text: 'Brevik Corporation has signed power purchase agreements totaling 4.2 TWh per year with offshore wind and hydroelectric producers in the North Sea and Nordic regions. The agreements support Brevik\'s operations in Germany, the Netherlands, Norway, Switzerland, and the United Kingdom.',
      },
      {
        type: 'p',
        text: 'The contracts have an average duration of 12 years and are structured as physical power purchase agreements with fixed volume and indexed pricing. They raise renewable electricity to 88% of Brevik\'s total global consumption.',
      },
      {
        type: 'h',
        text: 'Toward 2030',
      },
      {
        type: 'p',
        text: 'The agreements are expected to reduce Scope 2 emissions by approximately 46,000 tCO2e annually. Combined with electrification and efficiency measures, they keep Brevik on track to achieve net zero across Scope 1 and 2 by 2030.',
      },
      {
        type: 'p',
        text: 'Brevik\'s 2030 commitment includes a 90% renewable electricity target by 2026, a 75% absolute reduction in Scope 1 and 2 emissions by 2028, and a 50% reduction in Scope 3 emissions intensity by 2030.',
      },
      {
        type: 'p',
        text: 'The company publishes progress against these targets annually with independent limited assurance. Its FY2025 assurance statement confirmed a 64% reduction in Scope 1 and 2 emissions against the 2019 baseline.',
      },
    ],
    quote: {
      text: 'Procurement is one of the most powerful decarbonization tools available to an industrial company. These contracts lock in clean power at scale and give our customers confidence in the emissions profile of their supply chains.',
      name: 'Priya Raghunathan',
      title: 'Chief Sustainability Officer',
    },
  },
  {
    id: 'penang-campus',
    date: '30 September 2026',
    isoDate: '2026-09-30',
    category: 'Operations',
    title: 'Brevik opens $620 million semiconductor precision campus in Penang',
    excerpt:
      'The 180,000-square-meter campus adds ISO Class 5 cleanroom capacity and 1,200 specialized roles to support advanced packaging customers.',
    readingTime: '5 min read',
    location: 'Penang, Malaysia',
    body: [
      {
        type: 'p',
        text: 'Brevik Corporation has opened its $620 million semiconductor precision campus in Penang, Malaysia. The 180,000-square-meter facility adds ISO Class 5 cleanroom logistics capacity and precision material handling infrastructure for advanced packaging and specialty device manufacturers.',
      },
      {
        type: 'p',
        text: 'The campus includes a 42,000-square-meter cleanroom logistics center, an ultra-high-purity materials handling facility, and a metrology laboratory integrated with customer manufacturing execution systems.',
      },
      {
        type: 'h',
        text: 'Regional capacity',
      },
      {
        type: 'p',
        text: 'The Penang campus is Brevik\'s largest semiconductor supply investment to date and its third major facility in Southeast Asia. It will employ approximately 1,200 specialists, including cleanroom operators, process engineers, and supply-chain analysts.',
      },
      {
        type: 'p',
        text: 'The facility is designed to operate at 88% renewable electricity from commissioning, supported by a dedicated solar and battery storage installation. It is certified to ISO 9001, ISO 14001, and ISO 45001.',
      },
      {
        type: 'p',
        text: 'Brevik expects the campus to contribute approximately $420 million of annualized revenue at full utilization, with initial customer volumes ramping through the first half of 2027.',
      },
    ],
    quote: {
      text: 'Semiconductor capacity is being built where the supply chain can be trusted. Penang gives our customers cleanroom capacity, engineering depth, and a resilient regional footprint in one location.',
      name: 'Henrik Voss',
      title: 'Chief Technology Officer',
    },
  },
  {
    id: 'green-bond',
    date: '8 September 2026',
    isoDate: '2026-09-08',
    category: 'Financial',
    title: 'Brevik prices EUR 750 million green bond to fund grid modernization',
    excerpt:
      'The eight-year notes were 2.1x oversubscribed and will finance eligible transmission, storage, and cleanroom efficiency projects.',
    readingTime: '4 min read',
    location: 'London, United Kingdom',
    body: [
      {
        type: 'p',
        text: 'Brevik Corporation has priced EUR 750 million of eight-year green notes at a fixed coupon of 3.375%. The offering was 2.1x oversubscribed and attracted demand from European and Asian institutional investors.',
      },
      {
        type: 'p',
        text: 'Net proceeds will finance or refinance eligible projects under Brevik\'s Green Finance Framework, including high-voltage transmission upgrades, utility-scale storage, cleanroom energy efficiency, and renewable power procurement.',
      },
      {
        type: 'h',
        text: 'Capital structure',
      },
      {
        type: 'p',
        text: 'The notes extend Brevik\'s weighted average debt maturity to 7.2 years and are expected to reduce the company\'s average cost of debt by approximately 20 basis points. The issuance maintains Brevik\'s AA- credit rating and 1.8x net leverage profile.',
      },
      {
        type: 'p',
        text: 'The Green Finance Framework was developed in alignment with the ICMA Green Bond Principles and reviewed by an independent second-party opinion provider. Allocation and impact reporting will be published annually.',
      },
      {
        type: 'p',
        text: 'Brevik has issued EUR 2.4 billion of green bonds since establishing the framework in 2021, financing 14 eligible projects across Europe and Asia-Pacific.',
      },
    ],
    quote: {
      text: 'The green bond market gives us a disciplined way to match long-duration assets with long-duration capital. The oversubscription reflects confidence in both our strategy and our reporting standards.',
      name: 'Daniel K. Osei',
      title: 'Chief Financial Officer',
    },
  },
  {
    id: 'apac-port-consortium',
    date: '21 August 2026',
    isoDate: '2026-08-21',
    category: 'Partnerships',
    title: 'Brevik selected by APAC port consortium for automation retrofit',
    excerpt:
      'A five-year, $940 million program will retrofit three major terminals across Singapore, Malaysia, and Thailand with Brevik OS and autonomous equipment.',
    readingTime: '4 min read',
    location: 'Singapore',
    body: [
      {
        type: 'p',
        text: 'A consortium of three Asia-Pacific port operators has selected Brevik Corporation for a five-year automation retrofit program valued at approximately $940 million. The program covers terminals in Singapore, Port Klang, and Laem Chabang.',
      },
      {
        type: 'p',
        text: 'Brevik will deploy its Port OS orchestration platform, autonomous yard equipment, and digital twin simulation tools across the three sites. The retrofit is designed to increase throughput by 22% without expanding terminal footprint.',
      },
      {
        type: 'h',
        text: 'Delivery model',
      },
      {
        type: 'p',
        text: 'The program will be delivered in three phases, beginning with a 12-month design and simulation phase in Singapore. Brevik expects the first terminal to be fully operational on the new platform by mid-2028.',
      },
      {
        type: 'p',
        text: 'Brevik will provide operator training through its Rotterdam Port Lab and establish a regional service center in Singapore to support the deployed systems. The company estimates the program will create approximately 180 specialist roles across the region.',
      },
      {
        type: 'p',
        text: 'The agreement includes performance-linked payments tied to availability, safety, and throughput outcomes. It builds on Brevik\'s existing APAC terminal footprint of 11 live deployments.',
      },
    ],
    quote: {
      text: 'Asia-Pacific is the fastest-growing market for port automation, and customers are increasingly buying outcomes rather than equipment. This program is structured around exactly that.',
      name: 'Mei-Lin Tan',
      title: 'Chief Operating Officer',
    },
  },
  {
    id: 'sbti-scope-3',
    date: '15 July 2026',
    isoDate: '2026-07-15',
    category: 'Sustainability',
    title: 'Brevik validates Scope 3 reduction pathway with Science Based Targets initiative',
    excerpt:
      'The validated pathway covers purchased goods, capital goods, and logistics, with a 50% emissions intensity reduction target by 2030.',
    readingTime: '3 min read',
    location: 'Zurich, Switzerland',
    body: [
      {
        type: 'p',
        text: 'The Science Based Targets initiative has validated Brevik Corporation\'s near-term Scope 3 emissions reduction pathway, confirming alignment with a 1.5°C trajectory. The validation covers purchased goods and services, capital goods, upstream transportation, and waste generated in operations.',
      },
      {
        type: 'p',
        text: 'Brevik has committed to a 50% reduction in Scope 3 emissions intensity by 2030 against a 2022 baseline, and to net zero across Scope 3 by 2040. The company will report progress annually with independent limited assurance.',
      },
      {
        type: 'h',
        text: 'Supplier engagement',
      },
      {
        type: 'p',
        text: 'The pathway is supported by a supplier engagement program covering 100% of tier-1 suppliers by spend. Brevik requires suppliers to disclose product-level emissions data and set their own science-aligned targets by 2028.',
      },
      {
        type: 'p',
        text: 'Brevik has also introduced a low-carbon materials specification for steel, copper, and concrete used in transmission and facility projects. The specification is expected to reduce embodied emissions in new projects by 18-25%.',
      },
      {
        type: 'p',
        text: 'The validation complements Brevik\'s existing 2030 net-zero commitment for Scope 1 and 2 and its 88% renewable electricity position across controlled operations.',
      },
    ],
    quote: {
      text: 'Most of our emissions sit in the supply chain. Validation matters because it forces us to measure those emissions properly and to work with suppliers on real reductions rather than offsets.',
      name: 'Priya Raghunathan',
      title: 'Chief Sustainability Officer',
    },
  },
]

export const leadership = [
  {
    id: 'astrid-moreau',
    name: 'Astrid L. Moreau',
    role: 'President & Chief Executive Officer',
    committee: 'Executive Committee (Chair)',
    location: 'Zurich, Switzerland',
    focus: 'Group strategy, capital allocation, grid systems',
    bio: [
      'Astrid L. Moreau has served as President and Chief Executive Officer of Brevik Corporation since 2019. She previously served as Chief Operating Officer and as President of the Grid & Power Systems platform, where she led the company\'s expansion into HVDC interconnectors and regulated transmission assets.',
      'Before joining Brevik in 2011, Moreau held senior engineering and operations roles at a European transmission system operator. She serves on the board of the European Transmission Alliance and is a member of the Swiss Federal Energy Research Commission.',
      'Moreau holds a Master of Science in Electrical Engineering from ETH Zurich and an MBA from INSEAD. She is based at the company\'s global headquarters in Zurich.',
    ],
    education: 'MSc, ETH Zurich · MBA, INSEAD',
    boardRoles: 'European Transmission Alliance · Swiss Federal Energy Research Commission',
  },
  {
    id: 'daniel-osei',
    name: 'Daniel K. Osei',
    role: 'Chief Financial Officer',
    committee: 'Executive Committee · Finance & Tax',
    location: 'Zurich, Switzerland',
    focus: 'Capital markets, financial control, investor relations',
    bio: [
      'Daniel K. Osei has served as Chief Financial Officer since 2020. He leads Brevik\'s finance, treasury, tax, investor relations, and capital markets functions, with responsibility for the company\'s investment-grade balance sheet and green finance framework.',
      'Previously, Osei was Chief Financial Officer of a global infrastructure investment platform and held senior positions at two systemically important financial institutions. He joined Brevik in 2018 as Group Treasurer.',
      'Osei is a Chartered Accountant and holds a Master in Financial Economics from the University of Oxford. He is based in Zurich and maintains a regular presence at the company\'s Singapore headquarters.',
    ],
    education: 'ACA · MFE, University of Oxford',
    boardRoles: 'Chair, Disclosure Committee · Member, Finance & Tax Committee',
  },
  {
    id: 'mei-lin-tan',
    name: 'Mei-Lin Tan',
    role: 'Chief Operating Officer',
    committee: 'Executive Committee · Operations Council',
    location: 'Singapore',
    focus: 'APAC operations, port automation, supply chain',
    bio: [
      'Mei-Lin Tan has served as Chief Operating Officer since 2022. She oversees global operations, procurement, supply chain, and the company\'s four operating platforms, with particular focus on execution discipline and customer delivery.',
      'Tan joined Brevik in 2014 and previously led the Maritime & Port Automation platform, where she built the company\'s autonomous corridor program and its Rotterdam Port Lab. Before Brevik, she held operations leadership roles at two global terminal operators.',
      'Tan holds a Bachelor of Engineering from the National University of Singapore and a Master of Science in Logistics and Supply Chain Management from MIT. She is based in Singapore.',
    ],
    education: 'BEng, NUS · MSc, MIT',
    boardRoles: 'Member, Singapore Economic Development Board Advisory Committee',
  },
  {
    id: 'henrik-voss',
    name: 'Henrik Voss',
    role: 'Chief Technology Officer',
    committee: 'Executive Committee · Technology & Innovation',
    location: 'Munich, Germany',
    focus: 'Power electronics, robotics, metrology R&D',
    bio: [
      'Henrik Voss has served as Chief Technology Officer since 2021. He leads Brevik\'s group-wide technology strategy, research and development, engineering standards, and cybersecurity architecture.',
      'Voss joined Brevik in 2009 as Director of Power Electronics and later led the company\'s European R&D center in Munich. He has been responsible for more than 240 granted patents across power conversion, precision handling, and industrial automation.',
      'Voss holds a Doctorate in Electrical Engineering from the Technical University of Munich and is a Fellow of the IEEE. He is based in Munich.',
    ],
    education: 'PhD, Technical University of Munich',
    boardRoles: 'Fellow, IEEE · Member, German Industrial Research Advisory Board',
  },
  {
    id: 'priya-raghunathan',
    name: 'Priya Raghunathan',
    role: 'Chief Sustainability Officer',
    committee: 'Executive Committee · ESG & Safety Committee',
    location: 'Singapore',
    focus: 'Decarbonization, ESG reporting, safety',
    bio: [
      'Priya Raghunathan has served as Chief Sustainability Officer since 2023. She is responsible for Brevik\'s 2030 net-zero pathway, ESG reporting and assurance, human rights, and health and safety performance.',
      'Raghunathan previously led sustainability strategy for a global industrial group and served as an advisor to two sovereign climate funds. She joined Brevik in 2020 as Head of Climate Strategy.',
      'She holds a Master of Science in Environmental Engineering from the National University of Singapore and a Master of Public Policy from Harvard Kennedy School. She is based in Singapore.',
    ],
    education: 'MSc, NUS · MPP, Harvard Kennedy School',
    boardRoles: 'Member, Global Reporting Initiative Advisory Council',
  },
  {
    id: 'marcus-feld',
    name: 'Marcus A. Feld',
    role: 'Chair of the Board',
    committee: 'Governance & Nominating (Chair)',
    location: 'Houston, United States',
    focus: 'Board leadership, capital discipline, energy transition',
    bio: [
      'Marcus A. Feld has served as Chair of the Brevik Board since 2021 and as an independent director since 2018. He chairs the Governance & Nominating Committee and is a member of the Executive Committee in a non-voting capacity.',
      'Feld was previously Chief Executive Officer of a global energy infrastructure company, where he led a portfolio of transmission, storage, and midstream assets across North America and Europe. He began his career as a project engineer in the Gulf of Mexico.',
      'He holds a Bachelor of Science in Mechanical Engineering from Texas A&M University and an MBA from Harvard Business School. He is based in Houston.',
    ],
    education: 'BSc, Texas A&M University · MBA, Harvard Business School',
    boardRoles: 'Independent director since 2018 · Chair since 2021',
  },
  {
    id: 'sofia-lindqvist',
    name: 'Sofia Lindqvist',
    role: 'Lead Independent Director',
    committee: 'Audit Committee (Chair)',
    location: 'Stockholm, Sweden',
    focus: 'Audit, risk, financial reporting',
    bio: [
      'Sofia Lindqvist has served as Lead Independent Director since 2023 and as Chair of the Audit Committee since 2021. She is responsible for board independence, audit oversight, and enterprise risk review.',
      'Lindqvist previously served as Chief Financial Officer of a Nordic industrial group and as a partner at an international audit firm. She has chaired audit committees in the energy, transportation, and technology sectors.',
      'She holds a Master of Science in Economics and Business Administration from the Stockholm School of Economics and is a certified public accountant. She is based in Stockholm.',
    ],
    education: 'MSc, Stockholm School of Economics · CPA',
    boardRoles: 'Independent director since 2019 · Audit Committee Chair',
  },
  {
    id: 'james-whitfield',
    name: 'James R. Whitfield',
    role: 'Independent Director',
    committee: 'Compensation & Talent (Chair)',
    location: 'Houston, United States',
    focus: 'Executive compensation, talent, operational safety',
    bio: [
      'James R. Whitfield has served as an independent director since 2020 and as Chair of the Compensation & Talent Committee since 2022. He also serves on the Audit Committee.',
      'Whitfield spent 28 years at a global energy services company, including six years as Chief Operating Officer, where he was responsible for safety, operational performance, and workforce development across 60 countries.',
      'He holds a Bachelor of Science in Petroleum Engineering from the University of Texas at Austin and is a graduate of the Advanced Management Program at Harvard Business School. He is based in Houston.',
    ],
    education: 'BSc, University of Texas at Austin · AMP, Harvard Business School',
    boardRoles: 'Independent director since 2020 · Compensation & Talent Chair',
  },
]

export const boardStats = [
  { label: 'Board Independence', value: '83%' },
  { label: 'Average Tenure', value: '6.4 yrs' },
  { label: 'Annual Board Meetings', value: '12' },
  { label: 'Women on Board', value: '42%' },
]

export const corporateContacts = {
  zurich: {
    label: 'Global Headquarters',
    address: 'Bahnhofstrasse 42, 8001 Zurich, Switzerland',
    phone: '+41 44 000 1984',
  },
  singapore: {
    label: 'APAC Headquarters',
    address: '12 Marina Boulevard, Singapore 018982',
    phone: '+65 6800 1984',
  },
  investorEmail: 'ir@brevik.com',
  mediaEmail: 'media@brevik.com',
  generalEmail: 'corporate@brevik.com',
}

export const contactInquiryTypes = [
  'Enterprise Partnership',
  'Investor Relations',
  'Media & Press',
  'Procurement',
]

export const footerSitemap = [
  {
    title: 'Company',
    links: [
      { label: 'About Brevik', href: '#company' },
      { label: 'Operating Model', href: '#operating-model' },
      { label: 'Leadership & Board', href: '#leadership' },
      { label: 'Global Operations', href: '#footprint' },
      { label: 'Selected Projects', href: '#projects' },
      { label: 'Technology & Innovation', href: '#innovation' },
      { label: 'Newsroom', href: '#newsroom' },
      { label: 'Careers', href: '#leadership' },
    ],
  },
  {
    title: 'Businesses',
    links: [
      { label: 'Grid & Power Systems', href: '#businesses' },
      { label: 'Semiconductor Supply', href: '#businesses' },
      { label: 'Maritime & Port Automation', href: '#businesses' },
      { label: 'Industrial Robotics', href: '#businesses' },
      { label: 'Selected Projects', href: '#projects' },
      { label: 'Innovation Labs', href: '#innovation' },
    ],
  },
  {
    title: 'Investors',
    links: [
      { label: 'Stock Information', href: '#investors' },
      { label: 'Financial Results', href: '#investors' },
      { label: 'Annual Reports', href: '#investors' },
      { label: 'Investor Calendar', href: '#investors' },
      { label: 'Selected Projects', href: '#projects' },
      { label: 'Corporate Governance', href: '#company' },
    ],
  },
  {
    title: 'Sustainability',
    links: [
      { label: '2030 Net-Zero', href: '#sustainability' },
      { label: 'ESG Metrics', href: '#sustainability' },
      { label: 'Human Rights', href: '#sustainability' },
      { label: 'Reporting & Assurance', href: '#sustainability' },
      { label: 'Climate Resilience', href: '#sustainability' },
      { label: 'Technology & Innovation', href: '#innovation' },
    ],
  },
  {
    title: 'Legal & Compliance',
    links: [
      { label: 'Privacy Notice', policy: 'privacy' },
      { label: 'Terms of Use', policy: 'terms' },
      { label: 'Cookie Statement', policy: 'cookies' },
      { label: 'Accessibility', policy: 'accessibility' },
      { label: 'Modern Slavery Statement', policy: 'modern-slavery' },
    ],
  },
]

export const legalPolicies = {
  privacy: {
    title: 'Privacy Notice',
    updated: 'Last updated: 1 October 2026',
    intro:
      'Brevik Corporation respects the privacy of individuals who interact with our websites, facilities, and corporate services. This notice explains how we collect, use, and protect personal information.',
    sections: [
      {
        heading: 'Information we collect',
        text: 'We collect information you provide directly, such as name, business contact details, organization, and inquiry content. We also collect technical information such as browser type, device identifiers, and pages visited through cookies and similar technologies.',
      },
      {
        heading: 'How we use information',
        text: 'We use personal information to respond to inquiries, operate our websites, manage investor and media relationships, comply with legal obligations, and improve the security and performance of our services. We do not sell personal information.',
      },
      {
        heading: 'Retention and security',
        text: 'We retain personal information only as long as necessary for the purposes described above or as required by law. Brevik applies administrative, technical, and physical safeguards, including ISO 27001-aligned controls, to protect personal information.',
      },
      {
        heading: 'Contact',
        text: 'Questions about this notice may be directed to the Brevik Group Privacy Office at privacy@brevik.com or by post to Bahnhofstrasse 42, 8001 Zurich, Switzerland.',
      },
    ],
  },
  terms: {
    title: 'Terms of Use',
    updated: 'Last updated: 1 October 2026',
    intro:
      'These terms govern your use of the Brevik Corporation corporate website. By accessing this website, you agree to these terms.',
    sections: [
      {
        heading: 'Informational purpose',
        text: 'The content on this website is provided for general information only. It does not constitute investment advice, an offer to sell, or a solicitation to buy any security. Forward-looking statements are subject to risks and uncertainties described in our regulatory filings.',
      },
      {
        heading: 'Intellectual property',
        text: 'All trademarks, logos, text, graphics, and other content on this website are owned by Brevik Corporation or its licensors. You may not reproduce, distribute, or modify content without prior written permission, except for personal, non-commercial use.',
      },
      {
        heading: 'Limitation of liability',
        text: 'To the extent permitted by law, Brevik is not liable for any direct, indirect, incidental, or consequential loss arising from your use of this website or reliance on its content. Links to third-party websites are provided for convenience only.',
      },
      {
        heading: 'Governing law',
        text: 'These terms are governed by the laws of Switzerland, without regard to conflict-of-law principles. The courts of Zurich shall have exclusive jurisdiction over disputes relating to this website.',
      },
    ],
  },
  cookies: {
    title: 'Cookie Statement',
    updated: 'Last updated: 1 October 2026',
    intro:
      'Brevik uses cookies and similar technologies to operate our website, understand how it is used, and improve the experience of visitors.',
    sections: [
      {
        heading: 'Strictly necessary cookies',
        text: 'These cookies are required for the website to function and cannot be disabled. They support security, load balancing, and session management.',
      },
      {
        heading: 'Analytics cookies',
        text: 'We use aggregated analytics to understand page performance, visitor flows, and content engagement. Analytics data is used to improve the structure and accessibility of our corporate website.',
      },
      {
        heading: 'Managing preferences',
        text: 'You can control cookies through your browser settings. Disabling certain cookies may affect the functionality of the website. Brevik does not use cookies for cross-site advertising on this corporate website.',
      },
    ],
  },
  accessibility: {
    title: 'Accessibility Statement',
    updated: 'Last updated: 1 October 2026',
    intro:
      'Brevik Corporation is committed to making its corporate website accessible to as many people as possible, regardless of ability or technology.',
    sections: [
      {
        heading: 'Our approach',
        text: 'We design our website to align with the Web Content Accessibility Guidelines (WCAG) 2.2 at Level AA. This includes keyboard navigation, visible focus states, semantic structure, sufficient color contrast, and reduced-motion support.',
      },
      {
        heading: 'Ongoing review',
        text: 'We review accessibility during design, development, and content updates, and we conduct periodic manual and automated testing. Identified issues are prioritized and remediated in a timely manner.',
      },
      {
        heading: 'Feedback',
        text: 'If you encounter an accessibility barrier on this website, please contact accessibility@brevik.com with a description of the issue and the page involved. We aim to respond within five business days.',
      },
    ],
  },
  'modern-slavery': {
    title: 'Modern Slavery Statement',
    updated: 'Last updated: 1 October 2026',
    intro:
      'Brevik Corporation is committed to preventing modern slavery, forced labor, human trafficking, and child labor in our operations and supply chain.',
    sections: [
      {
        heading: 'Governance',
        text: 'The Board\'s ESG & Safety Committee oversees human rights performance. The Chief Sustainability Officer is accountable for the group human rights program, supported by regional compliance leads and a confidential reporting channel.',
      },
      {
        heading: 'Due diligence',
        text: 'We screen 100% of tier-1 suppliers against our Supplier Code of Conduct and conduct risk-based audits in higher-risk categories and geographies. Findings are tracked to closure with executive visibility.',
      },
      {
        heading: 'Remediation and training',
        text: 'Where issues are identified, we require corrective action plans and may suspend sourcing until remediation is verified. Annual training is mandatory for procurement, operations, and site leadership teams.',
      },
      {
        heading: 'Reporting',
        text: 'This statement is reviewed annually and published alongside our integrated annual report. Concerns can be raised confidentially through the Brevik Ethics Line or at humanrights@brevik.com.',
      },
    ],
  },
}

export const searchIndex = [
  ...newsroom.map((article) => ({
    id: `news-${article.id}`,
    type: 'Press Release',
    title: article.title,
    meta: `${article.category} · ${article.date}`,
    section: 'newsroom',
  })),
  ...businessUnits.map((unit) => ({
    id: `unit-${unit.id}`,
    type: 'Operating Business',
    title: unit.name,
    meta: `${unit.kicker} · Segment`,
    section: 'businesses',
  })),
  ...financialDocs.map((document) => ({
    id: `doc-${document.id}`,
    type: 'Investor Document',
    title: document.title,
    meta: `${document.category} · ${document.date}`,
    section: 'investors',
  })),
  ...hubs.map((hub) => ({
    id: `hub-${hub.id}`,
    type: 'Global Hub',
    title: `${hub.city}, ${hub.country}`,
    meta: `${hub.role} · ${hub.region}`,
    section: 'footprint',
  })),
  ...projects.map((project) => ({
    id: `project-${project.id}`,
    type: 'Reference Project',
    title: project.name,
    meta: `${project.platform} · ${project.location}`,
    section: 'projects',
  })),
  ...innovation.domains.map((domain) => ({
    id: `innovation-${domain.id}`,
    type: 'Technology',
    title: domain.label,
    meta: `Innovation · ${domain.labs}`,
    section: 'innovation',
  })),
  {
    id: 'operating-model',
    type: 'Corporate',
    title: 'Brevik Operating Model',
    meta: 'Originate · Engineer · Operate · Compound',
    section: 'operating-model',
  },
  {
    id: 'annual-report',
    type: 'Report',
    title: annualReport.title,
    meta: 'Investor Relations · Integrated report',
    section: 'investors',
  },
  {
    id: 'net-zero',
    type: 'Sustainability',
    title: '2030 Net-Zero Commitment',
    meta: 'Verified progress · ESG dashboard',
    section: 'sustainability',
  },
  {
    id: 'board',
    type: 'Leadership',
    title: 'Board of Directors & Executive Committee',
    meta: 'Governance · Leadership biographies',
    section: 'leadership',
  },
  {
    id: 'investor-day',
    type: 'Event',
    title: '2026 Investor Day',
    meta: '25 November 2026 · Zurich & Singapore',
    section: 'investors',
  },
]
