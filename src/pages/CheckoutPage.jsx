import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import GooglePayLogo from '../resources/GooglePay.svg';
import AmazonPayLogo from '../resources/AmazonPay.png';
import PhonePeLogo from '../resources/PhonePe.png';
import PaytmLogo from '../resources/Paytm.svg';
import MastercardLogo from '../resources/Mastercard.svg';
import VisaLogo from '../resources/Visa.png';
import RuPayLogo from '../resources/RuPay.webp';


function CheckoutPage() {
  const location = useLocation();
  const product = location.state;

  const [shippingStep, setShippingStep] = useState(false);
  const [paymentStep, setPaymentStep] = useState(false);
  const [selectedShipping, setSelectedShipping] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [selectedUPI, setSelectedUPI] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [upiId, setUpiId] = useState("");
  const [cardDetails, setCardDetails] = useState({ number: "", cvv: "", expiry: "" });
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleContinueToShipping = () => {
    setShippingStep(true);
  };

  const handleShippingOptionClick = (option) => {
    setSelectedShipping(option);
  };

  const handleContinueToPayment = () => {
    setPaymentStep(true);
  };

  const handlePaymentOptionClick = (option) => {
    setSelectedPayment(option);
  };

  const handleUPIOptionClick = (option) => {
    setSelectedUPI(option);
  };

  const handleCardOptionClick = (option) => {
    setSelectedCard(option);
  };

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handleCouponApply = () => {
    // Apply coupon logic (e.g., 10% off for a specific code)
    if (couponCode === "DISCOUNT10") {
      setDiscount(10);
    } else {
      setDiscount(0);
    }
  };

  return (
    <div className="min-h-screen bg-yellow-100 p-12 flex justify-between">
      <div className="w-2/3 pr-12">
        <h2 className="text-4xl font-bold font-yeseva text-rose-950 mb-8">Checkout</h2>

        <div className="text-lg font-medium mb-8 flex items-center">
          <span className="border-b-2 text-rose-950 font-yeseva border-black pb-1">Address</span>
          <span className="mx-4">——</span>
          <span className={shippingStep ? "border-b-2 text-rose-950 font-yeseva border-black pb-1" : "font-yeseva text-gray-500"}>Shipping</span>
          <span className="mx-4">——</span>
          <span className={paymentStep ? "border-b-2 text-rose-950 font-yeseva border-black pb-1" : "font-yeseva text-gray-500"}>Payment</span>
        </div>

        {shippingStep && !paymentStep ? (
          <div>
            <h3 className="text-xl font-yeseva font-semibold mb-4">Choose Shipping Option</h3>
            <div className="flex flex-col space-y-4">
              <div
                onClick={() => handleShippingOptionClick('regular')}
                className={`font-yeseva p-4 border cursor-pointer ${
                  selectedShipping === 'regular' ? 'bg-black text-white' : 'bg-white text-black'
                }`}
              >
                Regular Delivery - Free
              </div>
              <div
                onClick={() => handleShippingOptionClick('express')}
                className={`p-4 border cursor-pointer ${
                  selectedShipping === 'express' ? 'bg-black text-white' : 'bg-white text-black'
                }`}
              >
                Express Delivery - Rs. 100
              </div>
            </div>

            {selectedShipping && (
              <button
                onClick={handleContinueToPayment}
                className="mt-8 px-4 py-3 bg-black text-white font-semibold rounded-sm hover:bg-gray-700"
              >
                Continue to payment
              </button>
            )}
          </div>
        ) : paymentStep ? (
          <div>
            <h3 className="text-xl font-yeseva font-semibold mb-4">Choose Payment Method</h3>
            <div className="flex flex-col space-y-4">
              <div
                onClick={() => handlePaymentOptionClick('upi')}
                className={`p-4 border cursor-pointer ${
                  selectedPayment === 'upi' ? 'bg-black text-white' : 'bg-white text-black'
                }`}
              >
                UPI
              </div>
              <div
                onClick={() => handlePaymentOptionClick('card')}
                className={`p-4 border cursor-pointer ${
                  selectedPayment === 'card' ? 'bg-black text-white' : 'bg-white text-black'
                }`}
              >
                Card Payment
              </div>
            </div>

            {selectedPayment === 'upi' && (
  <div>
    <h4 className="mt-4 text-lg font-semibold">Select UPI Method</h4>
    <div className="flex flex-col space-y-2">
      {[
        { name: 'PhonePe', logo: PhonePeLogo },
        { name: 'Google Pay', logo: GooglePayLogo },
        { name: 'Paytm', logo: PaytmLogo },
        { name: 'Amazon Pay', logo: AmazonPayLogo }
      ].map((option) => (
        <div
          key={option.name}
          onClick={() => handleUPIOptionClick(option.name)}
          className={`flex items-center p-4 border cursor-pointer ${
            selectedUPI === option.name ? 'bg-black text-white' : 'bg-white text-black'
          }`}
        >
          <img src={option.logo} alt={option.name} className="w-10 h-10 mr-4" />
          {option.name}
        </div>
      ))}
    </div>
    {selectedUPI && (
      <div className="mt-4">
        <input
          type="text"
          placeholder="Enter UPI ID"
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
          className="w-full p-3 border border-gray-400 mb-4"
        />
        <button className="mt-8 px-4 py-3 bg-black text-white font-semibold rounded-sm hover:bg-gray-700">
          Complete Payment
        </button>
      </div>
    )}
  </div>
)}


{selectedPayment === 'card' && (
  <div>
    <h4 className="mt-4 text-lg font-semibold">Select Card Type</h4>
    <div className="flex flex-col space-y-2">
      {[
        { name: 'Mastercard', logo: MastercardLogo },
        { name: 'Visa', logo: VisaLogo },
        { name: 'RuPay', logo: RuPayLogo }
      ].map((option) => (
        <div
          key={option.name}
          onClick={() => handleCardOptionClick(option.name)}
          className={`flex items-center p-4 border cursor-pointer ${
            selectedCard === option.name ? 'bg-black text-white' : 'bg-white text-black'
          }`}
        >
          <img src={option.logo} alt={option.name} className="w-10 h-10 mr-4" />
          {option.name}
        </div>
      ))}
    </div>
    {selectedCard && (
      <div className="mt-4">
        <input
          type="text"
          name="number"
          placeholder="Card Number"
          value={cardDetails.number}
          onChange={handleCardInputChange}
          className="w-full p-3 border border-gray-400 mb-4"
        />
        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          value={cardDetails.cvv}
          onChange={handleCardInputChange}
          className="w-full p-3 border border-gray-400 mb-4"
        />
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY"
          value={cardDetails.expiry}
          onChange={handleCardInputChange}
          className="w-full p-3 border border-gray-400 mb-4"
          pattern="\d{2}/\d{2}"
          maxLength="5"
          title="Enter expiration date in MM/YY format"
        />
        <button className="mt-8 px-4 py-3 bg-black text-white font-semibold rounded-sm hover:bg-gray-700">
          Complete Payment
        </button>
      </div>
    )}
  </div>
)}

          </div>
        ) : (
          <div>
            <h3 className="text-xl font-yeseva font-semibold mb-4">Shipping Information</h3>
            <form className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="font-yeseva p-3 border border-gray-400" />
              <input type="text" placeholder="Last Name" className="p-3 font-yeseva border border-gray-400" />
              <input type="text" placeholder="Address" className="col-span-2 p-3 font-yeseva border border-gray-400" />
              <input type="text" placeholder="Apartment, suite, etc (optional)" className="col-span-2 p-3 font-yeseva border border-gray-400" />
              <input type="text" placeholder="City" className="p-3 font-yeseva border border-gray-400" />
              <input type="text" placeholder="State" className="p-3 font-yeseva border border-gray-400" />
              <input type="text" placeholder="ZIP Code" className="p-3 font-yeseva border border-gray-400" />
              <input type="text" placeholder="Phone Number" className="col-span-2 p-3 font-yeseva border border-gray-400" />
            </form>
            <button
              onClick={handleContinueToShipping}
              className="mt-8 px-4 py-3 bg-black text-white font-semibold rounded-sm hover:bg-gray-700"
            >
              Continue to shipping
            </button>
          </div>
        )}
      </div>

      <div className="w-1/3 bg-white p-8 rounded-md shadow-md">
  <h3 className="text-2xl font-semibold mb-6">Cart Summary</h3>
  
  <div className="flex mb-4">
    <img
      src={product.image}
      alt={product.name}
      className="w-20 h-20 object-cover mr-4"
    />
    <div>
      <div className="flex justify-between mb-2">
        <span className="font-medium text-xl">{product.name}</span>
        <span className="font-medium text-xl">Rs. {product.price}</span>
      </div>
      <div className="flex justify-between mb-4">
        <span>Shipping</span>
        <span>{selectedShipping === 'express' ? 'Rs. 100' : 'Free'}</span>
      </div>
      <div className="flex justify-between mb-4">
        <span>Discount</span>
        <span>{discount}%</span>
      </div>

      <div className="flex justify-between mb-4 font-semibold text-xl">
        <span>Total</span>
        <span>Rs. {product.price + (selectedShipping === 'express' ? 100 : 0) - (product.price * discount) / 100}</span>
      </div>
    </div>
  </div>

  <div className="flex justify-between mt-8">
    <input
      type="text"
      value={couponCode}
      onChange={(e) => setCouponCode(e.target.value)}
      placeholder="Enter Coupon Code"
      className="p-3 border w-2/3"
    />
    <button
      onClick={handleCouponApply}
      className="w-1/3 bg-black text-white px-4 py-3"
    >
      Apply
    </button>
  </div>  
</div>
</div>
  );
}

export default CheckoutPage;
