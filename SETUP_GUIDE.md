# Quick Setup Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies

```bash
npm install
```

This will install:

- React 18.3.1
- Vite 5.1.4
- TailwindCSS 3.4.1
- Framer Motion 11.0.5
- React Icons 5.0.1
- All development dependencies

### Step 2: Run Development Server

```bash
npm run dev
```

Your portfolio will be available at: `http://localhost:5173`

### Step 3: Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 📝 Customization Checklist

### Essential Updates

- [ ] **Profile Image**: Replace placeholder in `src/components/Hero.jsx`
- [ ] **Social Links**: Update LinkedIn and GitHub URLs in:
  - `src/components/Hero.jsx`
  - `src/components/Contact.jsx`
  - `src/components/Footer.jsx`
- [ ] **Projects**: Add/modify projects in `src/components/Projects.jsx`
- [ ] **Skills**: Update skill levels in `src/components/Skills.jsx`
- [ ] **About**: Customize your story in `src/components/About.jsx`
- [ ] **Contact Info**: Verify email and phone in `src/components/Contact.jsx`

### Optional Enhancements

- [ ] Add your resume PDF to `public/` folder
- [ ] Replace favicon in `public/`
- [ ] Add project screenshots to showcase
- [ ] Configure Google Analytics (if needed)
- [ ] Set up custom domain

## 🎨 Color Customization

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    500: '#3b82f6', // Your preferred color
    600: '#2563eb',
    // ... other shades
  }
}
```

## 🌐 Deployment Options

### Vercel (Easiest)

1. Push code to GitHub
2. Import project on vercel.com
3. Deploy with one click

### Netlify

1. Run `npm run build`
2. Drag and drop `dist` folder to Netlify
3. Done!

### GitHub Pages

1. Update `base` in `vite.config.js`
2. Build and push to gh-pages branch

## 🆘 Common Issues

**Issue**: Port 5173 already in use
**Solution**: Kill the process or use a different port:

```bash
npm run dev -- --port 3000
```

**Issue**: Build errors
**Solution**: Clear cache and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

## 📱 Testing Responsiveness

1. Desktop: Default browser view
2. Tablet: Browser DevTools (iPad Pro - 1024px)
3. Mobile: Browser DevTools (iPhone 12 - 390px)

## ✅ Final Checklist Before Deploy

- [ ] All personal information updated
- [ ] Social links verified
- [ ] Contact form tested
- [ ] Responsive design checked on all devices
- [ ] Dark mode tested
- [ ] All images optimized
- [ ] Run `npm run build` successfully
- [ ] Test production build with `npm run preview`

---

Need help? Check the main README.md for detailed documentation.
