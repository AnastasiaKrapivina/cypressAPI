describe("testing api", () => {
  it("creating a user", () => {
    cy.request("POST", "https://petstore.swagger.io/v2/user", {
      id: 237,
      username: "name1",
      userStatus: 2,
    }).then((response) => {
      expect(response.body).be.eqls({
        code: 200,
        type: "unknown",
        message: "237",
      });
    });
    cy.request(`https://petstore.swagger.io/v2/user/name1`).then((response) => {
      expect(response.body).be.eqls({
        id: 237,
        username: "name1",
        userStatus: 2,
      });
    });
  });

  it("user edit", () => {
    cy.request("POST", "https://petstore.swagger.io/v2/user", {
      id: 238,
      username: "name2",
      userStatus: 2,
    });
    cy.request("PUT", "https://petstore.swagger.io/v2/user/name2", {
      id: 238,
      username: "name3",
      userStatus: 2,
    }).then((response) => {
      expect(response.body).be.eqls({
        code: 200,
        type: "unknown",
        message: "238",
      });
    });
    cy.request("https://petstore.swagger.io/v2/user/name3").then((response) => {
      expect(response.body).be.eqls({
        id: 238,
        username: "name3",
        userStatus: 2,
      });
    });
  });

  it("user delete", () => {
    cy.request("POST", "https://petstore.swagger.io/v2/user", {
      id: 240,
      username: "name5",
      userStatus: 2,
    }).then((response) => {
      expect(response.body).be.eqls({
        code: 200,
        type: "unknown",
        message: "240",
      });
    });
    cy.request("DELETE", "https://petstore.swagger.io/v2/user/name5", {
      id: 240,
      username: "name5",
      userStatus: 2,
    }).then((response) => {
      expect(response.body).be.eqls({
        code: 200,
        type: "unknown",
        message: "name5",
      });
    });
    cy.request({
      url: "https://petstore.swagger.io/v2/user/name5",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).be.eq(404);
    });
  });
});
