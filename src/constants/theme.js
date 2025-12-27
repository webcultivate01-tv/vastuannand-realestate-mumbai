/**
 * Theme Configuration
 * Professional yellow/gold color scheme for Vastu Anand Real Estate
 */

export const COLORS = {
  // Primary brand colors - Modern amber/yellow palette
  primary: {
    light: 'amber-400',
    main: 'amber-500',
    dark: 'amber-600',
    gradient: 'from-amber-500 via-yellow-500 to-amber-600',
  },
  
  // Secondary colors
  secondary: {
    light: 'yellow-400',
    main: 'yellow-500',
    dark: 'yellow-600',
  },
  
  // Neutral colors
  neutral: {
    white: 'white',
    black: 'gray-900',
    gray: {
      50: 'gray-50',
      100: 'gray-100',
      300: 'gray-300',
      400: 'gray-400',
      600: 'gray-600',
      700: 'gray-700',
      800: 'gray-800',
      900: 'gray-900',
    },
  },
};

export const NAVBAR_CONFIG = {
  scrollThreshold: 50,
  height: 'h-20',
  scrolledBackground: 'bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600',
  transparentBackground: 'bg-transparent',
};

export const TRANSITION = {
  default: 'transition-all duration-300',
  fast: 'transition-all duration-200',
  slow: 'transition-all duration-500',
};

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};
