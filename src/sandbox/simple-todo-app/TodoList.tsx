import React, { useMemo } from 'react';
import { Filters, useAppContext } from '../../components/User/User.context';
import TodoItem from './TodoItem';

const TodoList = React.memo(function Todo() {
    const { state } = useAppContext();

    const filteredTodoList = useMemo(() => {
        return state.todo.items.filter((todo) => {
            if (state.todo.filter === Filters.FINISHED) {
                return todo.isCompleted;
            } else if (state.todo.filter === Filters.UNFINISHED) {
                return !todo.isCompleted;
            }
            return true;
        });
    }, [state.todo.items, state.todo.filter]);

    return (
        <div
            reian-testid="todo-list"
            className="w-full h-100 overflow-scroll grid gap-2 grid-cols-3 auto-rows-min"
        >
            {filteredTodoList.map((todo) => {
                return (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        description={todo.description}
                        isCompleted={todo.isCompleted}
                    />
                );
            })}
        </div>
    );
});

export default TodoList;
