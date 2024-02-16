import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import RegisterUser from './pages/RegisterUser';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<RegisterUser />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
