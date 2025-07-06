# Data Management Guide

This website uses static TypeScript files in the `src/data/` folder to store all structured content, such as events, people, and projects. You can easily add, remove, or update data by editing these files. All changes will be automatically included the next time you build the site.

## Where is the data?

All data is located in:
```
Source code/src/data/
```
- `eventsData.ts` — Events and event details
- `peopleData.ts` — Team members, alumni, and advisors
- `projectsData.ts` — Projects and their details

## How to Add or Edit Data

1. **Open the relevant file** in `src/data/` for the type of data you want to change.
   - For team members or alumni: edit `peopleData.ts`
   - For events: edit `eventsData.ts`
   - For projects: edit `projectsData.ts`

2. **Add a new entry** by copying an existing object and updating its fields, or edit/remove existing entries as needed.
   - Each file contains an array of objects. Each object represents a person, event, or project.
   - Make sure to follow the structure of the existing objects (field names, types, etc.).

3. **Save the file.**

4. **Build or run the site** as usual. The new data will be automatically included.

## Example: Adding a New Team Member

Open `peopleData.ts` and add a new object to the `peopleData` array:
```typescript
{
  id: "13",
  name: "Jane Doe",
  role: "Team Member",
  image: "/media/team/jane-doe.jpg",
  linkedIn: "https://linkedin.com/in/jane-doe/",
  education: "M.Sc. Computer Engineering, TUM",
  isActive: true,
  joinDate: "2024-07"
},
```

## Tips
- **Use unique IDs** for each entry.
- **Image paths** should point to files in the `public/media/` or `public/lovable-uploads/` folders.
- **No need to restart the dev server** if it's already running; just refresh the page to see changes.
- **Type safety:** If you make a typo or use the wrong field, TypeScript will show an error during build or in your editor.

## That's it!
All data is managed through these files. No database or CMS is required—just edit, save, and build! 