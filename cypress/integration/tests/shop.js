function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 10 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(10);
    });
}

describe('Shop as a customer', () => {
    beforeEach( () => {
        cy.visit('http://practice.automationtesting.in/my-account/')
        cy.get('#username').type('test@test.io')
        cy.get('#password').type('sfdgfhgjklj;koilukytredgfchgvhbhjiu8976iytghbjnm,')
        cy.get('[name=login]').click()
        cy.url().should('eq', 'http://practice.automationtesting.in/my-account/')
        cy.visit('http://practice.automationtesting.in/shop/')
    })
    it('I want to filter books by price range', () => {
        cy.get('[class="ui-slider-handle ui-state-default ui-corner-all"]').first()
            .trigger('mousedown', { which: 1 })
            .trigger('mousemove',74.5, 0, { force: true })
            .trigger('mouseup', { force: true });
        cy.get('[class="ui-slider-handle ui-state-default ui-corner-all"]')
            .trigger('mousedown', { which: 1 })
            .trigger('mousemove',-40, 0, { force: true })
            .trigger('mouseup', { force: true });
        cy.get('[class="button"]').click()
        cy.url().should('eq', 'http://practice.automationtesting.in/shop/?min_price=300&max_price=400')
    })
    it('I want to write and submit a review', () => {
        const reviewUuid = "Good book" + uuidv4();
        cy.get('[title="Android Quick Start Guide"]').click()
        cy.url().should('eq', 'http://practice.automationtesting.in/product/android-quick-start-guide/')
        cy.get('[class="reviews_tab"]').click()
        cy.get('[class="star-5"]').click()
        cy.get('[id="comment"]').type(reviewUuid)
        cy.get('[id="submit"]').click()
        cy.get('[id="comments"]').contains(reviewUuid)
    })
    it('I want to use the breadcrumb menu to go back', () => {
        cy.get('.post-169 > .woocommerce-LoopProduct-link > .attachment-shop_catalog').click()
        cy.get('.woocommerce-breadcrumb > [href="http://practice.automationtesting.in/product-category/android/"]').click()
        cy.get('.woocommerce-breadcrumb > a').click()
        cy.url().should('eq', 'http://practice.automationtesting.in/')
    })
});