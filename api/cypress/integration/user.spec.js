describe('User', function() {
    beforeEach(function() {
      // go to the site
      cy.visit('/');
    });
  
    // UC101: login to the website
    it('should login user', function() {
      //   cy.visit('/');
  
      const usernameSelector =
        '#root > div.row.mt-5 > div > div > div > form > input:nth-child(2)';
      const passwordSelector =
       '#root > div.row.mt-5 > div > div > div > form > input:nth-child(4)';
        const submit =
        '#root > div.row.mt-5 > div > div > div > form > span > input'
      cy.get(usernameSelector).type('joel1010');
      cy.get(passwordSelector).type('10102001');
      cy.get(submit).click();
      const dataPanel =
       '#root > div.container-fluid.mt-3 > div > button'
      cy.get(dataPanel).should('contain', 'Logout');
    });



  });
  