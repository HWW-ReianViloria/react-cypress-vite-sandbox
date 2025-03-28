import { mount } from '@cypress/react';
import Cart from './Cart';
import { CartContextProvider } from '../states/cart/Cart.context';
import { ProductContextProvider } from '../states/product/Product.context';

describe('Cart Functionality', () => {
    beforeEach(() => {
        mount(
            <ProductContextProvider>
                <CartContextProvider>
                    <Cart />
                </CartContextProvider>
            </ProductContextProvider>,
        );
    });
    it('Should add and display an item to the cart twice', () => {});
    it('Should remove a displayed item from the cart twice', () => {});
    it('Should update the quantity of an item using input', () => {});
    it('Should dynamically update the price display', () => {});
});
