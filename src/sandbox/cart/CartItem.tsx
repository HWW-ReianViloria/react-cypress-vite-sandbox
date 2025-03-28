import RoundedButton from '../../components/misc/RoundedButton';
import { type CartItemType } from '../states/cart/Cart.context';
import { useProductContext } from '../states/product/Product.context';

interface CartItemProps {
    cartItem: CartItemType;
}

function CartItem({ cartItem }: CartItemProps) {
    const { state } = useProductContext();
    const productInfo = state.products.find(
        (productItem) => productItem.id === cartItem.id,
    );

    if (!productInfo) return null;

    return (
        <div className="grid grid-cols-[1.5rem_1fr] gap-2">
            <input type="checkbox" name="" id="" />
            <div className="border-2 p-1 rounded-md grid grid-cols-[1fr_9rem] gap-4 bg-amber-50">
                <div>
                    <div className="flex justify-between">
                        <p className="text-2xl">{productInfo.name}</p>
                        <p className="">({cartItem.quantity}x)</p>
                    </div>
                    <hr />
                    <div>{productInfo.description}</div>
                </div>
                <div className="flex gap-2 justify-end items-end">
                    <RoundedButton onClick={() => {}}>Remove</RoundedButton>
                    <RoundedButton onClick={() => {}}>Add</RoundedButton>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
