import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Accountuser from './pages/Accountuser';
import './App.css';
import UserPreferences from './pages/UserPreferences';


function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/accountuser' element={<Accountuser />} />
          <Route path='/userpreferences' element={<UserPreferences />} />
        
        </Routes>
      </main>
      
    </>
  );
}

export default App;
