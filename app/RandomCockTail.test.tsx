import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RandomCockTail from "./RandomCockTail";

// Mock All the External Components
jest.mock("../components/ItemCard", () => ({ title, onClickFavorite }: any) => (
   // Real Item card was tested in its own test file so here i mock sample one.
   <div data-testid="cocktail-card">
      <h3>{title}</h3>
      <button onClick={onClickFavorite}>Add Favorite</button>
   </div>
));

jest.mock("react-toastify", () => ({
   ToastContainer: () => <div>Toast</div>,
   toast: jest.fn(),
   Bounce: "bounce",
}));

jest.mock("../lib/hooks/useRandomCocktails", () => ({
   useRandomCocktails: () => ({
      data: [
         {
            id: "1",
            name: "Mojito",
            instructions: "Mix rum",
            image: "https://www.thecocktaildb.com/images/media/drink/tqyrpw1439905311.jpg",
            category: "Cocktail",
         },
      ],
      isFetching: false,
      refetch: jest.fn(),
      isRefetching: false,
   }),
}));

jest.mock("../lib/hooks/useSearchCocktails", () => ({
   useSearchCocktails: () => ({ data: [], isLoading: false }),
}));

jest.mock("../lib/store", () => ({
   useCocktailStore: () => ({
      addFavorite: jest.fn(),
      isFavorite: () => false,
   }),
}));

describe("RandomCockTail Component", () => {
   const renderComponent = () => {
      const queryClient = new QueryClient({
         defaultOptions: { queries: { retry: false } },
      });
      return render(
         <QueryClientProvider client={queryClient}>
            <RandomCockTail />
         </QueryClientProvider>
      );
   };

   it("should render main elements", () => {
      renderComponent();

      expect(
         screen.getByPlaceholderText("Search cocktails...")
      ).toBeInTheDocument();
      expect(screen.getByText("Refresh")).toBeInTheDocument();
      expect(screen.getByTestId("cocktail-card")).toBeInTheDocument();
      expect(screen.getByText("Mojito")).toBeInTheDocument();
   });

   it("should update search input when typing", () => {
      renderComponent();

      const searchInput = screen.getByPlaceholderText("Search cocktails...");
      fireEvent.change(searchInput, { target: { value: "mojito" } });
      expect(searchInput).toHaveValue("mojito");
   });

   it("should handle refresh button click", () => {
      renderComponent();

      const refreshButton = screen.getByText("Refresh");
      fireEvent.click(refreshButton);
      expect(refreshButton).toBeInTheDocument();
   });

   it("should handle adding to favorites", () => {
      renderComponent();

      const favoriteButton = screen.getByText("Add Favorite");
      fireEvent.click(favoriteButton);
      expect(favoriteButton).toBeInTheDocument();
   });
});
