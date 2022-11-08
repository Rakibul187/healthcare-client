import React from 'react';

const AddService = () => {

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.fee.value;
        const rating = form.rating.value;
        const description = form.message.value;
        const img = form.URL.value;

        const service = {
            description,
            img,
            name,
            price,
            rating

        }
        console.log(service)
        // if(phone.length > 10){
        //     alert('Phone number should be 10 characters or longer')
        // }
        // else{

        // }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order placed successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));


    }
    return (
        <div>
            <div style={{ height: "100vh" }}>
                <form onSubmit={handlePlaceOrder} className='mt-24 w-2/3 mx-auto'>
                    <h2 className="text-4xl my-3 text-center text-gray-500">Tell Us Which Service Do You Want ?</h2>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input name="name" type="text" placeholder="Service Name" className="input input-ghost w-full  input-bordered" />
                        <input name="fee" type="text" placeholder="Service Fee" className="input input-ghost w-full  input-bordered" />
                        <input name="URL" type="url" placeholder="Image URL" className="input input-ghost w-full  input-bordered" required />
                        <input name="rating" type="text" placeholder="Rating" className="input input-ghost w-full  input-bordered" />
                    </div>
                    <textarea name="message" className="textarea textarea-bordered h-24 mt-2 w-full" placeholder="About Service" required></textarea>

                    <input className='btn btn-warning ' type="submit" value="Place Your Desire Service" />
                </form>
            </div>
        </div>
    );
};

export default AddService;