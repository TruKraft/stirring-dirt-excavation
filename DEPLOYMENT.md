# Deployment Guide - Stirring Dirt Excavation

## Quick Deploy to Vercel

### Method 1: Vercel Dashboard (Recommended)

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import from Bitbucket: `trukraft/stirring-dirt-excavation`
   - Authorize Vercel to access your Bitbucket account

2. **Configure Project**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (leave default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

3. **Environment Variables**
   - None required for current version
   - Add future variables in Vercel dashboard under Settings → Environment Variables

4. **Deploy**
   - Click "Deploy"
   - First deployment takes ~2-3 minutes
   - You'll get a production URL like: `stirring-dirt-excavation.vercel.app`

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd "/Users/mac/Documents/STRS DEV/Altira Project /Altira-New/Test Cursor"
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - Project name? stirring-dirt-excavation
# - Directory? ./ (press enter)
# - Override settings? No (press enter)
```

### Auto-Deployment Setup

Once connected to Vercel:
- **Every push to `main`** branch automatically deploys to production
- **Preview deployments** created for pull requests
- **Instant rollbacks** available in Vercel dashboard

### Custom Domain Setup

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain (e.g., `stirringdirt.com`)
3. Update DNS records as instructed by Vercel
4. SSL certificate auto-provisioned

### Performance Optimizations (Included)

✅ Next.js 15 with App Router  
✅ Automatic image optimization  
✅ Edge-ready configuration  
✅ TypeScript for type safety  
✅ Tailwind CSS for optimal CSS bundle  

### Monitoring

After deployment, monitor at:
- **Analytics**: Vercel Dashboard → Analytics
- **Logs**: Vercel Dashboard → Deployments → Function Logs
- **Performance**: Built-in Web Vitals tracking

### Troubleshooting

**Build fails?**
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Run `npm run build` locally to test

**Images not loading?**
- Verify images are in `/public` folder
- Check `next.config.ts` for `remotePatterns` configuration

**Need help?**
- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)

---

## Project Details

- **Framework**: Next.js 15.2.4
- **Node Version**: 20.x (recommended)
- **Package Manager**: npm
- **Build Time**: ~90 seconds
- **Repository**: https://bitbucket.org/trukraft/stirring-dirt-excavation

