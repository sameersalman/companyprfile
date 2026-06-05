export const services = [
  { title: 'Website Design', desc: 'Pixel-perfect, conversion-focused designs that elevate your brand.', icon: '🎨' },
  { title: 'Website Development', desc: 'Lightning-fast, scalable websites built with modern frameworks.', icon: '💻' },
  { title: 'Mobile App Development', desc: 'Native-feel iOS & Android apps your users will love.', icon: '📱' },
  { title: 'Business Automation', desc: 'Automate workflows and unlock new operational efficiency.', icon: '⚙️' },
  { title: 'Local & Global SEO', desc: 'Dominating Google rankings to drive organic traffic, build authority, and generate high-intent leads.', icon: '🔍' },
  { title: 'Content Writing', desc: 'Words that rank, convert, and tell your brand story.', icon: '✍️' },
  { title: 'Graphic Design', desc: 'Standout visuals for marketing, social, and product.', icon: '🖌️' },
  { title: 'Logo Design', desc: 'Distinctive logos that anchor a memorable identity.', icon: '✨' },
  { title: '3D Art & Visualization', desc: 'Stunning 3D scenes, products and architectural renders.', icon: '🧊' },
  { title: 'UI/UX Design', desc: 'Research-driven interfaces designed for delight and clarity.', icon: '🧭' },
  { title: 'SaaS Development', desc: 'End-to-end SaaS platforms from MVP to production scale.', icon: '🚀' },
  { title: 'Digital Solutions', desc: 'Tailored digital strategies that move your business forward.', icon: '🌐' },
  { title: 'Custom Software Development', desc: 'Bespoke software engineered to your exact requirements.', icon: '🛠️' },
]

const whatsappImages = [
  "WhatsApp Image 2026-06-05 at 03.17.48.jpeg",
  "WhatsApp Image 2026-06-05 at 03.17.49 (1).jpeg",
  "WhatsApp Image 2026-06-05 at 03.17.49 (2).jpeg",
  "WhatsApp Image 2026-06-05 at 03.17.49 (3).jpeg",
  "WhatsApp Image 2026-06-05 at 03.17.49.jpeg",
  "WhatsApp Image 2026-06-05 at 03.17.50 (1).jpeg",
  "WhatsApp Image 2026-06-05 at 03.17.50 (2).jpeg",
  "WhatsApp Image 2026-06-05 at 03.17.50 (3).jpeg",
  "WhatsApp Image 2026-06-05 at 03.17.50.jpeg",
  "WhatsApp Image 2026-06-05 at 03.17.51 (1).jpeg",
  "WhatsApp Image 2026-06-05 at 03.17.51 (2).jpeg",
  "WhatsApp Image 2026-06-05 at 03.17.51.jpeg",
  "WhatsApp Image 2026-06-05 at 03.18.52 (1).jpeg",
  "WhatsApp Image 2026-06-05 at 03.18.52.jpeg",
  "WhatsApp Image 2026-06-05 at 03.18.53.jpeg",
  "WhatsApp Image 2026-06-05 at 03.30.23 (1).jpeg",
  "WhatsApp Image 2026-06-05 at 03.30.23.jpeg",
  "WhatsApp Image 2026-06-05 at 03.30.24 (1).jpeg",
  "WhatsApp Image 2026-06-05 at 03.30.24 (2).jpeg",
  "WhatsApp Image 2026-06-05 at 03.30.24 (3).jpeg",
  "WhatsApp Image 2026-06-05 at 03.30.24.jpeg",
  "WhatsApp Image 2026-06-05 at 03.30.25 (1).jpeg",
  "WhatsApp Image 2026-06-05 at 03.30.25 (2).jpeg",
  "WhatsApp Image 2026-06-05 at 03.30.25 (3).jpeg",
  "WhatsApp Image 2026-06-05 at 03.30.25.jpeg",
  "WhatsApp Image 2026-06-05 at 03.30.26 (1).jpeg",
  "WhatsApp Image 2026-06-05 at 03.30.26 (2).jpeg",
  "WhatsApp Image 2026-06-05 at 03.30.26.jpeg",
  "WhatsApp Image 2026-06-05 at 03.30.27 (1).jpeg",
  "WhatsApp Image 2026-06-05 at 03.30.27 (2).jpeg",
  "WhatsApp Image 2026-06-05 at 03.30.27 (3).jpeg",
  "WhatsApp Image 2026-06-05 at 03.30.27.jpeg",
  "WhatsApp Image 2026-06-05 at 03.30.28 (1).jpeg",
  "WhatsApp Image 2026-06-05 at 03.30.28 (2).jpeg",
  "WhatsApp Image 2026-06-05 at 03.30.28.jpeg"
]

const generatedLogos = Array.from({ length: 17 }, (_, i) => {
  const index = i + 1;
  let name = `Logo Concept ${index}: Corporate Identity`;
  let desc = 'Distinctive logo design crafted to establish a strong brand footprint.';
  let impact = 'Established premium modern visual identity.';
  
  if (index === 1) {
    name = 'Logo Concept 1: Modern Tech Identity';
    desc = 'A dynamic corporate logo for an emerging artificial intelligence startup.';
    impact = '40% increase in brand recall.';
  } else if (index === 2) {
    name = 'Logo Concept 2: Organic Food Logo';
    desc = 'A clean hand-drawn brandmark design for a premium farm-to-table grocer.';
    impact = '35% increase in brand recall.';
  } else if (index === 3) {
    name = 'Logo Concept 3: Luxury Retail Brandmark';
    desc = 'A minimalist wordmark and icon set for a high-end luxury fashion brand.';
    impact = '50% customer recognition rate improvement.';
  }

  return {
    name,
    category: 'Logo Design',
    desc,
    image: `/projects_images/logo (${index}).jpeg`,
    gradient: 'from-amber-500 to-orange-600',
    screenshots: [`/projects_images/logo (${index}).jpeg`],
    details: {
      client: `Brand Partner ${String.fromCharCode(65 + i)}`,
      scope: 'Logo Design & Identity Strategy',
      impact
    }
  };
});

const generatedArtworks = Array.from({ length: 20 }, (_, i) => {
  const index = i + 1;
  let name = `Artwork Concept ${index}: Creative Design`;
  let desc = 'Bespoke corporate identity design, logo concept and artistic brand visualization.';
  let impact = 'Premium modern visual identity.';

  if (index === 1) {
    name = 'Artwork Concept 1: Corporate Abstract Wall';
    desc = 'Stunning brand visualization artwork for modern corporate headquarters.';
    impact = 'Boosted brand perception scores by 25%.';
  } else if (index === 2) {
    name = 'Artwork Concept 2: Editorial Digital Painting';
    desc = 'Custom digital painting and visual assets for high-end lifestyle publishing.';
    impact = 'Enhanced digital media engagement by 30%.';
  } else if (index === 3) {
    name = 'Artwork Concept 3: Premium Brand Illustration';
    desc = 'Handcrafted bespoke vector illustrations for digital marketing and print collateral.';
    impact = 'Strengthened visual marketing consistency.';
  }

  return {
    name,
    category: index <= 10 ? 'Graphic Design' : '3D Art & Visualization',
    desc,
    image: `/projects_images/artwork (${index}).jpeg`,
    gradient: 'from-slate-700 to-slate-900',
    screenshots: [`/projects_images/artwork (${index}).jpeg`],
    details: {
      client: 'Creative Partner',
      scope: 'Visual Asset Creation',
      impact
    }
  };
});

const dummyWebsites = [
  {
    name: 'Apex Horizon Consulting',
    category: 'Digital Solutions',
    desc: 'A premium corporate website for Apex Horizon, a leading financial advisory firm, featuring client portal integration and interactive retirement planning calculators.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-slate-800 to-indigo-900',
    screenshots: [
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    ],
    details: {
      client: 'Apex Horizon Partners',
      scope: 'Corporate Web Design, UI/UX Strategy, Financial Calculator Integration',
      impact: '120% qualified booking inquiries & 35% longer session duration.'
    }
  },
  {
    name: 'Nova Dental Group',
    category: 'Local & Global SEO',
    desc: 'An online patient scheduling and service portal for Nova Dental, built to streamline patient onboarding and showcase modern dentistry treatments.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-teal-600 to-cyan-700',
    screenshots: [
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504813184591-015556c5c5e2?auto=format&fit=crop&w=800&q=80'
    ],
    details: {
      client: 'Nova Dental Group',
      scope: 'Patient Intake UI/UX, Local SEO Optimization, Booking Integration',
      impact: '90% online patient bookings & 50% decrease in call volume.'
    }
  },
  {
    name: 'Vanguard Real Estate',
    category: 'Custom Software Development',
    desc: 'A luxury property search and broker showcase website for Vanguard, featuring high-resolution interactive tours and property listing integrations.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-emerald-700 to-teal-800',
    screenshots: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
    ],
    details: {
      client: 'Vanguard Real Estate',
      scope: 'MLS Integration, Luxury UI Design, Local SEO Optimization',
      impact: '150% property tour inquiries & #1 search ranking for luxury local listings.'
    }
  },
  {
    name: 'Summit Law Partners',
    category: 'Content Writing',
    desc: 'A sophisticated website design for Summit Law, emphasizing trust, legal expertise, and instant case review consultation requests.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-blue-900 to-indigo-950',
    screenshots: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1505664194779-8bebcb95c024?auto=format&fit=crop&w=800&q=80'
    ],
    details: {
      client: 'Summit Law LLC',
      scope: 'Legal Web Design, Case Study Portal, Consultation Booking System',
      impact: '80% instant case evaluation submissions & 40% bounce rate reduction.'
    }
  },
  {
    name: 'GreenLife Organics',
    category: 'Website Development',
    desc: 'An e-commerce storefront for GreenLife Organics, providing a subscription delivery platform for organic grocer boxes and wellness supplements.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-green-600 to-emerald-700',
    screenshots: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80'
    ],
    details: {
      client: 'GreenLife Co.',
      scope: 'E-commerce Web Design, Shopify Subscription API, Page Speed Audit',
      impact: '210% recurring subscription revenue & 2.1% higher conversion rate.'
    }
  },
  {
    name: 'Aether Cyber Security',
    category: 'Custom Software Development',
    desc: 'A technical corporate website for Aether Cyber Security, highlighting threat detection capabilities and enterprise software integrations.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-slate-900 to-purple-950',
    screenshots: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80'
    ],
    details: {
      client: 'Aether Security Ltd',
      scope: 'B2B Landing Page Strategy, Technical Illustration, Interactive Demo UI',
      impact: '65% enterprise demo requests & 45% mobile bounce rate reduction.'
    }
  },
  {
    name: 'Orion Logistics & Shipping',
    category: 'Business Automation',
    desc: 'A client portal and corporate site for Orion Logistics, simplifying quote calculations and shipping status checks.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-sky-700 to-blue-800',
    screenshots: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80'
    ],
    details: {
      client: 'Orion Shipping Group',
      scope: 'API Integration, Shipment Calculator, B2B Web Portal Development',
      impact: '110% online quote requests & 30% reduction in support tickets.'
    }
  },
  {
    name: 'Aura Spa & Wellness',
    category: 'Website Design',
    desc: 'A relaxing web experience for Aura Spa, featuring interactive treatment menus, gift card purchases, and direct booking systems.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-pink-400 to-rose-500',
    screenshots: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80'
    ],
    details: {
      client: 'Aura Spa Resorts',
      scope: 'Wellness Brand Strategy, Booking System, Gift Card Store',
      impact: '130% online booking rate & 2x increase in gift card sales.'
    }
  },
  {
    name: 'Elevate SaaS Analytics',
    category: 'SaaS Development',
    desc: 'A modern product website for Elevate SaaS, featuring interactive product tours, customer stories, and dynamic pricing tiers.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-indigo-600 to-purple-700',
    screenshots: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    ],
    details: {
      client: 'Elevate Analytics',
      scope: 'Product UI Showcase, Multi-tier Pricing Page, A/B Conversion Testing',
      impact: '75% free-trial signups & 25% lower customer acquisition cost.'
    }
  },
  {
    name: 'Thrive Coworking Spaces',
    category: 'Digital Solutions',
    desc: 'A multi-location coworking space landing site and booking portal for desk spaces, meeting rooms, and corporate events.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-amber-600 to-orange-700',
    screenshots: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80'
    ],
    details: {
      client: 'Thrive Workspaces',
      scope: 'Multi-location SEO, Meeting Room Booking Widget, Membership Portal',
      impact: '95% hot desk membership signups & 40% higher room booking utilization.'
    }
  },
  {
    name: 'Apex Fitness & Training',
    category: 'Mobile App Development',
    desc: 'A dynamic fitness studio website featuring trainer bios, class calendars, online scheduling, and client training logs.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-red-600 to-orange-700',
    screenshots: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80'
    ],
    details: {
      client: 'Apex Fitness Studio',
      scope: 'Class Schedule Integration, Mobile Responsive UI, Trainer Booking',
      impact: '120% membership sales & 60% increase in class bookings through mobile.'
    }
  },
  {
    name: 'Core Pilates Studio',
    category: 'Business Automation',
    desc: 'A boutique booking platform for class signups, private lessons, and monthly membership subscription management.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-rose-500 to-pink-600',
    screenshots: [
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=800&q=80'
    ],
    details: {
      client: 'Core Pilates LLC',
      scope: 'Mindbody API Integration, Membership Management, Local SEO',
      impact: '85% member retention & 2.5x increase in online trial bookings.'
    }
  },
  {
    name: 'Lumina Creative Agency',
    category: 'Graphic Design',
    desc: 'A stunning media portfolio website showcasing video production, photography, and advertising campaign case studies.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-violet-700 to-purple-900',
    screenshots: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
    ],
    details: {
      client: 'Lumina Agency',
      scope: 'Bespoke Video Player UI, Case Study Templates, Interactive Media Grid',
      impact: '80% inbound lead conversion & 50% lower average site bounce rate.'
    }
  },
  {
    name: 'Solas Solar Energy',
    category: 'Local & Global SEO',
    desc: 'A lead-generation website featuring an interactive solar panel savings calculator, product info, and booking forms.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-amber-500 to-yellow-600',
    screenshots: [
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80'
    ],
    details: {
      client: 'Solas Energy Inc.',
      scope: 'Savings Calculator Widget, Landing Page A/B Testing, CRM Integration',
      impact: '170% home assessment quote submissions & 25% cost-per-lead reduction.'
    }
  },
  {
    name: 'Luxe Jewelers',
    category: 'Website Design',
    desc: 'An elegant online boutique for custom wedding rings, fine necklaces, and diamonds, with integrated secure checkout.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-yellow-700 to-amber-900',
    screenshots: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'
    ],
    details: {
      client: 'Luxe Jewelers Co.',
      scope: 'Bespoke Shopify Theme, High-End Product Photography Grid, SSL Security',
      impact: '90% average order value & 35% online cart abandonment reduction.'
    }
  },
  {
    name: 'Prime Cut Steakhouse',
    category: 'Website Development',
    desc: 'A premium restaurant website featuring virtual menus, private dining reservation request forms, and wine list showcases.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-red-950 to-stone-900',
    screenshots: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80'
    ],
    details: {
      client: 'Prime Cut Dining Group',
      scope: 'OpenTable Integration, Custom Wine Portfolio, Local Search Ranking',
      impact: '110% reservation volume & #1 search rank for local fine dining.'
    }
  },
  {
    name: 'Beacon Wealth Management',
    category: 'Digital Solutions',
    desc: 'A secure corporate site for high-net-worth advisors, offering financial guides, newsletters, and portfolio calculator tools.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-sky-900 to-indigo-950',
    screenshots: [
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    ],
    details: {
      client: 'Beacon Wealth Partners',
      scope: 'Client Portal Integration, Wealth Advisor Landing Page, Security Audit',
      impact: '75% consultation requests & 30% reduction in customer service calls.'
    }
  },
  {
    name: 'Urban Bistro & Cafe',
    category: 'Mobile App Development',
    desc: 'An online menu and pickup booking portal for local artisan cafes, enabling customers to order ahead and register memberships.',
    image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80',
    gradient: 'from-amber-700 to-stone-800',
    screenshots: [
      'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80'
    ],
    details: {
      client: 'Urban Bistro Cafe',
      scope: 'Online Order Checkout, Mobile Loyalty Card Registration, SEO Strategy',
      impact: '150% mobile pickup orders & 40% repeat-customer volume growth.'
    }
  }
];

export const portfolio = [
  { 
    name: 'BitePing Restaurant SaaS & Ordering System', 
    category: 'SaaS Development', 
    desc: 'A smart ordering, WhatsApp automation, and dashboard system designed to optimize restaurant operations and customer checkouts.', 
    image: '/projects_images/productimage/fulldashbiardpic-CbqXUzMn.png',
    gradient: 'from-orange-500 to-red-500',
    screenshots: [
      '/projects_images/productimage/fulldashbiardpic-CbqXUzMn.png',
      '/projects_images/productimage/usersidepage-BWVwNOsO.png',
      '/projects_images/productimage/checkoutpage-CDC2nCiB.png',
      '/projects_images/productimage/auatmattcwhatsapprepaly-Cduc6SKC.png',
      '/projects_images/productimage/orderslist-DGhnGb-n.png',
      '/projects_images/productimage/orderdetaischack-JmoGKO-Q.png',
      '/projects_images/productimage/biteping091-DzpSIEEQ.jpeg',
      '/projects_images/productimage/biteping092-DjwHgOfD.jpeg',
      '/projects_images/productimage/biteping923-CQPo9F2K.jpeg',
      '/projects_images/productimage/addpreparetime-C9nOKN1w.png',
      '/projects_images/productimage/deliveryareas-BvR43liw.png',
      '/projects_images/productimage/reservations-vDLE5PAW.png',
      '/projects_images/productimage/shareyouQrcodearroundthe wrokd-rlwyEdBA.png',
      '/projects_images/productimage/trackyour reservation-DP8o4Xnj.png',
      '/projects_images/productimage/youcanadddrivers-2clIRi2k.png',
      '/projects_images/productimage/bookinrecipt-CDyVSc49.png',
      '/projects_images/productimage/finacesinformations-1OoVOYWr.png',
      '/projects_images/productimage/liveorders-B2-6pRuQ.png',
      '/projects_images/productimage/menuseet-B1L0E1Yq.png',
      '/projects_images/productimage/neworder1-oiAOaXEO.png',
      '/projects_images/productimage/neworder2-BlofjLmQ.png',
      '/projects_images/productimage/neworder3-CZZQlOkW.png',
      '/projects_images/productimage/prdouctimageusrside-DcWrSjT0.png',
      '/projects_images/productimage/logo-CuSOK7FL.png'
    ],
    details: {
      client: 'BitePing Inc.',
      scope: 'SaaS Design, Custom Development, Workflow Automation',
      impact: '+140% Online ordering volume & 30% faster dispatch.'
    }
  },
  { 
    name: 'Luxora Photography Showcase', 
    category: 'Website Design', 
    desc: 'A premium photography showcase website designed to present high-end photo shoots, visual portfolios, and bookings with sleek animations.', 
    image: '/projects_images/luxoraweb1.png',
    gradient: 'from-purple-600 to-indigo-700',
    screenshots: [
      '/projects_images/luxoraweb1.png',
      '/projects_images/luxoraweb2.png',
      '/projects_images/luxoraweb3.png',
      '/projects_images/luxoraweb4.png',
      '/projects_images/luxoraweb5.png'
    ],
    details: {
      client: 'Luxora Photography',
      scope: 'Photography Portfolio Design, Booking System, Custom Frontend',
      impact: 'Double booking inquiries & 45% mobile bounce rate reduction.'
    }
  },
  { 
    name: 'Annalise Captures Photography Showcase', 
    category: 'Website Development', 
    desc: 'A striking photography portfolio layout for a luxury photography studio focusing on visual depth, smooth page transitions, and masonry imagery.', 
    image: '/projects_images/annalisecaptures1.png',
    gradient: 'from-pink-500 to-rose-600',
    screenshots: [
      '/projects_images/annalisecaptures1.png',
      '/projects_images/annalisecaptures2.png',
      '/projects_images/annalisecaptures3.png'
    ],
    details: {
      client: 'Annalise Captures',
      scope: 'Photography Portfolio UI, Speed Optimization, Local SEO',
      impact: 'Double booking inquiries & #1 local Google ranking.'
    }
  },
  { 
    name: 'LieEdit Photography Showcase', 
    category: 'UI/UX Design', 
    desc: 'A simple photography portfolio and booking website built for LieEdit Studio, showcasing high-resolution client shoots and scheduling.', 
    image: '/projects_images/lieedit1.png',
    gradient: 'from-blue-500 to-cyan-600',
    screenshots: [
      '/projects_images/lieedit1.png',
      '/projects_images/lieedit2.png',
      '/projects_images/lieedit3.png',
      '/projects_images/lieedit4.png'
    ],
    details: {
      client: 'LieEdit Studio',
      scope: 'Photography Website Design, Booking Integration, Local SEO',
      impact: 'Double booking inquiries & 35% reduction in page load time.'
    }
  },
  ...dummyWebsites,
  { 
    name: 'Brand Logo Concept 1', 
    category: 'Logo Design', 
    desc: 'Distinctive logo creation designed to convey trust, quality, and authority.', 
    image: '/projects_images/logo1.jpeg',
    gradient: 'from-amber-500 to-orange-600',
    screenshots: ['/projects_images/logo1.jpeg'],
    details: {
      client: 'Brand Partner A',
      scope: 'Logo Design',
      impact: '35% Increase in brand recall.'
    }
  },
  { 
    name: 'Brand Logo Concept 2', 
    category: 'Logo Design', 
    desc: 'Distinctive logo creation designed to convey trust, quality, and authority.', 
    image: '/projects_images/logo2.jpeg',
    gradient: 'from-amber-500 to-orange-600',
    screenshots: ['/projects_images/logo2.jpeg'],
    details: {
      client: 'Brand Partner B',
      scope: 'Logo Design',
      impact: '35% Increase in brand recall.'
    }
  },

  ...generatedLogos,
  ...generatedArtworks
]

export const whyUs = [
  { title: 'Measurable ROI Focus', desc: 'We build strategies to increase traffic, generate leads, and directly improve your bottom line.', icon: '📈' },
  { title: 'Predictable Revenue Systems', desc: 'We don\'t just design — we create automated pipelines that turn traffic into paying clients.', icon: '⚡' },
  { title: 'End-to-End Growth', desc: 'From high-converting web design and technical SEO to targeted ads and branding.', icon: '🚀' },
  { title: 'Transparent Partnership', desc: 'Agile sprints, clear milestone tracking, and regular analytics updates. No guesswork.', icon: '🤝' },
  { title: 'Tailored Execution', desc: 'Custom strategies for startups and growing brands designed to scale online smarter and faster.', icon: '👥' },
]

export const process = [
  { step: '01', title: 'Strategy & Audit', desc: 'We analyze your target market, competitors, and online presence to map out a revenue growth blueprint.' },
  { step: '02', title: 'High-Converting Build', desc: 'We craft and engineer lightning-fast website experiences and lead gen pathways tailored for conversion.' },
  { step: '03', title: 'Traffic & SEO Scaling', desc: 'We deploy targeted Google/Meta Ads and optimize local & global search rankings to drive qualified visitors.' },
  { step: '04', title: 'Automate & Optimize', desc: 'We integrate CRM pipelines, run A/B testing on ads, and continuously refine performance to scale your ROI.' },
]

export const testimonials = [
  { name: 'Marcus Sterling', role: 'Founder, Apex Fitness', quote: 'Pixel Nest turned our digital presence into a literal customer acquisition machine. Our lead volume has grown by 180% since launching.' },
  { name: 'Elena Rostova', role: 'CMO, Luxora Jewels', quote: 'The sheer craft in their design is rare, but their commitment to actual conversions and sales results is what makes them a true partner.' },
  { name: 'David H.', role: 'Operations Lead, BitePing', quote: 'They didn\'t just build our ordering platform; they built the automation systems that run it. Unbelievable speed and precision.' },
]
