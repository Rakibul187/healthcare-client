import React from 'react';
import person from '../../../assets/banner/banner4.jpg'
import parts from '../../../assets/banner/banner2.jpg'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import useTitle from '../../hooks/useTittle';

const About = () => {

    useTitle('About')
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={person} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img src={parts} alt="" className="absolute right-5 top-1/2 w-3/5 border-8 rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <p className="text-2xl font-bold text-orange-600">About</p>
                    <h1 className="my-5 text-5xl font-bold">
                        I am qualified <br />
                        & experertise on</h1>
                    <div className='flex gap-5 font-semibold '>
                        <div>
                            <li>Physical Activity</li>
                            <li>Nutrition Strategies</li>
                            <li>Fitness & Performance</li>
                        </div>
                        <div>
                            <li>Workout Routine</li>
                            <li>Workout Routine</li>
                            <li>Healthy DAily Life</li>
                        </div>
                    </div>
                    <p className="py-6">Physicians should be personable, great listeners, and empathetic to the concerns of their patients,” he elaborates. “They should not be condescending or arrogant. They should treat others as they want to be treated.” “Physicians should be personable, great listeners, and empathetic to the concerns of their patients.” </p>
                    <button className="btn btn-outline btn-warning"><Link to='/services'>Services</Link> <FaArrowRight></FaArrowRight></button>
                </div>
            </div>
        </div>
    );
};

export default About;