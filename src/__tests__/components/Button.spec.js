import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../../components/Search";

describe("Button tag onCLick check", () => {
  test("should be a functional button tag", () => {
    render(<Search />);
    expect(screen.getByRole("button")).toBeTruthy();
  });
});
