import React from 'react';
import { BrowserRouter as Router, Routes,Route, Link, useParams, useNavigate } from "react-router-dom"
import ProtectedRoute from './app/ProtectedRoute';
import { isUserAdmin } from './app/util';
import Layout from './components/layout';
import CategoryProduct from './components/products/CategoryProduct';
import { CartContextProvider } from './context/cartContext';
import { ProductContextProvider } from './context/productContext';
import { UserContextProvider } from './context/userContext';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProductFormPage from './pages/ProductFormPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';
import SingleProductPage from './pages/SingleProductPage';

function App() {
  const isAdmin = isUserAdmin();
  return (
    <Router>
      <UserContextProvider>
        <ProductContextProvider>
          <CartContextProvider>
          <Layout>
      <Routes>
        <Route path='' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/profile/:name/' element={<ProfilePage/>}/>
        <Route path='/cart' element={<CartPage />}/>
        <Route path='/products/categories/:categoryName' element={<CategoryProduct />}/>
        <Route path='/products/categories/:categoryName/:productName' element={<SingleProductPage />}/>
        <Route path='/products/new' element={<ProtectedRoute hasAccess={isAdmin}><ProductFormPage /></ProtectedRoute>}/>
        <Route path='/products/id/edit' element={<ProductFormPage/>}/>
      </Routes>
      </Layout>
          </CartContextProvider>
        </ProductContextProvider>
      </UserContextProvider>
    </Router>
  );
}

export default App;
