/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './src/**/*.{js,ts,css}'],
  theme: {
    extend: {
      colors: {
        navy: '#0F172A',
        brand: {
          blue: '#2563EB',
          teal: '#14B8A6',
          light: '#F8FAFC',
          text: '#1E293B',
          muted: '#64748B',
          border: '#E2E8F0'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 23, 42, 0.08)'
      }
    }
  },
  plugins: []
};
