import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useCart } from "../../context/CartContext";
import toast from 'react-hot-toast';

const STAR_PATH = "M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z";

const Stars = ({ rating }) => (
  <div className="flex">
    {[0, 1, 2, 3, 4].map((i) => {
      const fill = Math.min(Math.max(rating - i, 0), 1) * 100;
      return (
        <span key={i} className="relative inline-block h-5 w-5">
          <svg className="absolute inset-0 h-5 w-5" viewBox="0 0 24 24" fill="#BFBFBF">
            <path d={STAR_PATH} />
          </svg>
          <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill}%` }}>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#FFAD33">
              <path d={STAR_PATH} />
            </svg>
          </span>
        </span>
      );
    })}
  </div>
);


function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);
  const { name, price, oldPrice, discount, rating, reviews, image } = product;

    const { addToCart, items } = useCart();
  const inCart = items.find((i) => i.id === product.id);

  const handleAdd = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="w-[240px] shrink-0 snap-start sm:w-[270px]">
      <div className="group relative flex h-[210px] items-center justify-center overflow-hidden rounded bg-[#F5F5F5] sm:h-[250px]">
        <span className="absolute left-3 top-3 rounded bg-[#DB4444] px-3 py-1 text-xs text-white">
          -{discount}%
        </span>

        <div className="absolute right-3 top-3 flex flex-col gap-2">
          <button
            type="button"
           aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
            onClick={() => setLiked(!liked)}
            className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white text-black"
          >
            {liked ? <FaHeart className="text-[#DB4444]" /> : <FaRegHeart />}
          </button>
          <button
            type="button"
            aria-label="Quick view"
            className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white text-black"
          >
            <MdOutlineRemoveRedEye />
          </button>
        </div>

        <img
          src={image}
          alt={name}
          className="max-h-[65%] max-w-[65%] object-contain sm:max-h-[60%] sm:max-w-[60%]"
        />

        {/* Always visible on touch screens, hover-only on desktop */}
        <button
         onClick={handleAdd}
          className="absolute bottom-0 w-full bg-black py-2 text-base text-white transition-transform duration-200 lg:translate-y-full lg:group-hover:translate-y-0"
        >
          {inCart ? `Add more (${inCart.qty} in cart)` : 'Add to cart'}
        </button>
      </div>

      <div className="mt-4 space-y-2">
        <h3 className="text-base font-medium text-black">{name}</h3>
        <p className="flex gap-3 text-base font-medium">
          <span className="text-[#DB4444]">${price}</span>
          <span className="text-black/50 line-through">${oldPrice}</span>
        </p>
        <div className="flex items-center gap-2">
          <Stars rating={rating} />
          <span className="text-sm font-semibold text-black/50">({reviews})</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;