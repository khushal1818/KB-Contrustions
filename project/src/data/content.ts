export type ServiceItem = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  icon: 'Home' | 'Building2' | 'Factory' | 'Layers' | 'Hammer' | 'ClipboardList';
};

export const services: ServiceItem[] = [
  {
    id: 'residential',
    title: 'Residential Construction',
    tagline: 'Homes designed for the way you live.',
    description:
      'From individual residences to premium housing projects, we create thoughtfully planned spaces focused on comfort, functionality and lasting quality.',
    image: 'https://images.pexels.com/photos/7031581/pexels-photo-7031581.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Home',
  },
  {
    id: 'commercial',
    title: 'Commercial Construction',
    tagline: 'Spaces built for business and growth.',
    description:
      'We develop professional commercial spaces designed around functionality, efficiency and a strong visual identity.',
    image: 'https://images.pexels.com/photos/1398761/pexels-photo-1398761.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Building2',
  },
  {
    id: 'industrial',
    title: 'Industrial Construction',
    tagline: 'Built for performance. Built to last.',
    description:
      'Reliable construction solutions for industrial spaces, warehouses and operational facilities with a focus on practical execution and long-term value.',
    image: 'https://images.pexels.com/photos/4115457/pexels-photo-4115457.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Factory',
  },
  {
    id: 'turnkey',
    title: 'Turnkey Construction',
    tagline: 'One vision. One team. One complete solution.',
    description:
      'From planning and coordination to construction and final delivery, our turnkey approach brings every stage of the project together.',
    image: 'https://images.pexels.com/photos/17770160/pexels-photo-17770160.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Layers',
  },
  {
    id: 'renovation',
    title: 'Renovation & Remodeling',
    tagline: 'Transforming existing spaces into something better.',
    description:
      'Modernize, improve and reimagine existing residential and commercial spaces with carefully planned renovation solutions.',
    image: 'https://images.pexels.com/photos/36035073/pexels-photo-36035073.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Hammer',
  },
  {
    id: 'project-management',
    title: 'Project Management',
    tagline: 'Planning every detail. Managing every stage.',
    description:
      'Professional coordination and project management to keep construction organized, transparent and focused on the desired outcome.',
    image: 'https://images.pexels.com/photos/8961146/pexels-photo-8961146.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'ClipboardList',
  },
];

export type FeatureItem = {
  number: string;
  title: string;
  description: string;
  icon: 'ShieldCheck' | 'Workflow' | 'MessagesSquare' | 'Sparkles' | 'Users' | 'TrendingUp';
};

export const features: FeatureItem[] = [
  {
    number: '01',
    title: 'Quality Workmanship',
    description: 'Attention to detail at every stage of construction.',
    icon: 'ShieldCheck',
  },
  {
    number: '02',
    title: 'Professional Execution',
    description: 'Structured planning and disciplined project coordination.',
    icon: 'Workflow',
  },
  {
    number: '03',
    title: 'Transparent Communication',
    description: 'Clear communication from initial discussion to final delivery.',
    icon: 'MessagesSquare',
  },
  {
    number: '04',
    title: 'Modern Approach',
    description: 'Combining contemporary design thinking with practical construction.',
    icon: 'Sparkles',
  },
  {
    number: '05',
    title: 'Client-Focused',
    description: "Understanding the client's vision before turning it into reality.",
    icon: 'Users',
  },
  {
    number: '06',
    title: 'Built for the Future',
    description: 'Creating spaces designed for lasting functionality and value.',
    icon: 'TrendingUp',
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: 'Search' | 'Map' | 'HardHat' | 'CheckCircle2';
};

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Consult',
    description: 'We understand your requirements, vision and project goals.',
    icon: 'Search',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'We develop the project strategy, scope and execution plan.',
    icon: 'Map',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Our team manages construction with focus on quality and precision.',
    icon: 'HardHat',
  },
  {
    number: '04',
    title: 'Deliver',
    description: 'We complete the project with attention to the final details.',
    icon: 'CheckCircle2',
  },
];
