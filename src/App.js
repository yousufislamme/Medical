import './App.css';
import { Routes, Route } from 'react-router'
import Home from './components/Links/Home';
import Service from './components/Links/Service';
import Doctors from './components/Links/Doctors';
import Pages from './components/Links/Pages';
import Contacts from './components/Links/Contacts';
import About from './components/Links/About';

function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/pages' element={<Pages />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
