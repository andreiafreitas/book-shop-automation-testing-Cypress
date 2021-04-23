import * as utils from '../../utils';


describe('Registration', () => {
    beforeEach(() => {
        cy.visit('http://practice.automationtesting.in/my-account/')
    })

    it('As a guest I want to register an account to have access to the website', () => {
        cy.get('#reg_email').type(utils.uuidv4()+'test@test.io')
        cy.get('#reg_password').type('sfdgfhgjklj;koilukytredgfchgvhbhjiu8976iytghbjnm,')
        cy.get('[name=register]').click()
        cy.url().should('eq', 'http://practice.automationtesting.in/my-account/')
    })

    it('Guest forgot to input password', () => {
        cy.get('#reg_email').type(utils.uuidv4()+'test@test.io')
        cy.get('[name=register]').click()
        cy.get('[class="woocommerce-error"]').contains('Error: Please enter an account password.')
    })
});


