import { mount } from "@cypress/react";
import IncrementDecrement from './index';

describe('<IncrementDecrement/>', () => {
    it('renders', () => {
        mount(<IncrementDecrement/>)
        cy.contains('Increment');
    });

    it('Increase successfully', () => {
        mount(<IncrementDecrement/>)
        cy.contains('Increment').click()
        cy.get('[reian-testid="count"]').contains(1);
        cy.contains('Increment').click()
        cy.get('[reian-testid="count"]').contains(2);
        cy.contains('Increment').click()
        cy.get('[reian-testid="count"]').contains(3);
    });

    it('Decrease successfully', () => {
        mount(<IncrementDecrement/>)
        cy.contains('Decrement').click()
        cy.get('[reian-testid="count"]').contains(-1);
        cy.contains('Decrement').click()
        cy.get('[reian-testid="count"]').contains(-2);
        cy.contains('Decrement').click()
        cy.get('[reian-testid="count"]').contains(-3);
    });
});