import { mount } from '@cypress/react';
import SimpleTodo from '.';
import { getRandomInt } from '../../utils/math.util';
import { AppContextProvider } from '../../components/User/User.reducer';

describe('Simple Todo App', () => {
    beforeEach(() => {
        mount(
            <AppContextProvider>
                <SimpleTodo />
            </AppContextProvider>,
        );
    });

    it('Should add 10 items', () => {
        for (let i = 0; i < 10; i++) {
            // prettier-ignore
            cy.get('[reian-testid=rounded-input]')
                .type(`
                    Test todo ${i + 1}
                    ${'blah '.repeat(getRandomInt(0, 30))}
                    `,
                    { delay: 0 },
                );
            cy.get('[reian-testid=add-todo]').click();
        }

        cy.get('[reian-testid=todo-list]')
            .children()
            .eq(2)
            .contains('Done')
            .click();

        cy.get('[reian-testid=todo-list]')
            .children()
            .eq(3)
            .contains('Done')
            .click();

        cy.get('[reian-testid=filter-btn]').click().contains('Finished');
        cy.get('[reian-testid=todo-list]').children().should('have.length', 2);

        cy.get('[reian-testid=filter-btn]').click().contains('Unfinished');
        cy.get('[reian-testid=todo-list]').children().should('have.length', 8);

        cy.get('[reian-testid=filter-btn]').click().contains('All');
        cy.get('[reian-testid=todo-list]').children().should('have.length', 10);
    });
});
