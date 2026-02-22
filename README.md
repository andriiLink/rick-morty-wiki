# Rick & Morty Multiverse Explorer

A modern, high-performance web application for exploring the **Rick & Morty** universe. Built with Next.js 15 (App Router), this project demonstrates advanced data fetching techniques, clean UI/UX, and a fully type-safe architecture.

## Live Demo

Experience the multiverse here:

Demo: [https://rick-morty-wiki-beige-six.vercel.app/]

## Key Features

* **Server-Side Rendering (SSR):** Lightning-fast initial page loads and superior SEO.

* **Advanced Search & Filter:** Instant results with state-in-URL synchronization (perfect for sharing links).

* **Character Insights:** Detailed pages for every character, location, and episode.

* **Seamless UX:** Uses React Suspense and custom Skeleton Screens to eliminate layout shift during loading.

* **Responsive Design:** Mobile-first approach using Tailwind CSS for a flawless experience on any device.

* **Themed 404 Pages:** Custom error handling inspired by the show's multiverse aesthetic.

## Tech Stack

* **Framework** - Next.js 15 (App Router)

* **Language** - TypeScript

* **Styling** - Tailwind CSS

* **Data Fetching** - Native Fetch API (Server Components)

* **API** - Rick and Morty API


## Project Structure

├── app/                  # Next.js App Router (Pages & Layouts)
│   ├── (root)/           # Main character explorer grid
│   ├── characters/       # Individual character profile routes
│   ├── locations/        # Global locations index
│   ├── episodes/         # Episodes list & details
│   └── layout.tsx        # Global SEO, Fonts, and Navbar
├── src/
│   ├── components/       # Reusable UI (Cards, Filters, Skeletons)
│   ├── constants/        # Contsants (Navigation Items)
│   ├── lib/              # API wrapper and helper functions
│   └── types/            # Centralized TypeScript definitions
└── public/               # Static assets & custom Favicon


## Setup & Installation

**Follow these steps to run the project on your machine:**

Clone the repository:

``` git clone [https://github.com/your-username/rick-morty-nextjs.git](https://github.com/your-username/rick-morty-nextjs.git)
cd rick-morty-nextjs ```


Install dependencies:

``` npm install ```


Launch development server:

``` npm run dev ```


Production Build:

``` npm run build ```


## Design Philosophy

Typography: We use Montserrat for bold, scientific-style headings and Inter for clean, readable body text.

Feedback: Interactive elements use subtle scale transformations and smooth transitions to feel premium.

## Contact & Connect

**Andrii Linkevych**

Developed with passion for the Rick & Morty community 🥒
