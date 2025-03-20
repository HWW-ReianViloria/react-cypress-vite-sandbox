import Component from './index';

import { mount } from '@cypress/react';

describe('<Component />', () => {
    it('renders', () => {
        mount(<Component />);
        cy.contains('Add a new item');
    });

    it('should have empty list initially', () => {
        mount(<Component />);
        cy.get('ul').find('li').should('have.length', 0);
    });

    it('should add 2 items in the list after clicking thrice', () => {
        mount(<Component />);

        cy.get('[test-id = "add item"]').type('Henlo');
        cy.get('button').contains('Add a new item').click();

        cy.get('[test-id = "add item"]').type('Hi');
        cy.get('button').contains('Add a new item').click();

        cy.get('[test-id = "add item"]').should('have.value', '');

        cy.get('ul').find('li').should('have.length', 2);
        cy.get('ul').find('li').contains('Hi');
    });
});
