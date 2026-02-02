export interface ExperienceItem {
    id: string;
    role: string;
    company: string;
    location: string;
    period: string;
    description: string[];
    type?: "full-time" | "part-time";
}

export const EXPERIENCE_DATA: ExperienceItem[] = [
    {
        id: "ifza",
        role: "Senior Frontend Developer",
        company: "IFZA",
        location: "Dubai, UAE",
        period: "Apr 2024 - Current",
        description: [
            "Lead frontend development for IFZA's Customer Hub portal using React, TypeScript, and Vite",
            "Built responsive dashboards with TanStack Query and Zustand for complex state management",
            "Developed mobile-first UI components with custom CSS/SCSS achieving 95+ Lighthouse scores"
        ],
        type: "full-time"
    },
    {
        id: "zoho",
        role: "Senior Frontend Developer",
        company: "Zoho Corp",
        location: "Chennai, TN, India",
        period: "Feb 2019 - Mar 2024",
        description: [
            "Core frontend engineer for Zoho Flow – a no-code automation platform serving 50K+ users",
            "Rebuilt entire UI from scratch using vanilla JavaScript with pure DOM manipulation",
            "Converted CSS to LESS architecture with 200+ reusable components across Zoho products"
        ],
        type: "full-time"
    },
    {
        id: "codelessly",
        role: "Senior Web Developer",
        company: "Codelessly Inc",
        location: "Texas, United States",
        period: "Nov 2020 - Nov 2022",
        description: [
            "Created 30+ web components from scratch (no frameworks) replicating Flutter widgets",
            "Specialized in vanilla JavaScript component architecture with custom event systems",
            "Built cross-browser compatible UI elements with pixel-perfect accuracy"
        ],
        type: "part-time"
    },
    {
        id: "contus",
        role: "UI Developer",
        company: "Contus Tech",
        location: "Chennai, TN, India",
        period: "Mar 2017 - Jan 2019",
        description: [
            "Developed 15+ web applications using React, Node.js, and custom CSS frameworks",
            "Built real-time chat interfaces and video streaming UIs with WebSocket integration",
            "Led mobile-responsive redesigns improving mobile conversion rates by 35%"
        ],
        type: "full-time"
    },
    {
        id: "fourblocks",
        role: "Full Stack Web Designer",
        company: "Four Blocks Inc",
        location: "Chennai, TN, India",
        period: "Jul 2016 - Dec 2017",
        description: [
            "Designed and developed 25+ custom websites for SMBs using HTML5, CSS3, JavaScript",
            "Specialized in WordPress theme development with WooCommerce integrations",
            "Created responsive email templates and landing pages optimized for conversions"
        ],
        type: "full-time"
    },
    {
        id: "sociall",
        role: "Web Designer & SEO Analyst",
        company: "Sociall.in (VGP Groups)",
        location: "Chennai, TN, India",
        period: "May 2015 - Jun 2016",
        description: [
            "Designed SEO-optimized websites increasing client organic traffic by 30% average",
            "Developed mobile-responsive sites with HTML5/CSS3 improving mobile engagement by 25%",
            "Managed on-page SEO, schema markup, and Core Web Vitals optimization"
        ],
        type: "full-time"
    }
];
