import { createContext, useContext } from 'react';
import { InputValue } from '../misc/RoundedInput';

interface User {
    name?: string;
    email?: string;
}

interface TodoItem {
    id: string;
    description: InputValue;
    isCompleted: boolean;
}

export interface AppState {
    user: User | undefined;
    todo: {
        items: TodoItem[];
        filter: Filters;
    };
}

export enum UserActions {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
}
export enum TodoActions {
    ADD_ITEM = 'ADD ITEM',
    REMOVE_ITEM = 'REMOVE ITEM',
    FILTER = 'FILTER',
}

export enum Filters {
    ALL = 'All',
    FINISHED = 'Finished',
    UNFINISHED = 'Unfinished',
}

export interface AppContextType {
    state: AppState;
    dispatch: React.Dispatch<UserAction>;
}

export const AppContext = createContext<AppContextType | null>(null);

export type UserAction =
    | { type: UserActions.LOGIN; payload: User }
    | { type: UserActions.LOGOUT }
    | { type: TodoActions.ADD_ITEM; payload: TodoItem }
    | { type: TodoActions.REMOVE_ITEM; payload: string }
    | { type: TodoActions.FILTER };

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === null) {
        throw new Error(
            'User context must be used within its context provider'
        );
    }
    return context;
};
