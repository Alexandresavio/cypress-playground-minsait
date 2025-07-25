describe('Teste - Formulario', () => {
  it('Acessar aplicação e preencher campos do formulário com sucesso', () => {
    cy.visit('https://testautomationpractice.blogspot.com/');
    cy.get('#name').type('Savio de Souza');
    cy.get('input[placeholder="Enter EMail"]').type('teste@gmail.com');
    cy.get('#phone').type('5199926458');
    cy.get('#textarea').type('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry')
    
  })

})
