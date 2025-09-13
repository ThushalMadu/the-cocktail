import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./page";

jest.mock("./RandomCockTail", () => {
   return function MockRandomCockTail() {
      return <div data-testid="random-cocktail">Random Cocktail Component</div>;
   };
});

describe("Home Page Component", () => {
   beforeEach(() => {
      render(<Home />);
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

      it("should render the RandomCockTail component", () => {
         expect(screen.getByTestId("random-cocktail")).toBeInTheDocument();
      });
   });

   describe("Content Display", () => {
      it("should display the main heading with correct text and styling", () => {
         const heading = screen.getByRole("heading", { level: 1 });
         expect(heading).toBeInTheDocument();
         expect(heading).toHaveTextContent("Welcome to TheCocktailDB");
      });

      it("should display the description paragraph with correct text", () => {
         const description = screen.getByText(
            /an open, crowd-sourced database of drinks and cocktails/i
         );
         expect(description).toBeInTheDocument();
         expect(description).toHaveClass(
            "text-lg",
            "text-white",
            "max-w-2xl",
            "mx-auto"
         );
      });

      it("should display complete description text", () => {
         const fullDescription = screen.getByText(
            "An open, crowd-sourced database of drinks and cocktails from around the world. We also offer a free cocktail API for anyone wanting to use it."
         );
         expect(fullDescription).toBeInTheDocument();
      });
   });
});
