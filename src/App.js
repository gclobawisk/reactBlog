import { BrowserRouter, RouterProvider, Route, Routes, Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

import './assets/css/Pretty-Footer.css';

import Home from './components/pages/Home.js'
import Company from './components/pages/Company.js'
import Contact from './components/pages/Contact.js'
import Login from './components/pages/Login.js'
import Nav from './components/Nav.js'
import Jumbotron from './components/Jumbotron';
import Breadcrumb from './components/Breadcrumb';
import Footer from './components/Footer';



function App() {


  return (
    <div className="App">


      <BrowserRouter>
        <div>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"/>          
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossorigin="anonymous"/>
        </div>

        <Nav />
        <Jumbotron />            
        <Breadcrumb />            
    
        {/* <img src={logo}/> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>

      </BrowserRouter>


      <Footer />                 

    </div>
  );
}

export default App;
