import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTittle';

const ServiceDetails = () => {

    useTitle('Service-details -& -review')

    const [reviews, setReviews] = useState([])
    const { user } = useContext(AuthContext)

    const service = useLoaderData()
    const { description, name, img, price, _id, rating } = service;

    // console.log(service)


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

        fetch('https://healthcare-server.vercel.app/reviews', {
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
                    toast.success('Review added succesfully')
                    form.reset();
                }
            })
            .catch(er => console.error(er));
    }

    useEffect(() => {
        fetch(`https://healthcare-server.vercel.app/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id])

    console.log(reviews)
    return (
        <div style={{ minHeight: "100vh" }} className='grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2'>

            <div style={{ height: '650px' }} className="card w-96 bg-base-100 shadow-lg p-3 my-16">
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
                <div>
                    {
                        user?.uid ?

                            <form onSubmit={handleReview} className='mt-16 w-2/3 mx-auto'>
                                <h2 className="text-4xl my-3 text-center text-gray-500"> Please Add a Review</h2>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                    <input name="name" type="text" placeholder="Your Name" className="input input-ghost w-full  input-bordered" required />
                                    <input name="email" type="text" placeholder='Your Email' defaultValue={user?.email} readOnly className="input input-ghost w-full  input-bordered" />
                                    <input name="URL" type="url" placeholder="Your Image" className="input input-ghost w-full  input-bordered" required />
                                    <input name="rating" type="text" placeholder="Rating" className="input input-ghost w-full  input-bordered" required />
                                </div>
                                <textarea name="message" className="textarea textarea-bordered h-24 mt-2 w-full" placeholder="About Service" required></textarea>

                                <input className='btn btn-warning ' type="submit" value="submit" />
                            </form>


                            :
                            <h2 className='text-2xl font-bold  mt-16'>If you want to add a review please <Link className='underline text-lg text-primary' to="/login">Login</Link></h2>
                    }
                </div>

                <div>
                    <h1 className='text-3xl font-bold mt-10 mb-5 text-orange-400 '>Previous Review</h1>
                    <div>
                        <div className='grid gap-5 mb-20'>
                            {reviews.map(rev =>
                                <div key={rev._id}>
                                    <div className='border border-lg rounded-xl p-3'>
                                        <div className='flex justify-items-center gap-2'>
                                            <img style={{ width: '35px', height: '35px', borderRadius: '17px' }} src={rev.img} alt="" />
                                            <span className='font-semibold'>{rev.reviewerName}</span>
                                        </div>
                                        <h2 className='text-xl font-semibold'>{rev.serviceName}</h2>
                                        <p className=''>{rev.description}</p>
                                        <p className='text-orange-500'>Rating: {rev.rating}</p>
                                    </div>
                                </div>)}
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ServiceDetails;