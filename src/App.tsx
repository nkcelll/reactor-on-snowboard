import './App.css';

import Header from './components/header/Header';
// import Footer from './components/layout/footer/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
		<BrowserRouter>
      <Header />
      <Routes>
				<Route path='/' element={<Home />}/>
				<Route path='/products/:id' element={<Products />}/>
      </Routes>
      {/* <Footer /> */}
		</BrowserRouter>
    </>
  );
}

export default App;
