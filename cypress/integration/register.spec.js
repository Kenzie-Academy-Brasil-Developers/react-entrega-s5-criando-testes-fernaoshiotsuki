import React from "react";

context("Submit CEP number and display returned values", () => {
  it("show an input and a searcn button, all functional", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);

    cy.get("input").type(13085415);
    cy.get("button").click();
  });

  it("shows the results to this searched CEP", () => {
    cy.contains("Logradouro");
    cy.contains("Número");
    cy.contains("Complemento");
    cy.get("input[value=SP]").should("have.value", "SP");
    cy.get("input[value=Campinas]").should("have.value", "Campinas");
  });
});
