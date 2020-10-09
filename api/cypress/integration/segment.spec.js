describe('Segment Testing', function() {

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


    })



    //Use Case Turn On and Off sensor
    it('should Turn On and Off sensor', function() {
        // cy.visit('/');

        const onButtonSelector =
            '#root > div.container > div.row.mt-4 > div:nth-child(2) > div > div > button:nth-child(3)';
        const offButtonSelector =
            '#root > div.container > div.row.mt-4 > div:nth-child(2) > div > div > button:nth-child(4)';

        cy.get(onButtonSelector).click();

        cy.get('.message').should('contain', 'Success');
        cy.wait(1000);
        cy.get(offButtonSelector).click();
        cy.get('.message').should('contain', 'Success');
    });

    it('should call error when send empty numbers', function() {
        // cy.visit('/');

        const submitBtn =
            '#root > div.container > div.row.mt-4 > div:nth-child(2) > div > div > div > form > button';
        cy.get(submitBtn).click();

        cy.get('.srv-validation-message').should('contain', 'required');
    });

    it('should send numbers', function() {
        // cy.visit('/');

        const onBtn = `#root > div.container.p-2 > div.row.mt-4 > div:nth-child(2) > div > div > button.btn.waves-effect.waves-light.btn-outline-blue`

        cy.get(onBtn).click()
        const segmentInputSelector =
            '#root > div.container > div.row.mt-4 > div:nth-child(2) > div > div > div > form > div > input';
        cy.get(segmentInputSelector).type('1234');

        cy.get(segmentInputSelector).should('have.value', '1234');
    });

    it('should make custom number on 4 Digit 7-Segment Display', function() {
        // cy.visit('/');

        const segmentInputSelector =
            '#root > div.container > div.row.mt-4 > div:nth-child(2) > div > div > div > form > div > input';
        cy.get(segmentInputSelector).type('12347777');

        const submitBtn =
            '#root > div.container > div.row.mt-4 > div:nth-child(2) > div > div > div > form > button';

        cy.get(segmentInputSelector).should('have.value', '12347777');

        cy.get(submitBtn).click();

        cy.get('.srv-validation-message').should('contain', 'greater');


    });
});