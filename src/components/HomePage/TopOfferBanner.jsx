import { useState } from "react";

function TopOfferBanner() {
    const languages = ["English", "हिन्दी"];

   
        const [open, setOpen] = useState(false);
        const [selected, setSelected] = useState("English");
        return (<>
            <div className="bg-black  h-[48px] w-full flex justify-center ">
                <div className="flex space-x-3 mt-3">
                    <p className="text-[#FFFFFF] text-[14px] font-poppins">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                    <p className=" text-[#FAFAFA] font-semibold text-[14px] font-poppins hover:underline hover:cursor-pointer">ShopNow</p>
                </div>
               
               {/* Language Selecctor */}
                <div className="absolute right-14">
                    <div className="relative inline-block">
                        <button
                            type="button"
                            onClick={() => setOpen(!open)}
                            className="flex items-center gap-3 bg-transparent px-4 py-2 text-white"
                        >
                            {selected}
                            <svg
                                className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
                                viewBox="0 0 20 20"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M4 7l6 6 6-6" />
                            </svg>
                        </button>

                        {open && (
                            <ul className="absolute left-0 mt-2 min-w-full rounded-md border border-white/20 bg-black/40 py-1 backdrop-blur-md">
                                {languages.map((lang) => (
                                    <li
                                        key={lang}
                                        onClick={() => {
                                            setSelected(lang);
                                            setOpen(false);
                                        }}
                                        className="cursor-pointer whitespace-nowrap px-4 py-2 text-white hover:bg-white/15"
                                    >
                                        {lang}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </>)
    }

    export default TopOfferBanner;