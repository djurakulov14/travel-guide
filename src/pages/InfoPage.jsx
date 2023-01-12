import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export const InfoPage = () => {

    let {pathname} = useLocation()
    let splited = pathname.split(':').at(-1)


    const tours = useSelector(state => state.tours.tours)
    const info = tours.filter(item => item.id === splited)[0]
    
    console.log(splited);

    return (
        <>
        <section style={{backgroundImage: `url(${info.img})`}} className=" w-full h-[600px] bg-cover bg-center mb-10 max-[680px]:h-[400px] max-[680px]:p-8 max-[500px]:h-[300px] max-[500px]:mb-0">
            <div className='m-auto container text-white pt-48 max-[680px]: pt-14 max-[500px]:pt-5'>
                <h1 className='text-5xl font-bold mb-10 max-[680px]:text-3xl max-sm:text-4xl max-[500px]:text-2xl'>Сказка вечернего Самарканда</h1>
                <p className=" text-4xl font-medium max-[680px]:text-3xl  max-[500px]:text-xl  max-[390px]:text-base" >Изучить главные шедевры архитектуры, услышать истории из прошлого и ощутить сумеречную магию Востока</p>

            </div>
        </section>
        <section className='w-full max-[680px]:p-8'>
            <div className="m-auto container flex gap-1 max-lg:block">
                <div className="left w-3/4 max-lg:w-full max-lg:mb-5">
                    <p className=' text-xl mb-10'>В путешествии по Самарканду на закате дня вы полюбуетесь величественными сооружениями в подсветке и сделаете эффектные снимки, наполненные волшебством Средневекового Востока. Я познакомлю вас с историей древних архитектурных памятников и с особым трепетом расскажу о легендарном Тамерлане. А в новом парке «Вечный город» перед вами предстанет вся мозаика яркого Узбекистана.</p>
                    <h1 className=' text-2xl font-bold mb-5'>Что вас ожидает</h1>
                    <div className="places mb-3">
                        <h1 className=' text-lg font-bold'>Площадь Регистан</h1>
                        <p className=''>Я обязательно представлю вам главную достопримечательность нашего города, состоящую из двух величественных медресе и мечети, которая восхищает своим убранством. Во внутренних двориках медресе, слушая рассказы о процессе обучения студентов, вы представите и поймете, как работала наша система образования в 15-17 веках.</p>
                    </div>
                    <div className="places mb-3">
                        <h1 className=' text-lg font-bold'>Мавзолей Гур-Эмир</h1>
                        <p className=''>С особым удовольствием я поделюсь с вами рассказами об истории жизни Тамерлана, его военных походах и судьбе империи Тимуридов после его смерти. «Правитель мира», один из величайших полководцев в истории человечества, личность, овеянная сотнями легенд — что мы знаем о нем доподлинно и каков истинный вес его исторической роли? Обсудим на встрече!</p>
                    </div>
                    <div className="places mb-3">
                        <h1 className=' text-lg font-bold'>Мечеть Биби-Ханым</h1>
                        <p className=''>Осматривая снаружи крупнейшую мечеть Средней Азии, вы узнаете об особенностях возведения памятника 14 века. Также мы поговорим о том, чем сегодня мечети отличаются по своей структуре и архитектуре.</p>
                    </div>
                    <div className="places mb-3">
                        <h1 className=' text-lg font-bold'>Вечный город — культурная мозаика Узбекистана</h1>
                        <p className=''>В современном историко-этнографический парке представлена история, культура и архитектура всей нашей гостеприимной и радушной страны. В одном месте вы увидите мотивы Самарканда, Бухары, Ферганы, Ташкена, Хивы. Выясните, почему здесь умышленно не стали создавать точные реплики достопримечательностей. И оцените богатство тысячелетних традиций Узбекистана, заглядывая в лавки мастеров.</p>
                    </div>
                    <div className="slider w-[100%] h-fit">
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                            <SwiperSlide><img src="https://cdn.tripster.ru/thumbs2/84e2ae84-594f-11ed-a372-deb9864510e4.800x600.jpeg" className=' rounded-lg' alt="" /></SwiperSlide>
                            <SwiperSlide><img src="https://cdn.tripster.ru/thumbs2/9dd3cdca-594e-11ed-865b-deb9864510e4.800x600.jpeg" className=' rounded-lg' alt="" /></SwiperSlide>
                            <SwiperSlide><img src="https://cdn.tripster.ru/thumbs2/dc1839fe-594e-11ed-bfbb-ee13dcd0c4e0.800x600.jpeg" className=' rounded-lg' alt="" /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="right h-fit w-1/3 sticky top-5 right-2 bg-gray-600 p-5 rounded-lg text-white max-lg:w-full">
                    <div className="top border-b border-white">
                        <h1 className=' font-bold text-xl mb-5 max-xl: font-semibold'>Индивидуальная экскурсия для 1–4 человек</h1>
                        <div className="duration flex justify-between mb-3">
                            <h1 className=' font-bold max-xl: font-semibold'>Длительность</h1>
                            <p>3 часа</p>
                        </div>
                        <div className="duration flex justify-between mb-3">
                            <h1 className=' font-bold max-xl: font-semibold'>Как проходит</h1>
                            <p>На машине</p>
                        </div>
                        <div className="duration flex justify-between  mb-3">
                            <h1 className=' font-bold max-xl: font-semibold'>Дети</h1>
                            <p>Можно с детьми</p>
                        </div>
                    </div>
                    <div className="bot pt-5">
                        <div className="price">
                            <div className="top flex gap-1 items-end mb-2">
                                <h1 className=' text-2xl font-bold '>€ 80</h1>
                                <p>за экскурсию</p>
                            </div>
                            <p className=' text-sm'>*Цена за 1-4 человек, независимо от числа участников</p>
                        </div>
                        <a href="https://t.me/sard0r_js"><button className='w-full bg-gray-700 p-3 rounded-lg text-center mt-10'>Забронировать</button></a>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}
