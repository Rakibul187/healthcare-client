import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';


const ServiceItem = ({ service }) => {
    const { description, name, _id, img, price, rating } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-lg p-3">
            <div >
                <figure style={{ height: "250px" }}>
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} className="rounded" alt="Shoes" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>
                    {description.length > 100 ? description.slice(0, 100) : description}
                </p>
                <div className='flex justify-between'>
                    <span>Fee: ${price}</span>
                    <span>Rating: {rating}</span>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}><button className="btn btn-outline btn-warning mt-2">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;