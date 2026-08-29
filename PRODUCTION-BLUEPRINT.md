# VIBE Production Blueprint

## Recommended stack
- Next.js storefront/admin
- Vercel hosting/CDN
- Supabase Postgres + Auth + Storage
- Server-side product/collection APIs
- Secure payment processor appropriate for the lawful product catalog and target markets
- Shipping/carrier integration
- Transactional email provider
- Analytics + conversion events

## Core entities
Products, variants, collections, inventory, customers, addresses, carts, orders, order items, discounts, subscriptions, reviews, popups, homepage sections, media, admin users, audit log.

## Admin modules
Dashboard, Orders, Products, Collections, Customers, Inventory, Discounts, Reviews, Popups, Content, Analytics, Settings.

## Important
The current static demo intentionally stores cart/admin demo data in the browser. It is for client presentation only and is not a production commerce backend.
