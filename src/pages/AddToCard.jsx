import { Link, useNavigate } from 'react-router-dom';
import { MdKeyboardArrowUp, MdKeyboardArrowDown, MdClose } from 'react-icons/md';
import toast from 'react-hot-toast';
import { useCart } from '../context/CartContext';

const SHIPPING = 0; // free, change if you add shipping rules

function QtyInput({ qty, onChange }) {
  return (
    <div className="flex h-11 w-[72px] items-center justify-between rounded border border-black/40 px-3">
      <span className="text-base">{String(qty).padStart(2, '0')}</span>
      <div className="flex flex-col">
        <button
          type="button"
          aria-label="Increase quantity"
          onClick={() => onChange(qty + 1)}
        >
          <MdKeyboardArrowUp className="h-4 w-4" />
        </button>
        <button
          type="button"
          aria-label="Decrease quantity"
          onClick={() => onChange(qty - 1)} // context removes item at qty < 1
        >
          <MdKeyboardArrowDown className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function AddToCard() {
  const { items, updateQty, removeFromCart, totalPrice } = useCart();
  const navigate = useNavigate();

  const total = totalPrice + SHIPPING;

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-[1170px] px-4 py-20 text-center">
        <h2 className="text-2xl font-medium">Your cart is empty</h2>
        <button
          onClick={() => navigate('/')}
          className="mt-6 rounded border border-black/50 px-12 py-4 font-medium hover:bg-black hover:text-white"
        >
          Return To Shop
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1170px] px-4 pb-20">
      {/* Breadcrumb */}
      <p className="py-10 text-sm text-black/50 md:py-20">
        <Link to="/" className="hover:underline">Home</Link>
        <span className="mx-3">/</span>
        <span className="text-black">Cart</span>
      </p>

      {/* Table header (desktop only) */}
      <div className="hidden grid-cols-4 rounded bg-white px-10 py-6 shadow-[0_1px_13px_rgba(0,0,0,0.05)] md:grid">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span className="text-right">Subtotal</span>
      </div>

      {/* Rows */}
      <div className="mt-6 space-y-6 md:mt-10 md:space-y-10">
        {items.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-2 items-center gap-4 rounded bg-white px-4 py-5 shadow-[0_1px_13px_rgba(0,0,0,0.05)] md:grid-cols-4 md:px-10 md:py-6"
          >
            {/* Product */}
            <div className="col-span-2 flex items-center gap-4 md:col-span-1">
              <div className="relative h-[54px] w-[54px] shrink-0">
                <button
                  type="button"
                  aria-label={`Remove ${item.name}`}
                  onClick={() => removeFromCart(item.id)}
                  className="absolute -left-2 -top-2 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-[#DB4444] text-white"
                >
                  <MdClose className="h-3 w-3" />
                </button>
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-base">{item.name}</span>
            </div>

            {/* Price */}
            <span className="hidden md:block">${item.price}</span>

            {/* Quantity */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-black/50 md:hidden">Qty</span>
              <QtyInput qty={item.qty} onChange={(q) => updateQty(item.id, q)} />
            </div>

            {/* Subtotal */}
            <span className="text-right">${item.price * item.qty}</span>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row">
        <button
          onClick={() => navigate('/')}
          className="rounded border border-black/50 px-12 py-4 font-medium hover:bg-black hover:text-white"
        >
          Return To Shop
        </button>
        <button
          onClick={() => toast.success('Cart is up to date')}
          className="rounded border border-black/50 px-12 py-4 font-medium hover:bg-black hover:text-white"
        >
          Update Cart
        </button>
      </div>

      {/* Coupon + totals */}
      <div className="mt-16 flex flex-col items-start justify-between gap-10 lg:flex-row">
        <div className="flex w-full flex-col gap-4 sm:flex-row lg:w-auto">
          <input
            type="text"
            placeholder="Coupon Code"
            className="h-14 w-full rounded border border-black/50 px-6 outline-none sm:w-[300px]"
          />
          <button
            onClick={() => toast('Coupons are not available yet')}
            className="h-14 rounded bg-[#DB4444] px-12 font-medium text-white hover:bg-[#c23a3a]"
          >
            Apply Coupon
          </button>
        </div>

        <div className="w-full rounded border-[1.5px] border-black p-6 lg:w-[470px]">
          <h3 className="text-xl font-medium">Cart Total</h3>

          <div className="mt-6 flex justify-between border-b border-black/40 pb-4">
            <span>Subtotal:</span>
            <span>${totalPrice}</span>
          </div>
          <div className="flex justify-between border-b border-black/40 py-4">
            <span>Shipping:</span>
            <span>{SHIPPING === 0 ? 'Free' : `$${SHIPPING}`}</span>
          </div>
          <div className="flex justify-between py-4">
            <span>Total:</span>
            <span>${total}</span>
          </div>

          <div className="flex justify-center">
            <button
              
              className="rounded bg-[#DB4444] px-12 py-4 font-medium text-white hover:bg-[#c23a3a]"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddToCard;