import { useEffect } from 'react';
import { CartActions, useCartContext } from '../states/cart/Cart.context';
import { useFetchCart } from './Cart.hooks';
import CartItem from './CartItem';
import RoundedButton from '../../components/misc/RoundedButton';

function Cart() {
    const fetchCart = useFetchCart();

    const { state, dispatch } = useCartContext();
    console.log('state', state.cart);

    useEffect(() => {
        fetchCart()
            .then((fetchedCart) => {
                dispatch({
                    type: CartActions.UPDATE_CART,
                    payload: fetchedCart,
                });
            })
            .catch()
            .finally();
    }, []);

    return (
        <div className="grid gap-4">
            <div className="grid gap-2 h-80 overflow-scroll">
                {state.cart.map((cartItem) => (
                    <CartItem
                        cartItem={cartItem}
                        key={`Cart Item ${cartItem.id}`}
                    />
                ))}
            </div>
            <div className="flex justify-end items-end">
                <RoundedButton onClick={() => {}}>Check out</RoundedButton>
            </div>
        </div>
    );
}

export default Cart;
