import type { Project } from "@/lib/types";

// Demonstration projects for layout only. Replace with verified work before publishing.
export const projects: Project[] = [

{
  title: "Business Growth Dashboard",
  category: "Web Application",
  description: "A modern analytics dashboard for monitoring business performance and important metrics.",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  name: "CeylonListings",
  image: "/images/projects/project-01-dashboard.webp",
  imageDetails: [
    {
      title: "Ceylon Listings Landing Page",
      category: "Website Home Page",
      description:
        "A minimalist homepage centered on user intent rather than complex filter forms. Users express their lifestyle needs in plain language, enabling the platform to understand context and deliver tailored property matches.",
      technologies: ["WordPress", "PHP", "MySQL"],
    },
    {
      title: "Buyer Requests & Property Recommendations",
      category: "Marketplace Requests & Featured Listings UI",
      description:
       "Combines active buyer requirement posts with a visual property showcase, enabling agents and owners to directly match existing demand while letting buyers explore available inventory.",
      technologies: ["WordPress", "PHP", "JavaScript"],
    },
    {
      title: "Property Search & Filter Interface",
      category: "Property Search Results / Catalog Page",
      description:
        "Features a flexible filtering panel alongside a dynamic listing grid, letting users quickly refine parameters to explore matching properties at a glance.",
      technologies: ["WordPress", "PHP", "MySQL"],
    },
  ],
  images:[
    "/images/projects/cl-live-01.png",
    "/images/projects/cl-live-05.png",
    "/images/projects/cl-live-04.png"
  ],
  imageAlt: "CeylonListings business dashboard preview",
},

  
  {
    title: "E-Commerce Experience",
    category: "E-Commerce",
    description: "A premium online shopping experience with intuitive navigation and a responsive product catalog.",
    technologies: ["Next.js", "Stripe", "Tailwind CSS"],
    name:"Townsquare",
    image: "/images/projects/project-02-commerce.webp",
    imageDetails: [
    {
      title: "Townsquare-Search Landing Page",
      category: "Request-Driven Portal Landing UI",
      description:
        "A landing page introducing a reverse real estate model where buyers post requirements instead of searching listings. It guides users through a simple 3-step process to submit requests, receive pitches, and share contact details privately.",
      technologies: ["WordPress", "PHP", "MySQL"],
    },
    {
      title: "Property Request Submission Form",
      category: "User Input & Form Interface UI",
      description:
       "An intuitive posting interface allowing buyers to describe their property requirements in natural language. It includes privacy controls to keep contact information hidden until the user chooses to share it.",
      technologies: ["WordPress", "PHP", "JavaScript"],
    },
    {
      title: "Buyer Request Marketplace Grid",
      category: "Marketplace Requests Feed UI",
      description:
        "A live feed displaying user-submitted property requests for sellers and agents to explore. It enables property owners to review real buyer requirements and directly respond with matching offers.",
      technologies: ["WordPress", "PHP", "MySQL"],
    },
  ],
    images:[
      "/images/projects/townsquare01.png",
      "/images/projects/townsquare03.png",
      "/images/projects/townsquare02.png"
    ],
    imageAlt: "Sample dark ecommerce interface showing a product gallery and shopping layout",
  },
  {
    title: "SaaS Landing Page",
    category: "Website Design",
    description: "A conversion-focused marketing website for a software product.",
    technologies: ["React", "Next.js", "Framer Motion"],
    name:"Milky Fresh Dairies",
    image: "/images/projects/project-03-saas.webp",
    imageDetails: [
    {
      title: "Milky Fresh Dairies Storefront & Catelog",
      category: "Online Grocery / Product Catalog UI",
      description:
        "Features a step-by-step ordering workflow guide alongside a featured product grid. It provides clear product visuals, pricing, and ratings for an intuitive shopping experience.",
      technologies: ["React", "Express", "MongoDB"],
    },
    {
      title: "Milky Fresh Dairies Product Detail Page",
      category: "Product Overview & Discovery UI",
      description:
       "Displays detailed item specifications, key product benefits, and customer rating summaries. It includes an easy quantity selection call-to-action alongside a related products gallery.",
      technologies: ["React", "Express", "MongoDB"],
    },
    {
      title: "Shopping Cart",
      category: "Milky Fresh Dairies Checkout Flow UI",
      description:
        "Presents a clean list of selected items with quantity adjusters and transparent cost breakdowns. It streamlines the transition to checkout while highlighting delivery terms and commitments.",
      technologies: ["React", "Express", "MongoDB"],
    },
  ],
    images: [
      "/images/projects/cl-mfd-01.png",
      "/images/projects/cl-mfd-02.png",
      "/images/projects/cl-mfd-03.png"
    ],
    imageAlt: "Sample dark SaaS landing-page interface with a product dashboard illustration",
  },
  {
    title: "Property Marketplace",
    category: "Web Application",
    description: "A responsive property discovery experience with listing cards and search functionality.",
    technologies: ["Next.js", "TypeScript", "REST API"],
    name:"Harringdons",
    image: "/images/projects/project-04-property.webp",
    imageDetails: [
    {
      title: "Harringdons Product Page with Cart Sidebar",
      category: "Address Management UI",
      description:
        "Features detailed product gallery options and attribute selections alongside an persistent cart sidebar. It gives shoppers instant price updates, quantity controls, and direct checkout actions on one screen.",
      technologies: ["WordPress", "PHP", "MySQL"],
    },
    {
      title: "Address Management Modal Overlay",
      category: "User Input & Form Interface UI",
      description:
       "Displays a focused pop-up form over the product interface for quick address entry. It allows customers to update billing or delivery details seamlessly without leaving the page.",
      technologies: ["WordPress", "PHP", "JavaScript"],
    },
    {
      title: "Shopping Cart & Order Summary Page",
      category: "Cart Overview & Checkout Flow UI",
      description:
        "Provides a comprehensive item breakdown with promo code support and real-time shipping calculation. It clearly outlines subtotal, tax, and delivery costs to streamline final checkout steps.",
      technologies: ["WordPress", "PHP", "MySQL"],
    },
  ],
    images: [
      "/images/projects/Harri-01.png",
      "/images/projects/Harri-02.png",
      "/images/projects/Harri-03.png"
    ],
    imageAlt: "Sample property marketplace interface with listing cards and a map panel",
  },
  {
    title: "Creative Agency Website",
    category: "Agency Website",
    description: "A modern digital presence for a creative studio focused on visual storytelling.",
    technologies: ["Next.js", "Tailwind CSS"],
    name:"Canopy-Administration",
    image: "/images/projects/project-05-agency.webp",
    imageDetails: [
    {
      title: "Timesheet & Attendance Overview Dashboard",
      category: "Enterprise Resource & Workforce Analytics UI",
      description:
        "Features high-level metric summary cards alongside a breakdown table for office-wise attendance across global facilities. It gives administrators instant operational visibility into headcounts, presence rates, and facility performance.",
      technologies: ["WordPress", "PHP", "MySQL"],
    },
    {
      title: "User Access Permission Matrix",
      category: "Access Control & System Permissions UI",
      description:
       "Displays a clear matrix mapping user accounts against specific portal pages and system features. It allows administrators to audit, verify, and manage user feature access across the platform at a glance.",
      technologies: ["WordPress", "PHP", "JavaScript"],
    },
    {
      title: "Company User & Invitation Management",
      category: "User Management & Team Administration UI",
      description:
        "Organizes active team members and pending user invitations with assigned location tags and status indicators. It enables quick profile edits and tracks invitation dispatch times for streamlined team onboarding.",
      technologies: ["WordPress", "PHP", "MySQL"],
    },
  ],
    images: [
      "/images/projects/Canopy-ad-01.png",
      "/images/projects/Canopy-ad-02.png",
      "/images/projects/Canopy-ad-03.png"
    ],
    imageAlt: "Sample editorial creative-agency portfolio website preview",
  },
  {
    title: "Analytics Platform",
    category: "Dashboard",
    description: "A streamlined interface for presenting complex data through clear visualizations.",
    technologies: ["React", "TypeScript", "Charts"],
    name:"Canopy-Mobile-App",
    image: "/images/projects/project-06-analytics.webp",
    imageDetails: [
    {
      title: "Employee Mobile Home Board",
      category: "Mobile HR & Attendance Portal UI",
      description:
        "Displays a personalized welcome dashboard with company switching options and quick profile links. It highlights core daily actions like attendance marking and system audits through interactive cards.",
      technologies: ["WordPress", "PHP", "MySQL"],
    },
    {
      title: "Mobile Clock-In & Attendance Calendar",
      category: "Location-Based Clock-In UI",
      description:
       "Features a real-time digital clock and location-based clock-in button alongside an interactive attendance calendar. It helps employees track shift start times and monitor monthly work schedules on mobile.",
      technologies: ["Android", "Kotlin", "JavaScript"],
    },
    {
      title: "Daily Hours Tracked & Clock-Out View",
      category: "Mobile Timesheet & Hours Tracking UI",
      description:
        "Highlights daily hours logged alongside a clock-out button with correction prompt options. It provides workers with clear visibility into their daily work duration and attendance logs.",
      technologies: ["Android", "Kotlin", "JavaScript"],
    },
  ],
    images: [
      "/images/projects/Canopy-mob-01.jpeg",
      "/images/projects/Canopy-mob-02.jpeg",
      "/images/projects/Canopy-mob-03.jpeg"
    ],
    imageAlt: "Sample dark analytics platform dashboard with electric-blue charts",
  },
];
