// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import apiData from "../fixtures/apiData.json";

Cypress.Commands.add("postApi", (idNamber, username) => {
  cy.request("POST", apiData.url, {
    id: idNamber,
    username: username,
    userStatus: 2,
  }).then((response) => {
    expect(response.body).be.eqls({
      code: 200,
      type: "unknown",
      message: String(idNamber),
    });
  });
});

Cypress.Commands.add("getApi", (id, username) => {
  cy.request(apiData.url + "/" + username).then((response) => {
    expect(response.body).be.eqls({
      id: id,
      username: username,
      userStatus: 2,
    });
  });
});

Cypress.Commands.add("putApi", (idNamber, username, usernameNew) => {
  cy.request("PUT", apiData.url + "/" + username, {
    id: idNamber,
    username: usernameNew,
    userStatus: 2,
  }).then((response) => {
    expect(response.body).be.eqls({
      code: 200,
      type: "unknown",
      message: String(idNamber),
    });
  });
});

Cypress.Commands.add("deleteApi", (idNamber, username) => {
  cy.request("DELETE", apiData.url + "/" + username, {
    id: idNamber,
    username: username,
    userStatus: 2,
  }).then((response) => {
    expect(response.body).be.eqls({
      code: 200,
      type: "unknown",
      message: username,
    });
  });
});

Cypress.Commands.add("getAfterDelete", (username) => {
  cy.request({
    url: apiData.url + "/" + username,
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).be.eq(404);
  });
});
