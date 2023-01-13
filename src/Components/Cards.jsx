import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link } from 'react-router-dom';
const Cards = ({item}) => {
    AOS.init({
        once: true
    })
    return (
        <Link to={`/info/:` + item.id}>
<div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
     data-aos-duration="500"  className=" hover:drop-shadow-2xl transition ease-in sm:w-full m-auto w-[95%] bg-white border border-gray-200 rounded-lg shadow-md">
    <a >
        <img className="rounded-t-lg" src={item.img} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-dark">{item.title}</h5>
        </a>
        <p className=" cont-n mb-3 font-normal text-gray-700 dark:text-gray-400">{item.body}</p>
        <Link to={`/info/:` + item.id}>
        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Узнать подробнее
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
        </Link>
    </div>
</div>
        </Link>

    );
}

export default Cards;
