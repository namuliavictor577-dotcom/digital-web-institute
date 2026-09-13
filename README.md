# Digital Web Institute Website

A modern, responsive, single-page website for Digital Web Institute - a digital skills training center in Embu, Kenya.

## Features

- **Hero Section**: Inspirational hero with prominent call-to-action buttons
- **About Section**: Institute history, location, and mission statement
- **Courses Section**: Featured courses with detailed course cards and modal views
- **Expanded Courses**: View all 10 courses in an expanded modal
- **Course Details Modal**: Comprehensive course information with enrollment form
- **Graduate Success Section**: Gallery showcasing graduate achievements
- **Core Values Section**: Institute values and mission alignment
- **Contact Section**: Contact form, location, and social media links
- **Responsive Design**: Fully responsive on mobile, tablet, and desktop
- **Accessibility**: WCAG compliant with proper semantic HTML and focus management
- **Smooth Animations**: Subtle, respectful animations that honor reduced-motion preferences
- **Floating WhatsApp Button**: Quick contact option fixed to screen

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Styled Components** - CSS-in-JS styling
- **JavaScript ES6+** - Modern JavaScript

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd digital-web-institute
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The website will open automatically at `http://localhost:5173`

### Building for Production

Create an optimized production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/           # React components
│   ├── Header.jsx        # Navigation and header
│   ├── Hero.jsx          # Hero section
│   ├── About.jsx         # About section
│   ├── Courses.jsx       # Featured courses grid
│   ├── CourseDetailModal.jsx  # Course details modal
│   ├── ExpandedCoursesModal.jsx # All courses view
│   ├── GraduateSuccess.jsx     # Graduate gallery
│   ├── CoreValues.jsx    # Core values section
│   ├── Contact.jsx       # Contact form section
│   ├── Footer.jsx        # Footer
│   └── WhatsAppButton.jsx # Floating WhatsApp button
├── data/
│   └── coursesData.js    # Course data and constants
├── styles/
│   └── GlobalStyles.js   # Global styles and CSS reset
├── App.jsx              # Main App component
└── main.jsx             # Entry point

index.html               # HTML template
vite.config.js          # Vite configuration
package.json            # Dependencies and scripts
```

## Course Data

All course information is managed in `src/data/coursesData.js`. You can easily update:
- Course titles, descriptions, and fees
- Duration and difficulty levels
- Topics and projects
- Core values and graduate images

```javascript
export const coursesData = {
  featured: [ /* 4 featured courses */ ],
  additional: [ /* 6 additional courses */ ]
}
```

## Customization

### Colors

The website uses these primary colors:
- **Navy**: `#0f172a` - Primary brand color
- **Red**: `#dc2626` - Accent for CTAs and highlights
- **Gold**: `#fbbf24` - Accent highlights
- **Gray**: `#6b7280`, `#374151` - Text and secondary elements

Update these throughout the styled-components in each component file.

### Images

Images are loaded from Unsplash using dynamic URLs. To use local images:
1. Add image files to a `public` folder
2. Update image paths in components from `https://images.unsplash.com/...` to `/path/to/image.jpg`

### Contact Information

Update these in the relevant components:
- **Phone**: `+254141415944`
- **WhatsApp**: `https://wa.me/254141415944`
- **Facebook**: `https://www.facebook.com/victorwebservices`
- **Location**: Embu County, Manyatta Constituency, Kenya

## Features Implemented

✅ Sticky header with navigation and dropdown  
✅ Mobile hamburger menu with smooth transitions  
✅ Search functionality placeholder  
✅ Hero section with inspirational quote  
✅ Smooth scroll navigation  
✅ About section with location and trust indicators  
✅ Featured courses grid (4 courses)  
✅ Course detail modals with enrollment forms  
✅ Expanded courses view (10 courses total)  
✅ Graduate success gallery  
✅ Core values section  
✅ Contact form with validation  
✅ Social media integration  
✅ Floating WhatsApp button  
✅ Responsive design (mobile, tablet, desktop)  
✅ Accessibility features (ARIA labels, focus states, semantic HTML)  
✅ Smooth animations with reduced-motion support  

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Lazy loading of images
- Smooth scroll behavior
- Optimized animations
- CSS-in-JS for smaller bundle sizes
- Vite's fast build system

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Focus visible states on all interactive elements
- Color contrast ratios meeting WCAG AA standards
- Keyboard navigation support
- Respects `prefers-reduced-motion` preference

## License

© 2024 Digital Web Institute. All rights reserved.

## Support

For questions or issues, contact:
- **Phone**: +254 141 415 944
- **WhatsApp**: https://wa.me/254141415944
- **Facebook**: https://www.facebook.com/victorwebservices
