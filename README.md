# Namaste React

A modern food ordering app built with React, Parcel, and React Router. This project is designed as a learning-focused restaurant discovery app where users can browse restaurants, search by name, filter highly rated places, and view restaurant details.

## Live Demo

- Vercel: https://namaste-react-woad.vercel.app/
- GitHub Pages: https://arjunkhade.github.io/Namaste-React/

## Features

- Restaurant listing home page
- Search functionality by restaurant name
- Filter for top-rated restaurants
- Restaurant detail pages with menu information
- Lazy-loaded grocery route
- Responsive, modern UI
- Built using React Router for client-side navigation

## Tech Stack

- React 18
- React Router DOM
- Parcel bundler
- JavaScript
- CSS

## Project Structure

```bash
src/
├── App.js
├── components/
│   ├── About.js
│   ├── Body.js
│   ├── Contact.js
│   ├── Error.js
│   ├── Grocery.js
│   ├── Header.js
│   ├── RestrorantCard.js
│   ├── RestaurantMenu.js
│   ├── Shimmer.js
│   └── ...
├── utils/
│   ├── constant.js
│   └── useRestaurantMenu.js
├── data.js
└── index.js
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Run locally

```bash
npm start
```

This starts the app with Parcel in development mode.

### Production build

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

This script builds the app and publishes the `dist` folder to the `gh-pages` branch using `gh-pages`.

### Deploy to Vercel

1. Push the project to GitHub.
2. In [Vercel](https://vercel.com/), select **Add New → Project** and import the repository.
3. Keep the detected project settings, or set:
   - **Framework Preset:** Other
   - **Build Command:** `npm run build:vercel`
   - **Output Directory:** `dist`
4. Select **Deploy**.

The included `vercel.json` configures these build settings and routes client-side URLs back to the app entry page, so refreshing routes such as `/about` or `/restaurant/1` works.

## Hosting Notes

The default `npm run build` uses relative asset URLs for GitHub Pages. Vercel uses `npm run build:vercel`, which builds assets from the domain root. Keep the two build commands separate so each host serves assets correctly.

## Screenshots

Add screenshots here if you want to showcase the app visually.

## License

ISC

## Author

Arjun Khade
