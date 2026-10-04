import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import iphone from "../assets/HomePgImage/Iphone_Image.jpg"
import { FaArrowRight } from "react-icons/fa6";
import ProductCard from "../components/HomePage/ProductCard";
import chair from "../assets/ProductCartImage/chair.png"
import monitor from "../assets/ProductCartImage/monitor.png"
import keyboard from "../assets/ProductCartImage/keyboard.png"
import gamepad from "../assets/ProductCartImage/gamepad.png"
import SelectCategory from "../components/HomePage/SelectCategory";
import ProductSection from "../components/HomePage/Productsection";
import coat from "../assets/ProductCartImage/coat.png"
import bag from "../assets/ProductCartImage/bag.png"
import ram from "../assets/ProductCartImage/ram.png"
import table from "../assets/ProductCartImage/table.png"
import jacket from "../assets/ProductCartImage/jacket.png"
import game from "../assets/ProductCartImage/game.png"
import shoes from "../assets/ProductCartImage/shoes.png"
import car from "../assets/ProductCartImage/car.png"
import ps from "../assets/ProductCartImage/ps.png"
import laptop from "../assets/ProductCartImage/laptop.png"
import camera from "../assets/ProductCartImage/camera.png"
import catfood from "../assets/ProductCartImage/catfood.jpg"
import MusicBanner from "../components/HomePage/Musicbanner";
import { FaArrowUp } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";
import { MdOutlineShield } from "react-icons/md";

/* ---------- Data ---------- */
const FEATURES = [
  { Icon: TbTruckDelivery, title: "FREE AND FAST DELIVERY", text: "Free delivery for all orders over $140" },
  { Icon: RiCustomerServiceLine, title: "24/7 CUSTOMER SERVICE", text: "Friendly 24/7 customer support" },
  { Icon: MdOutlineShield , title: "MONEY BACK GUARANTEE", text: "We reurn money within 30 days" },
];


const PRODUCTS = [
    { id: 1, name: "HAVIT HV-G92 Gamepad", price: 120, oldPrice: 160, discount: 40, rating: 5, reviews: 88, image: gamepad },
    { id: 2, name: "AK-900 Wired Keyboard", price: 960, oldPrice: 1160, discount: 35, rating: 4, reviews: 75, image: keyboard },
    { id: 3, name: "IPS LCD Gaming Monitor", price: 370, oldPrice: 400, discount: 30, rating: 5, reviews: 99, image: monitor },
    { id: 4, name: "S-Series Comfort Chair", price: 375, oldPrice: 400, discount: 25, rating: 4.5, reviews: 99, image: chair },
    { id: 5, name: "S-Series Comfort Chair", price: 375, oldPrice: 400, discount: 25, rating: 4.5, reviews: 99, image: chair },
];


const CATEGORIES = [
    { key: 6, label: "Woman’s Fashion" },
    { key: 7, label: "Men’s Fashion" },
    { key: 8, label: "Electronics" },
    { key: 9, label: "Home & Lifestyle" },
    { key: 10, label: "Medicine" },
    { key: 11, label: "Sports & Outdoor" },
    { key: 12, label: "Baby’s & Toys" },
    { key: 13, label: "Groceries & Pets" },
    { key: 14, label: "Health & Beauty" },
];

const bestSelling = [
    { id: 15, name: "The north coat", price: 260, oldPrice: 360, rating: 5, reviews: 65, image: coat },
    { id: 16, name: "Gucci duffle bag", price: 960, oldPrice: 1160, rating: 4.5, reviews: 65, image: bag },
    { id: 28, name: "RGB liquid CPU Cooler", price: 160, oldPrice: 170, rating: 5, reviews: 65, image: ram },
    { id: 17, name: "Small BookSelf", price: 360, oldPrice: 360, rating: 4.5, reviews: 65, image: table },

];

const explore = [
    { id: 18, name: "Breed Dry Dog Food", price: 100, rating: 3, reviews: 35, image: catfood },
    {
        id: 19, name: "CANON EOS DSLR Camera", price: 960, rating: 5, reviews: 65, image: camera,
        isNew: true, colors: ["#000000", "#DB4444"]
    },
    { id: 20, name: "ASUS FHD Gaming Laptop", price: 100, rating: 3, reviews: 35, image: laptop },
    {
        id: 21, name: "Curology Product Set ", price: 960, rating: 5, reviews: 65, image: ps,
        isNew: true, colors: ["#000000", "#DB4444"]
    },
    { id: 22, name: "Kids Electric Car", price: 100, rating: 3, reviews: 35, image: car },
    {
        id: 23, name: "Jr. Zoom Soccer Cleats", price: 960, rating: 5, reviews: 65, image: shoes,
        isNew: true, colors: ["#000000", "#DB4444"]
    },
    { id: 24, name: "GP11 Shooter USB Gamepad", price: 100, rating: 3, reviews: 35, image: game},
    {
        id: 25, name: "Quilted Satin Jacket", price: 960, rating: 5, reviews: 65, image: jacket,
        isNew: true, colors: ["#000000", "#DB4444"]
    },
    { id: 26, name: "Breed Dry Dog Food", price: 100, rating: 3, reviews: 35, image: coat },
    {
        id: 27, name: "Kids Electric Car", price: 960, rating: 5, reviews: 65, image: ram,
        isNew: true, colors: ["#000000", "#DB4444"]
    },
];

const SLIDES = [1, 2, 3, 4, 5].map((id) => ({
    id,
    brand: "iPhone 14 Series",
    title: ["Up to 10%", "off Voucher"],
    link: "/shop",
    image: iphone,
}));

const AppleLogo = () => (
    <svg className="h-9 w-9 md:h-10 md:w-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
);




// Static timer (no countdown)
const TIMER = [
    { label: "Days", value: "03" },
    { label: "Hours", value: "23" },
    { label: "Minutes", value: "19" },
    { label: "Seconds", value: "56" },
];





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



const HomePg = () => {

    const navigate = useNavigate();

    const [current, setCurrent] = useState(0);
    const slide = SLIDES[current];

    const trackRef = useRef(null);

    const scroll = (dir) => {
        const el = trackRef.current;
        if (!el) return;
        const step = el.firstElementChild?.offsetWidth ?? 270;
        el.scrollBy({ left: dir * (step + 30), behavior: "smooth" });
    };


    return (<>
        <div>
            {/* Section 1 Banner and Category  */}
            <section className="mx-auto w-full max-w-[1170px] px-4 font-['Poppins',sans-serif] lg:flex">
                {/* Category buttons */}
                <aside className="lg:w-[233px] lg:shrink-0 lg:border-r lg:border-black/30 lg:pr-4 lg:pt-10">
                    <ul className="flex gap-2 overflow-x-auto py-4 lg:block lg:space-y-4 lg:overflow-visible lg:py-0">
                        {CATEGORIES.map(({ label, key }) => (
                            <li key={key} className="shrink-0">
                                <button
                                    type="button"
                                    className="flex w-full items-center justify-between gap-6 whitespace-nowrap rounded-full border border-black/20 px-4 py-1.5 text-left text-sm text-black transition-colors hover:text-[#DB4444] lg:rounded-none lg:border-0 lg:px-0 lg:py-0 lg:text-base"
                                >
                                    {label}

                                </button>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Banner */}
                <div className="lg:flex-1 lg:pl-11 lg:pt-10">
                    <div className="relative flex h-[280px] items-center overflow-hidden bg-black text-white sm:h-[344px]">
                        {/* Text */}
                        <div className="relative z-10 pl-6 sm:pl-16">
                            <div className="flex items-center gap-4 sm:gap-6">
                                <AppleLogo />
                                <span className="text-sm sm:text-base">{slide.brand}</span>
                            </div>

                            <h2 className="mt-4 text-3xl font-semibold leading-[1.25] tracking-[0.04em] sm:mt-5 sm:text-5xl">
                                {slide.title[0]}
                                <br />
                                {slide.title[1]}
                            </h2>

                            <a
                                href={slide.link}
                                className="mt-4 inline-flex items-center gap-2 text-sm font-medium sm:mt-5 sm:text-base"
                            >
                                <span className="border-b border-white/60 pb-0.5">Shop Now</span>
                                <FaArrowRight />
                            </a>
                        </div>

                        {/* Phone image */}
                        <img
                            src={slide.image}
                            alt={slide.brand}
                            className="absolute bottom-0 right-0 h-full max-w-[55%] object-contain object-right-bottom sm:max-w-[50%]"
                        />

                        {/* Dots */}
                        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-3">
                            {SLIDES.map((s, i) => (
                                <button
                                    key={s.id}
                                    type="button"
                                    aria-label={`Go to slide ${i + 1}`}
                                    onClick={() => setCurrent(i)}
                                    className={`h-3 w-3 rounded-full transition-colors ${i === current
                                        ? "border-2 border-white bg-[#DB4444]"
                                        : "bg-white/50"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </section>

            {/* Section 2 timer and Flash Sales  */}
            <section className="mx-auto w-full max-w-[1170px] px-4 py-10 font-['Poppins',sans-serif] md:py-16">
                {/* Label */}
                <div className="flex items-center gap-4">
                    <span className="h-10 w-5 rounded bg-[#DB4444]" />
                    <span className="text-base font-semibold text-[#DB4444]">Today’s</span>
                </div>

                {/* Title + timer + arrows */}
                <div className="mt-5 flex flex-wrap items-end justify-between gap-y-5 md:mt-6">
                    <div className="flex flex-wrap items-end gap-x-8 gap-y-4 lg:gap-x-20">
                        <h2 className="text-3xl font-semibold tracking-[0.04em] text-black md:text-4xl">
                            Flash Sales
                        </h2>

                        <div className="flex items-end gap-3 sm:gap-4">
                            {TIMER.map(({ label, value }, i) => (
                                <div key={label} className="flex items-end gap-3 sm:gap-4">
                                    <div>
                                        <p className="text-xs font-medium text-black">{label}</p>
                                        <p className="text-2xl font-bold leading-none tracking-wide text-black sm:text-[32px]">
                                            {value}
                                        </p>
                                    </div>
                                    {i < TIMER.length - 1 && (
                                        <span className="mb-1 text-2xl font-bold leading-none text-[#DB4444] sm:text-3xl">
                                            :
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

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

                {/* Products */}
                <div
                    ref={trackRef}
                    className="mt-8 flex snap-x snap-mandatory gap-[30px] overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mt-10"
                >
                    {PRODUCTS.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-10 flex justify-center md:mt-14">
                    <a
                        href="/products"
                        className="rounded bg-[#DB4444] px-10 py-4 text-base font-medium text-white transition-colors hover:bg-[#c23a3a] md:px-12"
                    >
                        View All Products
                    </a>
                </div>
            </section>

            <SelectCategory />

            <ProductSection
                label="This Month"
                title="Best Selling Products"
                products={bestSelling}
                rows={1}
            />

            <div>
                <MusicBanner />
            </div>

            <ProductSection
                label="Our Products"
                title="Explore Our Products"
                products={explore}
                rows={2}
            />

            {/* Features strip + scroll to top */}
            <div className="mx-auto w-full max-w-[1170px] px-4 pb-10 pt-20 md:pb-8 md:pt-36">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-6">
                    {FEATURES.map(({ Icon, title, text }) => (
                        <div key={title} className="flex flex-col items-center text-center">
                            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#C1C0C1]">
                                <span className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-black text-white">
                                    <Icon className="text-3xl" />
                                </span>
                            </span>
                            <h3 className="mt-6 text-lg font-semibold text-black sm:text-xl">{title}</h3>
                            <p className="mt-2 text-sm text-black">{text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 flex justify-end md:mt-14">
                    <button
                        type="button"
                        aria-label="Scroll to top"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#F5F5F5] text-black transition-colors hover:bg-black/10"
                    >
                        <FaArrowUp />
                    </button>
                </div>
            </div>
        </div>
    </>)
}

export default HomePg;