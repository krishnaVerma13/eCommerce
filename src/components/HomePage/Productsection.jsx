import { useRef } from "react";
import ProductCard from "./ProductCard";

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


export default function ProductSection({
  label,
  title,
  products = [],
  rows = 1,
  viewAllHref = "/products",
}) {
  const trackRef = useRef(null);
  const multiRow = rows > 1;

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const step = el.firstElementChild?.offsetWidth ?? 270;
    el.scrollBy({ left: dir * (step + 30), behavior: "smooth" });
  };

  return (
    <section className="mx-auto w-full max-w-[1170px] px-4 py-10 font-['Poppins',sans-serif] md:py-16">
      {/* Label */}
      <div className="flex items-center gap-4">
        <span className="h-10 w-5 rounded bg-[#DB4444]" />
        <span className="text-base font-semibold text-[#DB4444]">{label}</span>
      </div>

      {/* Title + top-right control */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-4 md:mt-6">
        <h2 className="text-2xl font-semibold tracking-[0.04em] text-black sm:text-3xl md:text-4xl">
          {title}
        </h2>

        {multiRow ? (
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
        ) : (
          <a
            href={viewAllHref}
            className="rounded bg-[#DB4444] px-10 py-3.5 text-base font-medium text-white transition-colors hover:bg-[#c23a3a] md:px-12 md:py-4"
          >
            View All
          </a>
        )}
      </div>

      {/* Products */}
      {multiRow ? (
        <div
          ref={trackRef}
          className="mt-8 grid snap-x snap-mandatory auto-cols-[240px] grid-flow-col gap-x-[30px] gap-y-[60px] overflow-x-auto scroll-smooth [scrollbar-width:none] sm:auto-cols-[270px] md:mt-16 [&::-webkit-scrollbar]:hidden"
          style={{ gridTemplateRows: `repeat(${rows}, auto)` }}
        >
          {products.map((p) => (
            <div key={p.id} className="snap-start">
              <ProductCard product={p} inline />
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-[30px] min-[480px]:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}

      {/* Bottom button (multi-row only) */}
      {multiRow && (
        <div className="mt-10 flex justify-center md:mt-14">
          <a
            href={viewAllHref}
            className="rounded bg-[#DB4444] px-10 py-4 text-base font-medium text-white transition-colors hover:bg-[#c23a3a] md:px-12"
          >
            View All Products
          </a>
        </div>
      )}
    </section>
  );
}

