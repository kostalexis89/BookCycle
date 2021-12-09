import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import MyLibrary from './pages/MyLibrary'

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/myLibrary' element={<MyLibrary />} />
      </Routes>
    </div>
  );
}

export default App;
