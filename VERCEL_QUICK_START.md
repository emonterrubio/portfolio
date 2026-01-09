# Quick Start: Deploy to Vercel (5 Minutes)

## Prerequisites
- Your code in a GitHub repository (you already have git set up!)

## Step-by-Step

### 1. Push to GitHub (if not already)
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" → Use GitHub
3. Click "Add New Project"
4. Import your `portfolio` repository
5. Vercel auto-detects Next.js - **no configuration needed!**
6. Click "Deploy"

### 3. Add Environment Variable
1. Go to Project Settings → Environment Variables
2. Add:
   - **Name:** `RESEND_API_KEY`
   - **Value:** `re_PgUjwo7Z_PyU2QWoigJsNHsVNzRR97KZ1`
   - **Environment:** Production, Preview, Development (check all)
3. Click "Save"
4. Redeploy (or it will auto-deploy on next push)

### 4. Connect Your Domain
1. Go to Project → Settings → Domains
2. Click "Add Domain"
3. Enter your domain (e.g., `edmonterrubio.com`)
4. Vercel shows you DNS records to add
5. Go to NetworkSolutions DNS settings
6. Add the DNS records Vercel provided
7. Wait 5-60 minutes for DNS propagation
8. Done! Your site is live!

## That's It! 🎉

Your site will be live at:
- `your-project.vercel.app` (immediately)
- `your-domain.com` (after DNS updates)

## Benefits
- ✅ Every `git push` = automatic deployment
- ✅ Preview deployments for pull requests
- ✅ Free SSL certificate
- ✅ Global CDN (fast worldwide)
- ✅ Analytics included
- ✅ No server management

## No Domain Transfer Needed!
Just update DNS records at NetworkSolutions - keep your domain there, point it to Vercel.
