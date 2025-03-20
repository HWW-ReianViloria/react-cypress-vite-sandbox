import { useReducer } from 'react';
import {
    AppContext,
    AppContextType,
    Filters,
    TodoActions,
    UserActions,
    type AppState,
    type UserAction,
} from './User.context';

const appReducer = (state: AppState, action: UserAction): AppState => {
    switch (action.type) {
        case UserActions.LOGIN:
            return { ...state, user: action.payload };
        case UserActions.LOGOUT:
            return { ...state, user: undefined };

        case TodoActions.ADD_ITEM:
            return {
                ...state,
                todo: {
                    ...state.todo,
                    items: state.todo.items.concat(action.payload),
                },
            };
        case TodoActions.REMOVE_ITEM:
            return {
                ...state,
                todo: {
                    ...state.todo,
                    items: state.todo.items.filter(
                        (todoItem) => todoItem.id !== action.payload,
                    ),
                },
            };
        case TodoActions.TOGGLE_ITEM:
            return {
                ...state,
                todo: {
                    ...state.todo,
                    items: state.todo.items.map((item) => {
                        if (item.id === action.payload) {
                            return {
                                ...item,
                                isCompleted: !item.isCompleted,
                            };
                        }
                        return item;
                    }),
                },
            };
        case TodoActions.FILTER:
            const currentFilter = state.todo.filter;
            const filterKeys = Object.keys(Filters) as (keyof typeof Filters)[];

            const currentIndex = Object.values(Filters).findIndex(
                (filterValue) => filterValue === currentFilter,
            );

            const nextIndex =
                currentIndex + 1 >= filterKeys.length ? 0 : currentIndex + 1;

            return {
                ...state,
                todo: {
                    ...state.todo,
                    filter: Filters[filterKeys[nextIndex]],
                },
            };

        default:
            return state;
    }
};

export const AppContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [state, dispatch] = useReducer(appReducer, {
        user: undefined,
        todo: {
            items: [],
            filter: Filters.ALL,
        },
    });

    const contextValue: AppContextType = { state, dispatch };

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};
