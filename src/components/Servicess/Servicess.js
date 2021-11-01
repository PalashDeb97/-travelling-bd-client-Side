import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Servicess = () => {

    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [] )



    return (
        <Container className="">
            <div>
                <h2 className="text-center my-5 fw-bold">OUR FEATURED SERVICES</h2>
            </div>
            <div className="mb-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map(service => 

                            <div>
                                {
                                    service?.userName ? <div key={service.id} className="col">
                                        <div className="card">
                                            <div className="card-body">
                                                <img className="card-img-top mb-2" src={service?.image} alt="" />
                                                <h4 className="card-title fw-bold text-uppercase text-center">{service?.name}</h4>
                                                <h5 className="card-text">Price : {service?.price}</h5>
                                                <p className="card-text">{service?.details}</p>
                                                <NavLink to={`/bookingnow/${service?.id}`}>
                                                    <button className="btn btn-dark text-light text-center">Booking Now</button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div> : ''

                                }
                            </div>
                            
                            

                        )
                    }
                </div>
            </div>
        </Container>
    );
};

export default Servicess;