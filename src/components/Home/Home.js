import React from 'react';
import { Container } from 'react-bootstrap';
import About from '../About/About';
import Servicess from '../Servicess/Servicess';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider />
            <Servicess />
            <About />
            <Container>
            <h2 className="fw-bold text-center">HISTORY</h2>
            <div className=" my-5">
                <div>
                    <img className="img-fluid" src="https://travelbd.xyz/en/wp-content/uploads/2018/07/travelBD.jpg" alt="" />
                </div>
                <div className="d-flex align-items-lg-center mt-4">
                    <div>
                        
                        <p>The People's Republic of Bangladesh is a nation in South Asia, on the edge of the Indian subcontinent. It is nearly completely surrounded by India, having a small land border with Myanmar in the southeast and a coastline facing the Bay of Bengal in the south. Other than city-states, Bangladesh has the world's highest population density, with 163 million inhabitants (more people than Russia) in a land area smaller than the American state of Florida.</p>
                        <p>Many people know Bangladesh through its remarkably successful National Cricket Team, known as The Tigers, of which Bangladeshis are very proud. This secular, democratic nation has been lauded by the United Nations for its successful poverty reduction, swarmed by investors for its burgeoning economy and has taken the lead on global environmental issues. Annual GDP growth of Bangladesh in the 2018 fiscal year was over 8%. The next step for Bangladesh is tourism and it is quickly increasing its facilities for visitors to its numerous archaeological sites; pristine beaches, including the world's longest natural sandy beach in Cox's Bazar; bustling markets; huge shopping malls; centuries old mosques, temples and pagodas; St Martin's coral island; and the world's largest Mangrove forest - the Sundarbans.</p>
                    </div>
                </div>
                
            </div>
            </Container>
        </div>
    );
};

export default Home;