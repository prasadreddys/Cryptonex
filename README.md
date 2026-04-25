# Cryptonex

A simple cryptocurrency dashboard built with React, TypeScript, and Vite.

## Features

- Display top 10 cryptocurrencies with real-time prices from CoinGecko API
- Simple wallet interface with mock balances
- Responsive design
- Fast development with Vite

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to `http://localhost:5173`

## Build

To build for production:
```bash
npm run build
```

## Technologies Used

- React 19
- TypeScript
- Vite
- Axios for API calls
- CoinGecko API for cryptocurrency data
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
