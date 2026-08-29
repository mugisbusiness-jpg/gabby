# VIBE Premium Commerce Client Demo

A zero-build static Vercel demo of the VIBE storefront + customer + backend flow.

## Included
- Premium homepage with real VIBE visual assets
- Focus / Social / Chill / Love premium cards
- Best sellers and Shop All
- Dynamic product detail page
- Slide-out cart with free-shipping progress
- Branded checkout demo
- Login, account dashboard, order tracking
- VIBE Merch Coming Soon section (caps, hoodie, tote)
- Email discount popup
- Admin dashboard
- Add Product form with optional image upload
- Products added in Admin immediately appear in the same browser's storefront via localStorage
- Client presentation page: `client-preview.html`

## Fastest Vercel deploy
1. Unzip the project.
2. Install Node.js if needed.
3. Open a terminal inside this folder.
4. Run: `npx vercel`
5. Sign in to Vercel and accept the defaults.
6. For the final public URL run: `npx vercel --prod`

No build command is needed. This is a static client demo.

## Production phase
Replace localStorage with Supabase/Postgres, add secure admin authentication, product media storage, payment processor integration, real order state, transactional email, shipping, taxes, analytics, CMS content controls, subscriptions, reviews, and legal/compliance configuration.
