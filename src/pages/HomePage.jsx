import React from 'react'
import { useSelector } from 'react-redux';
import Cards from '../Components/Cards';
import user from '../resources/user.jpg'
import star from '../resources/star.svg'
import 'aos/dist/aos.css';
import AOS from 'aos';
import Questions from '../Components/Questions';

export const HomePage = () => {
  const tours = useSelector(state => state.tours.tours)
  AOS.init({
    once: true
})
  return (
    <> 
    <div className="mb-20">
      <section className='container m-auto w-fll flex justify-around items-center px-5 max-md:justify-start gap-20 py-36 text-gray-500 max-xl:py-28 max-lg:py-20 max-md:py-14 max-md:gap-10 max-sm:py-5 max-sm:flex-col'>
        <div className="max-w-2xl w-full">
          <h2 className='text-5xl max-xl:text-3xl max-lg:text-2xl max-md:text-xl '>путишествии по Узбекистану c "anonimus"</h2>
          <ul className='mt-10 max-md:grid-cols-2'>
            <li className='text-xl max-lg:text-base'>- Lorem, ipsum.</li>
            <li className='text-xl max-lg:text-base'>- Lorem, ipsum.</li>
            <li className='text-xl max-lg:text-base'>- Lorem, ipsum.</li>
          </ul>
        </div>
        <div className="">
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
      <div className='container px-5 m-auto w-[100%]'>
      <div className='mb-10'>
        <h1 data-aos="fade-left"
         className='text-5xl font-medium'
         data-aos-offset="300"
         data-aos-easing="ease-in-sine"
         data-aos-duration="500">Обо мне</h1>
        <p data-aos="fade-left"
         className='mt-3 mb-3'
         data-aos-offset="300"
         data-aos-easing="ease-in-sine"
         data-aos-duration="500"
         >Меня зовут anonymus и я являюсь действующим гидом по городам Узбекистана. 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptas officiis aspernatur aperiam molestias quidem aliquam maxime nulla quibusdam! Distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aperiam. Voluptatem aut, obcaecati accusantium qui totam sapiente ea consectetur ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime esse neque, reprehenderit et aspernatur repellat explicabo omnis minus enim fuga. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, placeat dignissimos doloribus itaque modi natus delectus omnis suscipit quidem magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime esse neque, reprehenderit et aspernatur repellat explicabo omnis minus enim fuga. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, placeat dignissimos doloribus itaque modi natus delectus omnis suscipit quidem magnam.
        </p>
      </div>
      <div className='mb-5'>
        <h1 className='text-5xl font-medium'>Актуальные туры</h1>
      </div>
      </div>
      <section className='container m-auto px-5 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-10'>
        {
          tours.map(i => <Cards item={i} key={i.id} />)
        }
      </section>
      <div className='container px-5 m-auto w-[100%]'>
      <Questions />
      </div>
    </>
  )
}
