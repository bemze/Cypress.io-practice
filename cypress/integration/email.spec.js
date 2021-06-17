/// <reference types = "cypress" />

describe("My page testing", () => {

    before(() => cy.visit("http://egzaminas.lt/"))
    beforeEach(() => cy.eyesOpen({
        appName: "Visual",
        batchName: "email testing",
        // browser: [
        //     { name: 'chrome', width: 1024, height: 768 },
        //     { name: 'chrome', width: 800, height: 600 },
        //     { name: 'firefox', width: 1024, height: 768 },
        //     { deviceName: 'iPhone X' },
        // ]
    }))
    afterEach(() => cy.eyesClose())
    it("should check info about the author", () => {
        cy.eyesCheckWindow('main page')
        cy.get('h2').should("have.text", "Mantas Zabiela")
    })

    it("should login", () => {
        cy.eyesCheckWindow('login page')
        cy.get('[href="http://egzaminas.lt/login"]').click()
        cy.get('#email').type("bemze007@yahoo.com").should('have.value', 'bemze007@yahoo.com')
        cy.contains('#email').should('not.have.length.greaterThan', "50").should('be.greaterThan', '3')
        cy.get('#password').type("123")
        cy.get('#remember').check()
        cy.get('.btn-primary').click()
    })
    it("should check if working authors, books, user links", () => {
        cy.eyesCheckWindow('user page')
        cy.get(':nth-child(1) > #navbarDropdown').click()
        cy.get(':nth-child(2) > #navbarDropdown').click()
        cy.get(':nth-child(3) > #navbarDropdown').click()
        cy.contains('You are logged in!')
    })

    it("should log out", () => {
       
        cy.get(':nth-child(3) > #navbarDropdown')
        cy.get('.nav-item.show > .dropdown-menu > .dropdown-item').click()
        cy.eyesCheckWindow('final')
    })

})  
