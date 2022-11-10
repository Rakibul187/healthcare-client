import React from 'react';
import useTitle from '../hooks/useTittle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div>
            <h1 className='text-4xl mx-12 mt-12 mb-6 font-bold'>You May Know More About</h1>
            <div className='mx-12 mb-12 gap-5'>
                <div className='p-5 mb-4 bg-slate-50 rounded-lg border-r-4 border-l-4'>
                    <h3 className='text-xl font-bold my-2'>Difference between SQL and NoSQL ?</h3>
                    <p>SQL is the programming language used to interface with relational databases. Relational databases model data as records in rows and tables with logical links between them. NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
                </div>
                <div className='p-5 mb-4 bg-slate-50 rounded-lg border-r-4 border-l-4'>
                    <h3 className='text-xl font-bold my-2'>What is JWT, and how does it work?</h3>
                    <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                </div>
                <div className='p-5 mb-4 bg-slate-50 rounded-lg border-r-4 border-l-4'>
                    <h3 className='text-xl font-bold my-2'>What is the difference between javascript and NodeJS?</h3>
                    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                </div>
                <div className='p-5 mb-4 bg-slate-50 rounded-lg border-r-4 border-l-4'>
                    <h3 className='text-xl font-bold my-2'>How does NodeJS handle multiple requests at the same time?</h3>
                    <p> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;