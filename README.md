# Namaste React

A modern food ordering app built with React, Parcel, and React Router. This project is designed as a learning-focused restaurant discovery app where users can browse restaurants, search by name, filter highly rated places, and view restaurant details.

## Live Demo

GitHub Pages ready:

- Production site: https://arjunkhade.github.io/Namaste-React/

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

## Notes for GitHub Pages

This project is configured for static hosting on GitHub Pages. The build script uses a relative public URL so assets work correctly when served from a GitHub Pages subpath.

## Screenshots

Add screenshots here if you want to showcase the app visually.

## License

ISC

## Author

Arjun Khade
