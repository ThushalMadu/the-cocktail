import { getRandomFiveCocktails, getSearchCocktails } from "./api";

global.fetch = jest.fn();
const mockFetch = fetch as jest.MockedFunction<typeof fetch>;

// Mock constants
jest.mock("../lib/constants", () => ({
   BASEURL: "https://www.thecocktaildb.com/api/json/v1/1",
}));

describe("API Service Testing", () => {
   beforeEach(() => {
      jest.clearAllMocks();
   });

   it("should fetch 5 random cocktails successfully", async () => {
      // Mock Random 5 Data
      const mockResponses = [
         {
            drinks: [
               {
                  idDrink: "1",
                  strDrink: "Mojito",
                  strInstructions: "Mix",
                  strDrinkThumb: "image1.jpg",
                  strCategory: "Cocktail",
               },
            ],
         },
         {
            drinks: [
               {
                  idDrink: "2",
                  strDrink: "Margarita",
                  strInstructions: "Shake",
                  strDrinkThumb: "image2.jpg",
                  strCategory: "Cocktail",
               },
            ],
         },
         {
            drinks: [
               {
                  idDrink: "3",
                  strDrink: "Daiquiri",
                  strInstructions: "Blend",
                  strDrinkThumb: "image3.jpg",
                  strCategory: "Cocktail",
               },
            ],
         },
         {
            drinks: [
               {
                  idDrink: "4",
                  strDrink: "Martini",
                  strInstructions: "Stir",
                  strDrinkThumb: "image4.jpg",
                  strCategory: "Cocktail",
               },
            ],
         },
         {
            drinks: [
               {
                  idDrink: "5",
                  strDrink: "Whiskey Sour",
                  strInstructions: "Shake",
                  strDrinkThumb: "image5.jpg",
                  strCategory: "Cocktail",
               },
            ],
         },
      ];

      mockFetch
         .mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(mockResponses[0]),
         } as Response)
         .mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(mockResponses[1]),
         } as Response)
         .mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(mockResponses[2]),
         } as Response)
         .mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(mockResponses[3]),
         } as Response)
         .mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve(mockResponses[4]),
         } as Response);

      const result = await getRandomFiveCocktails();

      expect(result).toHaveLength(5);
      expect(result[0].name).toBe("Mojito");
      expect(result[1].name).toBe("Margarita");
      expect(mockFetch).toHaveBeenCalledTimes(5);
   });

   it("should search cocktails successfully", async () => {
      const mockSearchResponse = {
         drinks: [
            {
               idDrink: "456",
               strDrink: "Margarita",
               strInstructions: "Shake with ice",
               strDrinkThumb: "margarita.jpg",
               strCategory: "Cocktail",
            },
         ],
      };

      mockFetch.mockResolvedValue({
         ok: true,
         json: () => Promise.resolve(mockSearchResponse),
      } as Response);

      const result = await getSearchCocktails("margarita");

      expect(result).toHaveLength(1);
      expect(result[0].name).toBe("Margarita");
      expect(mockFetch).toHaveBeenCalledWith(
         "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
      );
   });
});
