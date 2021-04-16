function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 10 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(10);
    });
}


describe('Homepage', () => {
    beforeEach(() => {
        cy.visit('http://practice.automationtesting.in/')
    })
    it('As a Guest I want to see on the Homepage a highlight slider', () => {
        cy.get('[id=n2-ss-6-arrow-next]').click({ multiple: true, force: true})
        cy.wait(2000)
        cy.get('[id=n2-ss-6-arrow-next]').click({ multiple: true, force: true})
        cy.wait(2000)
        cy.get('[id=n2-ss-6-arrow-previous]').click({ multiple: true, force: true})
    })

    it('As a Guest I want to see the latest arrivals on the Homepage', () => {
        cy.get('[class="themify_builder_sub_row clearfix gutter-default   sub_row_1-0-2"]').children().should('have.length', 3)
    })

    it('As a Guest I am able to use the search bar to look for website content', () => {
        cy.get('[id="menu-icon"]').click()
        cy.get('[id=s]').type('{movetostart}HTML').type('{enter}')
        cy.url().should('eq', 'http://practice.automationtesting.in/?s=HTML')
    })

    it('As a Guest I want to check social media connections', () => {
        cy.get('[title="Facebook"]')
            .should('have.attr', 'href', 'https://www.facebook.com/automationtesting2016/')
            .should('have.attr', 'target', '_blank')
    })

    it('As a Guest I want to subscribe the page to receive notifications about the website', () => {
        cy.get('[placeholder="Your email address"]').type(uuidv4()+'test@test.io')
        cy.get('[value="Subscribe"]').click()
        cy.get('[class="mc4wp-alert mc4wp-success"]').contains('Thank you, your sign-up request was successful! Please check your email inbox to confirm.')
    })

})
