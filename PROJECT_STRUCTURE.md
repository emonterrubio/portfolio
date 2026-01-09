# Project Data Structure

## Overview
The project data has been refactored from a single monolithic `projects.tsx` file into a modular structure with separate files for each project.

## New Structure

```
src/data/
├── contentHelpers.ts          # Helper functions for creating content blocks
└── projects/
    ├── types.ts               # TypeScript types and interfaces
    ├── index.ts               # Main export file that aggregates all projects
    ├── ea-iris-data-insights.tsx
    ├── ea-omni-shopping.tsx
    ├── ea-player-support.tsx
    └── google-one-benefits.tsx
```

## Files Description

### `types.ts`
Contains all TypeScript type definitions:
- `ContentBlock` - Union type for all content block types
- `CustomSection` - Interface for custom sections
- `ProjectContent` - Main interface for project data structure

### `index.ts`
Main export file that:
- Imports all individual project files
- Exports a `projects` object with all projects keyed by slug
- Re-exports types for convenience

### Individual Project Files
Each project has its own file (e.g., `ea-iris-data-insights.tsx`) that:
- Imports necessary helpers and types
- Exports a single project object
- Contains all project-specific data and content

## Benefits

1. **Better Organization**: Each project is in its own file, making it easier to find and edit
2. **Easier Maintenance**: Changes to one project don't affect others
3. **Better Performance**: Only import the types/projects you need
4. **Clearer Dependencies**: Each file explicitly imports what it needs
5. **Scalability**: Easy to add new projects without cluttering a single file

## How to Add a New Project

1. Create a new file in `src/data/projects/` (e.g., `my-new-project.tsx`)
2. Import the necessary helpers and types:
   ```tsx
   import { ProjectContent } from "./types";
   import { Image, Text, Callout } from "../contentHelpers";
   ```
3. Export your project data:
   ```tsx
   export const myNewProject: ProjectContent = {
     title: "My New Project",
     // ... rest of project data
   };
   ```
4. Add it to `index.ts`:
   ```tsx
   import { myNewProject } from "./my-new-project";
   
   export const projects: Record<string, ProjectContent> = {
     // ... existing projects
     "my-new-project": myNewProject,
   };
   ```

## Import Usage

Components should import from the main projects module:

```tsx
// Import projects data
import { projects } from "@/data/projects";

// Import types
import { ProjectContent, ContentBlock } from "@/data/projects";
// or directly from types
import { ContentBlock } from "@/data/projects/types";
```

## Migration Complete

✅ All project data has been successfully migrated  
✅ All imports have been updated  
✅ Build passes with no errors  
✅ Old `projects.tsx` file has been removed  

