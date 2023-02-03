import './App.css';
import { Routes, Route } from 'react-router'
import Home from './components/Links/Home';
import Service from './components/Links/Service';
import Doctors from './components/Links/Doctors';
import Contacts from './components/Links/Contacts';
import About from './components/Links/About';
import Blog from './components/Blog/Blog';
import SinglePost from './components/Blog/SinglePost';
import ScrollToTop from 'react-scroll-to-top';


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


      <ScrollToTop
        color="#0014FF"
        smooth
        viewBox="0 0 24 24"
        svgPath="M13 7.828V20h-2V7.828l-5.364 5.364-1.414-1.414L12 4l7.778 7.778-1.414 1.414L13 7.828z"

      />
    </>
  );
}

export default App;
