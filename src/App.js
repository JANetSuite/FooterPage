import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <>
   <div className="page-container">
     <div className="content-wrap">

     
    <Navbar />
    <Contact />
    </div>
    <Footer />
    </div>
    </>
  );
}

export default App;
