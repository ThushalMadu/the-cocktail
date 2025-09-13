import { SimpleCocktail } from "@/types/cockTailType";
import { create } from "zustand";

export type CocktailState = {
   favorites: SimpleCocktail[];
};

export type CocktailActions = {
   addFavorite: (cocktail: SimpleCocktail) => void;
   removeFavorite: (cocktailId: string) => void;
   isFavorite: (cocktailId: string) => boolean;
};

export type CocktailStore = CocktailState & CocktailActions;

export const useCocktailStore = create<CocktailStore>()((set, get) => ({
   favorites: [],
   addFavorite: (cocktail: SimpleCocktail) =>
      set((state) => ({
         favorites: state.favorites.some((fav) => fav.id === cocktail.id)
            ? state.favorites
            : [...state.favorites, cocktail],
      })),

   removeFavorite: (cocktailId: string) =>
      set((state) => ({
         favorites: state.favorites.filter((fav) => fav.id !== cocktailId),
      })),

   isFavorite: (cocktailId: string) => {
      const state = get();
      return state.favorites.some((fav) => fav.id === cocktailId);
   },
}));
