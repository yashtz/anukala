import React from 'react';
import { useLocation } from 'react-router-dom';

function CheckoutPage() {
  const location = useLocation();
  const product = location.state;

  return (
    <div className="min-h-screen bg-[#78b087] p-12 flex justify-between">
      <div className="w-2/3 pr-12">
        <h2 className="text-4xl font-bold mb-8">Checkout</h2>

        <div className="text-lg font-medium mb-8 flex items-center">
          <span className="border-b-2 border-black pb-1">Address</span>
          <span className="mx-4">——</span>
          <span className="text-gray-500">Shipping</span>
          <span className="mx-4">——</span>
          <span className="text-gray-500">Payment</span>
        </div>

        <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
        <form className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="First Name" className="p-3 border border-gray-400" />
          <input type="text" placeholder="Last Name" className="p-3 border border-gray-400" />
          <input type="text" placeholder="Address" className="col-span-2 p-3 border border-gray-400" />
          <input type="text" placeholder="Apartment, suite, etc (optional)" className="col-span-2 p-3 border border-gray-400" />
          <input type="text" placeholder="City" className="p-3 border border-gray-400" />
          <select className="p-3 border border-gray-400">
            <option>Country</option>
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
          </select>
          <input type="text" placeholder="Zipcode" className="p-3 border border-gray-400" />
          <input type="text" placeholder="Optional" className="col-span-2 p-3 border border-gray-400" />

          <div className="col-span-2 mt-4 flex items-center">
            <input type="checkbox" id="save-info" className="mr-2" />
            <label htmlFor="save-info">Save contact information</label>
          </div>

          <button className="col-span-2 mt-4 px-4 py-3 bg-black text-white font-semibold rounded-sm hover:bg-gray-700">
            Continue to shipping
          </button>
        </form>
      </div>

      <div className="w-1/3 pl-8">
        <h3 className="text-2xl font-bold mb-4">Your cart</h3>

        {product && (
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <img src={product.imageUrl} alt={product.name} className="w-20 h-20 mr-4 object-cover rounded" />
              <div>
                <p className="font-semibold">{product.name}</p>
                <p>Quantity: 1</p>
                <p className="font-bold">{product.price}</p>
                <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Remove</a>
              </div>
            </div>
            <hr className="border-gray-400" />
          </div>
        )}

        <input type="text" placeholder="Enter coupon code here" className="w-full p-3 border border-gray-400 mb-4" />

        <div className="text-lg flex justify-between mb-2">
          <p>Subtotal</p>
          <p>{product ? product.price : "$0"}</p>
        </div>
        <div className="text-lg flex justify-between mb-2">
          <p>Shipping</p>
          <p>Calculated at the next step</p>
        </div>
        <div className="text-lg flex justify-between font-bold">
          <p>Total</p>
          <p>{product ? product.price : "$0"}</p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
