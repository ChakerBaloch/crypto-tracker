import { useQuery } from "@tanstack/react-query";
import { fetchCryptoPrices } from "@/services/crypto";

export function useCryptoPrices() {
  return useQuery({
    queryKey: ["cryptoPrices"],
    queryFn: fetchCryptoPrices,
    staleTime: 60000, // Cache for 1 minute
  });
}
