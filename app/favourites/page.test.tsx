import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Favourites from "./page";

jest.mock("./FavouriteCockTails", () => {
   return function MockFavouriteCockTails() {
      return (
         <div data-testid="favourite-cocktail">
            Favourite Cocktail Component
         </div>
      );
   };
});

describe("Favourites Page Component", () => {
   beforeEach(() => {
      render(<Favourites />);
   });

   describe("Rendering", () => {
      it("should render without crashing", () => {
         expect(screen.getByRole("main")).toBeInTheDocument();
      });

      it("should render with correct main container structure", () => {
         const main = screen.getByRole("main");
         expect(main).toHaveClass(
            "flex",
            "flex-col",
            "gap-8",
            "row-start-2",
            "items-center",
            "justify-start",
            "pt-4"
         );
      });

      it("should render the FavouriteCockTails component", () => {
         expect(screen.getByTestId("favourite-cocktail")).toBeInTheDocument();
      });
   });
});
