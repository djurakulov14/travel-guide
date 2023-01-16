import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Cards from '../Components/Cards';
import user from '../resources/grandpa.jpeg'
import star from '../resources/star.svg'
import 'aos/dist/aos.css';
import AOS from 'aos';
import Questions from '../Components/Questions';
import { FaArrowCircleUp } from 'react-icons/fa'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
export const HomePage = () => {
  const tours = useSelector(state => state.tours.tours)

  AOS.init({
    once: true
  })
  const scrollBottom = () => {
    window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
  }
  const scrollTour = () => {
    window.scrollTo({ left: 0, top: 1280, behavior: "smooth" });
  }
  const scrollTop = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  }
  const [show, setShow] = useState(false)
  useEffect(() => {
    window.onscroll = function () {
      let scrollBar = window.pageYOffset;
      if (scrollBar >= 800) {
        setShow(true)
      } else {
        setShow(false)
      }
    }

  }, []);
  // modal

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);


  return (
    <>
      <div className="mb-20 w-full overflow-hidden overflow-x-hidden">
        <header className=" w-full p-4 bg-[#3ba4ec]">
          <div className='container m-auto flex items-center justify-between'>
            <div className='flex items-center text-white gap-4'>
              <img src='https://cdn-icons-png.flaticon.com/512/3942/3942104.png' alt='qwerty' className='h-10 max-[490px]:hidden' />
              <p className='text-xl cursor-pointer'>Tour guide</p>
            </div>
            <nav>
              <div className='flex gap-5 text-white'>
                <p onClick={scrollTour} className='cursor-pointer'>Туры</p>
                <p onClick={scrollBottom} className='cursor-pointer max-[400px]:hidden'>Вопросы</p>
                <p onClick={scrollBottom} className='cursor-pointer'>Контакты</p>
              </div>
            </nav>
          </div>
        </header>

        <section className='container px-6 m-auto w-fll flex items-center  max-md:justify-start gap-20 py-28 text-gray-500 max-xl:py-[50px] max-lg:py-12 max-md:py-11 max-md:gap-10 max-sm:py-5 max-sm:flex-col'>
          <div data-aos="fade-right" data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500" className="bg-[#3ba4ec] rounded-r-full p-2 relative before:absolute before:top-0 before:z-[-1] before:right-[267px] before:w-screen before:h-full before:bg-[#3ba4ec]">
            <img className='rounded-full max-w-lg max-xl:max-w-[25rem] max-lg:max-w-[16rem] max-sm:max-w-full' src={user} alt="qwerty" />
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
              <button type="button" className="mt-5 text-white bg-[#3ba4ec] hover:bg-[#1f97e7] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 ease-in">Узнать подробнее</button>
            </a>
          </div>
        </section>

        <div className="w-[100%] ">
          <marquee scrollamount="15" className="w-[100%]  bg-[#3ba4ec]">
            <div className="flex gap-5 bg py-3 text-white">
              <p className='text-lg font-normal'>Самарканд </p><img src={star} alt="qwerty" />
              <p className='text-lg font-normal'>Ташкент </p><img src={star} alt="qwerty" />
              <p className='text-lg font-normal'>Бухара </p><img src={star} alt="qwerty" />
              <p className='text-lg font-normal'>Хива </p><img src={star} alt="qwerty" />
              <p className='text-lg font-normal'>Хорезм </p><img src={star} alt="qwerty" />
              <p className='text-lg font-normal'>Андижан </p><img src={star} alt="qwerty" />
            </div>

          </marquee>
        </div>
      </div>
      <div className='container px-5 m-auto w-[100%] overflow-x-hidden'>
        <div>
          <h1 data-aos="fade-left"
            className='text-3xl font-medium text'
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500">Обо мне</h1>
          <p data-aos="fade-left"
            className='mt-3 mb-3 text-xl max-lg:text-lg max-md:text-sm'
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
          >Всем привет из солнечного Узбекистана . Меня зовут Виктория. Я опытный профессиональный гид -экскурсовод . Вот уже более 20 лет, я провожу экскурсии на русском и на немецком языках.
            Я родилась в Самарканде и люблю мой город и я хочу поделиться этой любовью с Вами.
            Мои экскурсии -это разговор по душам. Это не сухие исторические факты , а рассказ о городе , у которого было много радостных и печальных моментов. На прогулке со мной Вы увидите самые интересные и завораживающие места Самарканда. Познакомитесь <button className='text-blue-500' onClick={() => handleClickOpen('paper')}>read more...</button>
          </p>
        </div>
        <div id='tours' className='mb-10'></div>
        <div className='mb-5'>
          <h1 className='text-3xl font-medium text'>Актуальные туры</h1>
        </div>
      </div>
      <section className='container m-auto px-5 grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 mb-10'>
        {
          tours.map(i => <Cards item={i} key={i.id} />)
        }
      </section>
      <div className='container px-5 m-auto w-[100%]'>
        <Questions />
      </div>
      {
        show
          ?
          <div className='fixed right-5 bottom-5'>
            <FaArrowCircleUp size={'35px'} color={'#3ba4ec'} onClick={scrollTop} />
          </div>
          : null
      }
      <div className='fixed inset-x-1/2 trn'>
        {
          open
            ?
            <div>
              <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
              >
                <DialogTitle id="scroll-dialog-title">Обо мне</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                  <DialogContentText
                    id="scroll-dialog-description"
                    ref={descriptionElementRef}
                    tabIndex={-1}
                  >
                    {[...new Array(1)]
                      .map(
                        () => `Всем привет из солнечного Узбекистана . Меня зовут Виктория. Я опытный профессиональный гид -экскурсовод . Вот уже более 20 лет, я провожу экскурсии на русском и на немецком языках. 
                Я родилась в Самарканде и люблю мой город и я хочу поделиться этой любовью с Вами.
                Мои экскурсии -это разговор по душам. Это не сухие исторические факты , а рассказ о городе , у которого было много радостных и печальных моментов. На прогулке со мной Вы увидите самые интересные и завораживающие места Самарканда. Познакомитесь с бытом, нравами и традициями местных жителей.
                Самарканд окружен с самого начала своего основания тайнами и мистикой, завораживает   мифами и легендами.
                Я расскажу Вам легенды моего народа и открою тайны ,которые хранит Самарканд.
                Мы пройдемся по местам , связанными с реальными персонажами, которые оставили след  в истории города .  Обязательно посетим сооружения , которые стали частью  этих легенд и преданий.
                Люблю свой город Самарканд, горжусь им , отлично знаю его историю, его прошлое и настоящее.
                Экскурсию подбираю под ваши пожелания и возможности.
                `,
                      )
                      .join('\n')}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Закрыть</Button>
                </DialogActions>
              </Dialog>
            </div>
            : null
        }
      </div>
    </>
  )
}
