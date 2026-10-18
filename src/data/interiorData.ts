import { Project, ServiceDetail, TeamMember, JournalArticle } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_luxury_interior_1792307733575.jpg';
export const BEFORE_IMAGE = '/src/assets/images/interior_raw_before_1792307734402.jpg';
export const AFTER_IMAGE = '/src/assets/images/interior_luxury_after_1792307735193.jpg';

export const BRAND_SPECS = {
  domain: 'greenvalleyinteriors.hbtintegrisys.com',
  name: 'Green Valley Interiors',
  shortName: 'Green Valley',
  tagline: 'Atelier of Architectural Harmony · Est. 2012 Nagercoil',
  subtagline: 'Residential — Executive Workspace — Commercial Havens',
  heroHeadline: 'BRING MAGIC TO HOME.',
  heroSubheadline: 'Inspiring spaces, inspired living. Bespoke luxury architecture, refined residential sanctuaries, and visionary commercial interiors crafted with meticulous organic poise.',
  locationBadge: 'Luxury Interior Designers in Nagercoil',
  regOffice: 'Praise Complex, 2nd Floor, Asaripallam Road, Nagercoil, Tamil Nadu 629201, India',
  phone: '+91 822 006 0017',
  displayPhone: '+91 822 006 0017',
  whatsappUrl: 'https://wa.me/918220060017',
  email: 'contact@greenvalleyinterior.com',
  hours: 'Monday – Saturday: 9:30 AM – 7:30 PM',
  coordinates: 'LAT 8.1833° N / LONG 77.4119° E',
  primaryMarkets: ['Nagercoil', 'Kanyakumari', 'Trivandrum', 'Coimbatore', 'Chennai', 'Bengaluru']
};

export const METRICS = [
  { value: '150+', label: 'Sanctuaries Built', detail: 'Private villas, estates, and boutique spaces' },
  { value: '185k+', label: 'Commissioned Sq.Ft', detail: 'Turnkey interior execution across South India' },
  { value: '100%', label: 'Craft Guarantee', detail: 'Zero-punchlist quality assurance standard' },
  { value: '12+', label: 'Years of Atelier Craft', detail: 'Continuous architectural leadership since 2012' }
];

export const FOUR_PRINCIPLES = [
  {
    num: '01',
    title: 'Material Authenticity',
    subtitle: 'Zero Synthetic Veneers',
    description: 'We employ honest stone, unlacquered bronze, patinated leathers, and sustainably harvested FSC hardwoods that age with nobility and tactile grace.'
  },
  {
    num: '02',
    title: 'Light as Sculpture',
    subtitle: 'Circadian Infiltration',
    description: 'Harnessing natural dawn-to-dusk solar orientations. Apertures and shadowlines are deliberately shaped to breathe dynamic kinetic spirit into structural stillness.'
  },
  {
    num: '03',
    title: 'Ergonomic Serenity',
    subtitle: 'Effortless Utility',
    description: 'Seamless spatial flow, concealed service pockets, and intuitive programmatic adjacencies produce acoustic stillness and unhindered sensory calm.'
  },
  {
    num: '04',
    title: 'Turnkey Accountability',
    subtitle: 'Complete Ownership',
    description: 'Exacting engineering precision, total procurement transparency, and military-grade scheduling ensure zero cost surprises or diluted expectations.'
  }
];

export const SERVICES: ServiceDetail[] = [
  {
    number: '01',
    slug: 'residential-design',
    title: 'Residential Design',
    subtitle: 'Living Sanctuaries',
    description: 'Transform your residence into a masterpiece of poise, tactile comfort, and intuitive layout. Custom millwork, ambient lighting schemas, and personalized master suites.',
    scopePoints: [
      'Modular Kitchen Concepts & German Hardware',
      'Classical & Contemporary Villa Interiors',
      'Spatial Renovation, Civil Restructuring & Styling',
      'Circadian Lighting Architecture with Concealed Coves'
    ],
    deliverables: [
      'Architectural 3D photorealistic walkthroughs',
      'Full civil, electrical, plumbing & acoustic blueprints',
      'Bespoke furniture & millwork fabrication',
      'On-site project engineer with daily photologs'
    ],
    timeline: '60–120 Working Days',
    idealFor: 'Independent Villas, Penthouses, Duplexes, and Luxury Residences'
  },
  {
    number: '02',
    slug: 'office-design',
    title: 'Office & Corporate Interiors',
    subtitle: 'Productive Elegance',
    description: 'We shape corporate suites that foster deep focus and seamless collaboration, tailored to mirror brand prestige. Ergonomic layouts, acoustic balances, and boardrooms.',
    scopePoints: [
      'Executive Chambers & Private C-Suite Quarters',
      'Ergonomic Collaborative Hubs & Hybrid Pods',
      'Acoustic Panelling & Glare-Free Ambient Lighting',
      'Integrated Hidden Smart AV & Telepresence Systems'
    ],
    deliverables: [
      'Optimized space-utilization heatmaps',
      'Acoustic reverberation calculations',
      'Custom boardroom tables & monolithic conference plinths',
      'Zero-downtime phased handover scheduling'
    ],
    timeline: '45–90 Working Days',
    idealFor: 'Corporate Headquarters, Law Firms, Medical Consultancies, and Tech Studios'
  },
  {
    number: '03',
    slug: 'commercial-design',
    title: 'Commercial & Luxury Hospitality',
    subtitle: 'Commercial Destination',
    description: 'Transform retail stores, restaurants, boutique hospitality spaces, and flagship showrooms into immersive brand destinations that captivate high-discretion clientele.',
    scopePoints: [
      'Experiential Flagship Boutiques & Retail Lounges',
      'Fine Dining, Café & Gourmet Lounge Concepts',
      'Luxury Real Estate Staging & Model Pavilions',
      'High-Durability Architectural Material Specs'
    ],
    deliverables: [
      'Patron flow choreography & dwell-time optimization',
      'Theatrical accent lighting & custom chandeliers',
      'High-traffic commercial millwork & stone bar counters',
      'Municipal fire, HVAC, and egress compliance'
    ],
    timeline: '60–100 Working Days',
    idealFor: 'Boutique Hotels, Fine-Dining Restaurants, Flagship Retail Stores, and Spas'
  },
  {
    number: '04',
    slug: 'bespoke-millwork',
    title: 'Bespoke Joinery & Foundry Millwork',
    subtitle: 'In-House Artisanal Carpentry',
    description: 'Fabricated within our dedicated 25,000 sq.ft Nagercoil carpentry workshop. We calculate timber expansion tolerances, concealed pivot doors, and architectural cabinetry with millimeter accuracy.',
    scopePoints: [
      'Acoustic Fluted Oak & American Walnut Panelling',
      'Concealed Flush Pivot Doors with Magnetic Latches',
      'Walk-In Dressing Galleries with Smoked Glass & Leather',
      'Blum & Hettich Precision Concealed Hardware'
    ],
    deliverables: [
      '100% Factory pre-assembled quality audit',
      'Non-toxic zero-VOC matte lacquer coatings',
      '10-Year structural joinery warranty',
      'Continuous wood grain matching across door leaves'
    ],
    timeline: 'Parallel to Civil Phase',
    idealFor: 'Custom architectural casework, wardrobe galleries, and acoustic wall systems'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'residence-palm-grove',
    monographNumber: 'Monograph 01',
    title: 'Residence at Palm Grove',
    subtitle: 'Skylit Tropical Atrium & Biophilic Water Reflection Pool',
    category: 'residential',
    categoryLabel: 'Private Sanctuary',
    scale: '6,800 sq ft',
    location: 'Coimbatore, Tamil Nadu',
    completedYear: '2024',
    discipline: 'Biophilic Architecture & Living Volumes',
    image: '/src/assets/images/hero_luxury_interior_1792307733575.jpg',
    description: 'Centralized around an open-sky tropical courtyard, this residence balances an indoor water reflection pool with endemic greenery, raw limestone plinths, and tactile sand-washed plaster, generating a cooled microclimate for year-round tranquility.',
    architecturalAxioms: [
      'Central atrium with passive convective ventilation and solar chimneys',
      'Reflecting shallow pool in honed Dravidian black granite',
      'Continuous flush limestone flooring extending between interior and courtyards',
      'Hand-crafted teak wood rafters with concealed warm lighting washes'
    ],
    materialsUsed: ['Dravidian Honed Granite', 'Reclaimed Plantation Teak', 'Lime-Washed Plaster', 'Cast Bronze Hardware'],
    clientQuote: {
      text: 'Green Valley created a living sanctuary that feels completely separated from the busy city outside. The microclimate inside our atrium stays 4 degrees cooler naturally.',
      author: 'K. Balasubramanian',
      role: 'Estate Owner'
    }
  },
  {
    id: 'skyline-travertine-penthouse',
    monographNumber: 'Monograph 02',
    title: 'Skyline Travertine Penthouse',
    subtitle: 'Monolithic Navona Travertine & Double-Height Living',
    category: 'luxury',
    categoryLabel: 'Private Sanctuary',
    scale: '5,400 sq ft',
    location: 'Bengaluru, Karnataka',
    completedYear: '2023',
    discipline: 'Spatial Turnkey & Stone Engineering',
    image: '/src/assets/images/portfolio_penthouse_living_1792307736014.jpg',
    description: 'A serene aerie perched high above the urban basin. Features monolithic navona travertine cladding, structural cantilevered balconies, integrated fluted acoustic millwork, and perimeter circadian cove illumination.',
    architecturalAxioms: [
      'Double-height acoustic timber cladding with precision 12mm fluting',
      'Continuous 1200x1200mm cross-cut Navona Travertine slabs with micro-joints',
      'Automated DALI-2 architectural lighting with circadian sunset scenes',
      'Cantilevered fireplace hearth fabricated from a single stone block'
    ],
    materialsUsed: ['Roman Navona Travertine', 'American Black Walnut', 'Aged Brushed Brass', 'Belgian Wool Bouclé'],
    clientQuote: {
      text: 'Their turnkey execution meant we never had to coordinate a single contractor. The precision of the joinery and stonework is museum-grade.',
      author: 'Rajiv & Sumanth Khurana',
      role: 'Penthouse Owners'
    }
  },
  {
    id: 'pinnacle-corporate-boardroom',
    monographNumber: 'Monograph 03',
    title: 'Pinnacle Corporate Boardroom',
    subtitle: 'Acoustically Isolated Executive C-Suite & Quartz Plinth',
    category: 'office',
    categoryLabel: 'Executive Offices',
    scale: '3,200 sq ft',
    location: 'Chennai, Tamil Nadu',
    completedYear: '2024',
    discipline: 'Acoustic & Executive Millwork',
    image: '/src/assets/images/portfolio_minimalist_kitchen_1792307736325.jpg',
    description: 'Engineered acoustic geometry concealed behind micro-perforated fumed timber panels. Centered around a bespoke 22-foot single-pour engineered quartz conference plinth with invisible smart conferencing interfaces.',
    architecturalAxioms: [
      'STC 55 acoustic isolation walls and motorized double-glazed acoustic doors',
      '22-foot monolithic quartz boardroom conference table with inductive charging',
      'Concealed telepresence screens with automated motorized acoustic reveal shutters',
      'Anti-glare micro-prism architectural downlights calibrated for video fidelity'
    ],
    materialsUsed: ['Fumed European Oak', 'Engineered Quartzite', 'Smoked Bronze Profiles', 'Acoustic Wool Felt'],
    clientQuote: {
      text: 'Our international board members routinely praise the acoustic serenity and technological seamlessness of this space.',
      author: 'Sundararajan M.',
      role: 'Managing Director'
    }
  },
  {
    id: 'minimalist-primary-suite',
    monographNumber: 'Monograph 04',
    title: 'Minimalist Primary Suite',
    subtitle: 'Italian Calacatta Slabs & Woven Belgian Linens',
    category: 'luxury',
    categoryLabel: 'Master Suite',
    scale: '1,950 sq ft',
    location: 'Kochi, Kerala',
    completedYear: '2023',
    discipline: 'Master Suite Architecture',
    image: '/src/assets/images/portfolio_master_suite_1792307737123.jpg',
    description: 'Sculpted for deep sensory restoration. Anchor points include rare bookmatched Italian Calacatta marble wall compositions, woven Belgian linens, floating white oak platform bedding, and shadowless perimeter grazing.',
    architecturalAxioms: [
      'Cantilevered floating oak bed with perimeter under-bed warm illumination',
      'Bookmatched Italian Calacatta marble backdrop behind freestanding bathtub',
      'Acoustic micro-slat headboard wall dampening exterior coastal winds',
      'Integrated smart motorized blackout sheer drapery'
    ],
    materialsUsed: ['Calacatta Gold Marble', 'Natural White Oak', 'Organic Belgian Linen', 'Sandblasted Limestone'],
    clientQuote: {
      text: 'Waking up in this suite feels like staying at an ultra-exclusive private wellness retreat every morning.',
      author: 'Dr. Ananya Roy',
      role: 'Homeowner'
    }
  },
  {
    id: 'heritage-manor-dining',
    monographNumber: 'Monograph 05',
    title: 'The Heritage Manor Dining',
    subtitle: 'Reclaimed Plantation Teak & Hand-Hammered Bronze',
    category: 'culinary',
    categoryLabel: 'Culinary & Dining',
    scale: '4,100 sq ft',
    location: 'Nagercoil, Tamil Nadu',
    completedYear: '2024',
    discipline: 'Heritage Teak & Artisanal Millwork',
    image: '/src/assets/images/interior_luxury_after_1792307735193.jpg',
    description: 'Reinterpreting classic Dravidian timber craft through contemporary restraint. Features exposed reclaimed plantation teak rafters, hand-hammered bronze lighting fixtures, and a 14-seat solid timber dining table sculpted from a single tree trunk.',
    architecturalAxioms: [
      '14-seat live-edge timber dining table hand-rubbed with organic tung oil',
      'Vaulted ceiling with restored Dravidian timber rafters and concealed uplights',
      'Monolithic granite wine gallery with dual-temperature climate zones',
      'Custom patinated bronze handles forged in our local metallurgy guild'
    ],
    materialsUsed: ['Reclaimed Plantation Teak', 'Hammered Bronze', 'Black Granite', 'Sisal Weave Textiles'],
    clientQuote: {
      text: 'Green Valley respected the heritage of our ancestral property while introducing modern European spatial luxury.',
      author: 'V. Ramanathan',
      role: 'Family Estate Custodian'
    }
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Ar. V. Anandasundaram',
    role: 'Founder & Principal Architect',
    credentials: 'B.Arch, M.Sc (Milan) · IIA Member',
    experience: '18+ Yrs Cross-Continental Practice',
    bio: 'With over 18 years of practice spanning Milan, Mumbai, and South India, Anandasundaram founded Green Valley to synthesize pure minimalist silhouettes with South India\'s indigenous stone and timber heritage. Under his direction, the studio has orchestrated private compounds for industrialists, coastal sanctuaries, and landmark commercial centers.',
    specialization: ['Master Space Planning', 'Biophilic Light Studies', 'Heritage Granite Masonry', 'Spatial Strategy']
  },
  {
    name: 'Meera Krishnan',
    role: 'Head of Interior Architecture',
    credentials: 'M.Des (CEPT), B.Arch',
    experience: '10+ Yrs Architectural Practice',
    bio: 'Directs volumetric layout curation, luxury FF&E procurement, and bespoke textile sourcing from European and local weaving guilds. Specializes in acoustic comfort and circadian lighting orchestration.',
    specialization: ['Circadian Lighting', 'Volumetric Layouts', 'FF&E Procurement', 'Textile Architecture']
  },
  {
    name: 'J. Thangadurai',
    role: 'Senior Joinery & Millwork Engineer',
    credentials: 'Guild Master Craftsman',
    experience: '22+ Yrs Master Carpentry',
    bio: 'Oversees our specialized Nagercoil carpentry foundry, calculating timber tolerances, hidden flush doors, acoustic slat systems, and custom architectural cabinetry with millimeter perfection.',
    specialization: ['Timber Tolerances', 'Concealed Pivot Doors', 'Acoustic Fluting', 'German Hardware Integration']
  },
  {
    name: 'S. R. Praveen',
    role: 'Director of Turnkey Delivery',
    credentials: 'B.E. Civil, PMP Certified',
    experience: '14+ Yrs High-Value Delivery',
    bio: 'Enforces budget integrity, structural safety audits, contractor alignments, and timeline accuracy for zero-variance completion across all on-site residential and commercial commissions.',
    specialization: ['Zero-Escalation Contracts', 'Structural Audits', 'Turnkey Handover', 'Site Engineering']
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: '5-things-room-good-to-great',
    date: '27 Nov 2025',
    category: 'Spatial Curation',
    readTime: '5 min read',
    title: '5 Things That Take a Room from Good to Great',
    excerpt: 'True architectural luxury isn\'t an accumulation of ornamentation, but a disciplined subtraction. We dissect how the controlled interplay between unassigned void areas and grazing illumination transforms static rooms into breathing sanctuaries.',
    fullContent: [
      'When homeowners envision luxury interiors, their initial impulse is frequently additive: an extra chandelier, a richer wallpaper, an ornate molding. Yet in classical architectural theory, spatial transcendence is fundamentally subtractive.',
      '1. The Power of the Negative Void: Leaving intentional breathing room around marquee furniture pieces allows each sculptural silhouette to register emotionally rather than competing for sensory attention.',
      '2. Grazing Illumination vs Overhead Glare: Washing walls with warm 2700K perimeter cove light reveals microscopic stone and plaster textures without creating blinding optical hot spots.',
      '3. Acoustic Dampening: Sound is tactile. Integrating fluted timber slats or wool rugs eliminates hollow echoes, instantly imbuing a room with library-like serenity.',
      '4. Monolithic Material Consistency: Rather than switching between four contrasting floor finishes, carrying a continuous stone or timber across boundaries visually doubles spatial volume.',
      '5. Generational Craftsmanship: Authentic materials that develop patina—such as unlacquered brass and oil-rubbed teak—age with nobility rather than deteriorating.'
    ]
  },
  {
    id: 'wall-to-wall-shelves-joinery',
    date: '21 Nov 2025',
    category: 'Joinery & Millwork',
    readTime: '4 min read',
    title: 'Functional and Stylish Wall-to-Wall Shelves',
    excerpt: 'How bespoke structural cabinetry maximizes spatial footprints while functioning as an expansive curatorial exhibition gallery in modern residences.',
    fullContent: [
      'Freestanding bookshelves often fragment a room, creating dust traps and visual clutter. Bespoke architectural wall-to-wall millwork, by contrast, becomes an integral part of the building\'s tectonic envelope.',
      'In our Nagercoil workshop, we engineer each shelving unit with internal steel flitch plates capable of spanning up to 1.8 meters without center sagging, even when loaded with art monographs and heavy stone sculptures.',
      'By integrating hidden LED wash channels within 45-degree shadow gaps, the joinery glows softly from within at twilight, transforming practical book storage into an architectural light installation.'
    ]
  },
  {
    id: 'secrets-simple-minimal-design',
    date: '15 Nov 2025',
    category: 'Minimalist Theory',
    readTime: '6 min read',
    title: 'The 5 Secrets to Pulling Off Simple, Minimal Design',
    excerpt: 'Avoiding cold detachment through the layered introduction of tactile finishes, organic imperfections, and calibrated rhythmic light-wells.',
    fullContent: [
      'Minimalism is frequently misunderstood as stark white clinical austerity. True minimalist architecture—as practiced by masters like Peter Zumthor and Geoffrey Bawa—is warm, deeply textured, and profoundly human.',
      'The secret lies in tactile depth. When you remove superfluous decorative bric-a-brac, every remaining surface must possess tactile richness: hand-troweled lime plaster, cross-cut Roman travertine, or open-grain brushed white oak.',
      'Natural daylight acts as the primary furnishing. By aligning window reveals with the solar trajectory across Kanyakumari and Nagercoil skies, rooms shift in color temperature and emotional tone from dawn to twilight.'
    ]
  }
];

export const FAQS = [
  {
    q: 'What is Green Valley\'s turnkey interior design model?',
    a: 'We offer single-source responsibility. From preliminary 3D spatial planning, structural civil alterations, and electrical redesign to custom in-house joinery fabrication, Italian stone sourcing, and final white-glove styling, our clients deal with a single accountable project director.'
  },
  {
    q: 'Where is your design studio and workshop located?',
    a: 'Our primary design chambers and atelier are located at Praise Complex, 2nd Floor, Asaripallam Road, Nagercoil, Tamil Nadu. We also maintain a specialized 25,000 sq.ft timber millwork and stone fabrication foundry nearby.'
  },
  {
    q: 'Which regions do you take projects in?',
    a: 'We actively undertake private residences, penthouses, villas, and executive commercial projects across Nagercoil, Kanyakumari, Trivandrum, Tirunelveli, Madurai, Coimbatore, Chennai, and Bengaluru.'
  },
  {
    q: 'How does your pricing and billing work?',
    a: 'We provide 100% transparent bills of materials with zero unapproved escalations. Once the 3D designs and material specifications are approved, the contract price is fixed.'
  }
];
