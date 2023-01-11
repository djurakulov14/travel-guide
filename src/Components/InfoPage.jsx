import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

export const InfoPage = () => {

    let {state} = useLocation()


    const tours = useSelector(state => state.tours.tours)
    const info = tours.filter(item => item.id == 1)


    return (
        <>
            <section >
                <div className='container'>
                    
                </div>
            </section>
        </>
    )
}
