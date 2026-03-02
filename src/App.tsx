import './App.css';

import Header from './components/header/Header';
import Footer from './components/layout/footer/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Register from './pages/Register';
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
        <Route path="/login" element={<Register />} />
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
