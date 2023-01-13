import React from 'react'
import { useSelector } from 'react-redux';
import Cards from '../Components/Cards';
import user from '../resources/user.jpg'
import star from '../resources/star.svg'

export const HomePage = () => {
  const tours = useSelector(state => state.tours.tours)

  return (
    <>
      <div className="mb-20">
        <div className="w-full h-12 bg-[#181818]"></div>
        <section className='container m-auto w-fll flex justify-around items-center max-md:justify-start gap-20 py-28 text-gray-500 max-xl:py-[50px] max-lg:py-12 max-md:py-11 max-md:gap-10 max-sm:py-5 max-sm:flex-col'>
          <div data-aos="fade-right" className="max-w-2xl w-full">
            <h2 className='text-5xl max-xl:text-3xl max-lg:text-2xl max-md:text-xl '>путишествии по Узбекистану c "anonimus"</h2>
            <ul className='mt-10 max-md:grid-cols-2'>
              <li className='text-xl max-lg:text-base'>- Lorem, ipsum.</li>
              <li className='text-xl max-lg:text-base'>- Lorem, ipsum.</li>
              <li className='text-xl max-lg:text-base'>- Lorem, ipsum.</li>
            </ul>
          </div>
          <div data-aos="fade-left" className="">
            <img className='rounded-full max-w-lg max-xl:max-w-md max-lg:max-w-sm max-md:max-w-xs max-sm:max-w-full' src={user} alt="" />
          </div>
        </section>
        <div className="w-[100%] ">
          <marquee scrollamount="15" className="w-[100%]  bg-[#181818]">
            <div className="flex gap-5 bg py-3 text-white">
              <p className='text-lg font-normal'>Lorem, ipsum dolor. </p><img src={star} alt="" />
              <p className='text-lg font-normal'>Lorem, ipsum dolor. </p><img src={star} alt="" />
              <p className='text-lg font-normal'>Lorem, ipsum dolor. </p><img src={star} alt="" />
              <p className='text-lg font-normal'>Lorem, ipsum dolor. </p><img src={star} alt="" />
              <p className='text-lg font-normal'>Lorem, ipsum dolor. </p><img src={star} alt="" />
              <p className='text-lg font-normal'>Lorem, ipsum dolor. </p><img src={star} alt="" />
            </div>

          </marquee>
        </div>
      </div>
      <section className='container m-auto px-5 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
        {
          tours.map(i => <Cards item={i} key={i.id} />)
        }
      </section>
    </>
  )
}
