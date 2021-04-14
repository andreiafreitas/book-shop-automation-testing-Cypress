describe('Homepage', () => {
    it('As a Guest I want to see on the Homepage a highlight slider', () => {
        cy.visit('http://practice.automationtesting.in/')
        cy.get('[id=n2-ss-6-arrow-next]').click({ multiple: true, force: true})
        cy.wait(2000)
        cy.get('[id=n2-ss-6-arrow-next]').click({ multiple: true, force: true})
        cy.wait(2000)
        cy.get('[id=n2-ss-6-arrow-previous]').click({ multiple: true, force: true})
    })

    it('As a Guest I want to see the latest arrivals on the Homepage', () => {
        cy.visit('http://practice.automationtesting.in/')
        cy.get('[class="themify_builder_sub_row clearfix gutter-default   sub_row_1-0-2"]').children().should('have.length', 3)
    })

    //it.only('As a Guest I am able to use the search bar to look for website content', () => {
    //    cy.visit('http://practice.automationtesting.in/')
    //   cy.click('[id="menu-icon"]').get('[id=s]').scrollIntoView().type('{movetostart}HTML')
    //})

    it.('As a Guest I want to check social media connections', () => {
        cy.visit('http://practice.automationtesting.in/')

        cy
            .get('[title="Facebook"]')
            .should('have.attr', 'href', 'https://www.facebook.com/automationtesting2016/')
            .should('have.attr', 'target', '_blank')

            // .invoke('removeAttr', 'target').click(); testing just one button

    })

    it.only('As a Guest I want to subscribe the page to receive notifications about the website', () => {
        cy.visit('http://practice.automationtesting.in/')

    })
})
