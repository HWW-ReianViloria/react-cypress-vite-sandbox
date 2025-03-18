import { mount } from '@cypress/react';
import SimpleTodo from '.';
import { getRandomInt } from '../../utils/math.util';

describe('Simple Todo App', () => {
    beforeEach(() => {
        mount(<SimpleTodo />);
    });

    it('Should add 10 items', () => {
        for (let i = 0; i < 10; i++) {
            cy.get('[reian-testid=rounded-input]').type(
                `Test todo ${i + 1} 
                    ${'blah '.repeat(getRandomInt(0, 30))}
                    `,
                { delay: 0 }
            );
            cy.get('[reian-testid=add-todo]').click();
        }
    });
});
