import { BASEURL } from "@/lib/constants";
import {
   CocktailApiResponseSchema,
   transformCocktail,
   SimpleCocktail,
} from "@/types/cockTailType";

const handleApiResponse = async (response: Response) => {
   if (!response.ok) {
      console.error("Error fetching API:", response.statusText);
      console.error("HTTP error! status:", response.status);
   }
   return response.json();
};

const getRandomFiveCocktails = async (): Promise<SimpleCocktail[]> => {
   try {
      const cocktails: SimpleCocktail[] = [];
      const seenIds = new Set<string>();

      while (cocktails.length < 5) {
         const API_URL = `${BASEURL}/random.php`;
         const response = await fetch(API_URL);
         const data = await handleApiResponse(response);

         const parsedData = CocktailApiResponseSchema.safeParse(data);
         if (parsedData.success && parsedData.data.drinks.length > 0) {
            const cocktail = transformCocktail(parsedData.data.drinks[0]);
            if (!seenIds.has(cocktail.id)) {
               seenIds.add(cocktail.id);
               cocktails.push(cocktail);
            }
         }
      }

      return cocktails;
   } catch (error) {
      console.error("Error fetching cocktails:", error);
      return [];
   }
};

export { getRandomFiveCocktails };
