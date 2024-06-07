describe('My First Test', () => {
  it('Visitar site NuKenzie', () => {
    //acessa o site NuKenzie
    cy.visit('http://localhost:3000');

    //verifica se esta na pagina inicial
    cy.contains('Centralize o controle das suas finanças');

    //pega o botao iniciar e clica nele
    cy.get('button').click();

    //verifica se esta na pagina de dashboard
    cy.contains('Resumo Financeiro');

    //
    cy.get('.formDescription > input').type('Conta de Agua');
    cy.get('.formValueAndType > :nth-child(1) > input').type('150');
    cy.get('#type').select('Despesa');
    cy.get('.formButton > button').click();

    cy.get('.formDescription > input').type('Conta de Luz');
    cy.get('.formValueAndType > :nth-child(1) > input').type('250');
    cy.get('#type').select('Despesa');
    cy.get('.formButton > button').click();

    cy.get('.formDescription > input').type('Salário');
    cy.get('.formValueAndType > :nth-child(1) > input').type('1050');
    cy.get('#type').select('Entrada');
    cy.get('.formButton > button').click();

    //verificar o tamanho da lista
    // cy.get('.ulList')


    // cy.visit('https://example.cypress.io')

    // cy.contains('type').click()

    // cy.url().should('include', '/commands/actions')
  })
})