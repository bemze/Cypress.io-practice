/// <reference types="cypress" />

export function navigate() {
    cy.visit('https://www.seb.lt/')
}
export function bot() {
    cy.get(':nth-child(4) > .actions01 > :nth-child(1) > .main > span').click()
}