import './App.css';
import Navigation from './components/Navigation'
import { Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import MyLibrary from './pages/MyLibrary'
import OutboxRequests from './pages/OutboxRequests'
import InboxRequests from './pages/InboxRequests';

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
            <Route path='/outbox' element={<OutboxRequests />} />
            <Route path='/inbox' element={<InboxRequests />} />
          </Routes>
        </header>
    </div>
  );
}

export default App;
