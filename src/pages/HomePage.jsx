import React from 'react'
import { useSelector } from 'react-redux';
import user from '../resources/user.jpg'

export const HomePage = () => {
  const tours = useSelector(state => state.tours.tours)

  console.log(tours);

  return (
    <div className='container m-auto px-5'>
      <section style={{background:`url(http://www.opts.tours/media/k2/items/cache/deb9f9efc56ef2a940bdf0d58ccaad5c_XL.jpg)`}} className='  w-fll flex justify-around max-md:justify-start gap-20  py-36 text-gray-500 max-xl:py-28 max-lg:py-20 max-md:py-14 max-md:gap-10 max-sm:py-5 max-sm:flex-col'>
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
