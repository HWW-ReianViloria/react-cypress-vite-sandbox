import {
    CartActions,
    type CartActionType,
    type CartItemType,
    type CartState,
} from './Cart.context';

export const cartReducer = (
    state: CartState,
    action: CartActionType,
): CartState => {
    switch (action.type) {
        case CartActions.ADD: {
            // Check if item ID exists
            const cartItemReference = state.cart.find((cartItem) => {
                cartItem.id === action.payload;
            });
            if (cartItemReference) {
                const newItem: CartItemType = {
                    ...cartItemReference,
                    quantity: cartItemReference.quantity + 1,
                };

                // Remove and add new item
                const newState = state.cart
                    .filter((cartItem) => {
                        cartItem.id !== action.payload;
                    })
                    .concat(newItem);

                return { ...state, cart: newState };
            }
            return {
                ...state,
                cart: state.cart.concat({
                    id: action.payload,
                    quantity: 1,
                }),
            };
        }

        case CartActions.REMOVE: {
            const cartItemReference = state.cart.find((cartItem) => {
                return cartItem.id === action.payload;
            });

            if (cartItemReference) {
                const newItem: CartItemType = {
                    ...cartItemReference,
                    quantity: cartItemReference.quantity - 1,
                };

                const otherItems = state.cart.filter((cartItem) => {
                    return cartItem.id !== action.payload;
                });

                // Remove item
                if (newItem.quantity <= 0) {
                    return {
                        ...state,
                        cart: otherItems,
                    };
                }

                // Update item (-1)
                return {
                    ...state,
                    cart: otherItems.concat(newItem),
                };
            }

            return { ...state };
        }

        case CartActions.EDIT_AMOUNT: {
            if (action.payload.amount < 0) return { ...state };

            const cartItemReference = state.cart.find((cartItem) => {
                return cartItem.id === action.payload.id;
            });

            if (!cartItemReference) return { ...state };

            // Shallow copy
            const newCartItem = {
                ...cartItemReference,
                quantity: action.payload.amount,
            };

            const otherItems = state.cart.filter((cartItem) => {
                return cartItem.id !== action.payload.id;
            });

            if (newCartItem.quantity <= 0)
                return { ...state, cart: otherItems };

            return {
                ...state,
                cart: otherItems.concat(newCartItem),
            };
        }

        case CartActions.UPDATE_CART: {
            return { ...state, cart: action.payload };
        }

        default:
            return { ...state };
    }
};
