const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "qq75xh",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
