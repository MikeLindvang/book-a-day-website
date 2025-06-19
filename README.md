# Sales Boilerplate Next.js App

This repository contains a Next.js sales landing page and simple admin editor for managing content blocks. It features:

- Live-updating preview via BroadcastChannel
- Published-flag logic to hide draft metadata on public pages
- Content blocks with dropdown-driven styling controls

## 🎨 Styling Updates

- Responsive admin editor layout (stacked on small screens)
- Improved form field styling (inputs, textareas, selects)
- Polished public page preview styles for hero image, headings, and descriptions
- Cleaned up global and component CSS modules for brand colors and spacing

## 🚀 Vercel Deployment

1. **Configure Environment Variables**

   Copy `.env.local.example` to `.env.local` and fill in your local credentials:

   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your MongoDB URI, admin credentials, NEXTAUTH_URL, and secret
   ```

2. **Add Vercel Environment Variables**

3. **Deploy**

   ```bash
   vercel --prod
   ```

   Preview deployments are created on each pull request; production deploys on the `main` branch.

## 🧪 Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

To sign in, visit http://localhost:3000/api/auth/signin and log in with your admin credentials. Admin routes are under `/admin` and require authentication.
