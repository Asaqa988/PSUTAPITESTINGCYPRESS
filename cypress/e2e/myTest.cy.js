/// <reference types= "cypress" />

describe("login", () => {
  it.skip("login with standard user ", () => {
    cy.visit("https://www.saucedemo.com/");

    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    // let numberOfItemsToAdd = 5;

    // for (let i = 0; i < numberOfItemsToAdd; i++) {
    //   cy.get(".btn").eq(i).click();
    //   cy.screenshot("sora");
    // }
    cy.get(".btn").first().click()

    cy.wait(3000)

  });

  it(' log in with problem user ', () => {
    cy.visit("https://www.saucedemo.com/");

    cy.get('[data-test="username"]').type("problem_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
  });
});
