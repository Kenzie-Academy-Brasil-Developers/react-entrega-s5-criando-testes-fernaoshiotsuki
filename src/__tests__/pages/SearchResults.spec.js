import { fireEvent, render, screen } from "@testing-library/react";

import Search from "../../components/Search";

import React from "react";
import { LocateCepProvider } from "../../providers/CepProvider";

describe("Button tag onCLick check", () => {
  it("should set input value as a valid CEP", () => {
    render(
      <>
        <LocateCepProvider>
          <Search />
        </LocateCepProvider>
      </>
    );

    const inputCEP = screen.getByPlaceholderText("Insira o CEP");
    const cepDemo = 13085415;
    const searchButton = screen.getByRole("button");

    fireEvent.change(inputCEP, { target: { value: cepDemo } });
    fireEvent.click(searchButton);

    expect(Number(inputCEP.value)).toBe(Number(cepDemo));
  });
});
