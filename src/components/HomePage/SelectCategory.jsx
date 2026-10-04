import { useRef, useState } from "react";
import { SlScreenSmartphone } from "react-icons/sl";
import { SlScreenDesktop } from "react-icons/sl";
import { IoWatchOutline } from "react-icons/io5";
import { IoCameraOutline } from "react-icons/io5";
import { LiaHeadphonesSolid } from "react-icons/lia";
import { LuGamepad } from "react-icons/lu";



const ArrowIcon = ({ dir = "right" }) => (
  <svg
    className={`h-6 w-6 ${dir === "left" ? "rotate-180" : ""}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 12h16M14 6l6 6-6 6" />
  </svg>
);

const CATEGORIES = [
  {id : 101,  name: "Phones", Icon: SlScreenSmartphone },
  {id : 102, name: "Computers", Icon: SlScreenDesktop },
  {id : 103, name: "SmartWatch", Icon: IoWatchOutline },
  {id : 104, name: "Camera", Icon: IoCameraOutline },
  {id : 105, name: "HeadPhones", Icon: LiaHeadphonesSolid },
  {id : 106, name: "Gaming", Icon: LuGamepad },
];

export default function SelectCategory() {
  const [selected, setSelected] = useState("");
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const step = el.firstElementChild?.offsetWidth ?? 170;
    el.scrollBy({ left: dir * (step + 30), behavior: "smooth" });
  };

  return (
    <section className="mx-auto w-full max-w-[1170px] px-4 font-['Poppins',sans-serif]">
      <div className="border-b border-black/20 py-10 md:py-16">
        {/* Label */}
        <div className="flex items-center gap-4">
          <span className="h-10 w-5 rounded bg-[#DB4444]" />
          <span className="text-base font-semibold text-[#DB4444]">Categories</span>
        </div>

        {/* Title + arrows */}
        <div className="mt-5 flex items-end justify-between gap-4 md:mt-6">
          <h2 className="text-2xl font-semibold tracking-[0.04em] text-black sm:text-3xl md:text-4xl">
            Browse By Category
          </h2>

          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => scroll(-1)}
              className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#F5F5F5] text-black transition-colors hover:bg-black/10"
            >
              <ArrowIcon dir="left" />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => scroll(1)}
              className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#F5F5F5] text-black transition-colors hover:bg-black/10"
            >
              <ArrowIcon />
            </button>
          </div>
        </div>

        {/* Category cards */}
        <div
          ref={trackRef}
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-[30px] md:mt-16"
        >
          {CATEGORIES.map(({ name, Icon , id }) => {
            const active = selected === name;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setSelected(name)}
                className={`flex h-[120px] w-[140px] shrink-0 snap-start flex-col items-center justify-center gap-4 rounded border transition-colors sm:h-[145px] sm:w-[170px] ${
                  active
                    ? "border-[#DB4444] bg-[#DB4444] text-white"
                    : "border-black/30 bg-white text-black hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-white"
                }`}
              >
                <Icon className="h-12 w-12 sm:h-14 sm:w-14" />
                <span className="text-sm sm:text-base">{name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

