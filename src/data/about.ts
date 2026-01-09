export interface AboutData {
  hero: {
    title: string;
    subtitle?: string;
    description: string;
  };
  selectedImpact: {
    title: string;
    columns: string[][];
    numColumns: 1 | 2 | 3;
    bgColor?: string;
    textColor?: string;
    renderAsList?: boolean;
    renderAsCards?: boolean;
  };
  skills: {
    title: string;
    columns: string[][];
    numColumns: 1 | 2 | 3;
    bgColor?: string;
    textColor?: string;
    renderAsList?: boolean;
    renderAsCards?: boolean;
  };
  paragraph: {
    content: string;
  };
  pageSections: Array<{
    type: 'aboutMe' | 'selectedImpact' | 'skills' | 'education' | 'certifications' | 'volunteering' | 'paragraph' | 'text';
    content?: string; // For text sections
  }>;
}

export const aboutData: AboutData = {
  hero: {
    title: "About Me",
    subtitle: "Product Design Leader",
    description: "I am a Product Design Leader who believes in Design as a **Strategic Multiplier**. My two-decade career is defined by **building high-performing teams and delivering transformative, enterprise-scale AI/ML solutions**. My experience includes driving innovation for global leaders like Google, Adobe, and Disney Imagineering.\n\nCurrently at Electronic Arts, I lead the design strategy for Generative AI applications that democratize data access for over 1,000+ internal users across finance, marketing, and operations. I specialize in **bridging the gap between executive business strategy and technical execution**, establishing design systems and frameworks that are adopted as standard across multiple global business units."
  },
  selectedImpact: {
    title: "Selected Impact",
    columns: [
      [
        "**$13.2M+ Revenue Uplift** and **$6-7.7M Cost Savings** across AI solutions",
        "**75% Faster** hardware delivery from the average 28 days to 7 days",
        "**50% Reduction in IT Tickets**: Freed resources for strategic initiatives",
        "**Data Prep Time**: Reduced from 2 hours to 15 minutes (92% time savings)",
        "**Faster Prototyping** accelerated design cycles 4x faster to 2-week sprints"
      ]
    ],
    numColumns: 1,
    bgColor: "bg-slate-800",
    textColor: "text-white",
  },
  skills: {
    title: "Skills",
    columns: [
      [
        "AI-Powered Product Strategy",
        "Generative AI & Conversational UX",
        "Executive Stakeholder Alignment",
        "Scalable Design Systems & Frameworks",
        "Enterprise SaaS & Platform Integration",
        "Human-Centered AI Design"
      ],
      [
        "0-1 Product Launch",
        "Cross-Funcional Team Leadership",
        "Strategic Data Visualization & BI",
        "Prototyping & Technical Fluency",
        "Mentorship & Cultural Influence",
        "Measurable Business Impact"
      ]
    ],
    numColumns: 2,
    bgColor: "bg-slate-300",
    textColor: "text-black"
  },
  paragraph: {
    content: "Beyond creating intuitive interfaces, I focus on building robust design practices that **enable cross-functional teams to ship better products, faster**. My approach combines: **Visionary Leadership** by partnering with C-level stakeholders to position AI as a strategic enabler of business transformation, **architecting extensible design systems** that ensure consistency across complex, data-heavy B2B ecosystems, and leveraging my proficiency in React, Python, and AI/ML development to **mentor designers and foster a culture of deep technical fluency**."
  },
  pageSections: [
    { type: 'aboutMe' },
    { type: 'skills' },
    { type: 'paragraph' },
    { type: 'selectedImpact' },
    { type: 'education' },
    { type: 'certifications' },
    { type: 'volunteering' },
  ]
};

