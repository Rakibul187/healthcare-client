import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])

    const handleDelete = id => {
        console.log(id)
        const proceed = window.confirm("Are you sure you want to delete this review?")
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = review.filter(rev => rev._id !== id);
                        setReview(remaining);
                    }
                }
                )
        }
    }

    return (
        <div style={{ height: "100vh" }}>
            {review.length > 0 ?
                <>
                    <h1 className='text-3xl font-bold mt-20 mb-5 text-orange-400'>Your Previous Review</h1>
                    <div>
                        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-5'>
                            {review.map(rev =>
                                <div key={rev._id}>
                                    <div className='border border-lg rounded-xl p-3'>
                                        <div className='flex justify-items-center gap-2'>
                                            <img style={{ width: '35px', height: '35px', borderRadius: '17px' }} src={rev.img} alt="" />
                                            <span className='font-semibold'>{rev.reviewerName}</span>
                                        </div>
                                        <h2 className='text-xl font-semibold'>{rev.serviceName}</h2>
                                        <p className=''>{rev.description}</p>
                                        <div className='flex justify-between items-center mt-2'>
                                            <p className='text-orange-500'>Rating: {rev.rating}</p>
                                            <div>
                                                <button className="btn mr-2 btn-outline btn-warning">Update</button>
                                                <button onClick={() => handleDelete(rev?._id)} className="btn btn-outline btn-error">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>)}
                        </div>
                    </div>
                </>
                :
                <>
                    <h2 className='text-3xl font-bold mt-20 mb-5 text-center text-orange-400'>You didnt added any review yet!</h2>
                </>}
        </div>
    );
};

export default MyReview;