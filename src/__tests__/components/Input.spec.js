import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../../components/Search";

describe("Input tag", () => {
  test("should be a functional input tag", () => {
    render(<Search />);
    expect(screen.getByPlaceholderText("Insira o CEP")).toBeTruthy();
  });
});
