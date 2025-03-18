import { useState } from 'react';
import RoundedInput, {
    type InputValue,
} from '../../components/misc/RoundedInput';
import { v4 as uuid } from 'uuid';

interface Todo {
    id: string;
    description: InputValue;
    isCompleted: boolean;
}

function addTodoHandler(
    todoValue: InputValue,
    setList: React.Dispatch<React.SetStateAction<Todo[]>>,
    setInput: React.Dispatch<
        React.SetStateAction<string | number | readonly string[] | undefined>
    >
) {
    if (!todoValue) return;
    const newTodo = {
        id: uuid(),
        description: todoValue,
        isCompleted: false,
    };
    setList((cur) => [...cur, newTodo]);
    setInput('');
}

function removeTodoHandler(
    id: string,
    setList: React.Dispatch<React.SetStateAction<Todo[]>>
) {
    setList((cur) => {
        return cur.filter((item) => {
            return item.id !== id;
        });
    });
}

function toggleTodoHandler(
    id: string,
    setList: React.Dispatch<React.SetStateAction<Todo[]>>
) {
    setList((cur) => {
        const newCur = cur.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    isCompleted: !item.isCompleted,
                };
            }
            return item;
        });
        return newCur;
    });
}

enum Filters {
    ALL = 'All',
    FINISHED = 'Finished',
    UNFINISHED = 'Unfinished',
}
function nextFilterHandler(
    setFilter: React.Dispatch<React.SetStateAction<Filters>>
) {
    setFilter((currentFilter) => {
        if (currentFilter === Filters.ALL) {
            return Filters.FINISHED;
        } else if (currentFilter === Filters.FINISHED) {
            return Filters.UNFINISHED;
        }
        return Filters.ALL;
    });
}

export default function SimpleTodo() {
    const [todoList, setTodoList] = useState<Todo[]>([]);
    const [todoInputValue, setTodoInputValue] = useState<InputValue>('');
    const [filter, setFilter] = useState<Filters>(Filters.ALL);

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
                        addTodoHandler(
                            todoInputValue,
                            setTodoList,
                            setTodoInputValue
                        )
                    }
                    reian-testid="add-todo"
                >
                    +
                </button>
                <button
                    onClick={() => nextFilterHandler(setFilter)}
                    className="pl-2 pr-2"
                >
                    Filter: {filter}
                </button>
            </div>
            <Todo
                todoList={todoList}
                setTodoList={setTodoList}
                filter={filter}
            />
        </div>
    );
}

interface TodoProps {
    todoList: Todo[];
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
    filter: Filters;
}
function Todo({ todoList, setTodoList, filter }: TodoProps) {
    return (
        <div className="w-full h-100 overflow-scroll grid gap-2 grid-cols-3 auto-rows-min">
            {todoList
                .filter((todo) => {
                    if (filter === Filters.FINISHED) {
                        return todo.isCompleted;
                    } else if (filter === Filters.UNFINISHED) {
                        return !todo.isCompleted;
                    }
                    return true;
                })
                .map((todo) => {
                    return (
                        <TodoCard
                            key={todo.id}
                            id={todo.id}
                            description={todo.description}
                            isCompleted={todo.isCompleted}
                            setTodoList={setTodoList}
                        />
                    );
                })}
        </div>
    );
}

interface TodoCardProps {
    id: string;
    description: InputValue;
    isCompleted: boolean;
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}
function TodoCard({
    id,
    description,
    isCompleted,
    setTodoList,
}: TodoCardProps) {
    console.log('ID', id);
    return (
        <div
            className={`
                    rounded-2xl
                    p-2
                    flex
                    justify-between
                    flex-col
            ${isCompleted ? 'bg-green-200' : 'bg-red-100'}
        `}
        >
            <p className={`${isCompleted ? 'line-through' : ''}`}>
                {description}
            </p>
            <div className="flex justify-between pl-4 pr-4 pt-4">
                <button
                    className="text-sm p-1"
                    onClick={() => removeTodoHandler(id, setTodoList)}
                >
                    Del
                </button>
                <button
                    className="text-sm p-1"
                    onClick={() => toggleTodoHandler(id, setTodoList)}
                >
                    {isCompleted ? 'Undone' : 'Done'}
                </button>
            </div>
        </div>
    );
}
