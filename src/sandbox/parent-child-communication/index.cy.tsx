import { mount } from "@cypress/react";
import Parent from './index';

describe('Parent-Child-Communication', () =>{
    it('Should mount', () => {
        mount(<Parent/>);
    })

    it('Should increment with proper count',() => {
        mount(<Parent/>);
        cy.contains('Increment').click();
        cy.get('[reian-testid=count]').contains(1);
        cy.contains('Increment').click();
        cy.get('[reian-testid=count]').contains(2);
        cy.contains('Increment').click();
        cy.get('[reian-testid=count]').contains(3);
    })
    it('Should decrement with proper count',() => {
        mount(<Parent/>);
        cy.contains('Decrement').click();
        cy.get('[reian-testid=count]').contains(-1);
        cy.contains('Decrement').click();
        cy.get('[reian-testid=count]').contains(-2);
        cy.contains('Decrement').click();
        cy.get('[reian-testid=count]').contains(-3);
    })
});