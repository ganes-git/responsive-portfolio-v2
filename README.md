# responsive-portfolio-v2

## 🔍 Project Overview
An advanced, highly accessible, and responsive personal developer portfolio website. This project is a task given during a web development internship. It showcases structured, semantic HTML5 markup coupled with modern CSS3 Grid and Flexbox layout systems, a mobile-first responsive architecture, and a dynamic Light/Dark mode theme switcher.


## 🎯 Learning Objectives
- **CSS Grid and Flexbox layouts:** Structured pages and layouts without floats or positioning hacks.
- **Mobile-first responsive design:** Fluid structures that adapt seamlessly across devices, with media queries expanding the base mobile design.
- **CSS custom properties and design tokens:** A unified theme system built using standard CSS variables on `:root` and overridden via class-level styling.
- **Light/dark mode with localStorage:** Preserving user preference across page loads.

## 📁 File Structure
```
responsive-portfolio-v2/
├── .gitignore          # Environment and editor build exclusions
├── README.md           # Project documentation and setup instructions
├── index.html          # Homepage with a grid-based Hero section
├── about.html          # About page structured with main content and a sidebar
├── projects.html       # Projects grid with dynamic project articles
├── contact.html        # Accessible contact form validation demo
├── avatar.png          # High-fidelity developer profile avatar
├── theme.js            # JavaScript handler for theme toggling and localStorage persistence
└── css/
    ├── reset.css       # Clean stylesheet reset to normalize browser elements
    ├── variables.css   # System design tokens (fonts, spacing, light/dark color mappings)
    ├── layout.css      # Core grid and flexbox definitions (mobile-first defaults)
    ├── components.css  # Buttons, cards, navigation interactive styles
    ├── responsive.css  # Breakpoint media queries (tablet, desktop, wide screens)
    └── theme.css       # Comfort-focused filters and transitions for switching modes
```

## 🚀 Live Demo
🔗 **Live Site:** *(Will be updated after GitHub Pages deployment)*

## 🛠️ How to Run Locally
To review this portfolio locally on your machine, you can run a simple local web server:

1. Clone or download the repository to your desktop.
2. Open your terminal (PowerShell, Bash, or Command Prompt) and navigate to the project directory:
   ```bash
   cd responsive-portfolio-v2
   ```
3. Start a Python HTTP server (Python 3 is required):
   ```bash
   python -m http.server 8080
   ```
4. Open your web browser and navigate to:
   [http://localhost:8080](http://localhost:8080)

## 🎨 Theme System
The website features a hybrid light/dark mode system driven by CSS Custom Properties and JavaScript:

- **CSS Variables:** Default colors are assigned to variables under the `:root` pseudo-selector.
- **Dark Mode Overrides:** When the `.dark-mode` class is applied to the `<body>` element, variable colors swap values to dark mode equivalents.
- **Dynamic Switch Button:** A `theme.js` script checks for existing user preference in `localStorage` immediately upon parsing (to prevent a flash of unstyled theme).
- **Persistent State:** User selections are saved to `localStorage` key `'theme'` as either `'dark'` or `'light'`.
