# Crypto Price Tracker

##  Overview

Crypto Price Tracker is a **Next.js web application** that provides real-time cryptocurrency prices. It integrates with **CoinGecko's API** to fetch market data and presents an intuitive UI for users to track prices efficiently. 

##  Features

-  **Real-time Crypto Prices** – Fetches live prices from CoinGecko.
-  **Optimized API Calls** – Uses **React Query** for caching and background updates.
-  **Responsive UI** – Built with **TailwindCSS** for seamless mobile and desktop views.


##  Project Structure

```
web-app/
│── src/
│   ├── app/               # Next.js App Router
│   ├── components/        # Reusable UI Components
│   ├── hooks/             # Custom Hooks
│   ├── lib/               # Utility Functions
│   ├── services/          # API Services (CoinGecko Integration)
│   ├── styles/            # Global Styles (TailwindCSS)
│   ├── types/             # TypeScript Definitions
│── tests/                 # Unit & Integration Tests
│── public/                # Static Assets
│── next.config.ts         # Next.js Configuration
│── tailwind.config.mjs    # TailwindCSS Configuration
│── package.json           # Project Dependencies
│── tsconfig.json          # TypeScript Configuration
```

##  Getting Started

### Prerequisites
Ensure you have the following installed:

- **Node.js** (>= 16.x)
- **npm** or **yarn**
- **TypeScript** (recommended)

### Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/your-username/crypto-price-tracker.git
cd crypto-price-tracker
npm install
```

### Environment Setup

Create a `.env.local` file and add your API configuration:

```sh
NEXT_PUBLIC_COINGECKO_API_URL=https://api.coingecko.com/api/v3
```

### Running the Project

Start the development server:

```sh
npm run dev
```

### Running Tests

```sh
npm run test
```

##  Deployment

To build and deploy:

```sh
npm run build
npm start
```

##  License
This project is licensed under the **MIT License**.

