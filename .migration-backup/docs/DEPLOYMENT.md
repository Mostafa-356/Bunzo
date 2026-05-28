# Deployment Guide

Complete guide for deploying Bunzo Egyptian Burgers to various platforms.

## Table of Contents

- [Quick Start - Vercel (Recommended)](#quick-start---vercel-recommended)
- [Build for Production](#build-for-production)
- [Netlify Deployment](#netlify-deployment)
- [Docker Deployment](#docker-deployment)
- [AWS S3 + CloudFront](#aws-s3--cloudfront)
- [GitHub Pages](#github-pages)
- [Traditional Hosting](#traditional-hosting)
- [CI/CD Automation](#cicd-automation)
- [SEO Optimization](#seo-optimization)

---

## Quick Start - Vercel (Recommended)

### Quick Deploy Steps:

1. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Add New Project"
   - Import your repository: `joesef127/foodieland`

2. **Configure Build Settings:**
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Environment Variables:**
   ```
   VITE_API_BASE_URL=https://foodielandbackend.vercel.app
   ```

4. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete (1-2 minutes)
   - Your site will be live at your Vercel URL

### Auto-Deploy:
Every push to the `main` branch will automatically trigger a new deployment.

### Features Included:
- ✅ Responsive design
- ✅ SEO optimized
- ✅ Performance optimized
- ✅ Fast page loads with Vite
- ✅ Code splitting
- ✅ Tree shaking

---

## Build for Production

### Create Production Build

```bash
npm run build
```

This creates an optimized production build in `dist/` with:
- Minified JavaScript and CSS
- Tree-shaking for smaller bundle sizes
- Code splitting for optimal loading
- Optimized images and assets
- Source maps for debugging

### Build Output

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [images]
├── favicon.ico
└── robots.txt
```

### Test Production Build Locally

```bash
npm run preview
```

Then open: http://localhost:4173

---

## Netlify Deployment

### Option 1: Netlify CLI

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Option 2: Netlify UI

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select `Mostafa-SAID7/Bunzo`
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Environment variables: `VITE_API_BASE_URL`
5. Click "Deploy site"

### netlify.toml Configuration

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

---

## Docker Deployment

### Dockerfile

```dockerfile
FROM node:20-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### nginx.conf

```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Build and Run

```bash
docker build -t bunzo:latest .
docker run -d -p 80:80 bunzo:latest
```

---

## AWS S3 + CloudFront

### 1. Build the Application

```bash
npm run build
```

### 2. Create S3 Bucket

```bash
aws s3 mb s3://bunzo-website
aws s3 website s3://bunzo-website --index-document index.html --error-document index.html
```

### 3. Upload Files

```bash
aws s3 sync dist/ s3://bunzo-website --delete
```

### 4. Set Bucket Policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::bunzo-website/*"
    }
  ]
}
```

### 5. Create CloudFront Distribution

- Origin: S3 bucket endpoint
- Default Root Object: `index.html`
- Error Pages: 404 → `/index.html` (200)

---

## GitHub Pages

### 1. Install gh-pages

```bash
npm install -D gh-pages
```

### 2. Add Deploy Script

```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

### 3. Configure vite.config.ts

```typescript
export default defineConfig({
  base: '/Bunzo/',
  // ... other config
})
```

### 4. Deploy

```bash
npm run deploy
```

Your site will be at: `https://Mostafa-SAID7.github.io/Bunzo/`

---

## Traditional Hosting

### Requirements

- Web server (Apache, Nginx, IIS)
- Support for Single Page Applications (SPA)

### Apache (.htaccess)

Create `.htaccess` in the root:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name bunzo-burgers.com;
    root /var/www/bunzo;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Upload via FTP/SFTP

1. Build: `npm run build`
2. Upload contents of `dist/` to web root
3. Ensure `.htaccess` is uploaded (Apache)
4. Configure server for SPA routing

---

## CI/CD Automation

### GitHub Actions (Already Configured)

Workflows in `.github/workflows/`:

- **code-quality.yml**: Runs on every push/PR
  - Installs dependencies
  - Builds the app
  - Runs ESLint
  - Checks Prettier formatting
  - Analyzes bundle size
  - Validates accessibility

- **security.yml**: Security checks
  - CodeQL analysis
  - npm audit
  - TruffleHog secret scanning
  - License compliance

- **labeler.yml**: Automatic PR labeling
  - Labels PRs based on changed files
  - 13 labels configured

### Manual Trigger

```bash
# Trigger workflow manually
gh workflow run code-quality.yml
```

---

## Environment Variables

### Development (.env.local)

```env
VITE_API_BASE_URL=http://localhost:8000
```

### Production (Vercel)

Set in Vercel dashboard:
- `VITE_API_BASE_URL=https://bunzo-backend.vercel.app`

### Accessing in Code

```typescript
const apiUrl = import.meta.env.VITE_API_BASE_URL;
```

---

## SEO Optimization

### Features Included:

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags (Facebook)
- ✅ Twitter Card tags
- ✅ Semantic HTML
- ✅ Sitemap.xml (if configured)
- ✅ Robots.txt (if configured)
- ✅ Alt tags on images
- ✅ Mobile-friendly
- ✅ Fast loading times

### Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: Your production URL
3. Verify ownership
4. Submit sitemap: `https://your-domain.com/sitemap.xml`

---

## Performance Optimization

### Current Optimizations:

- ✅ Vite code splitting
- ✅ Tree shaking
- ✅ Lazy loading images
- ✅ Minified CSS/JS
- ✅ Gzip/Brotli compression
- ✅ Font optimization
- ✅ Asset optimization

### Performance Targets:

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms

### Lighthouse Audit

```bash
npm install -g lighthouse
lighthouse https://your-domain.com --view
```

Target scores:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 95+

---

## Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routing Issues (404 on refresh)

Ensure server is configured for SPA:
- Apache: `.htaccess` with rewrite rules
- Nginx: `try_files` directive
- Vercel/Netlify: Automatic SPA handling

### Environment Variables Not Working

- Ensure variables start with `VITE_`
- Restart dev server after adding variables
- Check Vercel dashboard for production variables

---

## Support & Resources

### Documentation
- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Vercel Docs](https://vercel.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com)

### Deployment Issues
- Vercel Dashboard: https://vercel.com/dashboard
- Check build logs
- Review GitHub Actions runs

### Contact
- Repository: https://github.com/Mostafa-SAID7/Bunzo
- Issues: https://github.com/Mostafa-SAID7/Bunzo/issues

---

**Last Updated:** 2025-01-15

