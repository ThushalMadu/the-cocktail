import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FavouriteCockTails from "./FavouriteCockTails";

// Mock All the External Components
jest.mock(
   "../../components/FavoriteItemCard",
   () =>
      ({ title, onClickFavorite }: any) =>
         (
            // Real Item card was tested in its own test file so here i mock sample one.
            <div data-testid="cocktail-card">
               <h3>{title}</h3>
               <button onClick={onClickFavorite}>Remove Favorite</button>
            </div>
         )
);

jest.mock("react-toastify", () => ({
   ToastContainer: () => <div>Toast</div>,
   toast: jest.fn(),
   Bounce: "bounce",
}));

jest.mock("../../lib/store", () => ({
   useCocktailStore: () => ({
      favorites: [
         {
            id: "1",
            name: "Mojito",
            instructions: "Mix ingredients and enjoy",
            image: "https://www.thecocktaildb.com/images/media/drink/tqyrpw1439905311.jpg",
            category: "Cocktail",
         },
      ],
      removeFavorite: jest.fn(),
   }),
}));

describe("FavouriteCockTails Component", () => {
   const renderComponent = () => {
      const queryClient = new QueryClient({
         defaultOptions: { queries: { retry: false } },
      });
      return render(
         <QueryClientProvider client={queryClient}>
            <FavouriteCockTails />
         </QueryClientProvider>
      );
   };

   it("should render main elements", () => {
      renderComponent();
      expect(screen.getByText("Mojito")).toBeInTheDocument();
   });

   it("should handle removing from favorites", () => {
      renderComponent();

      const favoriteButton = screen.getByText("Remove Favorite");
      fireEvent.click(favoriteButton);
      expect(favoriteButton).toBeInTheDocument();
   });
});
