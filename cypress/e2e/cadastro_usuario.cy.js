///<reference types="cypress"/>


import cadastro_usuario_page from '../support/pages/cadastro_usuario_page'
import common_page from '../support/pages/common_page'
import cadastro_page from '../support/pages/cadastro_usuario_page'
import { faker } from "@faker-js/faker";

describe('Cadastro de usuario', () => {
  
  beforeEach('Acessar cadastro de usuário', () =>{
    common_page.acessarCadastroUsuario()
  })
  
  it('Campo nome vazio', () => {
    cadastro_usuario_page.clicarBtnCadastrar()
    cadastro_usuario_page.validarMensagemErro('O campo nome deve ser prenchido')
  })
  
  it('Campo email vazio', () => {

    cadastro_usuario_page.preencheNome(faker.person.fullName())
    cadastro_usuario_page.clicarBtnCadastrar()
    cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
  })
  
  it('Campo email invalido', () => {
    cadastro_usuario_page.preencheNome(faker.person.fullName())
    cadastro_usuario_page.preencheEmail(faker.person.fullName())
    cadastro_usuario_page.clicarBtnCadastrar()
    cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')

    
  })
  
  it('Campo senha invalida', () => {
    cadastro_usuario_page.preencheNome(faker.person.fullName())
    cadastro_usuario_page.preencheEmail(faker.internet.email())
    cadastro_usuario_page.preencherSenha('1235')
    cadastro_usuario_page.clicarBtnCadastrar()
    cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')

  })
  
  it('Cadastro senha vazio', () => {
    
    cadastro_usuario_page.preencheNome(faker.person.fullName())
    cadastro_usuario_page.preencheEmail(faker.internet.email())
    cadastro_usuario_page.clicarBtnCadastrar()
    cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
  })
  it.only('Cadastro com sucesso', async () => {

    //Criando uma variavel assincrona com o "async" para que so seja
    //executada quando de fato tiver valor na variavel
    //Com isso nao quebra a execucao do codigo
    const name = await faker.person.fullName()

    cadastro_usuario_page.preencheNome(name)
    cadastro_usuario_page.preencheEmail(faker.internet.email())
    cadastro_usuario_page.preencherSenha('123546')
    cadastro_usuario_page.clicarBtnCadastrar()
    cadastro_usuario_page.validarModalSucesso(name)
   })
})