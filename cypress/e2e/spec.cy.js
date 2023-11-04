describe("testing api", () => {
  it("creating a user", () => {
    cy.postApi("237", "name1");
    cy.getApi(237, "name1");
  });

  it("user edit", () => {
    cy.postApi(237, "name2");
    cy.putApi(238, "name2", "name3");
    cy.getApi(238, "name3");
  });

  it("user delete", () => {
    cy.postApi(240, "name5");
    cy.deleteApi(240, "name5");
    cy.getAfterDelete("name5");
  });
});
