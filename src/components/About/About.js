import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container>
            <h2 className="fw-bold text-center">ABOUT</h2>
            <div className="d-lg-flex justify-content-lg-center my-5">
                <div>
                    <img className="img-fluid" src="https://nomadparadise.com/wp-content/uploads/2021/04/bangladesh-places-01-1024x683.jpg" alt="" />
                </div>
                <div className="d-flex align-items-lg-center ms-4">
                    <div>
                        
                        <p>India&rsquo;s sleepy eastern cousin, Bangladesh slumbers gently under monsoon skies at the mouth of the Jamuna River, one of the world&rsquo;s great deltas. Formerly East Pakistan, this intriguing backwater gained independence in 1971 after a civil war that still plays a major role in the national psyche.</p>
                        <p>An influx of tourists was predicted following independence, but this has yet to materialised, meaning visitors have Bangladesh&rsquo;s many and varied attractions to themselves. Those attractions range from Mughal palaces and gleaming mosques to palm-fringed beaches, tea-plantations and jungles full of snarling Bengal tigers.</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;