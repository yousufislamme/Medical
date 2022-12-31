import './App.css';
import { Routes, Route } from 'react-router'
import Home from './components/Links/Home';
import Service from './components/Links/Service';
import Doctors from './components/Links/Doctors';
import Contacts from './components/Links/Contacts';
import About from './components/Links/About';
import Blog from './components/Blog/Blog';
import SinglePost from './components/Blog/SinglePost';


function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/service' element={<Service />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/singlePost' element={<SinglePost />} />
      </Routes>
    </>
  );
}

export default App;
