import { getSearchCocktails } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export const useSearchCocktails = (query: string) => {
   return useQuery({
      queryKey: ["search-cocktails", query],
      queryFn: () => getSearchCocktails(query),
      enabled: query.length > 1, // Only search when query is 2+ characters
      staleTime: 5 * 60 * 1000, // 5 minutes
   });
};
