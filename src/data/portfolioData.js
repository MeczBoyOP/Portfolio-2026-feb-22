// Resume / Portfolio Data — Dibyendu Nayak
export const portfolioData = {
    personal: {
        name: "Dibyendu Nayak",
        firstName: "Dibyendu",
        lastName: "Nayak",
        title: "React Developer",
        taglines: [
            "React Developer",
            "React Native Developer",
            "Frontend Engineer",
            "UI/UX Enthusiast",
            "Mobile App Builder",
        ],
        email: "dipnanayk99@gmail.com",
        phone: "+91-7074074395",
        location: "India",
        github: "https://github.com/dibyendunayak",
        linkedin: "https://linkedin.com/in/dibyendunayak",
        twitter: "#",
        website: "#",
        bio: `Junior React Developer with 2+ years of experience building responsive web and 
          mobile applications using React, React Native, and Tailwind CSS. Experienced in REST API 
          integration, authentication workflows, and component-based architecture. Seeking a frontend 
          role to contribute to scalable user-facing products.`,
        avatar: null,
    },

    skills: {
        frontend: [
            { name: "React.js", level: 88 },
            { name: "React Native", level: 82 },
            { name: "Tailwind CSS", level: 90 },
            { name: "JavaScript (ES6+)", level: 85 },
            { name: "HTML5 / CSS3", level: 92 },
            { name: "Hooks & Context API", level: 83 },
        ],
        backend: [
            { name: "REST API Integration", level: 85 },
            { name: "Axios / Fetch", level: 88 },
            { name: "TanStack Query", level: 78 },
            { name: "JWT Authentication", level: 80 },
            { name: "Firebase Auth", level: 75 },
            { name: "CRUD Operations", level: 85 },
        ],
        tools: [
            { name: "Git / GitHub", level: 88 },
            { name: "Vite", level: 82 },
            { name: "Expo", level: 78 },
            { name: "Vercel / Netlify", level: 85 },
            { name: "Responsive Design", level: 90 },
            { name: "Performance Optimization", level: 78 },
        ],
    },

    experience: [
        {
            title: "Frontend Developer / Junior Developer",
            company: "SB Infowaves",
            link: "https://sbinfowaves.com/",
            period: "Feb 2025 – Present",
            location: "India",
            description:
                "Developed reusable React components and responsive UI using Tailwind CSS. Integrated REST APIs and handled authentication flows. Collaborated with backend developers to deliver features on time. Improved UI performance by reducing unnecessary re-renders through memoization.",
            tech: ["React", "Tailwind CSS", "REST API", "JWT", "Git"],
            type: "full-time",
        },
    ],

    education: [
        {
            degree: "B.Tech",
            institution: "BIET",
            period: "2017-2021",
            gpa: null,
            highlights: ["Mechanical Engineering"],
        },
        {
            degree: "Full Stack Web Development",
            institution: "PW Skills",
            period: "2023",
            gpa: null,
            highlights: ["React", "React Native", "Tailwind CSS", "REST API", "JWT", "Git"],
        },
    ],

    projects: [
        {
            id: 1,
            title: "DocSafe",
            description:
                "A production-style file management web app with authentication and protected routes. Features recursive folder-tree UI with drag-and-drop support, REST API integration for CRUD operations, and sharing via QR codes. Optimized with memoization.",
            tech: ["React", "Tailwind CSS", "REST API", "Drag & Drop", "QR Code", "JWT Auth"],
            github: "https://github.com/dibyendunayak",
            live: "#",
            color: "#00f5ff",
            featured: true,
        },
        {
            id: 2,
            title: "Customer Journey",
            description:
                "Production-style internal dashboard with role-based authentication (Admin, Account Manager). Implements protected routes, permission-based UI, REST APIs for CRUD, filters, search, and pagination for managing large datasets. Enhanced UX with loading, error & empty states.",
            tech: ["React", "Role-Based Auth", "REST API", "Pagination", "Memoization"],
            github: "https://github.com/dibyendunayak",
            live: "#",
            color: "#bf00ff",
            featured: true,
        },
    ],

    stats: [
        { label: "Years Experience", value: "2+", icon: "⚡" },
        { label: "Projects Shipped", value: "10+", icon: "🚀" },
        { label: "APIs Integrated", value: "20+", icon: "🔗" },
        { label: "Components Built", value: "100+", icon: "🧩" },
    ],

    certifications: [
        "React Developer",
        "REST API Integration",
        "Firebase Authentication",
        "Responsive Design",
    ],
};

export const themes = [
    { id: "dark", label: "Dark", colors: ["#050510", "#00f5ff"] },
    { id: "light", label: "Light", colors: ["#f0f4ff", "#0088cc"] },
    { id: "synthwave", label: "Synthwave", colors: ["#1a0533", "#ff71ce"] },
    { id: "cyberpunk", label: "Cyberpunk", colors: ["#0d0d00", "#ffff00"] },
];
