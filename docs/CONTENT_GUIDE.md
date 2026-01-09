# Portfolio Content Guide

Complete guide for adding and managing content in your portfolio.

## Table of Contents
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Content Blocks Reference](#content-blocks-reference)
- [Common Patterns](#common-patterns)
- [Adding New Projects](#adding-new-projects)

---

## Quick Start

### 1. Adding Content to Existing Projects

All project data lives in `src/data/projects/`. Each project has its own file.

```typescript
// Example: src/data/projects/my-project.tsx
import { ProjectContent } from "./types";
import { Image, Text, Callout, List, Steps } from "../contentHelpers";

export const myProject: ProjectContent = {
  title: "My Project",
  imageSrc: "/images/hero.png",
  imageAlt: "Project hero image",
  
  // Add content using helper functions
  problemContent: [
    Image("/images/problem.png", "Problem diagram"),
    Text("This is the problem we faced..."),
    Callout("Key insight here!")
  ]
};
```

### 2. Available Content Blocks

| Helper | Usage |
|--------|-------|
| `Image()` | `Image("/path.png", "Alt text", "Caption")` |
| `ImageRow()` | `ImageRow([{src: "...", alt: "..."}])` |
| `Text()` | `Text("Text with **bold** support")` |
| `Header()` | `Header("Section Title", 4)` |
| `Callout()` | `Callout("Important!", {icon: <Icon />})` |
| `List()` | `List(["Item 1", "Item 2"], true)` |
| `Steps()` | `Steps([{title: "1", description: "..."}])` |
| `Example()` | `Example("Title", ["items"], "Conclusion")` |
| `Flowchart()` | `Flowchart([{label: "STEP", action: "..."}])` |
| `MetricGrid()` | `MetricGrid([{value: "80%", label: "..."}], 3)` |
| `InfoBox()` | `InfoBox("Title", ["Item 1", "Item 2"])` |
| `InfoBoxGrid()` | `InfoBoxGrid([{title: "...", items: [...]}], 2)` |
| `Comparison()` | `Comparison("Before", "After", "Impact")` |

---

## Project Structure

Each project follows this structure:

```typescript
{
  // HERO SECTION (Required)
  title: "Project Title",
  subtitle?: "Optional subtitle",
  imageSrc: "/images/hero.png",
  imageAlt: "Hero image description",

  // METADATA SECTION (Required)
  role: "Lead Designer",
  company: "Company Name",
  year: "2024",
  duration?: "6 months",
  platform?: "Web, Mobile",
  tools?: "Figma, React, etc.",
  logo?: "/images/logo.svg",
  achievement: "Key achievement metric",

  // TEAM SECTION (Optional)
  team?: "Team description...",
  teamContent?: [/* content blocks */],

  // RESPONSIBILITIES SECTION (Optional)
  responsibilities?: ["Responsibility 1", "Responsibility 2"],

  // OVERVIEW SECTION (Required)
  overviewSubheader?: "Subheader text",
  overview: "Project overview...",
  overviewContent?: [/* content blocks */],
  overviewMetrics?: [{value: "80%", label: "Metric"}],

  // PROBLEM SECTION (Required)
  problemSubheader?: "Subheader text",
  problem: "Problem statement...",
  problemContent?: [/* content blocks */],

  // DESIGN APPROACH SECTION (Optional)
  designApproachSubheader?: "Subheader text",
  designApproach?: "Design approach text...",
  designApproachContent?: [/* content blocks */],

  // SOLUTION SECTIONS (Flexible - New System)
  solutionSections?: [
    {
      title: "Solution Feature 1",
      subheader?: "Feature description",
      text?: "Main content...",
      content?: [/* content blocks */]
    },
    {
      title: "Solution Feature 2",
      // Add as many sections as needed
    }
  ],

  // LEGACY FIELDS (Deprecated - use solutionSections instead)
  solution?: "...",
  solutionContent?: [...],
  process?: "...",
  processContent?: [...],
  results?: "...",
  resultsContent?: [...],
  learnings?: "...",
  learningsContent?: [...],
  customSections?: [...]
}
```

---

## Content Blocks Reference

### Text & Structure

#### Text Block
```typescript
Text("Your text with **bold** and \n\n paragraph breaks")
```

#### Header
```typescript
Header("Section Title", 4)  // level: 3, 4, or 5
```

#### List
```typescript
List(["Item 1", "Item 2"], false)  // false = bullets, true = numbered
```

### Visual Content

#### Single Image
```typescript
Image(
  "/images/screenshot.png",
  "Alt text",
  "Optional caption",
  true  // padding: true = show gray background
)
```

#### Image Row (Side-by-side)
```typescript
ImageRow([
  { src: "/images/img1.png", alt: "Image 1", caption: "Caption 1" },
  { src: "/images/img2.png", alt: "Image 2", caption: "Caption 2" }
])
```

### Callouts & Examples

#### Callout Box
```typescript
import { Pointer } from "lucide-react";

Callout("Important message", {
  icon: <Pointer className="w-6 h-6" />,
  withBackground: true,
  question: "Why is this important?"
})
```

#### Example Box
```typescript
Example(
  "For example, when users needed to complete a task:",
  [
    "It took 5 days",
    "Required 3 teams",
    "Had 50% error rate"
  ],
  "By the time they finished, the opportunity was lost"
)
```

### Process Visualization

#### Steps
```typescript
Steps([
  {
    title: "1. Research Phase",
    description: "Conducted user interviews and analysis"
  },
  {
    title: "2. Design Phase",
    description: "Created prototypes and tested with users"
  }
])
```

#### Flowchart
```typescript
Flowchart([
  { label: "WEEK 1-2", action: "Gather requirements" },
  { label: "WEEK 3-4", action: "Design and prototype" },
  { label: "WEEK 5+", action: "Test and iterate" }
], "Our Process Timeline")
```

### Metrics & Data

#### Metric Grid
```typescript
MetricGrid([
  { value: "75%", label: "Faster Delivery" },
  { value: "50%", label: "Fewer Tickets" },
  { value: "80%+", label: "User Satisfaction" }
], 3)  // columns: 2, 3, 4, or 5
```

#### Info Box
```typescript
InfoBox(
  "Key Features",
  [
    "Feature 1 with **bold** text",
    "Feature 2 description",
    "Feature 3 details"
  ],
  "blue"  // variant: 'default', 'blue', or 'gray'
)
```

#### Info Box Grid
```typescript
InfoBoxGrid([
  {
    title: "Operational Efficiency",
    items: ["28 days → 7 days", "Eliminate manual work"],
    variant: "blue"
  },
  {
    title: "User Experience",
    items: ["Consumer-grade UI", "Real-time tracking"],
    variant: "blue"
  }
], 2)  // columns: 1 or 2
```

#### Comparison Card
```typescript
Comparison(
  "Getting hardware took 4-5 weeks and required IT coordination",
  "Omni Shopping delivers in-stock items in 5-7 days through self-service",
  "75% faster delivery + 50% reduction in IT support tickets"
)
```

---

## Common Patterns

### Pattern 1: Problem Section with Context

```typescript
problemContent: [
  Image("/images/current-state.png", "Current workflow"),
  
  Flowchart([
    { label: "WEEK 1-2", action: "Manual data gathering" },
    { label: "WEEK 3-4", action: "Analysis and validation" },
    { label: "WEEK 5+", action: "Wait for final report" }
  ], "Before our solution"),
  
  Example(
    "For example, when the team needed to analyze data:",
    [
      "5 analysts working for 3 weeks",
      "Data from 4 different systems",
      "Manual reconciliation required"
    ],
    "By the time analysis was complete, the opportunity had passed"
  ),
  
  Callout("Lost revenue opportunities and frustrated teams.", {
    question: "The cost?"
  })
]
```

### Pattern 2: Design Approach with Steps

```typescript
designApproachContent: [
  Steps([
    {
      title: "1. User-Centered Design",
      description: "Prioritized user needs through extensive research and testing"
    },
    {
      title: "2. Speed and Performance",
      description: "Optimized for real-time feedback and minimal latency"
    },
    {
      title: "3. Accessibility",
      description: "Ensured everyone could use the system effectively"
    }
  ]),
  
  Callout("These principles guided our entire design process.", {
    icon: <Pointer className="w-6 h-6" />,
    withBackground: true
  }),
  
  Image("/images/design-framework.png", "Our design framework")
]
```

### Pattern 3: Solution Section with Features

```typescript
solutionSections: [
  {
    title: "Consumer Shopping Experience",
    subheader: "Apple-like catalog browsing with zero learning curve",
    text: "We transformed the fragmented procurement process into a unified shopping portal.",
    content: [
      Image("/images/catalog.png", "Shopping catalog"),
      
      Header("Key Capabilities"),
      List([
        "IT-approved catalog with role-based recommendations",
        "Real-time stock levels and availability",
        "Side-by-side product comparisons"
      ], true),
      
      Header("Impact"),
      Text("Order completion time reduced from hours to **under 10 minutes**.")
    ]
  }
]
```

### Pattern 4: Results with Metrics

```typescript
solutionSections: [
  {
    title: "Business Impact",
    subheader: "Measurable improvements across all metrics",
    content: [
      MetricGrid([
        { value: "75%", label: "Faster Delivery" },
        { value: "50%", label: "Fewer IT Tickets" },
        { value: "80%+", label: "User Satisfaction" }
      ], 3),
      
      InfoBoxGrid([
        {
          title: "Operational Efficiency",
          items: [
            "28 days → 7 days average delivery",
            "Eliminate IT consultation for standard orders",
            "Automate approval routing"
          ],
          variant: "blue"
        },
        {
          title: "Employee Experience",
          items: [
            "Consumer-grade shopping interface",
            "New hires equipped on day one",
            "Real-time order visibility"
          ],
          variant: "blue"
        }
      ], 2)
    ]
  }
]
```

### Pattern 5: Key Learnings

```typescript
import { Lightbulb } from "lucide-react";

solutionSections: [
  {
    title: "Key Learnings",
    subheader: "What I learned throughout the project",
    content: [
      Callout(
        "**AI tools fundamentally change the prototyping equation.** Using AI compressed our timeline from weeks to days.",
        {
          icon: <Lightbulb className="w-6 h-6" />,
          withBackground: true
        }
      ),
      Callout(
        "**Consumer-grade UX principles work in enterprise contexts.** Employees don't lower expectations for internal software.",
        {
          icon: <Lightbulb className="w-6 h-6" />,
          withBackground: true
        }
      )
    ]
  }
]
```

---

## Adding New Projects

### Step 1: Create Project File

Create a new file in `src/data/projects/`:

```bash
touch src/data/projects/my-new-project.tsx
```

### Step 2: Define Project Data

```typescript
import React from "react";
import { ProjectContent } from "./types";
import { Image, Text, Callout, List, Steps } from "../contentHelpers";

export const myNewProject: ProjectContent = {
  // HERO SECTION
  title: "My New Project",
  subtitle: "Project subtitle",
  imageSrc: "/images/my-project-hero.png",
  imageAlt: "My project hero image",

  // METADATA SECTION
  role: "Lead Designer",
  company: "Company Name",
  year: "2024",
  achievement: "Key achievement",

  // OVERVIEW SECTION
  overview: "Project overview...",

  // PROBLEM SECTION
  problem: "Problem statement...",

  // Add more sections as needed
};
```

### Step 3: Register Project

Add your project to `src/data/projects/index.ts`:

```typescript
import { myNewProject } from "./my-new-project";

export const projects: Record<string, ProjectContent> = {
  // ... existing projects
  "my-new-project": myNewProject,
};
```

### Step 4: Add Images

Place your images in `public/images/` and reference them as `/images/filename.png`.

---

## Tips & Best Practices

✅ **Use bold strategically** - Highlight **key terms** and metrics only  
✅ **Break up long sections** - Use `Header()` to create subsections  
✅ **Mix content types** - Combine text, images, and interactive elements  
✅ **Keep metrics focused** - Show 3-5 key numbers per grid  
✅ **Use consistent patterns** - Follow similar structures across projects  
✅ **Preview often** - Run `npm run dev` and check your changes  
✅ **Start simple** - Add basic content first, then enhance  
✅ **Use solution sections** - The new flexible system is more powerful  

❌ **Don't edit page.tsx** - All content changes go in project data files  
❌ **Don't nest too deeply** - Keep content hierarchy simple  
❌ **Don't overuse callouts** - Use them for truly important points  
❌ **Don't forget alt text** - Always provide descriptive alt text for images  

---

## Need Help?

- Check existing projects in `src/data/projects/` for examples
- See `PROJECT_STRUCTURE.md` for the overall architecture
- Run `npm run build` to check for errors
- Run `npm run dev` to preview your changes

🎉 **You're ready to create amazing portfolio content!**

