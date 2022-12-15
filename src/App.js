import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import Cef from './pages/Cef';
import National from './pages/National';
import Foreign from './pages/Foreign';
import Fastfood from './pages/Fastfood';
import Drink from './pages/Drink';

function App() {
  return (
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/national' element={<National />} />
          <Route path='/foreign' element={<Foreign />} />
          <Route path='/fastfood' element={<Fastfood />} />
          <Route path='/drink' element={<Drink />} />
          <Route path='/cef' element={<Cef />} />
        </Routes>
        <Footer />
      </>
  );
}

export default App;
