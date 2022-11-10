import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTittle';
import ServiceItem from './ServiceItem/ServiceItem';

const Services = () => {
    const [services, setServices] = useState([])

    useTitle('Services')

    useEffect(() => {
        fetch("https://healthcare-server.vercel.app/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    // console.log(services)
    return (
        <div>
            <h1 className='mt-16 text-3xl font-bold text-orange-500 text-center'>My Services</h1>
            <hr className='w-2/12 border border-spacing-8 bg-info mt-2 mx-auto'></hr>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mb-10 pt-5'>
                {
                    services.map(service => <ServiceItem
                        key={service?._id}
                        service={service}
                    ></ServiceItem>)
                }
            </div>
        </div>
    );
};

export default Services;