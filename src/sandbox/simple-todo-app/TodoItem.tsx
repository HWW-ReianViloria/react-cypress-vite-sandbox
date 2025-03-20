import { InputValue } from '../../components/misc/RoundedInput';
import { TodoActions, useAppContext } from '../../components/User/User.context';

interface TodoCardProps {
    id: string;
    description: InputValue;
    isCompleted: boolean;
}
export default function TodoItem({
    id,
    description,
    isCompleted,
}: TodoCardProps) {
    const { dispatch } = useAppContext();

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
                    onClick={() =>
                        dispatch({ type: TodoActions.REMOVE_ITEM, payload: id })
                    }
                >
                    Del
                </button>
                <button
                    className="text-sm p-1"
                    onClick={() =>
                        dispatch({ type: TodoActions.TOGGLE_ITEM, payload: id })
                    }
                >
                    {isCompleted ? 'Undone' : 'Done'}
                </button>
            </div>
        </div>
    );
}
