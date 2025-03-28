import { useEffect } from 'react';
import { useFetchProducts } from './products.hooks';
import {
    ProductActions,
    useProductContext,
} from '../states/product/Product.context';

export default function () {
    const fetchProducts = useFetchProducts();
    const { state, dispatch } = useProductContext();

    console.log(state.products);

    useEffect(() => {
        fetchProducts()
            .then((res) =>
                dispatch({
                    type: ProductActions.UPDATE_LIST,
                    payload: res.splice(0, 3),
                }),
            )
            .catch()
            .finally();
    }, []);

    return (
        <div
            reian-testid="products"
            className="grid gap-4 grid-cols-[repeat(auto-fit,_minmax(160px,_1fr))]"
        >
            {state.products.map((product) => (
                <div className="border-2 rounded-md p-4">
                    <div>{product.name}</div>
                    <div>
                        <i>{product.category}</i>
                    </div>
                    <hr />
                    <div>{product.description}</div>
                </div>
            ))}
        </div>
    );
}
