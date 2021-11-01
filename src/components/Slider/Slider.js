import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.thecrazytourist.com/wp-content/uploads/2017/03/Dhaka.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>DHAKA</h3>
                        <p>It may seem a world away from the wilds of area like the Sundarbans mangroves but the city of Dhaka offers you a jungle of a different kind.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.thecrazytourist.com/wp-content/uploads/2017/03/Saint-Martin.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>SAINT MARTIN</h3>
                        <p>The little enclave of Saint Martin is like nowhere else in Bangladesh as this is the only coral island in the country.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.thecrazytourist.com/wp-content/uploads/2017/03/Somapura-Mahavihara.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>PAHARPUR</h3>
                        <p>Paharpur is a pint-sized town which is most well known for the Naogaon District where you will find UNESCO World Heritage Site ruins called Somapura Mahavihara.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;