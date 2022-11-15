import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Portifilo from './components/portifilo/Portifilo';
import About from  './components/about/About'
import Expericence from './components/expericence/Expericence'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import DestopNavbar from './components/navbar/DestopNavbar';
import { Routes ,Route} from 'react-router-dom'


function App() {
  return (
    <>
     <DestopNavbar />
      <Header />
      <Navbar />
      <About />
      <Expericence />
      <Footer />
      <Portifilo />
      <Contact />
    </>
  );
}

export default App;
