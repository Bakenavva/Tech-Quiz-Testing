/// <reference types="cypress" />
/// <reference types="@cypress/react18" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Mount a React component using Cypress React18
     * @param component The React component to mount
     */
    mount(component: React.ReactNode): Chainable<unknown>;
  }
}