///<reference types="cypress"/>

import common_page from '../support/pages/common_page'
import login_page from '../support/pages/login_page'
import { faker } from "@faker-js/faker";

describe('Login', () => {

  beforeEach('Acessar Login Page', () =>{
    common_page.acessarLoginPage()
  })

  it('E-mail invalido', () => {
    
    login_page.preencheEmail(faker.person.firstName())  
    login_page.btnLogin()
    login_page.validarMensagemErro('E-mail inválido.')
  })

  it('Senha invalida', () => {
    login_page.preencheEmail(faker.internet.email())  
    login_page.preencherSenha('123')
    login_page.btnLogin()
    login_page.validarMensagemErro('Senha inválida.')
  })

  it('Senha e email invalidos', () => {
    login_page.preencheEmail('test!ig.com')  
    login_page.preencherSenha('123')
    login_page.btnLogin()
    login_page.validarMensagemErro('E-mail inválido.')
        
  })



  it('Login com sucesso', async() => {

    const email = await faker.internet.email()

    login_page.preencheEmail(email)
    login_page.preencherSenha(faker.internet.password({ length: 6 }))
    login_page.btnLogin()
    login_page.validarModalLogin(email)
  })

})