import { useState } from "react"

interface Todo {
    id: string,
    title: string,
    description: string,
    isCompleted: boolean,
}

export default function SimpleTodo(){
    const [todoList, setTodoList] = useState<Todo[]>([{} as Todo])

    return <div>
        {todoList.map(todo => {
            return <TodoCard/> // add key
        })}
    </div>
}

function TodoCard(){
    return <div className="rounded-2xl border-2 border-red-500 border-solid">:DD</div>
}