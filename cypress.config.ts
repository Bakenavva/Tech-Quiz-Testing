import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    specPattern: "cypress/component/**/*.cy.{js,ts,jsx,tsx}",
  },

  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {
    },
    baseUrl: "http://localhost:3001",
  },
});