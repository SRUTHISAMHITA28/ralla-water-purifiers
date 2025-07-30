// Product data
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "RWP - Basic Water Purifier",
    price: 7999,
    image: "/RWP_Basic_Water_Purifier.png",
    features: [
      "7-stage filtration",
      "UV protection",
      "Smart water saving",
      "DIY maintenance"
    ]
  },
  {
    id: 2,
    name: "RWP - Pro Water Purifier",
    price: 11999,
    image: "/RWP_Pro_Plus_Premium_Water_Purifier.jpg",
    features: [
      "5-stage filtration",
      "UV protection",
      "Compact design",
      "No electricity needed"
    ]
  },
  {
    id: 3,
    name: "RWP - Pro Plus: Premium Water Purifier",
    price: 12999,
    image: "/RWP_Pro_Plus_Premium_Water_Purifier.jpg",
    features: [
      "6-stage filtration",
      "RO+UV dual protection",
      "TDS controller",
      "Low maintenance"
    ]
  },
  {
    id: 4,
    name: "RWP - Ultra: Premium Water Purifier",
    price: 14499,
    image: "/RWP_Ultra_Premium_Water_Purifier.jpg",
    features: [
      "App connectivity",
      "Water quality alerts",
      "Filter replacement reminders",
      "Energy-efficient"
    ]
  }
];

// Stats data
export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: "100+", label: "Happy Customers" },
  { value: "10,000+", label: "Litres of Water Saved" },
  { value: "14,400", label: "Litres of Free Service" },
  { value: "₹2999", label: "AMC Only" }
];

// Comparison data
export interface ComparisonItem {
  feature: string;
  ralla: string;
  regularCans: string;
  otherPurifiers: string;
}

export const comparisonData: ComparisonItem[] = [
  {
    feature: "Cost per litre",
    ralla: "₹0.50",
    regularCans: "₹2.00",
    otherPurifiers: "₹0.80"
  },
  {
    feature: "Installation",
    ralla: "DIY Easy",
    regularCans: "No installation",
    otherPurifiers: "Professional required"
  },
  {
    feature: "Maintenance frequency",
    ralla: "Annual",
    regularCans: "Weekly ordering",
    otherPurifiers: "Quarterly"
  },
  {
    feature: "Water savings",
    ralla: "90%",
    regularCans: "0%",
    otherPurifiers: "70%"
  },
  {
    feature: "Long-term cost (5 years)",
    ralla: "₹25,000",
    regularCans: "₹52,000",
    otherPurifiers: "₹35,000"
  },
  {
    feature: "Self-service capability",
    ralla: "Yes",
    regularCans: "N/A",
    otherPurifiers: "No"
  }
];

// Testimonial data
export interface Testimonial {
  id: number;
  name: string;
  image: string;
  installationImage: string; // Add this new field
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    installationImage: "/1.webp", // Add installation images
    text: "Ralla Water Purifier has transformed how my family consumes water. The DIY maintenance is so simple that I no longer need to call technicians for regular service."
  },
  {
    id: 2,
    name: "Priya Sharma",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    installationImage: "/2.webp",
    text: "After switching to Ralla, I've noticed a significant difference in water taste and quality. The installation was incredibly easy, and I love being able to monitor everything through the upcoming app."
  },
  {
    id: 3,
    name: "Anand Patel",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    installationImage: "/3.webp",
    text: "As a busy professional, I appreciate the low maintenance and reliability of my Ralla purifier. The water quality is consistent, and the annual service plan is very reasonable."
  },
  {
    id: 4,
    name: "Anand Manoj",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    installationImage: "/4.webp",
    text: "As a busy professional, I appreciate the low maintenance and reliability of my Ralla purifier. The water quality is consistent, and the annual service plan is very reasonable."
  }
];

// FAQ data
export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "How do I install the purifier?",
    answer: "Ralla Water Purifiers come with an easy DIY installation kit and step-by-step guide. Most customers complete installation in under 30 minutes. We also have video tutorials on our YouTube channel."
  },
  {
    question: "Is AMC optional?",
    answer: "Yes, the Annual Maintenance Contract (AMC) is optional, though highly recommended to ensure optimal performance. It covers all service visits and parts replacement (except consumables) for a year at just ₹2999."
  },
  {
    question: "What's covered under free service?",
    answer: "Our free service covers 14,400 litres of purified water, which typically lasts 1-2 years for an average family. This includes filter inspections, cleaning, and basic maintenance."
  },
  {
    question: "How do I order spare parts?",
    answer: "Spare parts can be ordered directly through our website or upcoming mobile app. All parts come with clear installation instructions, designed for easy DIY replacement."
  },
  {
    question: "Can I monitor my purifier using the app?",
    answer: "Yes, our Smart IoT models are fully compatible with the upcoming Ralla App, allowing you to monitor water quality, track usage, receive maintenance alerts, and more."
  }
];

// Core values data
export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

export const coreValues: CoreValue[] = [
  {
    title: "Innovation",
    description: "Constantly improving our technology to provide the best water purification solutions.",
    icon: "lightbulb"
  },
  {
    title: "Sustainability",
    description: "Creating products that minimize water wastage and environmental impact.",
    icon: "leaf"
  },
  {
    title: "Integrity",
    description: "Transparent pricing and honest communication with our customers.",
    icon: "shield"
  }
];

// Trust factors
export interface TrustFactor {
  title: string;
  description: string;
  icon: string;
}

export const trustFactors: TrustFactor[] = [
  {
    title: "Advanced Filtration Technology",
    description: "Multi-stage purification system that removes contaminants while preserving essential minerals.",
    icon: "filter"
  },
  {
    title: "DIY Service and Maintenance",
    description: "Easy-to-replace filters and parts with clear instructions, no technician required.",
    icon: "tool"
  },
  {
    title: "Saves Water and Energy",
    description: "Our purifiers save up to 90% more water compared to conventional RO systems.",
    icon: "droplets"
  },
  {
    title: "ISO Certified",
    description: "ISO 9001:2015 and ISO 14001:2015 certified for quality and environmental management.",
    icon: "badge-check"
  },
  {
    title: "Transparent Pricing",
    description: "No hidden costs with affordable AMC at just ₹2999.",
    icon: "tag"
  }
];