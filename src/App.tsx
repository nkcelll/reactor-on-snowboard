import './App.css';

import Header from './components/header/Header';
import Footer from './components/layout/footer/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import PerProductsLayout from './pages/PerProcutsLayout';
import Login from './components/layout/register/Login';
import SignUp from './components/layout/register/SignUp';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

function AppWraper() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/products/product" element={<PerProductsLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
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
