
import './App.css';
import Profile from './Profile';
import Contact from './Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<Profile />} />
          <Route path="contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;