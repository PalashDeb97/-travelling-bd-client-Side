import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import "./BookingNow.css";

const BookingNow = () => {
    const { serviceId } = useParams();

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        axios.post('https://intense-tor-58005.herokuapp.com/booking', data)
        .then(res => {
            console.log(res);
            if (res.data.insertedId) {
                alert('Successfully Booking');
                reset();
            }
        })
    };

    return (
        <div className="m-5">
            <h6 className="text-danger">Service Id Number : {serviceId}</h6>
            <h1 className="mb-5 text-center fw-bold">Booking Now</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column mx-5 mx-auto form-width" >
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" className="mb-3 p-2" />
                <input {...register("email")} placeholder="Email" className="mb-3 p-2" />
                <input type="date" {...register("bathdate")} placeholder="bath date" className="mb-3 p-2" />
                <input type="number" {...register("number")} placeholder="Phone Number" className="mb-3 p-2" />
                <textarea {...register("address")} placeholder="Address" className="mb-3 p-2" />
                <input type="submit" className="btn btn-dark" />
            </form>
        </div>
    );
};

export default BookingNow;