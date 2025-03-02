"use client";

import { useState } from "react";
import { Providers } from "./providers";
import Sidebar from "@/components/Sidebar";
import CryptoCard from "@/components/CryptoCard";
import { useCryptoPrices } from "@/hooks/useCryptoPrices";
import "@/styles/Home.css";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: prices, isLoading, error } = useCryptoPrices();

  const filteredPrices = prices
    ? Object.entries(prices).filter(([coinId]) =>
        coinId.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <main className="home-container">
      <Providers>
        {/* Sidebar */}
        <Sidebar />

        {/* Search Bar  */}
        <div className="mobile-header">
          <input
            type="text"
            placeholder="Search Stocks"
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Main Content */}
        <div className="content">
          <div className="crypto-cards">
            {isLoading && (
              <p className="text-center text-gray-600">Loading prices...</p>
            )}
            {error && (
              <p className="text-center text-red-500">
                Failed to load prices. Please try again later.
              </p>
            )}
            {!isLoading &&
              !error &&
              filteredPrices.map(([coinId, price]) => (
                <CryptoCard key={coinId} name={coinId} price={price} />
              ))}
          </div>
        </div>
      </Providers>
    </main>
  );
}
