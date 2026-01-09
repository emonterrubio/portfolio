# GitHub Repository Setup

## Step 1: Create Repository on GitHub

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository settings:
   - **Name:** `portfolio` (or your preferred name)
   - **Description:** "Portfolio website - Product Design Leader"
   - **Visibility:** Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **"Create repository"**

## Step 2: Connect and Push

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add the remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Or if you prefer SSH:
git remote add origin git@github.com:YOUR_USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Verify

1. Go to your repository on GitHub
2. You should see all your files
3. Make sure `.env.local` is NOT visible (it should be ignored)

## Next: Deploy to Vercel

Once your code is on GitHub:
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your `portfolio` repository
4. Add `RESEND_API_KEY` environment variable
5. Deploy!

See `VERCEL_QUICK_START.md` for detailed Vercel deployment steps.
