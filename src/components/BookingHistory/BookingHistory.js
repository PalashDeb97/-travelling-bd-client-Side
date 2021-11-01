import React, { useEffect, useState } from 'react';

const BookingHistory = () => {
    const [historys, setHistorys] = useState([]);

    useEffect( () => {
        fetch('https://intense-tor-58005.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setHistorys(data))
    }, [] )


    const handleDelete = id => {
        const proceed = window.confirm('are you sure, you want to delete ?');
        if (proceed) {

            const url = `https://intense-tor-58005.herokuapp.com/booking/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Delete')
                        const remaining = historys.filter(history => history._id !== id);
                        setHistorys(remaining);
                    }
                })

        }
        
    }


    return (
        <div className="container">
            <h2 className="text-center mt-5 fw-bold">My Booking</h2>
            <ul>
                {
                    historys.map(history => 
                        <div>
                            {
                                history?.userName ? '' : <div key={history._id} className="m-5">
                                    <h5> Booking History of {history.name}</h5>
                                    <li>Name : {history.name}</li>
                                    <li>Email : {history.email}</li>
                                    <li>Bath Date : {history.bathdate}</li>
                                    <li>Number : {history.number}</li>
                                    <li>Address : {history.address}</li>
                                    <button onClick={() => handleDelete(history._id)} className="btn btn-danger px-4 mt-3">Delete</button>
                                </div>
                            }
                            
                        </div>
                    )
                }
            </ul>
        </div>
    );
};

export default BookingHistory;