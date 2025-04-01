
import {faker} from '@faker-js/faker'

describe('tarefas',() => {

  beforeEach(() => {
   cy.clearLocalStorage();
   cy.visit('https://front.serverest.dev/login');
  })
  

  it('on-line', () =>{   //cenário 1
      cy.visit('https://front.serverest.dev/login') //step 1
      cy.title().should('eq','Front - ServeRest')   //step 2
  })

  it('Cadastro', () =>{   //cenário 2
    cy.visit('https://front.serverest.dev/cadastrarusuarios')
    cy.get('input[placeholder="Digite seu nome"]').type(faker.person.fullName())
    cy.get('input[placeholder="Digite seu email"]').type('USUARIO_TESTE@gmail.com')
    cy.get('input[id="password"]').type('usuario123');
    //cy.get('[data-testid="cadastrar"]').click()
    // //button[contains(text(), "Cadastrar" )]
    cy.contains('button','Cadastrar').click()
    cy.wait(5000)
   })

   
  it('informar o e-mail/Senha e confirmar', () =>{
    cy.visit('https://front.serverest.dev/login')
      //cy.get('input[id="registrarFrequenciaForm\:txCpf"]').type('12345678900');
      cy.get('input[id="email"]').type('USUARIO_TESTE@gmail.com')
      //cy.get('input[id="registrarFrequenciaForm\:txSenha"]').type('ab1d');
      cy.get('input[id="password"]').type('usuario123');
      cy.contains('button','Entrar').click()
      cy.wait(3000)
  })

  it('Pesquisar o item', () =>{
    cy.visit('https://front.serverest.dev/home')
    //captura de entrada de dados como usuario e senha
    cy.get('input[id="email"]').type('USUARIO_TESTE@gmail.com')
    cy.get('input[id="password"]').type('usuario123');

    //Função para pegar botões de click
    cy.contains('button','Entrar').click()
    cy.wait(2000)

    //captura de texto input[placeholder="Pesquisar Produtos"]
    //cy.get('[data-testid="pesquisar"]') exemplo de não utilizar
    cy.get('input[placeholder="Pesquisar Produtos"]').type('mouse')
    
    //Função para pegar botões de click
    cy.contains('button','Pesquisar').click()
  })


})