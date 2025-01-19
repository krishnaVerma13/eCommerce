import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();
  const redirect = (count) => {
    switch (count) {
        case 1:
            navigate("/about")
            window.scrollTo(0, 0);
            break;
        case 3:
            navigate("/jassica_det")
            window.scrollTo(0, 0);
            break;

        case 2:
            navigate("/portfolio")
            window.scrollTo(0, 0);
            break;
        case 4:
            navigate("/urban2_det")
            window.scrollTo(0, 0);
            break;
        case 5:
          navigate("/")
          window.scrollTo(0, 0);
            break;

        default:
            break;
    }
};
  return (
    <>
      <div className="bg-white  p-2 flex justify-center">
        <nav className="flex items-center justify-between p-2 bg-white ">
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isNavOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div className={`flex justify-between text-xs items-center md:space-x-8 border py-2 px-2 md:py-3 md:px-8 rounded-full  ${
              isNavOpen ? "block" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky">
            <a onClick={()=>redirect(5)} className="cursor-pointer hover:bg-black text-sm py-1 px-2 hover:text-white text-black rounded-2xl">
              Home
            </a>
            
            <a onClick={()=>redirect(1)} className="cursor-pointer hover:bg-black text-xs md:text-sm py-1 px-2 hover:text-white text-black rounded-2xl">About Us</a>
            <a onClick={()=>redirect()} className="cursor-pointer hover:bg-black text-xs md:text-sm py-1 px-2 hover:text-white text-black rounded-2xl">Services</a>
            <a onClick={()=>redirect(2)} className="cursor-pointer hover:bg-black text-xs md:text-sm py-1 px-2 hover:text-white text-black rounded-2xl">Portfolio</a>
            <a onClick={()=>redirect()} className="cursor-pointer hover:bg-black tect-xs md:text-sm py-1 px-2 hover:text-white text-black rounded-2xl">Blogs</a>
            <a onClick={()=>redirect()} className="cursor-pointer hover:bg-black text-xs md:text-sm py-1 px-2 hover:text-white text-black rounded-2xl">Contact</a>
          </div>

        </nav>
      </div>
    </>
  )
}


export default Header