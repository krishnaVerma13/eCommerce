import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useCart } from "../../context/CartContext";

const NAV_LINKS = ["Home", "Contact", "About", "SignUp"];


function NavBar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

 const { totalItems } = useCart();

  const navigate = useNavigate()

  return (<>
    <div>
      <nav className="border-b border-black/30 bg-white">
        <div className="mx-auto flex max-w-[1170px] items-center justify-between px-4 py-4 md:py-6">
          {/* Logo */}
          <a href="/" className="text-xl font-bold tracking-wide text-black md:text-2xl">
            Exclusive
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-12 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a

                  onClick={() => { setActive(link), navigate(`/${link}`) }}
                  className={`border-b pb-1 text-base text-black hover:cursor-pointer ${active === link ? "border-black/50" : "border-transparent"
                    }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-4 sm:gap-6">
            <SearchBox className="hidden w-[243px] lg:flex" />
            <button type="button" aria-label="Wishlist" className="text-black">
              <FaRegHeart className="h-6 w-6" />
            </button>
            <button
              type="button"
              aria-label={`Cart, ${totalItems} items`}
              onClick={() => navigate('/cart')}
              className="relative text-black"
            >
              <MdOutlineShoppingCart className="h-6 w-6" />

              {totalItems > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#DB4444] px-1 text-xs font-medium text-white">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </button>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black md:hidden"
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>

        {/* Mobile / tablet menu */}
        {menuOpen && (
          <div className="border-t border-black/10 px-4 pb-5 md:hidden">
            <ul className="flex flex-col gap-4 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href={`/${link === "Home" ? "" : link.toLowerCase().replace(" ", "-")}`}
                    onClick={() => {
                      setActive(link);
                      setMenuOpen(false);
                    }}
                    className={`inline-block border-b pb-1 text-base text-black ${active === link ? "border-black/50" : "border-transparent"
                      }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <SearchBox />
          </div>
        )}

        {/* Search for tablet (md to lg) where desktop search is hidden */}
        <div className="hidden px-4 pb-4 md:block lg:hidden">
          <SearchBox className="mx-auto max-w-[1170px]" />
        </div>
      </nav>
    </div></>)
}

export default NavBar;


function SearchBox({ className = "" }) {
  return (
    <div
      className={`flex items-center rounded bg-[#F5F5F5] py-[7px] pl-5 pr-3 ${className}`}
    >
      <input
        type="text"
        placeholder="What are you looking for?"
        className="w-full bg-transparent text-xs text-black outline-none placeholder:text-black/50"
      />
      <button type="button" aria-label="Search" className="text-black">
        <CiSearch className="h-6 w-6 font-semibold" />
      </button>
    </div>
  );
}

const MenuIcon = ({ open }) => (
  <svg
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
  >
    {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
  </svg>
);