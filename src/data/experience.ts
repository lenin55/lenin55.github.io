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
        role: "Senior Web Developer",
        company: "IFZA",
        location: "Dubai, UAE",
        period: "Apr 2024 - Current",
        description: [
            "IFZA is the most dynamic and world class international Free Zone community in the UAE.",
            "I work on their portal dashboard UI and new zoho creator web and mobile applications UI."
        ],
        type: "full-time"
    },
    {
        id: "zoho",
        role: "Senior Web Developer",
        company: "Zoho Corp",
        location: "Chennai, TN, India",
        period: "Feb 2019 - Mar 2024",
        description: [
            "Revamped the UI for Zoho Flow, implementing new features and improving user experience, which led to a 20% increase in user satisfaction.",
            "Converted the existing CSS to LESS, creating reusable components for improved efficiency across multiple projects."
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
            "Created 30+ web components without frameworks to replicate flutter components."
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
            "Led the development of multiple web applications, optimizing performance and ensuring seamless user interactions across platforms."
        ],
        type: "full-time"
    },
    {
        id: "fourblocks",
        role: "Web designer",
        company: "Four Blocks Inc",
        location: "Chennai, TN, India",
        period: "Jul 2016 - Dec 2017",
        description: [
            "We develop small to medium sized businesses with a full range of web services including high quality Custom Website Design, Development and Marketing Services."
        ],
        type: "full-time"
    },
    {
        id: "sociall",
        role: "Web designer & Seo Analyst",
        company: "Sociall.in(VGP Groups)",
        location: "Chennai, TN, India",
        period: "May 2015 - Jun 2016",
        description: [
            "Designed SEO-optimized websites for international clients, increasing organic traffic by 30%.",
            "Developed mobile-responsive websites using HTML5/CSS3, improving user engagement on mobile by 25%."
        ],
        type: "full-time"
    }
];
