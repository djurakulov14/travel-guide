import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Cards from "../Components/Cards";
import user from "../resources/grandpa.jpeg";
import ru from "../resources/russia.svg";
import us from "../resources/us.png";
import "aos/dist/aos.css";
import AOS from "aos";
import Questions from "../Components/Questions";
import { FaArrowCircleUp } from "react-icons/fa";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

export const HomePage = () => {
  const { t, i18n } = useTranslation();
  const currentLNG = useTranslation()[1].language;

  const toursEN = useSelector((state) => state.toursEN.tours);
  const toursRU = useSelector((state) => state.toursRU.tours);

  const tours = currentLNG === "en" ? toursEN : toursRU;
  AOS.init({
    once: true,
  });
  const scrollBottom = () => {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  const scrollTour = () => {
    window.scrollTo({ left: 0, top: 1100, behavior: "smooth" });
  };
  const scrollTour2 = () => {
    window.scrollTo({ left: 0, top: 1140, behavior: "smooth" });
  };
  const scrollTop = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.onscroll = function () {
      let scrollBar = window.pageYOffset;
      if (scrollBar >= 800) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
  }, []);

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

  function ChangeLanguage(language) {
    i18n.changeLanguage(language);
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Viktoriya - Main</title>
        <meta
          name="description"
          content="Туристический гид Viktoriya Travel. Туры по таким историческим городам как Самарканд и Бухара!"
        />

        <meta
          name="keywords"
          content="гид самарканд, гид узбекистан, гид бухара, гид по узбекистану, экскурсия, путешествия, тур, гид по всем городам узбекистана, tour guide, Samarkand, Viktoriya Travel, history, sightseeing"
        />
        <meta name="author" content="Viktoriya Travel" />
        <meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Viktoriya Travel: Тур гид в Самарканде" />
        <meta property="og:description" content="Ваш незабываемый тур по Самарканду с Viktoriya Travel. Опытный и профессиональный тур гид, который покажет вам лучшие достопримечательности города и расскажет о его истории." />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="format-detection" content="telephone=no" />
        <meta http-equiv="x-rim-auto-match" content="none" />
        <meta property="og:url" content="https://asiavictoriyatravel.com/" />
      </Helmet>
      <div className="mb-20 w-full overflow-hidden overflow-x-hidden">
        <header className=" w-full p-4 bg-[#3ba4ec]">
          <div className="container m-auto flex items-center justify-between">
            <div className="flex items-center text-white gap-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3942/3942104.png"
                alt="qwerty"
                className="h-10 max-[530px]:hidden"
              />
              <p className="text-xl cursor-pointer">Tour guide</p>
            </div>
            <nav>
              <div className="flex gap-5 text-white items-center">
                <p
                  onClick={scrollTour}
                  className="cursor-pointer max-[580px]:hidden"
                >
                  {t("toursText")}
                </p>
                <p
                  onClick={scrollBottom}
                  className="cursor-pointer max-[580px]:hidden"
                >
                  {t("QuestionText")}
                </p>
                <p
                  onClick={scrollBottom}
                  className="cursor-pointer max-[580px]:hidden"
                >
                  {t("ContactsText")}
                </p>
                <div
                  onClick={() =>
                    ChangeLanguage(currentLNG === "en" ? "ru" : "en")
                  }
                  className="flex gap-1 items-center mr-5 cursor-pointer"
                >
                  <img
                    className=" w-6"
                    src={currentLNG === "en" ? us : ru}
                    alt="language"
                  />
                  <p>{currentLNG === "en" ? "EN" : "РУ"}</p>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <section className="container px-6 m-auto w-fll flex items-center  max-md:justify-start gap-20 py-28 text-gray-500 max-xl:py-[50px] max-lg:py-12 max-md:py-11 max-md:gap-10 max-sm:py-5 max-sm:flex-col">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
            className="bg-[#3ba4ec] rounded-r-full p-2 relative before:absolute before:top-0 before:z-[-1] before:right-[267px] before:w-screen before:h-full before:bg-[#3ba4ec]"
          >
            <img
              className="rounded-full max-w-lg max-xl:max-w-[25rem] max-lg:max-w-[16rem] max-sm:max-w-full"
              src={user}
              alt="qwerty"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
            className="max-w-3xl w-full"
          >
            <h2 className="text-start max-sm:text-center text-5xl max-xl:text-3xl max-lg:text-2xl max-md:text-2xl">
              {t("h1")}
            </h2>
            <ul className="mt-10 max-md:grid-cols-2">
              <li className="text-xl max-lg:text-base">- {t("text")}</li>
              <li className="text-xl max-lg:text-base">- {t("text2")}</li>
              <li className="text-xl max-lg:text-base">- {t("text3")}</li>
            </ul>
            <div className="select-none flex max-[639px]:justify-center">
              <button
                className="p-2 rounded-full bg-[#3ba4ec] animate-bounce mt-10"
                onClick={scrollTour2}
              >
                <svg
                  className=" w-9 h-9 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </button>
            </div>
          </div>
        </section>
        <div className="w-[100%] bg-[#3ba4ec] h-14"></div>
      </div>
      <div className="container px-5 m-auto w-[100%] overflow-x-hidden">
        <div className="max-w-5xl">
          <h2
            data-aos="fade-left"
            className="text-3xl font-medium text"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
          >
            {t("me")}
          </h2>
          <p
            data-aos="fade-left"
            className="mt-3 mb-3 text-xl max-lg:text-lg max-md:text-sm"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
          >
            {t("infoText")}{" "}
            <button
              className="text-blue-500"
              onClick={() => handleClickOpen("paper")}
            >
              {t("readMore")}...
            </button>
          </p>
        </div>
        <div id="tours" className="mb-10"></div>
        <div className="mb-5">
          <h1
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
            className="text-3xl font-medium text"
          >
            {t("ActualTours")}
          </h1>
        </div>
      </div>
      <section className="container m-auto max-md:px-5 grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 mb-10">
        {tours.map((i) => (
          <Cards item={i} key={i.id} />
        ))}
      </section>

      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500"
        className="
      container px-5 m-auto w-[100%]"
      >
        <Questions />
      </div>
      {show ? (
        <div className="fixed right-5 bottom-5">
          <FaArrowCircleUp
            size={"35px"}
            color={"#3ba4ec"}
            onClick={scrollTop}
          />
        </div>
      ) : null}
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
              <DialogTitle id="scroll-dialog-title">{t("me")}</DialogTitle>
              <DialogContent dividers={scroll === "paper"}>
                <DialogContentText
                  id="scroll-dialog-description"
                  ref={descriptionElementRef}
                  tabIndex={-1}
                >
                  {[...new Array(1)].map(() => t("maainInfo")).join("\n")}
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
  );
};
