export interface Position {
  title: string;
  period: string;
  description: string[];
}

export interface Experience {
  company: string;
  companyPeriod: string; // Overall period at company (e.g., "Full-time · 5 yrs 5 mos")
  location?: string; // e.g., "Redwood City, California, United States · Hybrid"
  logo?: string; // Optional company logo path
  logoSize?: number; // Optional custom logo size in pixels (default: 48)
  positions: Position[]; // Multiple positions within the company
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
  logo?: string; // Optional institution logo path
  logoSize?: number; // Optional custom logo size in pixels (default: 44)
}

export interface Certification {
  name: string;
  organization: string;
  issued: string;
  credentialId?: string;
  url?: string;
  logo?: string; // Optional organization logo path
  logoSize?: number; // Optional custom logo size in pixels (default: 44)
  description?: string; // Optional description (e.g., "Certificate", "Diploma")
}

export interface Volunteer {
  role: string;
  organization: string;
  period: string;
  description: string;
  logo?: string; // Optional organization logo path
  logoSize?: number; // Optional custom logo size in pixels (default: 44)
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ExperienceData {
  // about: string[];
  experience: Experience[];
  education: Education[];
  educationColumns?: 2 | 3;
  certifications: Certification[];
  certificationsColumns?: 2 | 3;
  volunteering: Volunteer[];
  volunteeringColumns?: 2 | 3;
}

export const experienceData: ExperienceData = {
  // about: [
  //   "With a career spanning two decades at the intersection of design and technology, I have spent 15+ years pioneering AI/ML solutions for Fortune 500 companies. In my current role at EA, I **integrate Generative AI into the product ecosystem** to streamline complex workflows and enhance player engagement. I have a proven track record of influencing strategy at the executive level and establishing design systems adopted across global business units. My focus is on **delivering AI-powered platforms that automate decision-making and unlock data-driven insights.** Whether building for People Analytics or Operations, I leverage technical expertise in React and Python to translate sophisticated AI concepts into intuitive, impactful user experiences that redefine how teams work at scale."
  // ],
  
  experience: [
    {
      company: "Electronic Arts (EA)",
      companyPeriod: "Full-time · Aug 2021 - Present",
      location: "Redwood City, California, United States · Hybrid",
      logo: "/images/logos/ea-logo.svg",
      positions: [
        {
          title: "Product Design Lead AI, Data, and New Technology",
          period: "Jul 2021 - Present",
          description: [
            "Lead the design strategy for Generative AI internal applications and services, driving a data-driven culture across our Finance, Marketing, People, and Operations verticals. By partnering with C-level stakeholders to identify high-impact opportunities for automation, I architected large-scale solutions that **improved data-driven decision-making by 30%** and **reduced median response times from 20 to 15 seconds**. I collaborate deeply with the EADP Data Science team and product leadership to continuously optimize AI performance, ensuring that our extensible frameworks minimize integration effort while achieving **90% answer consistency** across all data domains."
          ]
        },
        {
          title: "Product Design Lead, Customer Experience",
          period: "Nov 2021 - Jan 2023 · 1 yr 3 mos",
          description: [
            "Led the design strategy for Electronic Arts’ next-generation self-service help platform, creating a frictionless, AI-driven ecosystem that connects millions of players to contextual solutions. By leading cross-functional teams through complex requirement planning and risk mitigation, I delivered an intelligent support experience that achieved a **50%+ self-service resolution rate**, significantly exceeding industry averages. My leadership ensured design excellence and platform consistency while driving a **20% reduction in average handle time** and achieving a **customer effort score of <2.5**, fundamentally transforming how players resolve inquiries without disrupting their gameplay."
          ]
        },
        {
          title: "Product Design Lead, Game Creation",
          period: "Aug 2020 - Nov 2021 · 1 yr 4 mos",
          description: [
            "Led the design strategy for a suite of managed products providing the foundational infrastructure for EA Studios and Central Services. The goal was to deliver powerful, high-productivity tools for Developers, Artists, and Testers. I spearheaded the architecture and React-based implementation of the EAIT Design System, a scalable framework that standardized UI/UX across global game development hubs to ensure long-term product consistency. By integrating qualitative research with quantitative performance data, I delivered services that achieved a **Search Success Rate of 65%+** and a **25-30% Contact Deflection Rate**, significantly exceeding industry benchmarks while enabling Central Services to support the entire EA portfolio with greater technical agility."
          ]
        }
      ]
    },
    {
      company: "Google",
      companyPeriod: "Full-time · 3 yrs 2 mos",
      location: "Mountain View, California",
      logo: "/images/logos/google-logo.svg",
      positions: [
        {
          title: "Lead Interaction Designer",
          period: "Jun 2019 - Jul 2021 · 2 yrs 2 mos",
          description: [
            "Lead design efforts on Google One for the support, security, and membership benefits verticals for customer-facing applications for web and Android. Responsible for the design of our internal loyalty engine, and campaign management tools. Delivery of IA, UX, UI, and technical specifications that describe high-level detailed flows to effectively communicate interaction and design ideas. Partner with research to build data-driven prototypes to stress test, validate user flows, usability, and feature testing."
          ]
        },
        {
          title: "Senior Interaction Designer",
          period: "Jun 2018 - Jun 2019 · 1 yr 1 mo",
          description: [
            "Dedicated interaction designer for the Membership Benefits vertical, where I developed scalable design patterns and end-to-end interaction flows. My work drove a consistent user experience across web, Android, and iOS customer-facing applications."
          ]
        }
      ]
    },
    {
      company: "Baker Hughes",
      companyPeriod: "Full-time · April 2017 - June 2018 · 1 yrs 3 mos",
      location: "San Ramon, California",
      logo: "/images/logos/baker-hughes-logo.svg",
      positions: [
        {
          title: "Senior Product Designer – Analytics",
          period: "",
          description: [
            "Lead design and product strategy efforts for the Onshore BI platform vertical on the Intellistream product suite by defining user models, UI, ensuring design consistency in implementation, validating user flows, usability, and feature testing. Built data-driven prototypes and demos to showcase advanced interactions and new data visualization frameworks for Oil and Gas BI reporting solutions. Designed oil production engineer-driven workflows that would integrate with a data visualization framework in the form of dashboards and custom reports to surface operation intelligence, real-time visibility, and insights into IoT Oil and Gas processes."
          ]
        }
      ]
    },
    {
      company: "Percolate",
      companyPeriod: "Full-time · Aug 2016 – Apr 2017 · 9 mos",
      location: "San Francisco, California",
      logo: "/images/logos/percolate-logo.svg",
      positions: [
        {
          title: "Senior Product Designer – Analytics",
          period: "",
          description: [
            "In partnership with design, product management, and engineering teams I lead design efforts across the Percolate desktop analytics platform. Responsible for research, information architecture, information design, UI, UX, and visual design primarily related to information delivery (Operational Dashboards, Scorecards, Ad-hoc, and Standard Reporting) and data visualization products."
          ]
        }
      ]
    },
    {
      company: "Meta",
      companyPeriod: "Contract · Jun 2015 – Aug 2016 · 1 yr 3 mos",
      location: "Menlo Park, California",
      logo: "/images/logos/meta-logo.svg",
      positions: [
        {
          title: "Product Designer",
          period: "",
          description: [
            "Responsible for UI and UX tasks related to recruiting and interview experience systems. Led design efforts among a range of internal tools including performance management and analytics, data visualization, and interviewing statistical dashboards. Designed and communicated to product management and engineering proposed end-to-end systems, interaction models, task flows, and functional specifications that deliver on business objectives and expectations."
          ]
        }
      ]
    },
    {
      company: "George Lucas Educational Foundation",
      companyPeriod: "Full-time · Feb 2015 – Jun 2015 · 5 mos",
      location: "Nicasio, California",
      logo: "/images/logos/edutopia-logo.svg",
      positions: [
        {
          title: "Senior User Experience Designer",
          period: "",
          description: [
            "Lead design efforts for edutopia.org on web, mobile web and iOS."
          ]
        }
      ]
    },
    {
      company: "Google",
      companyPeriod: "Contract · Apr 2014 – Feb 2015 · 11 mos",
      location: "Mountain View, California",
      logo: "/images/logos/google-logo.svg",
      positions: [
        {
          title: "Senior Interaction Designer",
          period: "",
          description: [
            "iOS interaction designer on Google Shopping working closely with engineers and product managers throughout all stages of the product cycle, responsible for UX, UI design, wireframes, and prototyping. Responsible for defining the high-level and/or detailed flows, mockups, and prototypes to effectively communicate interaction and design ideas."
          ]
        }
      ]
    },
    {
      company: "Adobe",
      companyPeriod: "Full-time · Jul 2012 - Apr 2014 · 1 yr 10 mos",
      location: "San Francisco, California",
      logo: "/images/logos/adobe-logo.svg",
      positions: [
        {
          title: "Senior User Experience Designer",
          period: "",
          description: [
            "Adobe Primetime is a unified video platform that delivers broadcast audience reach and a TV-like experience across every connected screen. In collaboration with product management, engineering and global XD I lead UX and UI related tasks including. IA, information design, wireframes, functional specifications, visual design, usability testing and building rapid prototypes. Responsible for research, workflows and user-centered approach to design solutions across multiple platforms that meet user needs and product strategy requirements."
          ]
        }
      ]
    },
    {
      company: "Autodesk",
      companyPeriod: "Full-time · May 2011 - Jul 2012 · 1 yr 3 mos",
      location: "San Francisco, California",
      logo: "/images/logos/autodesk-logo.svg",
      positions: [
        {
          title: "Senior User Experience Designer",
          period: "",
          description: [
            "Designer on the consumer products group as part of the Platform Solutions and Emerging Business unit responsible for the design, prototyping, and development of interactive graphic tools for 3D modeling technologies. Evaluate current technologies and propose integration strategies in emerging platforms along with GUI concepts and methodologies for multi-touch interactions and advanced design patterns for TinkerCad, and Homestyler. Create and ensure consistency of the UI, API workflows, and visual language for each specific platform."
          ]
        }
      ]
    },
    {
      company: "Walt Disney Imagineering",
      companyPeriod: "Full-time · Jan 2008 - Feb 2011 · 3 yr 2 mos",
      location: "Glendale, California",
      logo: "/images/logos/wdi-logo.png",
      positions: [
        {
          title: "Creative Lead",
          period: "",
          description: [
            "As part of the CIA (Creative Interactive Attractions) group, I was responsible for leading and establishing UX design practices that translate blue-sky digital concepts and ideas into engaging, cohesive, holistic, meaningful, interactive experiences connecting guests to Disney Theme Parks, Cruise Line, and Resorts. Designed high-fidelity assets, prototyping, and design specifications leveraging user-centered design models for web apps, native mobile, and hardware applications compliant with Disney production standards and proprietary hardware technology."
          ]
        }
      ]
    }
  ],
  
  education: [
    {
      degree: "Design of Artifacts in Society, Industrial and Product Design",
      institution: "University of Pennsylvania - Coursera",
      period: "2012 – 2012",
      logo: "/images/logos/pennsylvania-logo.png",
      description: "Diploma"
    },
    {
      degree: "HarvardX: CS50's Introduction to Computer Science",
      institution: "Harvard University – EdX",
      period: "2010 – 2012",
      logo: "/images/logos/harvard-logo.png",
      description: "Diploma"
    },
    {
      degree: "Digital Drawing for Animation",
      institution: "San Francisco State University",
      period: "2009 – 2009",
      logo: "/images/logos/sfsu-logo.png",
      description: "Diploma"
    },
    {
      degree: "Advanced Studies in 3D Character Animation",
      institution: "Animation Mentor – Online",
      period: "2008 – 2009",
      logo: "/images/logos/animation-mentor-logo.png",
      description: "Diploma"
    },
    {
      degree: "BFA, Graphic Design",
      institution: "Universidad La Salle",
      period: "1994 – 1999",
      logo: "/images/logos/lasalle-logo.png",
      description: "Degree"
    },
    {
      degree: "Associates, Computer Information Systems",
      institution: "DeVry University",
      period: "1991 – 1993",
      logo: "/images/logos/devry-logo.png",
      description: "Degree"
    }
  ],
  educationColumns: 3,
  
  certifications: [
    {
      name: "iOS Development Masterclass",
      organization: "Udemy",
      issued: "2026",
      logo: "/images/logos/udemy-logo.png",
      description: "Certificate"
    },
    {
      name: "UX & Design in an AI World: Strategic Fundamentals",
      organization: "Maven",
      issued: "2025",
      logo: "/images/logos/maven-logo.png",
      description: "Certificate"
    },
    {
      name: "Build Autonomous AI Agents from scratch with Python",
      organization: "Udemy",
      issued: "2025",
      logo: "/images/logos/udemy-logo.png",
      description: "Certificate"
    },
    {
      name: "The Complete iOS App Development Bootcamp",
      organization: "Udemy",
      issued: "2025",
      logo: "/images/logos/udemy-logo.png",
      description: "Certificate"
    },
    {
      name: "100 Days of Code: The Complete Python Pro Bootcamp",
      organization: "Udemy",
      issued: "2024",
      logo: "/images/logos/udemy-logo.png",
      description: "Certificate"
    },
    {
      name: "The Complete React Native + Hooks Course",
      organization: "Udemy",
      issued: "2024",
      logo: "/images/logos/udemy-logo.png",
      description: "Certificate"
    },
    {
      name: "AI Chatbots Development Exploring GenAI with ChatGPT",
      organization: "Udemy",
      issued: "2023",
      logo: "/images/logos/udemy-logo.png",
      description: "Certificate"
    },
    {
      name: "Modern React with Redux",
      organization: "Udemy",
      issued: "2023",
      logo: "/images/logos/udemy-logo.png",
      description: "Certificate"
    },
    {
      name: "Google Data Analytics",
      organization: "Coursera",
      issued: "2021",
      logo: "/images/logos/coursera-logo.png",
      description: "Certificate"
    },
    {
      name: "Web Development Bootcamp (React)",
      organization: "CodeAcademy",
      issued: "2020 – 2021",
      logo: "/images/logos/codeacademy-logo.png",
      description: "Certificate"
    },
    {
      name: "Flutter Development Bootcamp with Dart",
      organization: "The London Brewery",
      issued: "2019 – 2019",
      logo: "/images/logos/london-brewery-logo.png",
      description: "Certificate"
    },
  ],
  certificationsColumns: 3,
  
  volunteering: [
    {
      role: "An Hour of Code Volunteer",
      organization: "Google Hour of Code",
      period: "2019 – 2021",
      logo: "/images/logos/hourofcode-logo.png",
      description: "I ran an hour of code sessions for grades 3-8 during CS Education Week."
    },
    {
      role: "Mentor",
      organization: "Students Rising Above",
      period: "2012 – 2015",
      logo: "/images/logos/studentsrisingabove-logo.png",
      description: "Helped students with career opportunities available to them."
    },
    {
      role: "Webmaster",
      organization: "San Francisco Unified School District",
      period: "2012 – 2015",
      logo: "/images/logos/sfusd-logo.png",
      description: "friendsofalamo.org site maintenance, and information design."
    },
    {
      role: "Webmaster",
      organization: "Los Perales Elementary School",
      period: "2021 – 2022",
      logo: "/images/logos/losperales-logo.png",
      description: "lp.moraga.k12.ca.us site maintenance"
    },
    {
      role: "ALTS (Adults Learn To Swim) Instructor",
      organization: "United States Masters Swimming",
      period: "2017 – Present",
      logo: "/images/logos/usms-logo.png",
      description: "Teaching adults how to swim and improve their swimming skills."
    },
    {
      role: "Assistant Swim Coach",
      organization: "United States Masters Swimming",
      period: "2019 – Present",
      logo: "/images/logos/usms-logo.png",
      description: "USMS coaching assistant Level 2 for the Moraga Aquatic Masters swim team."
    }
  ],
  volunteeringColumns: 2
};

