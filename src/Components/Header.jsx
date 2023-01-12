const Header = () => {
   return (
      <header className=" w-full absolute top-0 left-0">
         <nav className="m-auto px-5 py-2.5 rounded container ">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
               <a href="https://flowbite.com/" className="flex items-center">
                  <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                  <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-400">Flowbite</span>
               </a>
               <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-gray-200 dark:text-gray-400" aria-controls="navbar-default" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
               </button>
               <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                  <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                     <li>
                        <a href="#0" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</a>
                     </li>
                     <li>
                        <a href="#0" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                     </li>
                     <li>
                        <a href="#0" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                     </li>
                     <li>
                        <a href="#0" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                     </li>
                     <li>
                        <a href="#0" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </header>
   );
}

export default Header;