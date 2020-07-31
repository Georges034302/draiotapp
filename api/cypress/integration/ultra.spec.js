describe('Ultra Testing', function() {
  beforeEach(function() {
    // go to the site
    cy.visit('/');

    const usernameSelector =
    '#root > div.row.mt-5 > div > div > div > form > input:nth-child(2)';
  const passwordSelector =
    '#root > div.row.mt-5 > div > div > div > form > input:nth-child(4)';
  const submit =
    '#root > div.row.mt-5 > div > div > div > form > span > input';
  cy.get(usernameSelector).type('joel1010');
  cy.get(passwordSelector).type('10102001');
  cy.get(submit).click();
  const dataPanel = '#root > div.container-fluid.mt-3 > div > button';
  cy.get(dataPanel).should('contain', 'Logout');


  });

  it('should have on and off button', function() {
    //   cy.visit('/');

    const onButtonSelector =
    '#root > div.container.p-2 > div:nth-child(1) > div:nth-child(1) > div > div > button.btn.waves-effect.waves-light.btn-outline-blue';
    const offButtonSelector =
      '#root > div.container.p-2 > div:nth-child(1) > div:nth-child(1) > div > div > button.btn.waves-effect.waves-light.btn-blue';
    cy.get(onButtonSelector).should('have.text', 'On');
    cy.get(offButtonSelector).should('have.text', 'Off');
  });

  // Use Case UC201
  it('should have panel to display data', function() {
    const dataPanel =
      '#root > div.container > div:nth-child(1) > div:nth-child(1) > div > div > h4:nth-child(2) > a';
    cy.get(dataPanel).should('contain', 'Data');
  });

  it('Ultrasonic Units', function() {
    const dataPanel =
      '#root > div.container > div:nth-child(1) > div:nth-child(1) > div > div > h4:nth-child(2) > a';
    cy.get(dataPanel).should('contain', 'Data');
  });

  
});
