import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        nordic: {
          dark: '#0f172a',
          blue: '#0284c7',
          ice: '#f8fafc'
        }
      }
    }
  },
  plugins: []
}

export default config
