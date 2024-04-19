import React from 'react';
import './App.css';
import { Link, Routes, Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import Academics from './pages/Academics/Academics';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';

function App() {
  return (
    <div>
      <Navbar expand="lg" className='position-absolute w-100'>
        <Container>
          <Navbar.Brand>
            <Link to = "/" className='navbar-brand d-flex align-items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#35dccc" className="bi bi-hurricane" viewBox="0 0 16 16">
              <path d="M6.999 2.6A5.5 5.5 0 0 1 15 7.5a.5.5 0 0 0 1 0 6.5 6.5 0 1 0-13 0 5 5 0 0 0 6.001 4.9A5.5 5.5 0 0 1 1 7.5a.5.5 0 0 0-1 0 6.5 6.5 0 1 0 13 0 5 5 0 0 0-6.001-4.9M10 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
            </svg>
            <span className='mx-2 text-light lh-1 fw-semibold'>
              Universidad De Manila
              <br></br>
              Former City College of Manila
              <br></br>
              659-A Cecilia Muñoz St, Ermita, Manila, 1000 Metro Manila
            </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light'/>
          <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto justify-content-end w-100'>
              <Nav.Link href='/' className='text-uppercase' > Home</Nav.Link>
              <Nav.Link href='/courses' className='text-uppercase' > Courses</Nav.Link>
              <Nav.Link href='/about' className='text-uppercase' > About</Nav.Link>
              <Nav.Link href='/academics' className='text-uppercase' > Academics</Nav.Link>
              <Nav.Link href='/contact' className='text-uppercase' > Contact</Nav.Link>
            </Nav>  
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/academics' element={<Academics/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>

      <footer>
        <div className='container my-5'>
          <div className='row d-flex justify-content-between align-items-center'>
            <div className='col-md-4'>
              <Link to="/contact">
                <button type ='button' className='btn btn-outline-danger btn-lg mb-5 mb-md-4'>Click Me
                </button>
              </Link>
              <ul className='footer-social-icons list-unstyled d-flex justify-content-between'>
                <Link to="/contact">
                  <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#12aaff" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                  </svg>
                  </li>
                </Link>
              </ul>
            </div>
            <div className='col-md-7 col-lg-6'>
              <div className='d-row d-md-flex justify-content-between align-items-center'>
                <div className='col-12 col-md-6 col-lg-5 mb-5 mt-4 my-md-0'>
                  <ul className='footer-navigation list-unstyled mb-0'>
                    <Link to="/" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>Home</li>
                    </Link>
                    <Link to="/courses" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>Courses</li>
                    </Link>
                    <Link to="/about" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>About</li>
                    </Link>
                    <Link to="/academics" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>Academics</li>
                    </Link>
                    <Link to="/contact" className='text-decoration-none text-danger'>
                      <li className='text-uppercase fw-semibold'>Click Me</li>
                    </Link>
                  </ul>
                </div>
                <div className='col-12 col-md-6 col-lg-7'>
                  <ul className='list-unstyled mb-0'>
                    <li>
                      <p>Main Address - 659-A Cecilia Muñoz St, Ermita, Manila, 1000 Metro Manila</p>
                    </li>
                    <li>
                      <p>Contact Number - +639999999999 </p>
                    </li>
                    <li>
                      <p>Email </p>
                      <p>      - treasuryoffice@udm.edu.ph</p>
                      <p>      - udmalumni.official@gmail.com</p>
                      <p>      - registrarsoffice@udm.edu.ph</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className='bg-body-tertiary'>
            <div className='container'>
              <p className='p-3 m-0 text-center'>copyright @ made by students</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
