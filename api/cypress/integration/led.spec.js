describe('LED Testing', function() {
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

  it('should has on and off RED Led', function() {
    //   cy.visit('/');

    const onButtonSelector =
      '#root > div.container > div.row.mt-4 > div:nth-child(1) > div > div:nth-child(2) > button:nth-child(1)';
    const offButtonSelector =
      '#root > div.container > div.row.mt-4 > div:nth-child(1) > div > div:nth-child(2) > button:nth-child(2)';
    cy.get(onButtonSelector).should('have.text', 'On');
    cy.get(offButtonSelector).should('have.text', 'Off');
  });

  it('should has on and off Blue Led', function() {
    //   cy.visit('/');

    const onButtonSelector =
      '#root > div.container > div.row.mt-4 > div:nth-child(1) > div > div:nth-child(3) > button:nth-child(1)';
    const offButtonSelector =
      '#root > div.container > div.row.mt-4 > div:nth-child(1) > div > div:nth-child(3) > button:nth-child(2)';
    cy.get(onButtonSelector).should('have.text', 'On');
    cy.get(offButtonSelector).should('have.text', 'Off');
  });

  it('should has on and off Yellow Led', function() {
    //   cy.visit('/');

    const onButtonSelector =
      '#root > div.container > div.row.mt-4 > div:nth-child(1) > div > div:nth-child(4) > button:nth-child(1)';
    const offButtonSelector =
      '#root > div.container > div.row.mt-4 > div:nth-child(1) > div > div:nth-child(4) > button:nth-child(2)';
    cy.get(onButtonSelector).should('have.text', 'On');
    cy.get(offButtonSelector).should('have.text', 'Off');
  });

  it('should has on and off Green Led', function() {
    //   cy.visit('/');

    const onButtonSelector =
      '#root > div.container > div.row.mt-4 > div:nth-child(1) > div > div:nth-child(3) > button:nth-child(1)';
    const offButtonSelector =
      '#root > div.container > div.row.mt-4 > div:nth-child(1) > div > div:nth-child(3) > button:nth-child(2)';
    cy.get(onButtonSelector).should('have.text', 'On');
    cy.get(offButtonSelector).should('have.text', 'Off');
  });

  it('should Control the LED', function() {
    //   cy.visit('/');

    const onButtonSelector =
      '#root > div.container > div.row.mt-4 > div:nth-child(1) > div > div:nth-child(3) > button:nth-child(1)';
    const offButtonSelector =
      '#root > div.container > div.row.mt-4 > div:nth-child(1) > div > div:nth-child(3) > button:nth-child(2)';
    cy.get(onButtonSelector).click();
    cy.get(offButtonSelector).click();
  });
});
