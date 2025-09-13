import { useCocktailStore } from "./store";
import { SimpleCocktail } from "../types/cockTailType";

// Mock cocktail data
const mockCocktail1: SimpleCocktail = {
   id: "1",
   name: "Mojito",
   instructions: "Mix rum with mint",
   image: "mojito.jpg",
   category: "Cocktail",
};

const mockCocktail2: SimpleCocktail = {
   id: "2",
   name: "Margarita",
   instructions: "Mix tequila with lime",
   image: "margarita.jpg",
   category: "Cocktail",
};

describe("Zustand Cocktail Store", () => {
   beforeEach(() => {
      useCocktailStore.setState({ favorites: [] });
   });

   it("should have empty favorites initially", () => {
      const { favorites } = useCocktailStore.getState();
      expect(favorites).toEqual([]);
   });

   it("should add cocktail to favorites", () => {
      const { addFavorite } = useCocktailStore.getState();

      addFavorite(mockCocktail1);

      const updatedState = useCocktailStore.getState();
      expect(updatedState.favorites).toHaveLength(1);
      expect(updatedState.favorites[0]).toEqual(mockCocktail1);
   });

   it("should add multiple favorites correctly", () => {
      const { addFavorite } = useCocktailStore.getState();

      addFavorite(mockCocktail1);
      addFavorite(mockCocktail2);

      const updatedState = useCocktailStore.getState();
      expect(updatedState.favorites).toHaveLength(2);
      expect(updatedState.favorites).toContain(mockCocktail1);
      expect(updatedState.favorites).toContain(mockCocktail2);
   });

   it("should remove cocktail from favorites", () => {
      const { addFavorite, removeFavorite } = useCocktailStore.getState();

      addFavorite(mockCocktail1);
      removeFavorite(mockCocktail1.id);

      const { favorites } = useCocktailStore.getState();
      expect(favorites).toHaveLength(0);
   });
});
