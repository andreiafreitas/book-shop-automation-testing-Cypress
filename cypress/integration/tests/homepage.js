function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 10 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(10);
    });
}

beforeEach(() => {
    cy.visit('http://practice.automationtesting.in/')
})

describe('Homepage', () => {
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

    //it.only('As a Guest I am able to use the search bar to look for website content', () => {
    //    cy.visit('http://practice.automationtesting.in/')
    //   cy.click('[id="menu-icon"]').get('[id=s]').scrollIntoView().type('{movetostart}HTML')
    //})

    it('As a Guest I want to check social media connections', () => {
        cy.get('[title="Facebook"]')
            .should('have.attr', 'href', 'https://www.facebook.com/automationtesting2016/')
            .should('have.attr', 'target', '_blank')

            // .invoke('removeAttr', 'target').click(); testing just one button
    })

    it('As a Guest I want to subscribe the page to receive notifications about the website', () => {
        cy.get('[placeholder="Your email address"]').type(uuidv4()+'test@test.io')
        cy.get('[value="Subscribe"]').click()
        cy.get('[class="mc4wp-alert mc4wp-success"]')
    })

})
