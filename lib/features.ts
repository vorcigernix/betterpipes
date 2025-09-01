import { Library, Terminal, LayoutDashboard, Code, GitMerge } from "lucide-react";

export const features = [
  {
    Icon: Library,
    name: "Rich Connector Library",
    description: "Connect to dozens of destinations like Snowflake, BigQuery, Mixpanel, and HubSpot in minutes.",
    href: "/",
    cta: "Learn more",
    img: "data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='80' height='80' rx='12' fill='%231F1F23'/%3E%3Crect x='15' y='20' width='12' height='8' rx='2' fill='%23374151' opacity='0.6'/%3E%3Crect x='30' y='20' width='12' height='8' rx='2' fill='%23374151' opacity='0.6'/%3E%3Crect x='45' y='20' width='12' height='8' rx='2' fill='%23374151' opacity='0.6'/%3E%3Crect x='60' y='20' width='12' height='8' rx='2' fill='%23374151' opacity='0.6'/%3E%3Crect x='15' y='35' width='12' height='8' rx='2' fill='%23374151' opacity='0.4'/%3E%3Crect x='30' y='35' width='12' height='8' rx='2' fill='%23374151' opacity='0.4'/%3E%3Crect x='45' y='35' width='12' height='8' rx='2' fill='%23374151' opacity='0.4'/%3E%3Crect x='60' y='35' width='12' height='8' rx='2' fill='%23374151' opacity='0.4'/%3E%3Crect x='15' y='50' width='12' height='8' rx='2' fill='%23374151' opacity='0.3'/%3E%3Crect x='30' y='50' width='12' height='8' rx='2' fill='%23374151' opacity='0.3'/%3E%3Crect x='45' y='50' width='12' height='8' rx='2' fill='%23374151' opacity='0.3'/%3E%3Crect x='60' y='50' width='12' height='8' rx='2' fill='%23374151' opacity='0.3'/%3E%3C/svg%3E",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Terminal,
    name: "Live Event Debugger",
    description: "Get a real-time view of your event stream. Inspect payloads and monitor data flow live.",
    href: "/",
    cta: "Learn more",
    img: "data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='80' height='80' rx='12' fill='%231F1F23'/%3E%3Ccircle cx='25' cy='25' r='8' fill='%23374151' opacity='0.6'/%3E%3Cpath d='M21 25L23 27L29 21' stroke='white' stroke-width='2' opacity='0.8'/%3E%3Crect x='20' y='40' width='40' height='20' rx='3' fill='%23111827' opacity='0.5'/%3E%3Cpath d='M25 50L35 50L35 45L25 45Z' fill='%23374151' opacity='0.6'/%3E%3Cpath d='M40 50L55 50L55 45L40 45Z' fill='%23374151' opacity='0.4'/%3E%3Cpath d='M25 60L35 60L35 55L25 55Z' fill='%23374151' opacity='0.6'/%3E%3Cpath d='M40 60L55 60L55 55L40 55Z' fill='%23374151' opacity='0.4'/%3E%3C/svg%3E",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: LayoutDashboard,
    name: "Visual Pipeline Builder",
    description: "Map sources to destinations with an intuitive interface. Understand your data flow at a glance.",
    href: "/",
    cta: "Learn more",
    img: "data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='80' height='80' rx='12' fill='%231F1F23'/%3E%3Crect x='15' y='20' width='8' height='40' rx='2' fill='%23374151' opacity='0.6'/%3E%3Crect x='25' y='20' width='8' height='40' rx='2' fill='%23374151' opacity='0.6'/%3E%3Crect x='35' y='20' width='8' height='40' rx='2' fill='%23374151' opacity='0.6'/%3E%3Crect x='45' y='20' width='8' height='40' rx='2' fill='%23374151' opacity='0.6'/%3E%3Crect x='55' y='20' width='8' height='40' rx='2' fill='%23374151' opacity='0.6'/%3E%3Crect x='65' y='20' width='8' height='40' rx='2' fill='%23374151' opacity='0.6'/%3E%3Ccircle cx='25' cy='15' r='3' fill='%23374151' opacity='0.4'/%3E%3Ccircle cx='35' cy='15' r='3' fill='%23374151' opacity='0.4'/%3E%3Ccircle cx='45' cy='15' r='3' fill='%23374151' opacity='0.4'/%3E%3Ccircle cx='55' cy='15' r='3' fill='%23374151' opacity='0.4'/%3E%3Ccircle cx='25' cy='65' r='3' fill='%23374151' opacity='0.4'/%3E%3Ccircle cx='35' cy='65' r='3' fill='%23374151' opacity='0.4'/%3E%3Ccircle cx='45' cy='65' r='3' fill='%23374151' opacity='0.4'/%3E%3Ccircle cx='55' cy='65' r='3' fill='%23374151' opacity='0.4'/%3E%3C/svg%3E",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: Code,
    name: "JavaScript-Native Pipeline",
    description: "Use the full power of JavaScript and the npm ecosystem to write sophisticated transformations.",
    href: "/",
    cta: "Learn more",
    img: "data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='80' height='80' rx='12' fill='%231F1F23'/%3E%3Crect x='15' y='15' width='50' height='50' rx='4' fill='%23111827' opacity='0.5'/%3E%3Cpath d='M25 25L30 30L25 35' stroke='%23374151' stroke-width='2' opacity='0.6'/%3E%3Cpath d='M35 25L30 30L35 35' stroke='%23374151' stroke-width='2' opacity='0.6'/%3E%3Cpath d='M40 25L45 30L40 35' stroke='%23374151' stroke-width='2' opacity='0.4'/%3E%3Cpath d='M50 25L55 30L50 35' stroke='%23374151' stroke-width='2' opacity='0.4'/%3E%3Cpath d='M25 45L30 50L25 55' stroke='%23374151' stroke-width='2' opacity='0.6'/%3E%3Cpath d='M35 45L30 50L35 55' stroke='%23374151' stroke-width='2' opacity='0.6'/%3E%3Cpath d='M40 45L45 50L40 55' stroke='%23374151' stroke-width='2' opacity='0.4'/%3E%3Cpath d='M50 45L55 50L50 55' stroke='%23374151' stroke-width='2' opacity='0.4'/%3E%3C/svg%3E",
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: GitMerge,
    name: "Identity Resolution, Solved",
    description: "Our platform automatically stitches together user journeys, creating a unified customer profile.",
    href: "/",
    cta: "Learn more",
    img: "data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='80' height='80' rx='12' fill='%231F1F23'/%3E%3Ccircle cx='25' cy='25' r='6' fill='%23374151' opacity='0.6'/%3E%3Ccircle cx='55' cy='25' r='6' fill='%23374151' opacity='0.6'/%3E%3Ccircle cx='40' cy='45' r='8' fill='%23374151' opacity='0.8'/%3E%3Cpath d='M31 25L34 45' stroke='%23374151' stroke-width='2' opacity='0.4'/%3E%3Cpath d='M49 25L46 45' stroke='%23374151' stroke-width='2' opacity='0.4'/%3E%3Ccircle cx='25' cy='55' r='6' fill='%23374151' opacity='0.6'/%3E%3Ccircle cx='55' cy='55' r='6' fill='%23374151' opacity='0.6'/%3E%3Cpath d='M34 55L46 55' stroke='%23374151' stroke-width='2' opacity='0.4'/%3E%3C/svg%3E",
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
  },
];