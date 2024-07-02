import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Footer from './Components/Footer';

import './App.css'

import {
  Route,
  Routes
} from 'react-router-dom';

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/contact/*" element={<Contact />} />
      </Routes>
      <Footer />
      {/* <Routes>
        <Route path="/" element={<Contact />} />
      </Routes> */}
    </div>
  )
}

export default App
