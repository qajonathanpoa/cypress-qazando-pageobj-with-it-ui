///<reference types="cypress"/>

export default{
    btnLogin(){
        cy.get('#btnLogin').click()
    },
    validarMensagemErro(mensagem){
        cy.get('.invalid_input')
        .then((elemento) =>{
            expect(elemento).to.be.visible
            expect(elemento.text()).eq(mensagem)
        })
    },
    preencheEmail(email){
        cy.get('#user').type(email)
    },
    preencherSenha(senha){
        cy.get('#password').type(senha)
    },
    validarModalLogin(nome){

        cy.get('#swal2-title')
        .should('be.visible')
        .should('have.text','Login realizado')

        cy.get('#swal2-html-container')
        .should('be.visible')
        .should('have.text', `Olá ${nome}`)
    }

}