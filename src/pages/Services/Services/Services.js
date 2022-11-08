import React, { useEffect, useState } from 'react';
import ServiceItem from './ServiceItem/ServiceItem';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/services", { headers: { limit: 3 } })
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services)
    return (
        <div>
            {services?.length}
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 my-10'>
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