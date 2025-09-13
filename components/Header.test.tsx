import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";

describe("Header Component", () => {
   beforeEach(() => {
      render(<Header />);
   });

   describe("Rendering Header", () => {
      it("should render the header element", () => {
         const header = screen.getByRole("banner");
         expect(header).toBeInTheDocument();
      });

      it("should render without crashing", () => {
         expect(screen.getByRole("banner")).toBeInTheDocument();
      });
   });

   describe("Content rendering", () => {
      it('should display "Favourites" text', () => {
         expect(screen.getByText("Favourites")).toBeInTheDocument();
         expect(screen.getByText("Favourites")).toHaveClass(
            "text-[16px]",
            "font-normal"
         );
      });

      it("should have all required elements present", () => {
         expect(screen.getByAltText("Cocktail Image")).toBeInTheDocument();
         expect(screen.getByAltText("favorite Image")).toBeInTheDocument();
         expect(screen.getByText("Favourites")).toBeInTheDocument();
         expect(screen.getAllByRole("link")).toHaveLength(2);
      });
   });

   describe("Navigation Links", () => {
      it("should render home link with correct href", () => {
         const homeLink = screen.getByRole("link", { name: /cocktail image/i });
         expect(homeLink).toBeInTheDocument();
         expect(homeLink).toHaveAttribute("href", "/");
      });

      it("should render favourites link with correct href and text", () => {
         const favouritesLink = screen.getByRole("link", {
            name: /favourites/i,
         });
         expect(favouritesLink).toBeInTheDocument();
         expect(favouritesLink).toHaveAttribute("href", "/favourites");
         expect(screen.getByText("Favourites")).toBeInTheDocument();
      });
   });
});
