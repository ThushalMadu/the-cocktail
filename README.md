### Installation

1. Download the repository

Go to the Project the-cocktail

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open your browser and navigate to:

```
http://localhost:3000
```

## Project Structure

```
the-cocktail/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Home page with random cocktails
│   ├── layout.tsx                # Root layout component
│   ├── globals.css               # Global styles
│   └── favourites/               # Favorites page
│       ├── page.tsx              # Favorites page component
│       └── FavouriteCockTails.tsx # Favorites list component
├── components/                   # Reusable UI components
│   ├── Header.tsx                # Navigation header
│   ├── ItemCard.tsx              # Cocktail card component
│   ├── FavoriteItemCard.tsx      # Favorite item card
│   ├── Loader.tsx                # Loader
│   └── QueryProvider.tsx         # React Query provider wrapper
├── lib/                          # Utilities and configuration
│   ├── store.ts                  # Zustand state management
│   ├── constants.ts              # App constants and text
│   └── hooks/                    # Custom React hooks
│       ├── useRandomCocktails.ts # Random cocktails hook
│       ├── useSearchCocktails.ts # Search functionality hook
│       └── useSearchDebounce.ts  # Debounced search hook
├── services/                     # API services
│   └── api.ts                    # TheCocktailDB API client
├── types/                        # TypeScript type definitions
│   └── cockTailType.ts           # Cocktail data types
└── public/                       # Static assets
    ├── cocktail.png              # App icons
    ├── favorite.png
    └── refresh.png
```

## Features

-  **Random Cocktails**: Discover new cocktails on the home page
-  **Search Functionality**: Search for specific cocktails with debounced input (minimum 2 characters). Clear search to return to random cocktails
-  **Favorites Management**: Add and remove cocktails from your favorites
-  **Responsive Design**: Responsive for mobile, tablet, and desktop
-  **Toast Notifications**: User notify when favourite item add and remove with toast notification
-  **State Management**: Manage favorites state using Zustand

## Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack

# Testing
npm run test         # Run all tests
npm run test:watch   # Run tests in watch mode
```

## Testing

This project includes comprehensive unit tests for all components, pages, and functions:

-  **Component Tests**: Testing UI components with React Testing Library
-  **API Tests**: Testing service layer functions
-  **Page Tests**: Testing page components integration

Test files are located alongside their respective components with `.test.tsx` extension.

## User Experience Features

-  **Responsive Grid Layout**: Adapts to different screen sizes
-  **Loading States**: Visual feedback during data fetching
-  **Empty States**: Helpful messages when no data is available
-  **Smooth Animations**: Enhanced interactions with CSS transitions
-  **Toast Notifications**: Real-time feedback for user actions
-  **Debounced Search**: Efficient search with reduced API calls

## Technologies Used

-  **Framework**: Next.js 15 with App Router
-  **Language**: TypeScript
-  **Styling**: Tailwind CSS
-  **State Management**: Zustand
-  **Data Fetching**: TanStack Query (React Query)
-  **API**: TheCocktailDB
-  **Testing**: Jest + React Testing Library
-  **Validation**: Zod
-  **Notifications**: React Toastify

## Responsive Design

The application is fully responsive and provides optimal viewing experience across:

Thank you
