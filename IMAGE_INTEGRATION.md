# Image Configuration Summary

## Images Integrated ✓

### Hero Section
- **Image**: `home page 2.jpg` (Aerial campus view)
- **Location**: `Hero.jsx`

### About Section  
- **Image**: `complab 1.jpg` (Computer lab with students)
- **Location**: `About.jsx`

### Courses Section
- **Course 1 - Graphic Design**: `home page 1.jpg`
- **Course 2 - Software Engineering with AI**: `home page 3.jpg`
- **Course 3 - Full-Stack AI**: `home page 4.jpg`
- **Course 4 - Advanced Cybersecurity**: `complab 1.jpg`
- **Course 5 - Mobile App Dev**: `home page 1.jpg`
- **Course 6 - Web Development**: `home page 3.jpg`
- **Course 7 - Digital Marketing**: `home page 4.jpg`
- **Course 8 - Freelancing**: `home page 5.jpg`
- **Course 9 - AI Tool Optimization**: `home page 1.jpg`
- **Course 10 - Game Development**: `complab 1.jpg`
- **Location**: `src/data/coursesData.js`

### Graduate Success Section
- **Gallery Image 1**: `section image 1.jpg` (Graduation ceremony)
- **Gallery Image 2**: `section image 2.jpg` (Graduates with certificates)
- **Gallery Image 3**: `section image3.jpg` (Students group)
- **Gallery Image 4**: `section image 4.jpg` (Large building with students)
- **Location**: `src/data/coursesData.js`

### Core Values Section
- **Image**: `home page 5.jpg` (Students group photo)
- **Location**: `CoreValues.jsx`

## File Structure
```
project-root/
├── public/
│   ├── home page 1.jpg
│   ├── home page 2.jpg
│   ├── home page 3.jpg
│   ├── home page 4.jpg
│   ├── home page 5.jpg
│   ├── complab 1.jpg
│   ├── section image 1.jpg
│   ├── section image 2.jpg
│   ├── section image 4.jpg
│   └── section image3.jpg
├── src/
│   ├── components/
│   ├── data/
│   └── styles/
└── [other files]
```

## How Images Are Served
- Images are stored in the `public/` folder
- Vite serves them from the root path `/` (e.g., `/home page 1.jpg`)
- All image paths in components use these local references
- No external CDN dependencies

## To Run
```bash
npm install
npm run dev
```

Images will load from the public folder during development and production.
