///<reference types="cypress"/>

export default{
    clicarBtnCadastrar(){
        cy.get('#btnRegister').click()
      
    },
    validarMensagemErro(mensagem){
        cy.get('.errorLabel')
        .then((elemento) =>{
            expect(elemento).to.be.visible
            expect(elemento.text()).eq(mensagem)
        })
    },
    preencheNome(nome){
        cy.get('#user').type(nome)
    },
    preencheEmail(email){
        cy.get('#email').type(email)
    },
    preencherSenha(senha){
        cy.get('#password').type(senha)
    },
    validarModalSucesso(nome){

        cy.get('#swal2-title')
        .should('be.visible')
        .should('have.text','Cadastro realizado!')

        cy.get('#swal2-html-container')
        .should('be.visible')
        .should('have.text', `Bem-vindo ${nome}`)
    }
}
