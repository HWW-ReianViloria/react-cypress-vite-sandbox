import React, { useState } from 'react';
import RoundedInput, {
    type InputValue,
} from '../../components/misc/RoundedInput';
import { v4 as uuid } from 'uuid';
import {
    TodoActions,
    TodoItemType,
    useAppContext,
} from '../../components/User/User.context';
import TodoList from './TodoList';

function useAddTodoHandler() {
    const { dispatch } = useAppContext();

    return (
        todoValue: TodoItemType['description'],
        setInput: React.Dispatch<React.SetStateAction<InputValue>>,
    ) => {
        const newTodo: TodoItemType = {
            id: uuid(),
            description: todoValue,
            isCompleted: false,
        };

        dispatch({ type: TodoActions.ADD_ITEM, payload: newTodo });
        setInput('');
    };
}

export default function SimpleTodo() {
    const [todoInputValue, setTodoInputValue] = useState<InputValue>('');

    const { state, dispatch } = useAppContext();

    const addTodoHandler = useAddTodoHandler();

    return (
        <div className="grid gap-4">
            <div className="flex gap-2">
                <RoundedInput
                    onChange={setTodoInputValue}
                    value={todoInputValue}
                />
                <button
                    className="font-bold pl-2 pr-2"
                    onClick={() =>
                        addTodoHandler(todoInputValue, setTodoInputValue)
                    }
                    reian-testid="add-todo"
                >
                    +
                </button>
                <button
                    reian-testid="filter-btn"
                    onClick={() => dispatch({ type: TodoActions.FILTER })}
                    className="pl-2 pr-2"
                >
                    Filter: {state.todo.filter}
                </button>
            </div>
            <TodoList />
        </div>
    );
}
