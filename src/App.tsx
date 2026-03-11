import './App.css';

import Header from './components/header/Header';
import Footer from './components/layout/footer/Footer';
// import Home from './pages/Home';
// import Products from './pages/Products';
// import PerProductsLayout from './pages/PerProcutsLayout';
// import Login from './components/layout/register/Login';
// import SignUp from './components/layout/register/SignUp';
// import Account from './components/layout/account/Account';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import ProductsLoading from './components/shared/loading/ProductsLoading';

const Home = lazy(() => import('./pages/Home'))
const Products = lazy(() => import('./pages/Products'))
const PerProductsLayout = lazy(() => import('./pages/PerProcutsLayout'))
const Login = lazy(() => import('./components/layout/register/Login'))
const SignUp = lazy(() => import('./components/layout/register/SignUp'))
const Account = lazy(() => import('./components/layout/account/Account'))


function AppWraper() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <Header />
      <Suspense fallback={<ProductsLoading isLoading={true}/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/products/product" element={<PerProductsLayout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/account' element={<Account/>} />
        </Routes>
      </Suspense>
      <Footer hidden={isHome} />
    </>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <AppWraper/>
      </BrowserRouter>
    </>
  );
}

export default App;
