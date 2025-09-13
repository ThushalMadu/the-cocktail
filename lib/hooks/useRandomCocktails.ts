import { getRandomFiveCocktails } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export const useRandomCocktails = () => {
   return useQuery({
      queryKey: ["random-cocktails"],
      queryFn: getRandomFiveCocktails,
      staleTime: 5 * 60 * 1000, // 5 minutes
   });
};
