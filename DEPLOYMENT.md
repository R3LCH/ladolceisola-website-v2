# GitHub Pages Deployment Guide

## Overview

This website is configured for deployment to GitHub Pages using the `gh-pages` branch.

## Prerequisites

- GitHub repository: `https://github.com/R3LCH/ladolceisola-website-v2`
- GitHub Pages enabled on the repository
- `gh-pages` npm package installed (already in dependencies)

## Configuration

### Base Path

The site is configured with base path `/ladolceisola-website-v2/` in `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/ladolceisola-website-v2/',
  // ...
})
```

### Build Output

- Build directory: `dist/`
- All assets use relative paths with the base path prefix
- Translations and menu images are copied to `dist/` during build

## Deployment Steps

### 1. Build the Site

```bash
npm run build
```

This command:
- Runs TypeScript compilation
- Builds optimized production bundle with Vite
- Outputs to `dist/` directory
- Applies code splitting and minification
- Copies public assets (locales, menu images)

### 2. Deploy to GitHub Pages

```bash
npm run deploy
```

This command:
- Automatically runs `npm run build` first (via `predeploy` script)
- Pushes the `dist/` directory to the `gh-pages` branch
- Preserves git history in the gh-pages branch

### 3. Verify Deployment

After deployment completes:

1. Go to repository Settings → Pages
2. Verify source is set to `gh-pages` branch, `/ (root)` directory
3. Wait 1-2 minutes for GitHub to build and deploy
4. Visit: `https://r3lch.github.io/ladolceisola-website-v2/`

## Manual Deployment (Alternative)

If you need to deploy manually:

```bash
# Build the site
npm run build

# Install gh-pages globally (if not already)
npm install -g gh-pages

# Deploy
gh-pages -d dist
```

## GitHub Pages Settings

In your GitHub repository:

1. Go to **Settings** → **Pages**
2. **Source**: Deploy from a branch
3. **Branch**: `gh-pages` / `/ (root)`
4. **Custom domain** (optional): Configure if you have a custom domain

## Troubleshooting

### 404 Errors on Refresh

GitHub Pages serves all routes to `index.html`. The app uses client-side routing with React Router (if needed in future), which handles this correctly.

### Assets Not Loading

If assets (images, translations) are not loading:

1. Verify base path is set correctly in `vite.config.ts`
2. Check browser console for 404 errors
3. Ensure all asset paths use the base path prefix
4. Rebuild and redeploy

### Build Fails

Common issues:

- **TypeScript errors**: Run `npm run build` locally first to catch errors
- **Missing dependencies**: Run `npm install` to ensure all deps are installed
- **Node version**: Ensure Node.js 18+ is installed

### Deployment Fails

- **Authentication**: Ensure you're logged into GitHub
- **Branch permissions**: Check that you have write access to the repository
- **gh-pages branch**: If issues persist, try deleting the `gh-pages` branch and redeploying

## Continuous Deployment (Future)

To set up automated deployment with GitHub Actions:

1. Create `.github/workflows/deploy.yml`
2. Add workflow to build and deploy on push to `main`
3. Use `actions/deploy-pages@v2` action

Example workflow:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Performance

### Build Optimization

The build is optimized with:

- **Code splitting**: Vendor, animations, three.js, i18n chunks
- **Minification**: JavaScript with esbuild
- **Tree shaking**: Removes unused code
- **Asset optimization**: Images already in WebP format

### Bundle Sizes

- Vendor (React, React DOM): ~410 KB
- Three.js: ~746 KB
- Animations (GSAP): ~114 KB
- i18n: ~50 KB
- App code: ~52 KB

Total initial load: ~1.4 MB (compressed: ~500 KB)

### Loading Strategy

- Three.js only loads on desktop (mobile detection)
- Translations load dynamically by language
- Images lazy load as needed

## Cache Busting

Vite automatically adds content hashes to filenames:
- `index-[hash].js`
- `vendor-[hash].js`
- `animations-[hash].js`

This ensures browsers always get the latest version after deployment.

## Rollback

To rollback to a previous version:

```bash
# Check gh-pages branch history
git checkout gh-pages
git log

# Reset to previous commit
git reset --hard <commit-hash>
git push origin gh-pages --force
```

## Production URL

**Live Site**: [https://r3lch.github.io/ladolceisola-website-v2/](https://r3lch.github.io/ladolceisola-website-v2/)

## Support

For deployment issues:
1. Check GitHub Pages status: https://www.githubstatus.com/
2. Review GitHub Pages documentation: https://docs.github.com/pages
3. Check repository Actions tab for errors (if using GitHub Actions)

---

Last updated: October 2024
