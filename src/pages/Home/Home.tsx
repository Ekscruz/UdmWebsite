import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import StartCoursesImg from '../../utils/images/study.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';


function Home(){
    return (
        <div className='home-page'>
        <header className='h=100 min-vh-100 d-flex align-items-center text-light'>
            <div className='container d-flex flex-column align-items-center'>
                <h2>Greetings To</h2>
                <h1 className='text-center fw-semibold'>Universidad De Manila</h1>
                <p>We, at the Universidad De Manila, commit to providing world class higher and advanced education, research and extension services in health, social and behavioral sciences, and the arts and humanities, responsive to the needs of our stakeholders, the nation and the world.</p>
                <div className='d-flex flex-column flex-sm-row align-items-center'>
                    <Link to="/courses">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Courses</button>
                    </Link>
                    <Link to="/contact">
                        <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact</button>
                    </Link>
                </div>
            </div>
        </header>

        <div className="py-5">
            <ChooseSection />
        </div>

        <div className='py-5 bg-light'>
                <div className="container">
                    <div className='row d-flex align-items-center justify-content-around'>
                        <div className='col-lg-5'>
                            <h2 className='text-capitalize'> 2024 Start Courses</h2>
                            <p>Let's Look at it ^_^</p>
                            <Link to="/courses">
                                <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
                            </Link>
                        </div>
                        <div className='col-lg-5 mt-5 mt-lg-0'>
                            <img src={StartCoursesImg} className='img-fluid' alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-5">
                <FaqAccordion/>
            </div>
     </div>
    )
}
export default Home;