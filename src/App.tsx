import './App.css';

import Header from './components/header/Header';
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
				<Route path='/collection' element={<Products />}/>
      </Routes>
		</BrowserRouter>
    </>
  );
}

export default App;
