export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    url?: string;
    featured?: boolean;
}

export const PROJECTS_DATA: Project[] = [
    {
        id: "kuruier",
        title: "Kuruier",
        description: "Peer-to-peer logistics platform connecting travelers with senders for secure deliveries",
        image: "/projects/kuruier.png",
        tags: ["React Native", "Node.js", "MongoDB"],
        url: "https://kuruier.com",
        featured: true
    },
    {
        id: "zoho-flow",
        title: "Zoho Flow",
        description: "No-code workflow automation platform serving 50K+ users at Zoho",
        image: "/projects/zoho-flow.png",
        tags: ["Vanilla JS", "LESS", "SaaS"],
        url: "https://zoho.com/flow",
        featured: true
    },
    {
        id: "ifza-hub",
        title: "IFZA Customers Hub",
        description: "Enterprise customer portal for Dubai's leading free zone",
        image: "/projects/ifza-hub.png",
        tags: ["React", "TypeScript", "Vite"],
        url: "https://customershub.ifza.com",
        featured: true
    },
    {
        id: "lucky-vault",
        title: "Lucky Vault",
        description: "Gaming & tech mystery box e-commerce platform on Shopify",
        image: "/projects/lucky-vault.png",
        tags: ["Shopify", "Liquid", "Custom Theme"],
        url: "https://lucky-vault.com",
        featured: true
    },
    {
        id: "solstrom",
        title: "Solstrom",
        description: "Solar energy solutions company website with custom WordPress theme",
        image: "/projects/solstrom.png",
        tags: ["WordPress", "PHP", "Custom Theme"],
        url: "https://solstrom.in",
        featured: true
    },
    {
        id: "codelessly",
        title: "Codelessly",
        description: "AI-powered Flutter no-code app builder – built web components from scratch",
        image: "/projects/codelessly.png",
        tags: ["Web Components", "Vanilla JS", "Flutter"],
        url: "https://codelessly.com",
        featured: true
    }
];
