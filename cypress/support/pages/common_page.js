///<reference types="cypress"/>

export default{
    acessarCadastroUsuario(){
        cy.visit('/')
        cy.get('a[href="/register"]').click()
        .get('div[class="account_form"]')
    },
    acessarLoginPage(){
        cy.visit('/')
        cy.get('.fa-user').click()
        .get('div[class="account_form"]')
    }
}