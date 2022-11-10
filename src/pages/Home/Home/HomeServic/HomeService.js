import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const HomeService = () => {

    const [homeService, setHomeService] = useState([])

    useEffect(() => {
        fetch('https://healthcare-server.vercel.app/homeservice')
            .then(res => res.json())
            .then(data => setHomeService(data))
    }, [])

    return (

        <div>
            <h1 className='mt-16 text-3xl font-bold text-orange-500 text-center'>My Services</h1>
            <hr className='w-2/12 border border-spacing-8 bg-info mt-2 mx-auto'></hr>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mb-10 pt-5'>

                {
                    homeService.map(service =>
                        <div key={service?._id} className="card w-96 bg-base-100 shadow-lg p-3">
                            <div >
                                <figure style={{ height: "250px" }}>
                                    <PhotoProvider>
                                        <PhotoView src={service?.img}>
                                            <img src={service?.img} className="rounded" alt="Shoes" />
                                        </PhotoView>
                                    </PhotoProvider>
                                </figure>
                            </div>
                            <div className="card-body">
                                <h2 className="card-title">{service?.name}</h2>
                                <p>
                                    {service?.description?.length > 100 ? service?.description?.slice(0, 100) : service?.description}
                                </p>
                                <div className='flex justify-between'>
                                    <span>Fee: ${service?.price}</span>
                                    <span>Rating: {service?.rating}</span>
                                </div>
                                <div className="card-actions justify-end">
                                    <Link to={`/services/${service?._id}`}><button className="btn btn-outline btn-warning mt-2">Details <FaArrowRight className='ml-1'></FaArrowRight></button></Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <p className='text-center'><button className="btn  btn-warning px-6 mb-10 mt-2"><Link to="/services">See All</Link></button></p>
        </div>
    );
};

export default HomeService;