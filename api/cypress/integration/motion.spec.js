describe('Motion Testing', function() {
    beforeEach(function() {
        // go to the site
        cy.visit('/');

        const usernameSelector =
            '#root > div.row.mt-5 > div > div > div > form > input:nth-child(2)';
        const passwordSelector =
            '#root > div.row.mt-5 > div > div > div > form > input:nth-child(4)';
        const submit =
            '#root > div.row.mt-5 > div > div > div > form > span > input';
        cy.get(usernameSelector).type('Georges034302');
        cy.get(passwordSelector).type('Darkside@666');
        cy.get(submit).click();
        const dataPanel = '#root > div.container-fluid.mt-3 > div > button';
        cy.get(dataPanel).should('contain', 'Logout');
    });

    it('should has on and off button', function() {
        //   cy.visit('/');

        const onButtonSelector =
            '#root > div.container > div:nth-child(1) > div:nth-child(2) > div > div > button:nth-child(3)';
        const offButtonSelector =
            '#root > div.container > div:nth-child(1) > div:nth-child(2) > div > div > button:nth-child(4)';
        cy.get(onButtonSelector).should('have.text', 'On');
        cy.get(offButtonSelector).should('have.text', 'Off');
    });

    it('should have panel to display data', function() {
        const dataPanel =
            '#root > div.container.p-2 > div:nth-child(1) > div:nth-child(2) > div > div > h4:nth-child(2) > button';

        cy.get(dataPanel).should('contain', 'o');
    });
});