import { createContext, useContext, useReducer } from 'react';
import { cartReducer } from './Cart.reducer';
import { Product } from '../product/Product.context';

export interface CartItemType {
    id: Product['id'];
    quantity: number;
}

export interface CartState {
    cart: CartItemType[];
}

export enum CartActions {
    ADD = 'ADD',
    REMOVE = 'REMOVE',
    EDIT_AMOUNT = 'EDIT AMOUNT',
    UPDATE_CART = 'UPDATE CART',
}

export type CartActionType =
    | { type: CartActions.ADD; payload: CartItemType['id'] }
    | { type: CartActions.REMOVE; payload: CartItemType['id'] }
    | {
          type: CartActions.EDIT_AMOUNT;
          payload: { id: CartItemType['id']; amount: number };
      }
    | { type: CartActions.UPDATE_CART; payload: CartItemType[] };

export interface CartContextType {
    state: CartState;
    dispatch: React.Dispatch<CartActionType>;
}

export const CartContext = createContext<CartContextType | null>(null);

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (context === null) {
        throw new Error(
            'Cart context must be used within its context provider',
        );
    }
    return context;
};

export const CartContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [state, dispatch] = useReducer(cartReducer, {
        cart: [],
    });

    const contextValue: CartContextType = { state, dispatch };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};
