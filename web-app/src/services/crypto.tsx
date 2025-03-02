import axios from "axios";

const API_URL = "https://api.coingecko.com/api/v3/coins/markets";

/**
 * Fetch cryptocurrency prices from CoinGecko API
 * @returns {Promise<Record<string, number>>} - Object with coin IDs as keys and prices as values
 */
export async function fetchCryptoPrices(): Promise<Record<string, number>> {
  try {
    console.log(" Fetching crypto prices from API...");
    
    const { data } = await axios.get(API_URL, {
      params: { vs_currency: "usd", ids: "bitcoin,ethereum,ripple,litecoin,cardano" },
    });

    // Extract only prices
    const prices: Record<string, number> = {};
    data.forEach((coin: { id: string; current_price: number }) => {
      prices[coin.id] = coin.current_price;
    });

    console.log("New Crypto Prices:", prices); // Debugging log
    return prices;
  } catch (error) {
    
    throw new Error("Failed to fetch cryptocurrency prices");
  }
}
