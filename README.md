# Dream Neighborhood Admin Panel

The official **customer/admin dashboard** for [www.dreamneighborhood.com](https://www.dreamneighborhood.com).

This is a modern, high-performance admin interface built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, **Recharts**, and **Lucide icons**.

## Features

- **Modern Dark UI** with emerald brand accents matching your logo
- **Responsive sidebar navigation** (Dashboard, Listings, Neighborhoods, Analytics, Customers, Settings)
- **Real-time KPI cards** (Listings, Neighborhoods, Views, Conversion)
- **Interactive performance charts** (views + qualified leads)
- **Live listings table** with status badges
- **Neighborhood insights** section
- **Professional branding** using your provided logo
- **Fully typed** and production-ready foundation

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Charts**: Recharts
- **Icons**: Lucide React
- **Forms/Tables**: React Hook Form, TanStack Table, Zod
- **Notifications**: Sonner

## Getting Started

1. Install dependencies (already done):
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
dream-neighborhood-admin/
├── app/                 # Next.js App Router pages
├── components/ui/       # shadcn/ui components
├── lib/                 # Utilities
├── public/logo.png      # Your official logo
├── components.json      # shadcn configuration
└── README.md
```

## Next Steps (Recommended)

This is a solid, beautiful foundation. You can now:

- Connect to your backend API (Supabase, Firebase, or your existing Dream Neighborhood backend)
- Add authentication (Clerk, NextAuth, or Supabase Auth)
- Implement real data fetching for listings and neighborhoods
- Add more pages (Listings CRUD, Neighborhood editor, Analytics drill-downs)
- Deploy to Vercel

Would you like me to:
1. Add authentication (Clerk recommended)
2. Connect to a mock backend / sample data
3. Build out the **Listings** or **Neighborhoods** management pages next?
4. Add dark/light mode toggle?

Just say the word and we'll continue building this into a production-grade admin panel for Dream Neighborhood.

---

*Built with ❤️ for Dream Neighborhood Realty Co.*
