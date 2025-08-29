import { Library, Terminal, LayoutDashboard, Code, GitMerge } from "lucide-react";

export const features = [
  {
    Icon: Library,
    name: "Rich Connector Library",
    description: "Connect to dozens of destinations like Snowflake, BigQuery, Mixpanel, and HubSpot in minutes.",
    href: "/",
    cta: "Learn more",
    img: "https://picsum.photos/seed/connector/800/600",
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Terminal,
    name: "Live Event Debugger",
    description: "Get a real-time view of your event stream. Inspect payloads and monitor data flow live.",
    href: "/",
    cta: "Learn more",
    img: "https://picsum.photos/seed/debugger/800/600",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: LayoutDashboard,
    name: "Visual Pipeline Builder",
    description: "Map sources to destinations with an intuitive interface. Understand your data flow at a glance.",
    href: "/",
    cta: "Learn more",
    img: "https://picsum.photos/seed/pipeline/800/600",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: Code,
    name: "JavaScript-Native Pipeline",
    description: "Use the full power of JavaScript and the npm ecosystem to write sophisticated transformations.",
    href: "/",
    cta: "Learn more",
    img: "https://picsum.photos/seed/javascript/800/600",
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: GitMerge,
    name: "Identity Resolution, Solved",
    description: "Our platform automatically stitches together user journeys, creating a unified customer profile.",
    href: "/",
    cta: "Learn more",
    img: "https://picsum.photos/seed/identity/800/600",
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
  },
];