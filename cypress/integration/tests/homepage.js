describe('Homepage', () => {
    it('As a Guest I want to see on the Homepage a highlight slider', () => {
        cy.visit('http://practice.automationtesting.in/')
        cy.get('[id=n2-ss-6-arrow-next]').click({ multiple: true, force: true})
        cy.wait(2000)
        cy.get('[id=n2-ss-6-arrow-next]').click({ multiple: true, force: true})
        cy.wait(2000)
        cy.get('[id=n2-ss-6-arrow-previous]').click({ multiple: true, force: true})
    })

    it.only('As a Guest I want to see the latest arrivals on the Homepage', () => {
        cy.visit('http://practice.automationtesting.in/')
        cy.get('[class="themify_builder_sub_row clearfix gutter-default   sub_row_1-0-2"]')
    })
})