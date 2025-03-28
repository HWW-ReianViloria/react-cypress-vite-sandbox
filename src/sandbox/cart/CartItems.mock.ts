import { getRandomInt } from '../../utils/math.util';
import { type CartItemType } from '../states/cart/Cart.context';
import ProductListMock from './ProductList.mock';

const productListCopy = [...ProductListMock()];

let mockCartItems: CartItemType[] = [];

while (mockCartItems.length < 30 && productListCopy.length) {
    // -1 represents adjustment of size to index
    const randomIndex = getRandomInt(0, productListCopy.length - 1);
    const randomProductItem = productListCopy.splice(randomIndex, 1)[0];

    const randomItem: CartItemType = {
        id: randomProductItem.id,
        quantity: getRandomInt(1, 7),
    };

    mockCartItems.push(randomItem);
}

export default mockCartItems;
