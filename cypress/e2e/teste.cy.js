///<reference types='cypress'/>

describe('Teste - Formulario', () => {
  it('Acessar aplicação e preencher campos do formulário com sucesso', () => {
    cy.visit('https://testautomationpractice.blogspot.com/');
    cy.get('#name').type('Savio de Souza');
    cy.get('input[placeholder="Enter EMail"]').type('teste@gmail.com');
    cy.get('#phone').type('5199926458');
    cy.get('#textarea').type('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry')
    cy.get('#male').click();
    cy.get('input[type = "checkbox"]').check("tuesday");
    cy.get('#country').select('Brazil');
    cy.get('#colors').select('blue');
    cy.get('#animals').select('dog');
    cy.get('#datepicker').click();
    cy.get('a[data-date="24"]').click();
    cy.get('#datepicker').should('have.value','07/24/2025');
    cy.get('#txtDate').click();
    cy.get('a[data-date="12"]').click();
    cy.get('#txtDate').should('have.value','12/07/2025');
    cy.get('#singleFileInput').selectFile('cypress/fixtures/balao.jpg');
    cy.get('#singleFileInput').should('have.value', 'C:\\fakepath\\balao.jpg');

  })



})
