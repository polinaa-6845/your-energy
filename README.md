# Your Energy

A modern fitness web application that helps users discover exercises, build workout routines, and achieve their fitness goals. Built with vanilla JavaScript and powered by a comprehensive exercise database API.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)

## Features

- **Exercise Catalog** — Browse 300+ exercises organized by body parts, muscles, and equipment
- **Smart Search** — Filter and find exercises quickly with real-time search
- **Exercise Details** — View comprehensive information including video demonstrations, calories burned, time, and difficulty ratings
- **Favorites** — Save exercises to your personal collection (persisted in localStorage)
- **Rating System** — Rate exercises and share feedback with other users
- **Quote of the Day** — Get daily motivational quotes to stay inspired
- **Newsletter** — Subscribe to receive fitness tips and updates
- **Responsive Design** — Fully optimized for mobile (320px+), tablet (768px+), and desktop (1440px+)
- **Dark Theme** — Eye-friendly dark interface for comfortable browsing

## Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic markup with BEM methodology |
| CSS3 | Modern styling with CSS Custom Properties (variables) |
| JavaScript (ES6+) | Application logic with modular architecture |
| Vite | Lightning-fast build tool & development server |
| Axios | Promise-based HTTP client for API requests |
| iziToast | Elegant notification popups |
| basicLightbox | Lightweight modal windows |
| modern-normalize | CSS reset for cross-browser consistency |

## Project Structure

```
src/
├── css/                    # Stylesheets (modular CSS architecture)
│   ├── layout/             # Header, footer styles
│   ├── variables.css       # CSS custom properties
│   └── styles.css          # Main stylesheet (imports)
├── js/
│   ├── api/                # API client and endpoints
│   │   ├── client.js       # Axios instance configuration
│   │   ├── exercises.api.js# Exercise-related API calls
│   │   └── subscribeApi.js # Newsletter subscription
│   ├── components/         # UI components
│   │   ├── categories-component.js
│   │   ├── exercise-modal.js
│   │   ├── exercises.js
│   │   ├── favorites.js
│   │   ├── quote.js
│   │   └── rating-modal.js
│   ├── const/              # Constants and configurations
│   ├── handlers/           # Event handlers
│   ├── listeners/          # Event listeners
│   └── utils/              # Utility functions
├── partials/               # HTML partials (header, footer, modals)
├── img/                    # Images, icons, and SVG sprite
├── fonts/                  # Custom fonts (DM Sans)
└── public/                 # Static assets (favicon)
```

## Pages

| Page | Description |
|------|-------------|
| **Home** | Main page with hero section, exercise categories, and filters |
| **Favorites** | Personal collection of saved exercises |

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/polinaa-6845/your-energy.git
cd your-energy
```

2. Install dependencies:

```bash
npm ci
```

3. Start development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (output in `/dist`) |
| `npm run preview` | Preview production build locally |
| `npm run format` | Format code with Prettier |

## API Reference

This project uses the [Your Energy API](https://your-energy.b.goit.study) for exercise data.

### Base URL

```
https://your-energy.b.goit.study/api
```

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/filters` | Get exercise categories (body parts, muscles, equipment) |
| `GET` | `/exercises` | Get paginated exercises with filtering options |
| `GET` | `/exercises/:id` | Get detailed exercise information |
| `PATCH` | `/exercises/:id/rating` | Submit exercise rating |
| `POST` | `/subscription` | Subscribe to newsletter |
| `GET` | `/quote` | Get daily motivational quote |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Live Demo

**[View Live Demo](https://polinaa-6845.github.io/your-energy/)**

## License

ISC
