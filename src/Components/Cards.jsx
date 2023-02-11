import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Cards = ({ item }) => {
    AOS.init({
        once: true
    })
    const { t } = useTranslation()

    const navigate = useNavigate("/info");

    const changePage = () => {
        navigate("/info/:" + item.id, { state: item.id });
    };

    return (
        <div onClick={changePage}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500" className="cont-n hover:drop-shadow-2xl transition ease-in w-full m-auto bg-white border border-gray-200 rounded-lg shadow-md">
            <div className="rounded-t-lg h-52 max-xl:h-36 max-md:h-32 max-sm:h-full bg-red-300 overflow-hidden">
                <img className=" object-cover w-full" src={item.img} alt="" />
            </div>
            <div className="p-5">
                <h5 className="mb-2 text-2xl max-lg:text-lg font-bold tracking-tight text-dark trun">{item.title}</h5>
                <p className=" cont-n mb-3 font-normal text-gray-700 dark:text-gray-400 ">{item.body}</p>
                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#3ba4ec] rounded-lg hover:bg-[#1f97e7] focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                    {t("moreInfoBtn")}
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </div>
        </div>
    );
}

export default Cards;
