const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"http://automationpratice.com.br",
    //Adicionando a espera implícita com o default time
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
