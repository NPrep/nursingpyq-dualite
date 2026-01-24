/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#EAB308', // Yellow-500 (Readable Yellow)
          hover: '#CA8A04',   // Yellow-600
        },
        secondary: '#ffffff',
        accent: '#FEFCE8', // Yellow-50 (Very light yellow for backgrounds)
        text: {
          main: '#1a1a1a', // Dark grey/black
          muted: '#4a4a4a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px', // Restricting max width for readability (Wikipedia style)
        },
      },
    },
  },
  plugins: [],
}
