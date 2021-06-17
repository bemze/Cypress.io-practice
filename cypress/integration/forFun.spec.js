/// <reference types = "cypress" />


describe('bandymas su visual testingu', () => {
    before(() => {
        cy.visit('https://www.ebay.com/')
        cy.get('#gdpr-banner-accept').click()

    })
    beforeEach(() => cy.eyesOpen({
        appName: "Visual",
        batchName: "bandymas",
        browser: [
            { name: 'chrome', width: 1024, height: 768 },
            { name: 'chrome', width: 800, height: 600 },
            { name: 'firefox', width: 1024, height: 768 },
            { deviceName: 'iPhone X' },
        ]
    }))
    afterEach(() => cy.eyesClose())

    it("should search toys", () => {
        cy.eyesCheckWindow('pirmas')
        cy.get('#gh-ac').type("toys")
        cy.eyesCheckWindow('antras')
        cy.get('#gh-btn').click()
        cy.eyesCheckWindow('final')
    })
})
