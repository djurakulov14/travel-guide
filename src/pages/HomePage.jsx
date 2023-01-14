import React from 'react'
import { useSelector } from 'react-redux';
import Cards from '../Components/Cards';
import user from '../resources/grandpa.jpeg'
import sun from '../resources/sun.svg'
import star from '../resources/star.svg'
import 'aos/dist/aos.css';
import AOS from 'aos';
import Questions from '../Components/Questions';
import logo from '../resources/logo.svg'
export const HomePage = () => {
  const tours = useSelector(state => state.tours.tours)

  AOS.init({
    once: true
  })
  const scrollBottom = () => {
    window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
  }
  const scrollTour = () => {
    window.scrollTo({ left: 0, top: 1200, behavior: "smooth" });
  }
  

  return (
    <>
    {/* #3ba4ec */}
      <div className="mb-20 w-full overflow-hidden">
        <header className=" w-full p-4 bg-[#3ba4ec]">
          <div className='container m-auto flex items-center justify-between'>
             <div className='flex items-center text-white gap-4'>
               <img src='https://cdn-icons-png.flaticon.com/512/3942/3942104.png' className='h-10' />
               <p className='text-xl cursor-pointer'>Tour guide</p>
             </div>
             <nav>
                 <div className='flex gap-5 text-white'>
                   <p onClick={scrollTour} className='cursor-pointer'>Туры</p>
                   <p onClick={scrollBottom} className='cursor-pointer'>Вопросы</p>
                   <p onClick={scrollBottom} className='cursor-pointer'>Контакты</p>
                 </div>
             </nav>
          </div>
        </header>
        <section className='container px-6 m-auto w-fll flex items-center  max-md:justify-start gap-20 py-28 text-gray-500 max-xl:py-[50px] max-lg:py-12 max-md:py-11 max-md:gap-10 max-sm:py-5 max-sm:flex-col'>
        <div data-aos="fade-right" data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500" className="bg-[#3ba4ec] rounded-r-full p-2 relative before:absolute before:top-0 before:z-[-1] before:right-[267px] before:w-screen before:h-full before:bg-[#3ba4ec]">
            <img className='rounded-full max-w-lg max-xl:max-w-[25rem] max-lg:max-w-[16rem] max-sm:max-w-full' src={user}  alt="" />
          </div>
          <div data-aos="fade-left" data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500" className="max-w-3xl w-full">
            <h2 className='text-start max-sm:text-center text-5xl max-xl:text-3xl max-lg:text-2xl max-md:text-2xl'>Путешествие по Узбекистану вместе <br /> c "anonimus" </h2>
            <ul className='mt-10 max-md:grid-cols-2'>
              <li className='text-xl max-lg:text-base'>- Путешествуй и наслаждайся</li>
              <li className='text-xl max-lg:text-base'>- Узнавай традиции и историю Узбекистана </li>
              <li className='text-xl max-lg:text-base'>- Заводи новых друзей</li>
            </ul>
            <a href="#0">
            <button type="button" class="mt-5 text-white bg-[#3ba4ec] hover:bg-[#1f97e7] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 ease-in">Узнать подробнее</button>
            </a>
          </div>
        </section>

        <div className="w-[100%] ">
          <marquee scrollamount="15" className="w-[100%]  bg-[#3ba4ec]">
            <div className="flex gap-5 bg py-3 text-white">
              <p className='text-lg font-normal'>Самарканд </p><img src={star} alt="" />
              <p className='text-lg font-normal'>Ташкент </p><img src={star} alt="" />
              <p className='text-lg font-normal'>Бухара </p><img src={star} alt="" />
              <p className='text-lg font-normal'>Хива </p><img src={star} alt="" />
              <p className='text-lg font-normal'>Хорезм </p><img src={star} alt="" />
              <p className='text-lg font-normal'>Андижан </p><img src={star} alt="" />
            </div>

          </marquee>
        </div>
      </div>
      <div className='container px-5 m-auto w-[100%]'>
        <div>
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
        <div id='tours' className='mb-10'></div>
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
