# Sachin Adsare - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Senior Software Developer. Built with React, Vite, TailwindCSS, and Framer Motion.

![Portfolio Preview](https://img.shields.io/badge/React-18.3.1-blue) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-06B6D4) ![Vite](https://img.shields.io/badge/Vite-5.1.4-646CFF)

## ✨ Features

- **Responsive Design** - Fully optimized for mobile, tablet, and desktop devices
- **Dark Mode** - Toggle between light and dark themes with persistent preference
- **Smooth Animations** - Enhanced UX with Framer Motion animations
- **Modern UI** - Clean, professional design with gradient accents
- **Fast Performance** - Built with Vite for lightning-fast development and optimized production builds
- **Accessible** - ARIA labels and semantic HTML for better accessibility

## 🎯 Sections

1. **Hero Section** - Introduction with professional headshot area and clear CTAs
2. **Projects** - Detailed case studies of 5 major projects with:
   - Project descriptions and context
   - Technologies used
   - Key challenges and solutions
   - Achievements and impact
3. **Skills** - Comprehensive showcase of technical expertise with:
   - Categorized skill sets
   - Visual proficiency indicators
   - Key metrics and statistics
4. **About** - Professional journey, education, and personal interests
5. **Contact** - Functional contact form and social media links
6. **Footer** - Quick links and additional contact information

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone or navigate to the project directory**

```bash
cd /Users/Sachin.Adsare/Documents/Projects/Port
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

The application will open at `http://localhost:5173`

## 📦 Build for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

The build output will be in the `dist` folder, ready for deployment.

## 🛠️ Technology Stack

### Core

- **React 18.3.1** - UI library
- **Vite 5.1.4** - Build tool and development server
- **TailwindCSS 3.4.1** - Utility-first CSS framework

### Libraries

- **Framer Motion 11.0.5** - Animation library
- **React Icons 5.0.1** - Icon library

### Development Tools

- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🎨 Customization

### Color Scheme

The color scheme uses a primary blue palette with dark mode support. You can customize the colors in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... customize other shades
  }
}
```

### Content

Update the content in the following component files:

- `src/components/Hero.jsx` - Update name, title, and introduction
- `src/components/Projects.jsx` - Add/modify project case studies
- `src/components/Skills.jsx` - Update skills and proficiency levels
- `src/components/About.jsx` - Modify professional journey and education
- `src/components/Contact.jsx` - Update contact information

### Profile Image

Replace the placeholder in `Hero.jsx` with your actual profile image:

```jsx
<img
  src="/path-to-your-image.jpg"
  alt="Sachin Adsare"
  className="w-full h-full object-cover"
/>
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

## 🌐 Deployment

This project can be deployed to various platforms:

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload the 'dist' folder to Netlify
```

### GitHub Pages

1. Update `vite.config.js` with your repository base:

```javascript
export default defineConfig({
  plugins: [react()],
  base: "/your-repo-name/",
});
```

2. Build and deploy:

```bash
npm run build
# Use gh-pages or manual deployment
```

## 📄 Project Structure

```
Port/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # App entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build

## 📝 License

This project is open source and available for personal use.

## 📞 Contact

**Sachin Adsare**

- Email: sachin.adsare@outlook.com
- Phone: +91 9309787026
- LinkedIn: [sachin-adsare](https://linkedin.com/in/sachin-adsare-0971b216a3)
- GitHub: [sachin-adsare](https://github.com/sachin-adsare)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

---

**Built with ❤️ using React & TailwindCSS**
