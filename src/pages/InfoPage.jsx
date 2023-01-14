import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { BiLeftArrowAlt } from 'react-icons/bi';
import AOS from 'aos';

export const InfoPage = () => {

    window.scrollTo(0, 0);
    let {pathname} = useLocation()
    let splited = pathname.split(':').at(-1)
	const navigate = useNavigate();

    const tours = useSelector(state => state.tours.tours)
    const info = tours.filter(item => item.id == splited)[0]

    AOS.init({
        once: true
      })

    return (
        <>
        <section
        data-aos="fade-down"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500"
        className="w-full h-[600px] bg-cover bg-center mb-10 max-[680px]:h-[400px] max-[500px]:h-[300px] max-[500px]:mb-0">
            <div className="div w-full absolute -z-10 h-[600px] max-[680px]:h-[400px] max-[500px]:h-[300px]"><img className='w-full absolute -z-10 h-[600px] max-lg:h-[500px] max-[680px]:h-[400px] max-[500px]:h-[300px]' src={info.img} alt="" /></div>
            <div className='m-auto container text-white pt-48 max-[680px]:pt-14 max-[680px]:p-5 max-[500px]:pt-10'>
                <h1 className='text-5xl font-bold mb-10 max-[680px]:text-3xl max-sm:text-4xl max-[500px]:text-2xl'>{info.title}</h1>
                <p className=" text-4xl font-medium max-[680px]:text-3xl  max-[500px]:text-xl  max-[390px]:text-base" >Изучить главные шедевры архитектуры, услышать истории из прошлого и ощутить сумеречную магию Востока</p>
                <BiLeftArrowAlt className=' absolute top-2' onClick={() => navigate(-1)} size={40}/>
            </div>
        </section>
        <section className='w-full max-[680px]:p-5'>
            <div className="m-auto container flex gap-1 max-lg:block">
                <div className="left w-3/4 max-lg:w-full max-lg:mb-5">
                    <p
                    data-aos="zoom-in"
                    className=' text-xl mb-10'>{info.body}</p>
                    <h1
                    data-aos="fade-right"
                    className=' text-2xl font-bold mb-5'>Что вас ожидает</h1>
                    {
                        info.places.map(item =>  
                        <div className="places mb-3"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="500"
                        >
                            <h1 className=' text-lg font-bold'>{item.title}</h1>
                            <p className=''>{item.body}</p>
                        </div>)
                    }
                    <div
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="500"
                    className="slider w-[70%] max-lg:w-full h-fit bg-[#F2F1EF] ">
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper bg-[#F2F1EF] w-[70%] m-auto max-lg:W-[100%]">
                            {
                                info.places.map(item => <SwiperSlide className='bg-[#F2F1EF]'><img src={item.img} className=' rounded-lg w-full h-full' alt="" /></SwiperSlide>)
                            }
                        </Swiper>
                    </div>
                </div>
                <div
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
                className="right h-fit w-1/3 sticky top-5 right-2 bg-gray-600 p-5 rounded-lg text-white max-lg:w-full">
                    <div className="top border-b border-white">
                        <h1 className=' font-bold text-xl mb-5 max-xl:font-semibold'>Индивидуальная экскурсия для 1–4 человек</h1>
                        <div className="duration flex justify-between mb-3">
                            <h1 className=' font-bold max-xl:font-semibold'>Длительность</h1>
                            <p>3 часа</p>
                        </div>
                        <div className="duration flex justify-between mb-3">
                            <h1 className=' font-bold max-xl:font-semibold'>Как проходит</h1>
                            <p>На машине</p>
                        </div>
                        <div className="duration flex justify-between mb-3">
                            <h1 className=' font-bold max-xl:font-semibold'>Дети</h1>
                            <p>Можно с детьми</p>
                        </div>
                    </div>
                    <div className="bot pt-5">
                        <a href="https://t.me/sard0r_js"><button className='w-full bg-gray-700 p-3 rounded-lg text-center mt-2'>Забронировать</button></a>
                    </div>
                </div>
                </div>

        </section>
    </>
    )
}
