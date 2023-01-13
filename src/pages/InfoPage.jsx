import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

export const InfoPage = () => {

    let {pathname} = useLocation()
    console.log(pathname);
    let splited = pathname.split(':').at(-1)


    const tours = useSelector(state => state.tours.tours)
    const info = tours.filter(item => item.id === splited)[0]
    
    console.log(splited);

    return (
        <>
            <section style={{backgroundImage: `url(${info.img2})`}} className=" w-full h-[600px] bg-cover bg-center mb-10">
                <div className='container m-auto text-white pt-48 bg'>
                    <h1 className='text-5xl font-bold mb-10'>{info.title}</h1>
                    <p className=" text-4xl font-medium">Изучить главные шедевры архитектуры, услышать истории из прошлого и ощутить сумеречную магию Востока</p>
                </div>
            </section>
            <section className=' w-full'>
                <div className="container m-auto flex justify-between">
                    <div className="left w-3/4 ">
                        <p className=' text-xl mb-10'>{info.body}</p>
                        <h1 className=' text-2xl font-bold mb-5'>Что вас ожидает</h1>
                        <div className="places mb-3">
                            <h1 className=' text-lg font-bold'>Площадь Регистан</h1>
                            <p className=''>Я обязательно представлю вам главную достопримечательность нашего города, состоящую из двух величественных медресе и мечети, которая восхищает своим убранством. Во внутренних двориках медресе, слушая рассказы о процессе обучения студентов, вы представите и поймете, как работала наша система образования в 15-17 веках.</p>
                        </div>
                        <div className="places mb-3">
                            <h1 className=' text-lg font-bold'>Площадь Регистан</h1>
                            <p className=''>Я обязательно представлю вам главную достопримечательность нашего города, состоящую из двух величественных медресе и мечети, которая восхищает своим убранством. Во внутренних двориках медресе, слушая рассказы о процессе обучения студентов, вы представите и поймете, как работала наша система образования в 15-17 веках.</p>
                        </div>
                        <div className="places mb-3">
                            <h1 className=' text-lg font-bold'>Площадь Регистан</h1>
                            <p className=''>Я обязательно представлю вам главную достопримечательность нашего города, состоящую из двух величественных медресе и мечети, которая восхищает своим убранством. Во внутренних двориках медресе, слушая рассказы о процессе обучения студентов, вы представите и поймете, как работала наша система образования в 15-17 веках.</p>
                        </div>
                        <div className="places mb-3">
                            <h1 className=' text-lg font-bold'>Площадь Регистан</h1>
                            <p className=''>Я обязательно представлю вам главную достопримечательность нашего города, состоящую из двух величественных медресе и мечети, которая восхищает своим убранством. Во внутренних двориках медресе, слушая рассказы о процессе обучения студентов, вы представите и поймете, как работала наша система образования в 15-17 веках.</p>
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
        </section>
    </>
    )
}
