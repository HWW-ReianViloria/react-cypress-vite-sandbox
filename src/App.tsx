import { NavLink, Route, Routes } from 'react-router';
import './App.css';
import RoundedButton from './components/misc/RoundedButton';
import Cart from './sandbox/cart/Cart';
import Products from './sandbox/product/products';

function App() {
    return (
        <div>
            <Routes>
                <Route
                    index
                    element={
                        <div>
                            <div>
                                <NavLink to={'/cart'}>
                                    <RoundedButton>Cart</RoundedButton>
                                </NavLink>
                            </div>
                            <div>
                                <NavLink to={'/products'}>
                                    <RoundedButton reian-testid="products">
                                        Products
                                    </RoundedButton>
                                </NavLink>
                            </div>
                        </div>
                    }
                />
                <Route path="cart" element={<Cart />} />
                <Route path="products" element={<Products />} />
            </Routes>
        </div>
    );
}

export default App;
