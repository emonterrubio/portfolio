import React from "react";
import { Pointer, Lightbulb } from "lucide-react";
import { 
  Image, 
  ImageRow, 
  Text as TextBlock,
  HeaderWithText,
  HeaderWithList,
  Callout, 
  List, 
  Steps,
  MetricGrid,
  InfoBoxGrid,
} from "../contentHelpers";
import { ProjectContent } from "./types";

export const eaOmniShopping: ProjectContent = {
  // HERO SECTION
  title: "OMNI Shopping: HAM Lifecycle Shopping Experience",
  subtitle: "From Weeks to Days, Transforming Enterprise Procurement",
  imageSrc: "/images/ea-omni-shopping-hero.png",
  imageAlt: "EA Omni Shopping hardware procurement platform",

  // METADATA SECTION
  role: "Lead Designer",
  company: "Electronic Arts",
  year: "2025",
  duration: "9+ months",
  platform: "Web, Mobile",
  tools: "Figma, React, Next.js, TypeScript, Tailwind, Claude AI",
  logo: "/images/logos/ea-logo.svg",
  achievement: "Achieved 80% employee satisfaction rate with the new procurement experience",

  // TEAM SECTION
  team: "As part of the core product team I collaborated with 2 product managers, 4 software engineers, 2 SMEs, and one platform architect.",

  // RESPONSIBILITIES SECTION
  responsibilities: [
    "Drove **product strategy** and **end-to-end design**", 
    "Championed **AI-assisted prototyping** that compressed our timeline from months to weeks.",
    "Collaborated with Procurement and Site IT subject matter experts on requirements",
    "Partnered with Product and Engineering on roadmap and ServiceNow implementation",
    "Established **design principles** and **product strategy** for consumer-grade enterprise UX",
    "Led rapid prototyping using **AI tools** and **live data** to accelerate design-to-demo timeline",
  ],

  // OVERVIEW SECTION
  overviewSubheader: "Transforming IT Procurement with Self Service",
  overview:
    "Omni Shopping is an **internal hardware procurement platform** that shifts IT equipment acquisition from a **weeks-long, fragmented process** requiring manual IT intervention to a **consumer-like self-service experience** with delivery in one week or less.\n\nThe platform leverages **ServiceNow's HAM Pro** capabilities to create a curated, Apple-like shopping environment. Employees can browse IT-approved hardware, receive **AI-powered recommendations**, and complete orders quickly, eliminating the need to understand technical specifications or navigate complex approval chains.",

  // PROBLEM SECTION
  problemSubheader: "The Impact of Fragmented IT Ordering on Productivity",
  problem:
    "Many EA employees face delays in IT hardware purchasing due to a **reactive and fragmented ordering process**. Nearly half of North American workstation orders take too long to deliver, hindering productivity and increasing manual work for IT and support staff.\n\nBefore Omni Shopping, hardware procurement was a **fragmented, frustrating experience**:",
  problemContent: [
    Image("/images/ea-omni-shopping-hardware-journey.png", "EA hardware journey", "The hardware journey before Omni Shopping"),
    TextBlock("The data told a **clear story**:"),
    List([
        "In North America, **47.7% of workstation orders were ad-hoc**, typically ranging from 1 to 5 units",
        "The average delivery time was **28 business days (38 calendar days)**, with 95-98% taking over two weeks",
        "Tools were scattered across Oracle, ServiceNow, and Asset Panda",
        "New hires often started without the necessary equipment",
      ], true),
    TextBlock("**The cost?** Lost productivity, frustrated employees, and IT teams drowning in repetitive procurement tasks instead of strategic work."),
    Callout("To address these challenges, we conducted user research to **understand what employees expected from an IT hardware procurement shopping experience**.", {
      icon: <Pointer className="w-6 h-6" style={{ transform: 'rotate(90deg)' }} />,
      withBackground: true
    })
  ],

  // DESIGN APPROACH SECTION
  designApproachSubheader: "Make Hardware Accessible",
  designApproach: "Through interviews with Procurement, Site IT, and end-users across multiple studios, we identified **three non-negotiable requirements**:",
  designApproachContent: [
    Steps([
      {
        title: "Trust Through Curation",
        description: "Employees need confidence in their choices. We built an IT-approved catalog with role-based recommendations and clear 'best fit' indicators."
      },
      {
        title: "Speed and Self-Service",
        description: "In-stock inventory is the killer feature. We designed for 1-week delivery through centralized stock and automated workflows."
      },
      {
        title: "Consumer-Grade Experience",
        description: "Hardware shopping should feel like Apple or Amazon, not enterprise software. No SQL, no tickets, no confusion."
      }
    ]),
    Callout("These principles guided our design around **4 core capabilities** that work together as a complete shopping workflow.", {
      icon: <Pointer className="w-6 h-6" style={{ transform: 'rotate(90deg)' }} />,
      withBackground: true
    }),
    Image("/images/ea-omni-solution-overview.png", "EA hardware solution overview", "The new Omni Shopping hardware solution overview"),
  ],

  // SOLUTION SECTIONS (Flexible - add as many as needed)
  solutionSections: [
    {
      title: "Consumer Shopping Experience",
      subheader: "Apple-like catalog browsing with zero learning curve",
      text: "Before, employees navigated fragmented systems such as Oracle for POs, ServiceNow for tickets, and emails to IT for guidance. Non-technical users felt paralyzed by choices, often selecting incompatible or overpriced equipment.",
      content: [
        ImageRow([
          { src: "/images/ea-hardware-request-1.png", alt: "EA hardware request", caption: "The old hardware request process"},
          { src: "/images/ea-hardware-request-2.png", alt: "EA hardware request", caption: "The old hardware request process"},
        ]),
        TextBlock("The new experience is a **unified shopping portal** that feels like any consumer site. It starts with browsing, it has featured products, recent orders, personalized recommendations, and NowAssist support.\n\nIt's an **Apple-like catalog** — clean, confident, no cognitive overload. Every item is IT-approved, so there's no guessing about compatibility or compliance. Role-based recommendations surface what's relevant. Real-time stock levels tell you immediately what's available for fast delivery."),
        ImageRow([
          { src: "/images/ea-omni-shopping-catalog.png", alt: "EA Omni Shopping catalog", caption: "The new Omni Shopping catalog" },
          { src: "/images/ea-omni-shopping-find-hardware.png", alt: "EA Omni Shopping find hardware", caption: "The new Omni Shopping find hardware" }
        ]),
        HeaderWithList("Key Capabilities", [
          "A carefully selected list of IT-approved laptops, monitors, and accessories.",
          "**Role-specific recommendations**, such as tags like \"Ideal for Software Engineers.",
          "Simplified hardware selection through **role-based filtering** for easy matching.",
          "**Live stock updates** featuring color-coded indicators for availability.",
          "**Detailed side-by-side comparisons** tailored for tech enthusiasts.",
        ], true, 3),
        HeaderWithText("Impact", "Order completion time reduced from hours (consultations + quotes) to **under 10 minutes**.", 3),
      ]
    },
    {
      title: "AI-Powered Guidance (Now Assist)",
      subheader: "Natural language hardware recommendations",
      text: "Employees unsure what to order had to schedule consultations with IT, describe their job requirements, wait for recommendations, and hope the suggested hardware matched their actual needs. **Non-technical users often gave up or ordered wrong equipment**. \n\n**Now Assist** offers a user-friendly conversational interface that converts job requirements into tailored hardware suggestions, eliminating the need for any technical expertise.",
      content: [
        Image("/images/ea-omni-now-assist.png", "ServiceNow Now Assist", "ServiceNow Now Assist", true),
        HeaderWithList("Key Capabilities", [
          "**AI-powered guidance** that supports natural language queries",
          "Translates intent into **recommendations** which are also **role-aware**.",
          "Pulls role data from Workday, validates compatibility, and suggests bundles based on what similar roles have ordered",
          ], true, 3),
          HeaderWithText("Impact", "Projected **80%+ first-time success rate** for non-technical users, eliminating IT consultation dependency.", 3),
      ]
    },
    {
      title: "Streamlined Checkout & Order Tracking",
      subheader: "From cart to delivery with full visibility",
      text: "Before, **checkout required manually looking up budget codes**, emailing managers for approval, creating POs in Oracle, and then losing visibility until equipment arrived weeks later. **Hiring managers ordering for new employees faced even more friction**.\n\nThe new checkout experience **auto-populates budget codes** from Workday, supports \"order on behalf of\" for hiring managers, and provides **transparent approval routing**. Post-order, employees **track status through delivery**.",
      content: [
        ImageRow([
          { src: "/images/ea-omni-shopping-details.png", alt: "EA Omni Shopping product details", caption: "The new Omni Shopping product details" },
          { src: "/images/ea-omni-shopping-cart.png", alt: "EA Omni Shopping cart", caption: "The new Omni Shopping cart" },
        ]),
        ImageRow([
          { src: "/images/ea-omni-shopping-checkout.png", alt: "EA Omni Shopping checkout", caption: "The new Omni Shopping checkout" },
          { src: "/images/ea-omni-shopping-order-details.png", alt: "EA Omni Shopping order details", caption: "The new Omni Shopping details" },
        ]),
        ImageRow([
          { src: "/images/ea-omni-shopping-orders.png", alt: "EA Omni Shopping orders", caption: "The new Omni Shopping orders" },
          { src: "/images/ea-omni-shopping-track-order.png", alt: "EA Omni Shopping order tracking", caption: "The new Omni Shopping order tracking" },
        ]),
        HeaderWithList("Key Capabilities", [
          "Automatically generate cost centers and department codes.",
          "On behalf of ordering for hiring managers to facilitate new hire onboarding.",
          "Options for shipping to home or office, complete with straightforward setup instructions.",
          "Real-time order tracking with timely status updates.",
        ], true, 3),
        HeaderWithText("Impact", "New hires can have **equipment ordered before their start date**, ensuring productivity from day one.", 3),
      ]
    },
    {
      title: "Rapid Prototyping with AI",
      subheader: "From concept to functional demo in 2 weeks",
      text: "Before, **traditional prototyping meant weeks of static Figma mockups**, limited interactivity for stakeholder reviews, and significant rework when SMEs identified workflow gaps that weren't visible in static designs.\n\nTo accelerate stakeholder alignment, I leveraged **AI technologies** to build a high-fidelity, interactive web prototype with live data. This approach **transformed our collaboration** with Procurement and Site IT subject matter experts. They could click through real workflows and catch issues early.",
      content: [
        Image("/images/ea-omni-shopping-cursor.png", "EA Omni Shopping cursor", "The new Omni Shopping cursor"),
        Image("/images/ea-omni-shopping-vercel.png", "EA Omni Shopping vercel", "The new Omni Shopping vercel"),
        HeaderWithList("Key Capabilities", [
          "Functional React/Next.js/Tailwind **prototype with live data** (not static mockups)",
          "AI-assisted code generation **accelerated development 3-4x**",
          "**Live demo site** for stakeholder review and user testing",
          "Seamless handoff to Engineering with **production-ready component structure**",
        ], true, 3),
        HeaderWithText("Impact", "Prototype-to-production timeline **compressed from typical 6-8 weeks to 2 weeks**, with higher-fidelity output.", 3),
      ]
    },
    {
      title: "Complete User Workflow",
      subheader: "Streamlined, end-to-end shopping experience",
      text: "These features work together to support the complete hardware procurement journey:",
      content: [
        List([
          "Users start with a **consumer shopping experience** to browse and compare options",
          "The **AI-Powered guidance** helps non-technical and uncertain users find the right equipment",
          "**Streamlined checkout** handles approvals and shipping automatically",
          "**Order tracking** keeps users informed through delivery",
        ], true),
        TextBlock("What was once a 28-day, multi-system ordeal is now a **self-service workflow anyone can complete in minutes**."),
      ]
    },
    {
      title: "The Bottom Line",
      subheader: "Business Impact",
      content: [
        MetricGrid([
          { value: "75%", label: "Faster Delivery" },
          { value: "50%", label: "Fewer IT Tickets" },
          { value: "<10", label: "Minutes to Order" },
          { value: "80%+", label: "First-Try Success" },
          { value: "2 wks", label: "Prototype Sprint" },
        ], 5),
        InfoBoxGrid([
          {
            title: "Operational Efficiency",
            items: [
              "28 days → 7 days average delivery",
              "Eliminate IT consultation for standard orders",
              "Automate approval routing",
              "Self-service ordering available 24/7",
            ],
            variant: "blue"
          },
          {
            title: "Employee Efficiency",
            items: [
              "Consumer-grade shopping interface",
              "New hires equipped on day one",
              "Real-time order visibility",
              "AI-powered recommendations"
            ],
            variant: "blue"
          },
          {
            title: "IT Resource Savings",
            items: [
              "50% reduction in procurement tickets",
              "Eliminate manual quote gathering",
              "Automate asset registration",
              "IT focus shifted to strategic work",
            ],
            variant: "blue"
          },
          {
            title: "Design Team Productivity",
            items: [
              "3-4x faster prototyping with AI tools",
              "From static mockups to functional demos",
              "Improved SME collaboration",
              "Smoother engineering handoff",
            ],
            variant: "blue"
          }
        ], 2),
      ]
    },
    {
      title: "Key Learnings",
      subheader: "What I learned throughout the project",
      content: [
        Callout("**AI tools fundamentally change the prototyping equation.** Using Claude to help create and refine code compressed our timeline from weeks to days. AI is most powerful when designers drive the architecture and use AI for implementation velocity.", {
          icon: <Lightbulb className="w-6 h-6" />,
          withBackground: true
        }),
        Callout("**Consumer-grade UX principles work in enterprise contexts.** Employees don't lower their expectations because it's 'internal software.' The Apple-like shopping experience wasn't a nice-to-have, it was essential for adoption.", {
          icon: <Lightbulb className="w-6 h-6" />,
          withBackground: true
        }),
        Callout("**Deep SME collaboration is non-negotiable for workflow accuracy.** Procurement and Site IT subject matter experts caught edge cases our team never would have discovered. Weekly reviews with these stakeholders prevented costly rework.", {
          icon: <Lightbulb className="w-6 h-6" />,
          withBackground: true
        }),
      ]
    }
  ],
};

