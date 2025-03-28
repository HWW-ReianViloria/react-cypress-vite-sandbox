describe('template spec', () => {
    it('should show that products page works', () => {
        cy.visit('localhost:3000');

        cy.get('[reian-testid=products]').click();

        cy.viewport('iphone-6');

        // cy.get('[reian-testid=products] > *').should(($items) => {
        //     // Select all direct children of the container
        //     const width = parseFloat($items.first().css('width'));
        //     expect(width).to.be.closeTo(48, 2); // Expect width to be close to 48% (allowing for margins/padding)
        // });

        // cy.get('.container > *')
        //     .invoke('css', 'width')
        //     .then(parseFloat)
        //     .should('be.closeTo', 48, 2);

        cy.viewport('macbook-15');
    });
});
