import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const ServiceDetails = () => {

    const { user } = useContext(AuthContext)
    const service = useLoaderData()
    const { description, name, img, price, _id, rating } = service;

    console.log(service)


    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const reviewerName = form.name.value
        const serviceName = name;
        const rating = form.rating.value;
        const description = form.message.value;
        const img = form.URL.value;
        const id = _id;

        const review = {
            serviceName,
            id,
            reviewerName,
            email: user.email,
            img,
            rating,
            description,
        }
        console.log(review)
        // if(phone.length > 10){
        //     alert('Phone number should be 10 characters or longer')
        // }
        // else{

        // }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review placed successfully')
                    // form.reset();

                }
            })
            .catch(er => console.error(er));


    }



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



            <div>
                <form onSubmit={handleReview} className='mt-24 w-2/3 mx-auto'>
                    <h2 className="text-4xl my-3 text-center text-gray-500">Tell Us Which Service Do You Want ?</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input name="name" type="text" placeholder="Your Name" className="input input-ghost w-full  input-bordered" required />
                        <input name="email" type="text" placeholder='Your Email' defaultValue={user?.email} readOnly className="input input-ghost w-full  input-bordered" />
                        <input name="URL" type="url" placeholder="Your Image" className="input input-ghost w-full  input-bordered" required />
                        <input name="rating" type="text" placeholder="Rating" className="input input-ghost w-full  input-bordered" required />
                    </div>
                    <textarea name="message" className="textarea textarea-bordered h-24 mt-2 w-full" placeholder="About Service" required></textarea>

                    <input className='btn btn-warning ' type="submit" value="Place Your Review" />
                </form>
            </div>
        </div>
    );
};

export default ServiceDetails;