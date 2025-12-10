# Netlify Deployment Guide for Career Companion

## Configuration Files Added

All configuration files required for Netlify deployment have been set up and committed:

### 1. **netlify.toml** (Main Netlify Config)

- Build command: `npm run build`
- Publish directory: `.next`
- Node.js version: 18.20.8 (pinned via .nvmrc)
- Installs `@netlify/plugin-nextjs` for proper Next.js support
- Security headers configured
- Cache headers for static assets

### 2. **.nvmrc**

- Pins Node.js to version 18 LTS
- Ensures consistent build environment

### 3. **next.config.ts** (Enhanced)

- Security headers (X-Content-Type-Options, X-Frame-Options, etc.)
- Environment variable configuration
- TypeScript and ESLint settings
- Production optimizations
- Disabled source maps in production

### 4. **eslint.config.mjs** (Updated)

- Ignores `.next` and `node_modules` from linting
- Prevents build failures from generated code

### 5. **package.json** (Updated)

- Added `type-check` script for type validation
- Build command remains: `npm run build`

### 6. **Environment Files**

- `.env.example` - Template for required variables
- `.env.production` - Production environment configuration

### 7. **.gitignore** (Improved)

- Comprehensive patterns for build artifacts
- Netlify cache directories
- IDE and OS-specific files

## Deployment Steps

### 1. Connect Repository to Netlify

1. Go to [Netlify](https://netlify.com)
2. Click "New site from Git"
3. Select GitHub and authorize
4. Choose the `CareerCompanion` repository
5. Branch: `main`

### 2. Configure Environment Variables

In Netlify UI: **Site settings > Build & deploy > Environment**

Add:

```
NEXT_PUBLIC_GEMINI_API_KEY=<your-gemini-api-key>
```

Get your API key from: https://makersuite.google.com/app/apikey

### 3. Deploy

- Netlify will automatically:
  - Use Node 18 (from .nvmrc)
  - Run `npm run build`
  - Deploy the `.next` directory
  - Apply security headers
  - Configure caching

## Verification Checklist

- [x] Node version pinned to 18 LTS
- [x] TypeScript/ESLint errors fixed
- [x] Build succeeds locally with `npm run build`
- [x] netlify.toml configured
- [x] Environment variables documented
- [x] Security headers configured
- [x] Cache headers configured
- [x] All config files committed to Git

## Troubleshooting

If deployment fails:

1. **Check build logs** in Netlify UI
2. **Verify environment variables** are set
3. **Clear cache** in Netlify: Site settings > Build & deploy > Deploys > Clear cache and redeploy
4. **Check Node version**: Should be 18.x per .nvmrc
5. **Local build test**: Run `npm run build` locally to verify

## Production Optimizations Configured

- ✅ Static asset caching (1 year for immutable files)
- ✅ HTML caching (no-cache, must-revalidate)
- ✅ Security headers enabled
- ✅ Permissions policy restricting sensitive APIs
- ✅ Source maps disabled in production
- ✅ React strict mode enabled
- ✅ Compression enabled

## Support

For Netlify Next.js documentation:
https://docs.netlify.com/frameworks-and-lang/next-js/

For issues with the plugin:
https://github.com/netlify/next-runtime
