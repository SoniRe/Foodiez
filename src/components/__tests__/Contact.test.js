import { render, screen } from "@testing-library/react";
import Contact from "./../Contact";
import "@testing-library/jest-dom";
import contactImage from "./../../assets/aboutImage.avif";

describe("Grouping Test Cases", () => {
  it("Should Load Contact Us Component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
  });
  it("Should Load Button Inside Contact Component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    //Assertion
    expect(button).toBeInTheDocument();
  });
  it("Should Load Button Inside Contact Component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("Eg:Aditya Verma");
    //Assertion
    expect(inputName).toBeInTheDocument();
  });
});
