import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Sidebar from './components/Dashboard/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path="/sidebar" element={<Sidebar/>}/>
            </Routes>
            <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
