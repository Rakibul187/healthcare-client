import React from 'react';
import { Link } from 'react-router-dom';
import './BannerItem.css';

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} style={{ height: "80vh" }} className="carousel-item relative w-full">
            <div style={{ width: "100%" }} className='carousel-img'>
                <img src={image} alt="" className="w-full h-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='text-5xl font-bold text-white'>
                    Medicines cure<br />
                    diseases but only doctors <br />
                    can cure patients
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2 mt-8">
                <p className='text-xl text-white'>Having good health helps a person to perform their daily routine in a smooth manner. Physical health of a person means the body is not affected by any disease whereas mental or social health is characterized by the ability of a person to accomplish various social tasks given to him.</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
                <button className="btn btn-outline btn-warning"><Link to='/services'>My Services</Link></button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;