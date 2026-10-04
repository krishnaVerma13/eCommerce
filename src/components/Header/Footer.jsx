
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const ACCOUNT = [
  { label: "My Account"},
  { label: "Login / Register" },
  { label: "Cart" },
  { label: "Wishlist" },
  { label: "Shop" },
];

const QUICK_LINKS = [
  { label: "Privacy Policy" },
  { label: "Terms Of Use" },
  { label: "FAQ"},
  { label: "Contact"},
];

const SOCIALS = [
  { label: "Facebook", Icon: FaFacebookF },
  { label: "Twitter", Icon: FaTwitter },
  { label: "Instagram", Icon: FaInstagram },

];

/* ---------- Footer ---------- */
export default function Footer() {
  return (
    <footer className="font-['Poppins',sans-serif]">
      

      {/* Black footer */}
      <div className="bg-black text-white">
        <div className="mx-auto grid w-full max-w-[1170px] grid-cols-1 gap-10 px-4 pb-16 pt-16 sm:grid-cols-2 md:pt-20 lg:grid-cols-[1.1fr_1.2fr_1fr_1fr_1.2fr] lg:gap-8">
          {/* Exclusive + Subscribe */}
          <div>
            <h2 className="text-2xl font-bold tracking-wide">Exclusive</h2>
            <h3 className="mt-6 text-xl font-medium">Subscribe</h3>
            <p className="mt-4 text-base">Get 10% off your first order</p>

            <div className="mt-4 flex w-full max-w-[217px] items-center rounded border border-white/60 py-3 pl-4 pr-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40"
              />
              <button type="button" aria-label="Subscribe" className="text-white">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 3L3 10.5l7 2.5 2.5 7L21 3zM10 13l11-10" />
                </svg>
              </button>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-medium">Support</h3>
            <ul className="mt-6 space-y-4 text-base">
              <li className="max-w-[175px]">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
              <li>
                <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
              </li>
              <li>
                <a href="tel:+88015888889999">+88015-88888-9999</a>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-xl font-medium">Account</h3>
            <ul className="mt-6 space-y-4 text-base">
              {ACCOUNT.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="transition-opacity hover:opacity-70">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Link */}
          <div>
            <h3 className="text-xl font-medium">Quick Link</h3>
            <ul className="mt-6 space-y-4 text-base">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="transition-opacity hover:opacity-70">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h3 className="text-xl font-medium">Download App</h3>
            <p className="mt-6 text-xs text-white/70">Save $3 with App New User Only</p>

           
            <div className="mt-6 flex gap-6">
              {SOCIALS.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="transition-opacity hover:opacity-70"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 py-4">
          <p className="flex items-center justify-center gap-2 px-4 text-center text-sm text-white/40">
            <svg
              className="h-4 w-4 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M14.5 9.5a3.5 3.5 0 100 5" />
            </svg>
            Copyright Rimel 2022. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

