import './App.css';
import Navigation from './components/Navigation'
import { Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import MyLibrary from './pages/MyLibrary'


function App() {

  return (
    <div> 
    {/* className="App" */}
        <Navigation />
        <header >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/myLibrary' element={<MyLibrary />} />
          </Routes>
        </header>
    </div>
  );
}

export default App;
