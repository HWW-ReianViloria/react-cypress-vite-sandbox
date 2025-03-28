import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { AppContextProvider } from './components/User/User.reducer.tsx';
import { CartContextProvider } from './sandbox/states/cart/Cart.context.tsx';
import { ProductContextProvider } from './sandbox/states/product/Product.context.tsx';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppContextProvider>
            <CartContextProvider>
                <ProductContextProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </ProductContextProvider>
            </CartContextProvider>
        </AppContextProvider>
    </StrictMode>,
);
