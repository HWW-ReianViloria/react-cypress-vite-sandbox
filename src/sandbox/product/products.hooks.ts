import productListMock from '../cart/ProductList.mock';

export function useFetchProducts() {
    return async function () {
        try {
            const fetchedProducts = productListMock();
            return fetchedProducts;
        } catch (error) {
            throw error;
        }
    };
}
