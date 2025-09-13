import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loader from "./Loader";

describe("Loader", () => {
   it("renders the loading text when not searching", () => {
      render(<Loader showResults={false} />);
      expect(screen.getByText("Loading cocktails...")).toBeInTheDocument();
   });

   it("renders the searching text when searching", () => {
      render(<Loader showResults={true} />);
      expect(screen.getByText("Searching cocktails...")).toBeInTheDocument();
   });
});
