import { z } from "zod";

export const CocktailSchema = z.object({
   idDrink: z.string(),
   strDrink: z.string(),
   strInstructions: z.string(),
   strDrinkThumb: z.string(),
   strCategory: z.string(),
});

export const CocktailApiResponseSchema = z.object({
   drinks: z.array(CocktailSchema),
});

export const SimpleCocktailSchema = z.object({
   id: z.string(),
   name: z.string(),
   instructions: z.string(),
   image: z.string(),
   category: z.string(),
});

export const transformCocktail = (cocktail: Cocktail): SimpleCocktail => ({
   id: cocktail.idDrink,
   name: cocktail.strDrink,
   instructions: cocktail.strInstructions,
   image: cocktail.strDrinkThumb,
   category: cocktail.strCategory,
});

export type Cocktail = z.infer<typeof CocktailSchema>;
export type CocktailApiResponse = z.infer<typeof CocktailApiResponseSchema>;
export type SimpleCocktail = z.infer<typeof SimpleCocktailSchema>;
