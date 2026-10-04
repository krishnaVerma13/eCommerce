// 👇 change this path to wherever your speaker image is saved
import spaker from "../../assets/ProductCartImage/spaker.png";


const TIMER = [
  { value: "23", label: "Hours" },
  { value: "05", label: "Days" },
  { value: "59", label: "Minutes" },
  { value: "35", label: "Seconds" },
];

export default function MusicBanner() {
  return (
    <section className="mx-auto w-full max-w-[1170px] px-4 py-10 font-['Poppins',sans-serif] md:py-16">
      <div className="relative flex flex-col overflow-hidden bg-black px-6 py-10 text-white sm:px-10 md:min-h-[500px] md:flex-row md:items-center md:px-14 md:py-0">
        {/* Soft glow behind the speaker */}
        <div className="pointer-events-none absolute right-0 top-1/2 h-[120%] w-full -translate-y-1/2 bg-[radial-gradient(ellipse_at_70%_50%,rgba(255,255,255,0.22),transparent_60%)] md:w-[65%]" />

        {/* Text */}
        <div className="relative z-10 md:w-1/2">
          <p className="text-base font-semibold text-[#00FF66]">Categories</p>

          <h2 className="mt-5 text-4xl font-semibold leading-[1.2] tracking-[0.04em] sm:text-5xl">
            Enhance Your
            <br />
            Music Experience
          </h2>

          <div className="mt-8 flex flex-wrap gap-4 sm:gap-6">
            {TIMER.map(({ value, label }) => (
              <div
                key={label}
                className="flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full bg-white text-black"
              >
                <span className="text-base font-semibold leading-none">{value}</span>
                <span className="mt-1 text-[11px] leading-none">{label}</span>
              </div>
            ))}
          </div>

          <a
            href="/products"
            className="mt-8 inline-block rounded bg-[#00FF66] px-12 py-4 text-base font-medium text-white transition-colors hover:bg-[#00e65c]"
          >
            Buy Now!
          </a>
        </div>

        {/* Image */}
        <div className="relative z-10 mt-10 flex justify-center md:mt-0 md:w-1/2">
          <img
            src={spaker}
            alt="Portable speaker"
            className="w-full max-w-[420px] object-contain md:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}

