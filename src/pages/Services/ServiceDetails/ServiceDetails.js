import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData()
    const { description, name, img, price, rating } = service;

    console.log(service)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-lg p-3 my-15">
                <div >
                    <figure style={{ height: "250px" }}><img src={img} className="rounded" alt="Shoes" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className='flex justify-between'>
                        <span>Fee: ${price}</span>
                        <span>Rating: {rating}</span>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to="/services"><button className="btn btn-outline btn-warning mt-2">Back to service</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;