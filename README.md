# Vastu Anand Real Estate - Mumbai

A professional, modern real estate website built with React, featuring a clean yellow/gold theme and responsive design.

## 🎨 Features

- **Dynamic Navbar**: Transparent navbar that transitions to a beautiful yellow gradient on scroll
- **Hero Section**: Full-screen hero with background image (hero1.webp) and search functionality
- **Responsive Design**: Fully mobile-responsive with modern UI/UX
- **Professional Theme**: Attractive amber/yellow color scheme that's modern and professional
- **Clean Code**: Well-structured, maintainable code with constants and reusable components
- **Smooth Animations**: Transitions and hover effects throughout

## 🛠️ Tech Stack

- **React** 19.2.0
- **React Router DOM** for navigation
- **Tailwind CSS** (via CDN) for styling
- **Vite** for blazing-fast development

## 📁 Project Structure

```
src/
├── Components/
│   └── Layout/
│       ├── Footer.jsx          # Footer with social links and contact info
│       ├── Layout.jsx          # Main layout wrapper
│       └── Navbar.jsx          # Scroll-responsive navigation
├── Pages/
│   ├── About.jsx              # About page
│   ├── Contact.jsx            # Contact page
│   ├── Home.jsx               # Main landing page
│   └── Properties.jsx         # Properties listing page
├── constants/
│   ├── navigation.js          # Navigation links and contact info
│   └── theme.js              # Theme colors and configuration
├── App.jsx                   # Main app component with routes
├── main.jsx                  # App entry point
└── index.css                 # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd vastuannand-realestate-mumbai
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173` (or the port shown in terminal)

## 🎨 Theme Customization

The color theme can be customized in `src/constants/theme.js`. The current scheme uses:
- **Primary**: Amber (500-600)
- **Secondary**: Yellow (500-600)
- **Accent**: Gradient from amber-500 via yellow-500 to amber-600

## 📦 Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

## 🌟 Key Components

### Navbar
- Transparent by default
- Shows yellow gradient background after scrolling 50px
- Fully responsive with mobile hamburger menu
- Active link highlighting

### Home Page
- Hero section with hero1.webp background
- Property search filters
- Statistics section
- Features showcase
- Property types grid
- Call-to-action section

### Footer
- Company information
- Quick navigation links
- Contact details
- Social media links

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Development

### Code Quality
- Clean, readable code structure
- Reusable components
- Constants for configuration
- Proper component organization
- Semantic HTML
- Accessibility considerations

### Performance
- Optimized images
- Lazy loading where applicable
- Efficient re-renders
- Smooth animations with CSS transitions

## 📄 License

All rights reserved © 2025 Vastu Anand Real Estate

## 👥 Contact

For inquiries, please contact:
- Email: info@vastuanand.com
- Phone: +91 98765 43210
- Location: Mumbai, Maharashtra, India
