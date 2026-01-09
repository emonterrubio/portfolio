# Portfolio

A modern, modular portfolio built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── page.tsx           # Home page (projects grid)
│   │   └── projects/[slug]/   # Dynamic project pages
│   ├── components/
│   │   ├── sections/          # Project section components
│   │   ├── shared/            # Header, Footer
│   │   └── ui/                # Reusable UI components
│   └── data/
│       ├── contentHelpers.ts  # Content block helper functions
│       └── projects/          # Project data (one file per project)
│           ├── types.ts       # TypeScript types
│           ├── index.ts       # Main export
│           └── *.tsx          # Individual project files
├── public/
│   └── images/                # Project images
└── docs/
    └── CONTENT_GUIDE.md       # Complete content documentation
```

## 📝 Adding Content

All project content is managed through data files in `src/data/projects/`. Each project has its own file.

### Quick Example

```typescript
// src/data/projects/my-project.tsx
import { ProjectContent } from "./types";
import { Image, Text, Callout } from "../contentHelpers";

export const myProject: ProjectContent = {
  title: "My Project",
  imageSrc: "/images/hero.png",
  imageAlt: "Project hero",
  
  role: "Lead Designer",
  company: "Company Name",
  year: "2024",
  achievement: "Improved efficiency by 75%",
  
  overview: "Project overview...",
  problem: "Problem statement...",
  
  problemContent: [
    Image("/images/problem.png", "Problem diagram"),
    Text("Additional context..."),
    Callout("Key insight!")
  ]
};
```

### Available Content Blocks

- `Image()` - Single images with optional captions
- `ImageRow()` - Side-by-side images
- `Text()` - Text with **bold** support
- `Header()` - Section headers
- `Callout()` - Highlighted callout boxes
- `List()` - Bullet or numbered lists
- `Steps()` - Numbered process steps
- `Example()` - Example boxes
- `Flowchart()` - Process visualization
- `MetricGrid()` - Display key metrics
- `InfoBox()` - Organized bullet lists
- `InfoBoxGrid()` - Multiple info boxes
- `Comparison()` - Before/after comparisons

**See [docs/CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md) for complete documentation.**

## 🎨 Adding a New Project

1. **Create project file**: `src/data/projects/my-project.tsx`
2. **Define project data** using the `ProjectContent` interface
3. **Register in index**: Add to `src/data/projects/index.ts`
4. **Add images**: Place in `public/images/`

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📚 Documentation

- **[Content Guide](docs/CONTENT_GUIDE.md)** - Complete guide for adding and managing content
- **[Project Structure](PROJECT_STRUCTURE.md)** - Overview of the modular project structure

## 🚢 Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

### Manual Deployment

```bash
npm run build
npm start
```

The build output will be in the `.next` directory.

## 📄 License

MIT

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and customize for your own use!

---

Built with ❤️ using Next.js
