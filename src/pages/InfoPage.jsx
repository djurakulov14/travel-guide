import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import "swiper/css";
import "swiper/css/navigation";
import { BiLeftArrowAlt } from 'react-icons/bi';
import kalpok from "../resources/kalpok.png"
import { useTranslation } from 'react-i18next'
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";


export const InfoPage = () => {
    const takeHeigth = useRef(null)
    window.scrollTo(0, 0);
    let splited = useLocation().state
	const navigate = useNavigate();
    const { t } = useTranslation()

    const currentLGN = useTranslation()[1].language
    
    const toursEN = useSelector(state => state.toursEN.tours)
    const toursRU = useSelector(state => state.toursRU.tours)
    const info = currentLGN === "en" ? toursEN.filter(item => item.id === +splited)[0] : toursRU.filter(item => item.id === +splited)[0]
    

    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState("paper");

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


    //  
    return (
        <>
        <section
        className="overflow-hidden w-full bg-cover bg-center mb-10 h-[600px] max-[680px]:h-[400px] max-[500px]:h-[300px] max-[500px]:mb-0 max-[400px]:h-[250px] ">
            <div className="div w-full absolute -z-10 h-[600px] max-[680px]:h-[400px] max-[500px]:h-[300px] max-[400px]:h-[250px] after:absolute after:inset-0 after:bg-[rgba(0,0,0,.5)] after:z-[2]"><img className='w-full absolute -z-10 h-[600px] max-[680px]:h-[400px] max-[500px]:h-[300px] max-[400px]:h-[250px] object-cover' src={info.img2} alt="" /></div>
            <div className='m-auto container text-white pt-48 max-[680px]:pt-14 max-[680px]:py-5 max-[500px]:py-3 px-6'>
                <h1 className='text-5xl font-bold mb-10 max-[500px]:mb-5 max-[680px]:text-3xl max-sm:text-4xl max-[500px]:text-2xl max-[500px]:mt-10 max-[450px]:text-xl'>{info.title}</h1>
                <p className=" text-4xl font-medium max-[680px]:text-3xl max-[500px]:text-xl  max-[390px]:text-base " >{t("infoSubTitle")}</p>
                <BiLeftArrowAlt className=' absolute top-2' onClick={() => navigate(-1)} size={40}/>
            </div>
        </section>
        <section className='w-full '>
            <div className="m-auto container max-[680px]:py-5 flex gap-1 max-lg:block px-6">
                <div className="w-3/4 max-lg:w-full max-lg:mb-5 ">
                    <p
                    className=' text-xl mb-10 w-[95%] max-sm:text-base'>{info.body}</p>
                    <h1
                    className=' text-2xl font-bold mb-5 max-sm:text-lg'>{t("infoh1")}</h1>
                    <div ref={takeHeigth} className="relative plcesss flex flex-col gap-4 mb-14 max-md:before:hidden before:absolute before:top-0 before:-left-5 before:h-[95%] before:w-[5px] before:rounded-full before:bg-[#3ba4ec]">
                    {
                        info.places.map(item =>  
                        <div key={item.id} className="places w-[95%] max-lg:w-full relative">
                            <h1 key={item.id} className=' text-xl font-bold max-sm:text-lg max-[450px]:text-base'>{item.title}</h1>
                            <div key={item.id} className=" flex justify-between gap-1 h-fit max-[700px]:flex-col max-[820px]:gap-0 max-md:block max-md:before:hidden max-md:h-fit before:absolute before:top-3 before:-left-[25px] before:w-4 before:h-4 before:shadow-xl before:bg-white before:rounded-full">
                                <p key={item.id} className='text-ellipsis text-lg max-xl:mb-3 max-lg:text-base max-md:text-sm max-[450px]:text-xs max-[360px]:text-[10px]'>{item.body}</p>
                                <img key={item.id} src={item.img} alt={item.title} className=" rounded-xl w-[25%] h-[15%] max-md:w-full" />
                            </div>
                        </div>)
                    }
                    </div>
                    {
                        info.extraPlaces ? 
                        <div className="extra">
                            <h1 className=' text-2xl font-bold mb-5 max-sm:text-lg'>{info.extraTitle} :</h1>
                            {
                                info.extraPlaces.map(item =>  
                                    <div key={item.id} className="places w-[95%] max-lg:w-full relative">
                                        <h1 key={item.id} className=' text-xl font-bold max-sm:text-lg max-[450px]:text-base'>{item.title}</h1>
                                        <div key={item.id} className=" flex justify-between gap-1 h-fit max-[700px]:flex-col max-[820px]:gap-0 max-md:block">
                                            <p key={item.id} className='text-ellipsis text-lg max-xl:mb-3 max-lg:text-base max-md:text-sm max-[450px]:text-xs max-[360px]:text-[10px]'>{item.body}</p>
                                            <img key={item.id} src={item.img} alt={item.title} className=" rounded-xl w-[25%] h-[15%] max-md:w-full" />
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        :
                        ""
                    }
                </div>
                <div
                className="right stic h-fit w-1/3 bg-[#3ba4ec] p-5 rounded-lg text-white max-lg:w-full">
                    <img src={kalpok} className=' w-24 absolute -top-5 -right-3 rotate-[25deg]' alt="Тюбитейка" />
                    <div className="top border-b border-white">
                        <h1 className=' font-bold text-xl mb-5 max-xl:font-semibold w-10/13 max-[400px]:w-[90%] max-[400px]:text-lg max-[30px]:w-full'>{t("stick.title")}</h1>
                        <div className="duration flex justify-between mb-3">
                            <h1 className=' font-bold max-xl:font-semibold'>{t("stick.durationH1")}</h1>
                            <p>{t("stick.time")}</p>
                        </div>
                        <div className="duration flex justify-between mb-3">
                            <h1 className=' font-bold max-xl:font-semibold'>{t("stick.childH1")}</h1>
                            <p>{t("stick.child")}</p>
                        </div>
                        <div className="duration flex justify-between mb-3">
                            <h1 className=' font-bold max-xl:font-semibold'>{t("stick.howH1")}</h1>
                            <p>{t("stick.how")}</p>
                        </div>
                        {/* <div className="duration flex flex-col justify-between mb-3">
                            <h1 className=' font-bold max-xl:font-semibold'>{t("stick.priceIncTitle")}</h1>
                            <p>{t("stick.priceinc1")}</p>
                            <p>{t("stick.priceinc2")}</p>
                            <p>{t("stick.priceinc3")}</p>
                        </div> */}
                    </div>
                    <div className="bot pt-3">
                        <div className="prices flex justify-between">
                        <h1 className='font-bold'>{t("stick.price")}</h1>
                        <p className='font-bold text-lg' >60 $</p>
                        </div>
                        <span onClick={() => handleClickOpen("paper")} className=' underline cursor-pointer text-sky-700 hover:text-white'>{t("readMore")}. . .</span>
                        <a href="https://t.me/fevzie_ablaeva"><button className='w-full bg-[#00000030] p-3 rounded-lg text-center mt-2'>{t("stick.button")}</button></a>
                    </div>
                </div>
                </div>
        </section>
        <div className="fixed inset-x-1/2 trn">
            {open ? (
            <div>
                <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                >
                <DialogTitle id="scroll-dialog-title">{t("stick.details")}</DialogTitle>
                <DialogContent dividers={scroll === "paper"}>
                    <DialogContentText
                    id="scroll-dialog-description"
                    ref={descriptionElementRef}
                    tabIndex={-1}
                    >
                     <h1 className=' font-bold text-xl mb-5 max-xl:font-semibold w-10/13 max-[400px]:w-[90%] max-[400px]:text-base max-[30px]:w-full'>{t("stick.title")}</h1>
                        <div className="duration flex justify-between mb-3">
                            <h1 className=' font-bold max-xl:font-semibold max-[400px]:text-sm max-[400px]:font-medium'>{t("stick.durationH1")}</h1>
                            <p className='max-[400px]:text-xs'>{t("stick.time")}</p>
                        </div>
                        <div className="duration flex justify-between mb-3">
                            <h1 className=' font-bold max-xl:font-semibold'>{t("stick.childH1")}</h1>
                            <p className='max-[400px]:text-xs'>{t("stick.child")}</p>
                        </div>
                        <div className="duration flex justify-between mb-3">
                            <h1 className=' font-bold max-xl:font-semibold'>{t("stick.howH1")}</h1>
                            <p className='max-[400px]:text-xs'>{t("stick.how")}</p>
                        </div>
                        <div className="prices flex justify-between">
                            <h1 className='font-bold max-[400px]:text-sm max-[400px]:font-semibold'>{t("stick.price")}</h1>
                            <p className='font-bold text-lg max-[400px]:text-base max-[400px]:font-medium' >60 $</p>
                        </div>
                        <p className='font-bold max-xl:font-semibold mb-5' >{t("stick.priceInfo")}</p>
                    <h1 className=' font-bold text-xl mb-5 max-xl:font-semibold w-10/13 max-[400px]:w-[90%] max-[400px]:text-sm max-[400px]:font-medium'>{t("stick.details")}</h1>
                    <h1 className=' font-bold max-xl:font-semibold mb-2 max-[400px]:text-sm max-[400px]:font-medium'>{t("stick.byWhat1")}</h1>
                    <h1 className=' font-bold max-xl:font-semibold mb-5 max-[400px]:text-sm max-[400px]:font-medium'>{t("stick.byWhat2")}</h1>
                    {
                        info.title.includes("Samarkand") || info.title.includes("Самарканд") ? 
                        <h1 className=' font-bold max-xl:font-semibold max-[400px]:text-sm max-[400px]:font-medium'>{t("stick.onlySam")}</h1>
                        :
                        null
                    }
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>{t("close")}</Button>
                </DialogActions>
                </Dialog>
            </div>
            ) : null}
      </div>
    </>
    )
}
