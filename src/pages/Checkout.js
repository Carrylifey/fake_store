import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import { SidebarContext } from "../contexts/SidebarContext";

const generateMonths = () => {
  return Array.from({ length: 12 }, (_, i) => {
    const monthNumber = i + 1;
    const monthName = new Date(0, monthNumber).toLocaleString("default", {
      month: "long",
    });
    return { number: monthNumber, name: monthName };
  });
};

const generateYears = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = 0; i < 10; i++) {
    years.push(currentYear + i);
  }
  return years;
};

const Checkout = () => {
  const months = generateMonths();
  const years = generateYears();

  const { cart, total } = useContext(CartContext);
  const { setIsOpen } = useContext(SidebarContext);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    cardNumber: "",
    expirationMonth: "",
    expirationYear: "",
    securityCode: "",
    cardName: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate order placement (You may replace this with your actual logic)
    setTimeout(() => {
      // Reset form data
      setFormData({
        name: "",
        address: "",
        email: "",
        cardNumber: "",
        expirationMonth: "",
        expirationYear: "",
        securityCode: "",
        cardName: "",
      });

      // Mark the order as placed
      setOrderPlaced(true);
    }, 1000);
  };
  useEffect(() => {
    // Close the sidebar when the component mounts (checkout page is entered)
    setIsOpen(false);
  }, [setIsOpen]);
  return (
    <div className="relative mx-auto w-full bg-white">
      <div className="grid min-h-screen grid-cols-10">
        <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
          <div className="mx-auto w-full max-w-lg">
            <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
              Secure Checkout
              <span className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span>
            </h1>
            {orderPlaced ? (
              <div className="mt-8 text-green-600 font-semibold">
                Thank you! Your order has been placed.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-10 flex flex-col space-y-4"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold text-gray-500"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                {/* Address */}
                <div>
                  <label
                    htmlFor="address"
                    className="text-xs font-semibold text-gray-500"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="123 Main St, City, Country"
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold text-gray-500"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john.capler@fang.com"
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                {/* Card Number */}
                <div>
                  <label
                    htmlFor="cardNumber"
                    className="text-xs font-semibold text-gray-500"
                  >
                    Card number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234-5678-XXXX-XXXX"
                    className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                  <img
                    src="/images/uQUFIfCYVYcLK0qVJF5Yw.png"
                    alt=""
                    className="absolute bottom-3 right-3 max-h-4"
                  />
                </div>
                {/* Expiration Date */}
                <div>
                  <p className="text-xs font-semibold text-gray-500">
                    Expiration date
                  </p>
                  <div className="mr-6 flex flex-wrap">
                    <div className="my-1">
                      <label htmlFor="expirationMonth" className="sr-only">
                        Select expiration month
                      </label>
                      <select
                        name="expirationMonth"
                        id="expirationMonth"
                        value={formData.expirationMonth}
                        onChange={handleInputChange}
                        className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="">Month</option>
                        {months.map((month) => (
                          <option key={month.number} value={month.number}>
                            {month.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="my-1 ml-3 mr-6">
                      <label htmlFor="expirationYear" className="sr-only">
                        Select expiration year
                      </label>
                      <select
                        name="expirationYear"
                        id="expirationYear"
                        value={formData.expirationYear}
                        onChange={handleInputChange}
                        className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                      >
                        <option value="">Year</option>
                        {years.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="relative my-1">
                      <label htmlFor="securityCode" className="sr-only">
                        Security code
                      </label>
                      <input
                        type="text"
                        id="securityCode"
                        name="securityCode"
                        value={formData.securityCode}
                        onChange={handleInputChange}
                        placeholder="Security code"
                        className="block w-36 rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  </div>
                </div>
                {/* Card Name */}
                <div>
                  <label
                    htmlFor="cardName"
                    className="text-xs font-semibold text-gray-500"
                  >
                    Card name
                  </label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    placeholder="Name on the card"
                    className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                {/* Place Order Button */}
                <button
                  type="submit"
                  className="mt-4 inline-flex w-full items-center justify-center rounded bg-teal-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
                >
                  Place Order
                </button>
              </form>
            )}
          </div>
        </div>
        {/* Order Summary */}
        <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
          <h2 className="text-2xl font-medium mb-4">Order Summary</h2>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 object-cover"
                  />
                  <div>
                    <p className="text-base font-semibold">{item.title}</p>
                    <p className="text-sm font-medium text-gray-500">{`Quantity: ${item.amount}`}</p>
                  </div>
                </div>
                <p className="text-sm font-semibold">{`$ ${parseFloat(
                  item.price * item.amount
                ).toFixed(2)}`}</p>
              </li>
            ))}
          </ul>
          <div className="my-5 h-0.5 w-full bg-gray-200"></div>
          <div className="space-y-2">
            <p className="flex justify-between text-lg font-bold">
              <span>Total price:</span>
              <span>{`$ ${parseFloat(total).toFixed(2)}`}</span>
            </p>
            <p className="flex justify-between text-sm font-medium"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
