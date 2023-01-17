import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import "swiper/css";
import "swiper/css/navigation";
import { BiLeftArrowAlt } from 'react-icons/bi';
import AOS from 'aos';
import kalpok from "../resources/kalpok.png"

export const InfoPage = () => {
    const takeHeigth = useRef(null)
    window.scrollTo(0, 0);
    let {pathname} = useLocation()
    let splited = pathname.split(':').at(-1)
	const navigate = useNavigate();

    const tours = useSelector(state => state.tours.tours)
    const info = tours.filter(item => item.id === +splited)[0]

    AOS.init({
        once: true
      })
    //  
    return (
        <>
        <section
        data-aos="fade-down"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500"
        className="overflow-hidden w-full bg-cover bg-center mb-10 h-[600px] max-[680px]:h-[400px] max-[500px]:h-[300px] max-[500px]:mb-0 max-[400px]:h-[250px]">
            <div className="div w-full absolute -z-10 h-[600px] max-[680px]:h-[400px] max-[500px]:h-[300px] max-[400px]:h-[250px]"><img className='w-full absolute -z-10 h-[600px] max-[680px]:h-[400px] max-[500px]:h-[300px] max-[400px]:h-[250px]' src={info.img2} alt="" /></div>
            <div className='m-auto container text-white pt-48 max-[680px]:pt-14 max-[680px]:p-5 max-[500px]:pt-8'>
                <h1 className='text-5xl font-bold mb-10 max-[680px]:text-3xl max-sm:text-4xl max-[500px]:text-2xl max-[500px]:mt-10'>{info.title}</h1>
                <p className=" text-4xl font-medium max-[680px]:text-3xl max-[500px]:text-xl  max-[390px]:text-base " >Изучить главные шедевры архитектуры, услышать истории из прошлого и ощутить сумеречную магию Востока</p>
                <BiLeftArrowAlt className=' absolute top-2' onClick={() => navigate(-1)} size={40}/>
            </div>
        </section>
        <section className='overflow-x-hidden w-full max-[680px]:p-5'>
            <div className="m-auto container flex gap-1 max-lg:block">
                <div className="left w-3/4 max-lg:w-full max-lg:mb-5">
                    <p
                    data-aos="zoom-in"
                    className=' text-xl mb-10 w-[95%] max-sm:text-base'>{info.body}</p>
                    <h1
                    data-aos="fade-right"
                    className=' text-2xl font-bold mb-5'>Что вас ожидает</h1>
                    <div ref={takeHeigth} className="plcesss flex flex-col gap-4 mb-14">
                    {/* <div className="roadline w-[4px] h-[90%] bg-[#3ba4ec] rounded-full  absolute z-[-1] left-36"></div> */}
                    {/* before:w-4 before:h-4 before:top-2 before:shadow-md before:bg-white before:border-[#3ba4ec] bord before:absolute before:-left-[51px] before:rounded-full before:z-40 */}
                    {
                        info.places.map(item =>  
                        <div className="places w-[95%] max-lg:w-full "
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="500"
                        >
                            <h1 key={item.id} className=' text-xl font-bold'>{item.title}</h1>
                            <div key={item.id} className="infoCont flex gap-2 h-28 max-[700px]:flex-col max-[820px]:gap-0 max-md:block max-md:h-fit">
                                <p key={item.id} className='text-ellipsis text-xl max-lg:mb-3 max-md:text-base'>{item.body}</p>
                                <img key={item.id} src={item.img} alt={item.title} className=" rounded-xl max-md:w-full" />
                            </div>
                        </div>)
                    }
                    </div>
                </div>
                <div
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
                className="right h-fit w-1/3 sticky top-12 right-2 bg-[#3ba4ec] p-5 rounded-lg text-white max-lg:w-full">
                    <img src={kalpok} className=' w-24 absolute -top-5 -right-3 rotate-[25deg]' alt="Тюбитейка" />
                    <div className="top border-b border-white">
                        <h1 className=' font-bold text-xl mb-5 max-xl:font-semibold'>Индивидуальная экскурсия для 1–4 человек</h1>
                        <div className="duration flex justify-between mb-3">
                            <h1 className=' font-bold max-xl:font-semibold'>Длительность :</h1>
                            <p>6 часа</p>
                        </div>
                        <div className="duration flex flex-col justify-between mb-3">
                            <h1 className=' font-bold max-xl:font-semibold'>В стоимость входит :</h1>
                            <p>Экскурсия с гидом</p>
                            <p>Входные билеты</p>
                            <p>Транспорт во время экскурсии</p>
                        </div>
                    </div>
                    <div className="bot pt-3">
                        <div className="prices flex flex-col justify-between">
                        <h1 className='font-bold'>Цена :</h1>
                            <div className="ps">
                                <p>1 человек по <b>100$</b></p>
                                <p>2 человека по <b>65$</b></p>
                                <p>3 человека по <b>55$</b></p>
                            </div>
                        </div>
                        <a href="https://t.me/sard0r_js"><button className='w-full bg-[#00000030] p-3 rounded-lg text-center mt-2'>Забронировать</button></a>
                    </div>
                </div>
                </div>

        </section>
    </>
    )
}
