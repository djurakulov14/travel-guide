import { useTranslation } from "react-i18next";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {


  const {t} = useTranslation()
  return (
    <footer className="p-4 bg-transparent mt-10 border-t-2 rounded-lg shadow md:px-6 md:py-8">
      <div className="flex items-center justify-center gap-10 max-[360px]:flex-col max-[360px]:gap-5">
        <div className="flex items-center gap-2 ">
          <p className="text-xl font-medium max-sm:text-sm">{t("contacts")}</p>
          <p className="text-xl font-bold max-sm:text-sm">+998 90 251 71 81</p>
        </div>
        <div className="flex items-center gap-2 flex-col">
          <div className="flex items-center gap-4 max-md:gap-2">
            <p className="text-xl font-medium max-sm:text-sm">{t("footerTelega")}</p>
            <a href="https://t.me/fevzie_ablaeva" className="text-gray-400 hover:text-[#3ba4ec]">
              <FaTelegram size={30} />
              <span className="sr-only">Telegram page</span>
            </a>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-aut lg:my-8" />
      <span className="block text-sm text-gray-500 text-center">
        ©
        <span className="hover:underline">
          Viktoriya™
        </span>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
