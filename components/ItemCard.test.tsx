import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ItemCard from "./ItemCard";

describe("ItemCard Component", () => {
   const mockProps = {
      title: "Mojito",
      description:
         "A refreshing cocktail made with white rum, sugar, lime juice, soda water, and mint.",
      imageUrl:
         "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
      onClickFavorite: jest.fn(),
      isFavorite: false,
   };

   beforeEach(() => {
      render(<ItemCard {...mockProps} />);
   });

   describe("Rendering test with title", () => {
      it("should render without crashing", () => {
         expect(screen.getByText("Mojito")).toBeInTheDocument();
      });
   });

   describe("Content Display", () => {
      it("should display the title correctly", () => {
         const title = screen.getByRole("heading", { name: /mojito/i });
         expect(title).toBeInTheDocument();
      });

      it("should display the description correctly", () => {
         const description = screen.getByText(
            /a refreshing cocktail made with white rum/i
         );
         expect(description).toBeInTheDocument();
      });

      it("should handle long titles with line-clamp", () => {
         const longTitle =
            "This is a very qeqweh asdasd title that fghfghfg be tertertert vbnvbnvbn two lines werwerwerwer";
         render(<ItemCard {...mockProps} title={longTitle} />);
         expect(screen.getByText(longTitle)).toHaveClass("line-clamp-2");
      });

      it("should handle long descriptions with line-clamp", () => {
         const longDescription =
            "This is a very asdasda lines asdasd and sdfsdf overflow sdfsdfsdf when it asdasd the qweqweqw";
         render(<ItemCard {...mockProps} description={longDescription} />);
         expect(screen.getByText(longDescription)).toHaveClass(
            "line-clamp-4",
            "overflow-hidden"
         );
      });
   });
});
