
function Header() {
  return (
    <>
      <div className="bg-white  p-2 flex justify-center">
        <nav className="flex items-center justify-between p-2 bg-white ">


          <div className="flex justify-center text-xs items-center md:space-x-8 border py-2 px-2 md:py-3 md:px-8 rounded-full">
            <a href="/" className="hover:bg-black text-sm py-1 px-2 hover:text-white text-black rounded-2xl">
              Home
            </a>
            <a href="/about" className="hover:bg-black text-xs md:text-sm py-1 px-2 hover:text-white text-black rounded-2xl">About Us</a>
            <a href="/" className="hover:bg-black text-xs md:text-sm py-1 px-2 hover:text-white text-black rounded-2xl">Services</a>
            <a href="/portfolio" className="hover:bg-black text-xs md:text-sm py-1 px-2 hover:text-white text-black rounded-2xl">Portfolio</a>
            <a href="#" className="hover:bg-black tect-xs md:text-sm py-1 px-2 hover:text-white text-black rounded-2xl">Blogs</a>
            <a href="#" className="hover:bg-black text-xs md:text-sm py-1 px-2 hover:text-white text-black rounded-2xl">Contact</a>
          </div>

        </nav>
      </div>
    </>
  )
}


export default Header