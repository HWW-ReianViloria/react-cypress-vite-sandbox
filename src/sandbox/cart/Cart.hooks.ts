import { CartItemType } from '../states/cart/Cart.context';
import mockCartItems from './CartItems.mock';

export function useFetchCart() {
    return async function () {
        try {
            const fetchedCartItems: CartItemType[] = mockCartItems;
            return fetchedCartItems;
        } catch (error) {
            throw error;
        }
    };
}
