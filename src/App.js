import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import Accountuser from './pages/Accountuser';
import Footer from './components/Footer';
import './App.css';
import UserPreferences from './pages/UserPreferences';


function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/accountuser' element={<Accountuser />} />
          <Route path='/userpreferences' element={<UserPreferences />} />
        
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
