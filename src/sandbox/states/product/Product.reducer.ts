import {
    ProductActions,
    ProductActionType,
    ProductState,
} from './Product.context';

export const productReducer = (
    state: ProductState,
    action: ProductActionType,
): ProductState => {
    switch (action.type) {
        case ProductActions.UPDATE_LIST: {
            return { ...state, products: action.payload };
        }
        default:
            return { ...state };
    }
};
