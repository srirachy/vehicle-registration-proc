import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Accountuser from './pages/Accountuser';
import UserPreferences from './pages/UserPreferences';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <div id='page-container'>
        <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/accountuser' element={<Accountuser />} />
            <Route path='/userpreferences' element={<UserPreferences />} />
          </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
