const Footer = () => {
   return (
      <footer className="bg-white">
         <div className="container m-auto p-5 rounded-lg md:py-8">
            <div className="flex max-sm:flex-col sm:items-center sm:justify-between">
               <a href="#0" className="flex items-center mb-4 sm:mb-0">
                  <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-400">Flowbite</span>
               </a>
               <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                  <li>
                     <a href="#0" className="mr-4 hover:underline md:mr-6 ">About</a>
                  </li>
                  <li>
                     <a href="#0" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                  </li>
                  <li>
                     <a href="#0" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                  </li>
                  <li>
                     <a href="#0" className="hover:underline">Contact</a>
                  </li>
               </ul>
            </div>
            <hr className="sm:my-6 max-sm:py-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 3 <a href="#0" className="hover:underline">Flowbite™</a>. All Rights Reserved.
            </span>
         </div>
      </footer>
   );
}

export default Footer;