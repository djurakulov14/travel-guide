import React from 'react'
import { useSelector } from 'react-redux';
import user from '../resources/user.jpg'

export const HomePage = () => {
  const tours = useSelector(state => state.tours.tours)

  console.log(tours);

  return (
    <div className="px-5 bg-[url('http://www.opts.tours/images/slider/slide3.jpg')] bg-no-repeat bg-cover	bg-center	">
      <section className='container m-auto w-fll flex justify-around px-5 max-md:justify-start gap-20 py-36 text-gray-500 max-xl:py-28 max-lg:py-20 max-md:py-14 max-md:gap-10 max-sm:py-5 max-sm:flex-col'>
        <div className="">
          <img className='max-w-sm max-xl:max-w-xs max-lg:max-w-[270px] max-md:max-w-[200px] max-sm:max-w-full' src={user} alt="" />
        </div>
        <div className="max-w-xl w-full h-fit">
          <h2 className=' text-white text-4xl max-xl:text-3xl max-lg:text-2xl max-md:text-xl '>путишествии по Узбекистану c "anonimus"</h2>
          <ul className='mt-10 max-md:grid-cols-2'>
            <li className='text-white text-xl max-lg:text-base'>- Lorem, ipsum.</li>
            <li className='text-white text-xl max-lg:text-base'>- Lorem, ipsum.</li>
            <li className='text-white text-xl max-lg:text-base'>- Lorem, ipsum.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
