import { createContext, useContext, useReducer } from 'react';
import { productReducer } from './Product.reducer';

export interface Product {
    id: string;
    name: string;
    price: number;
    size: string;
    category: string;
    brand: string;
    description: string;
    image: string;
    stock: number;
    rating: number;
    reviews: number;
}

export interface ProductState {
    products: Product[];
}

export enum ProductActions {
    UPDATE_LIST = 'UPDATE LIST',
}

export type ProductActionType = {
    type: ProductActions.UPDATE_LIST;
    payload: Product[];
};

export interface ProductContextType {
    state: ProductState;
    dispatch: React.Dispatch<ProductActionType>;
}

export const ProductContext = createContext<ProductContextType | null>(null);

export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (context === null) {
        throw new Error(
            'Product context must be used within its context provider',
        );
    }

    return context;
};

export const ProductContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [state, dispatch] = useReducer(productReducer, {
        products: [],
    });

    const contextValue: ProductContextType = { state, dispatch };

    return (
        <ProductContext.Provider value={contextValue}>
            {children}
        </ProductContext.Provider>
    );
};
