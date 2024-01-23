///<reference types = "Cypress"/>
describe('The unit test suit for travel website', () => {
  it('verify tabs on the page', () => {
    cy.visit('http://localhost:3000')
    //cy.get('#tab1 > form > :nth-child(1) > .label').should("be.visible")
    //cy.get('#tab1 > form > .row > :nth-child(1) > .input-group > .label').should("be.visible")
    //cy.get('#tab1 > form > .row > :nth-child(2) > .input-group > .label').should("be.visible")
    //cy.get(':nth-child(3) > .label').should("be.visible")
    //cy.get('.checkbox-row > .m-r-45').should("be.visible")
    //cy.get('.checkbox-row > :nth-child(2)').should("be.visible")
    //cy.get('#tab1 > form > .btn-submit').should("be.visible")

  })

  it('verify text of tabs on the page', () => {
    cy.visit('http://localhost:3000')
    cy.get('#tab1 > form > :nth-child(1) > .label'). should("have.text", "Going to")
    cy.get('#tab1 > form > .row > :nth-child(1) > .input-group > .label'). should("have.text", "check-in")
    cy.get('#tab1 > form > .row > :nth-child(2) > .input-group > .label'). should("have.text", "check-out")
    cy.get(':nth-child(3) > .label'). should("have.text", "travellers")
    cy.get('.checkbox-row > .m-r-45'). should("have.text", "add a flight")
    cy.get('.checkbox-row > :nth-child(2)'). should("have.text", "add a car")
    cy.get('#tab1 > form > .btn-submit'). should("have.text", "search")
  
  
    //cy.contains ('Going to').should("be.visible")
    //cy.contains ('check-in').should("be.visible")
    //cy.contains ('check-out').should("be.visible")
    //cy.contains ('travellers').should("be.visible")
    //cy.contains ('add a flight').should("be.visible")
    //cy.contains ('add a car').should("be.visible")
    //cy.contains ('search').should("be.visible")
  

    cy.get('[type="going to"]').should("be.visible")
    cy.get('[type="check-in"]').should("be.visible")
    cy.get('[type="check-out"]').should("be.visible")
    cy.get('[type="travellers"]').should("be.visible")
    cy.get('[type="add a flight"]').should("be.visible")
    cy.get('[type="add a car"]').should("be.visible")
    cy.get('[type="search"]').should("be.visible")

  })

})