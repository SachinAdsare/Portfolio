# GitHub Pages Deployment Guide

## 🚀 Quick Setup

### Step 1: Update Repository Name in Config

If your repository name is **NOT** `Port`, update `vite.config.js`:

```javascript
base: "/your-repo-name/", // Replace with your actual repo name
```

### Step 2: Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under **Source**, select:

   - **GitHub Actions** (Recommended - automated deployment)

   OR

   - **Deploy from a branch** → Select `gh-pages` branch

### Step 3: Automated Deployment (Recommended)

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:

- Build your project on every push to `main` branch
- Deploy to GitHub Pages

Just push your code:

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

Your site will be live at: `https://sachinadsare.github.io/Port/`

---

## 📦 Manual Deployment (Alternative Method)

If you prefer manual deployment:

### 1. Install gh-pages package

```bash
npm install --save-dev gh-pages
```

### 2. Add deploy scripts to package.json

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### 3. Deploy

```bash
npm run deploy
```

This will:

- Build your project
- Create a `gh-pages` branch
- Push the `dist` folder to that branch
- Deploy to GitHub Pages

---

## 🔧 Troubleshooting

### Issue: 404 Error or Blank Page

**Problem**: Assets not loading correctly

**Solution**:

1. Verify `base` path in `vite.config.js` matches your repository name
2. Make sure you're deploying the `dist` folder, not source files
3. Check GitHub Pages settings are pointing to the correct source

### Issue: CSS/JS Not Loading

**Problem**: Incorrect base path

**Solution**:

```javascript
// vite.config.js
base: "/Port/", // Must match repository name exactly
```

### Issue: GitHub Actions Failing

**Problem**: Permissions not set

**Solution**:

1. Go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select:
   - ✅ Read and write permissions
3. Save changes and re-run the workflow

---

## 🌐 Custom Domain (Optional)

To use a custom domain:

1. Add a `public/CNAME` file with your domain:

   ```
   yourdomain.com
   ```

2. In GitHub Settings → Pages → Custom domain:

   - Enter your domain
   - Wait for DNS check

3. Update DNS records with your domain provider:
   - Add A records pointing to GitHub's IPs
   - Or add CNAME record pointing to `sachinadsare.github.io`

---

## 📝 Important Notes

1. **First deployment** may take 5-10 minutes to go live
2. **Subsequent deployments** are usually faster (1-2 minutes)
3. GitHub Pages caches content - do a hard refresh (Ctrl+Shift+R) if changes don't appear
4. Free GitHub accounts get **1GB storage** and **100GB bandwidth/month**

---

## ✅ Verification Checklist

After deployment, verify:

- [ ] Site loads at `https://sachinadsare.github.io/Port/`
- [ ] All images and assets load correctly
- [ ] Navigation works properly
- [ ] Dark mode toggle functions
- [ ] Contact form opens email client
- [ ] All sections are responsive on mobile

---

## 🆘 Still Having Issues?

Check the Actions tab in your GitHub repository to see build logs and errors.

Common fixes:

- Clear browser cache
- Wait 5-10 minutes after first deployment
- Check GitHub Pages is enabled in repository settings
- Verify the base path matches your repository name
