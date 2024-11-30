import React from 'react';
import {
  ShieldCheck, CloudRain, Clock, Plane, Ship, Package, Rocket, MapPin,
  Quote, Truck, Search, Twitter, Facebook, Linkedin, Globe
} from "lucide-react";
import Link from 'next/link';

const HomePage: React.FC = () => {
  /* eslint-disable @next/next/no-img-element */
  /* eslint-disable @next/next/no-html-link-for-pages */
  const testimonials = [
    {
      text: "Using it since 2005, best courier service, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      author: "William Jhon",
      designation: "Shipment Client",
      image: "images/resource/author-2.jpg",
    },
    {
      text: "Providing best services for over 20 years, trusted worldwide, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      author: "Kristie Hans",
      designation: "Associated Engineer",
      image: "images/resource/author-1.jpg",
    },
    {
      text: "Used it once and never looked back, totally awesome, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      author: "Mylie Joseph",
      designation: "General Manager",
      image: "images/resource/author-1.jpg",
    },
    {
      text: "Tried it for the first time and it turned out great, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      author: "William Jhone K",
      designation: "General Manager",
      image: "images/resource/author-2.jpg",
    },
  ];


  return (
    <>
      {/* Hero Section */}
      <div
        id="home"
        className="header-hero pt-28 pb-12 relative items-center"
        style={{
          zIndex: 0,
          backgroundImage: "url('images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#1E293B",
        }}
      >
        <div className="container px-10 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div
              className="image hidden lg:block"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img src="images/shipping-barner.png" alt="Shipping hero" />
            </div>
            <div
              className="hero-content text-center md:text-center lg:text-left lg:pl-24"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h2 className="text-white text-2xl sm:text-3xl md:text-3xl lg:text-4xl lg:leading-10 xl:leading-tight xl:text-5xl font-bold">
                Track & Manage Your Waybills
              </h2>

              <form
                action="#"
                className="mt-10 md:px-40 lg:px-0 lg:pr-32"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <input
                  className="form-control h-12 w-full border-2 border-white bg-transparent text-white block mb-4 px-5 placeholder-white rounded-md"
                  placeholder="Email address"
                  type="email"
                  required
                />
                <input
                  className="form-control h-12 w-full border-2 border-white bg-transparent text-white block mb-4 px-5 placeholder-white rounded-md"
                  placeholder="Tracking Number"
                  type="text"
                  required
                />
                <Link href="/track">
                  <button
                    className="block h-12 border-2 bg-white text-black text-sm px-7 inline-block font-semibold border-none rounded-md hover:bg-black hover:text-white transition-all"
                    type="submit"
                    name="submit"
                    id="submit"
                  >
                    Track Waybill
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="about section bg-gray-50 p-16">
        <div className="container mx-auto">
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center">
            <div
              className="image overflow-hidden lg:pr-24"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img className="rounded-xl" src="images/shipping-barner2.png" alt="About" />
            </div>
            <div
              className="content lg:pr-32"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <span className="mb-5 lg:mb-8 px-6 py-3 bg-gray-200 text-primary rounded-full inline-block font-semibold text-sm">
                CAPABILITIES
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-10 block">
                Monitor Your Shipments <br /> With Ease
              </h2>
              <p className="block mb-8 text-gray-600">
                Stay on top of your shipping operations with a clear overview of your progress and tasks. Track performance metrics and manage your deliveries efficiently.
              </p>
              <p className="text-gray-600">
                With our advanced tracking system, you’ll never lose sight of your shipments. Get insights and updates in real-time to ensure smooth logistics.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="welcome-section py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Content Column */}
            <div
              className="content-column"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div className="inner-column">
                <div className="sec-title-two mb-8">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-10 block">
                    Welcome <span className="text-primary">To Kargo</span>
                  </h2>
                  <div className="separater w-16 h-1 bg-primary mt-3"></div>
                </div>
                <ul className="space-y-6">
                  <li className="flex items-start space-x-4">
                    <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">100% Safe Delivery</h4>
                      <p className="text-gray-600">
                        We ensure 100% safe delivery, providing peace of mind for every package. From origin to destination, your shipments are in good hands.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <CloudRain className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Weather Insurance</h4>
                      <p className="text-gray-600">
                        Weather-proof logistics that deliver to your commitment. Rain or shine, we ensure secure and reliable transport.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Fast & On-Time Delivery</h4>
                      <p className="text-gray-600">
                        Timeliness is our priority. We strive for fast, efficient delivery that meets your schedule, every time.
                      </p>
                    </div>
                  </li>
                </ul>
                <a
                  href="#"
                  className="mt-8 inline-block bg-[#eb0028] text-white px-6 py-3 rounded-md font-medium shadow-md hover:bg-none transition-all"
                >
                  Read More
                </a>
              </div>
            </div>

            {/* Image Column */}
            <div
              className="image-column flex justify-center lg:justify-end"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div className="inner-column">
                <div className="image">
                  <img
                    className="rounded-xl shadow-xl max-w-full h-auto"
                    src="images/welcome.jpg"
                    alt="Welcome to Switft tracking"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

{/* 
      <section className="services-section-two py-16 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="sec-title text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-800">
              Our Awesome <span className="text-primary">Services</span>
            </h3>
            <div className="separater w-16 h-1 bg-primary mx-auto mt-3"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className="services-block bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div className="image relative">
                <img
                  src="images/service-1.jpg"
                  alt="Air Freight"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <Plane className="w-10 h-10 text-white" />
                </div>
              </div>
              <h4 className="text-lg font-bold text-center py-4">Air Freight</h4>
            </div>

            <div
              className="services-block bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <div className="image relative">
                <img
                  src="images/service-2.jpg"
                  alt="Sea Freight"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <Ship className="w-10 h-10 text-white" />
                </div>
              </div>
              <h4 className="text-lg font-bold text-center py-4">Sea Freight</h4>
            </div>

            <div
              className="services-block bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div className="image relative">
                <img
                  src="images/service-3.jpg"
                  alt="Road Freight"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <Truck className="w-10 h-10 text-white" />
                </div>
              </div>
              <h4 className="text-lg font-bold text-center py-4">Road Freight</h4>
            </div>

            <div
              className="services-block bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div className="image relative">
                <img
                  src="images/service-4.jpg"
                  alt="Courier Services"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <Package className="w-10 h-10 text-white" />
                </div>
              </div>
              <h4 className="text-lg font-bold text-center py-4">Courier Services</h4>
            </div>

            <div
              className="services-block bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="image relative">
                <img
                  src="images/service-5.jpg"
                  alt="Fast Freight"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
              </div>
              <h4 className="text-lg font-bold text-center py-4">Fast Freight</h4>
            </div>

            <div
              className="services-block bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div className="image relative">
                <img
                  src="images/service-6.jpg"
                  alt="Track Cargo"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
              </div>
              <h4 className="text-lg font-bold text-center py-4">Track Cargo</h4>
            </div>
          </div>
        </div>
    */}




      <section
        className="counter-section bg-cover bg-center py-16"
        style={{ backgroundImage: "url('images/background/3.jpg')" }}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Order Column */}
            <div
              className="order-column bg-white bg-opacity-80 p-8 rounded-lg shadow-lg"
              style={{ backgroundImage: "url('images/background/4.png')" }}
            >
              <div className="text-center mb-6">
                <div className="icon-box text-primary text-5xl mb-4">
                  <Truck />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Track Your Order</h2>
                <p className="text-gray-600">Enter your Track ID for instant search</p>
              </div>

              {/* Track Form */}
              <form className="track-form flex items-center">
                <input
                  type="text"
                  placeholder="Tracking ID"
                  required
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring focus:ring-primary"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-r-lg hover:bg-primary-dark transition"
                >
                  <Search />
                </button>
              </form>

              {/* Social Icons */}
              <div className="social-box flex justify-center space-x-4 mt-6">
                <a
                  href="#"
                  className="text-gray-500 hover:text-primary text-xl transition"
                >
                  <Twitter />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-primary text-xl transition"
                >
                  <Facebook />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-primary text-xl transition"
                >
                  <Linkedin />
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-primary text-xl transition"
                >
                  <Globe />
                </a>
              </div>
            </div>

            {/* Counter Column */}
            <div className="counter-column">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {/* Counter Items */}
                {[
                  { count: "60", label: "Years Experience", unit: "" },
                  { count: "2500", label: "Professional Workers", unit: "+" },
                  { count: "80", label: "Areas Covered", unit: "%" },
                  { count: "205", label: "Countries Covered", unit: "+" },
                  { count: "180", label: "Corporate Clients", unit: "+" },
                  { count: "450", label: "Owned Vehicles", unit: "+" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white bg-opacity-80 rounded-lg p-6 text-center shadow-lg"
                    data-aos="fade-up"
                    data-aos-delay={`${index * 100}`}
                  >
                    <div className="text-3xl font-extrabold text-primary">
                      {item.count}
                      <span className="text-gray-700">{item.unit}</span>
                    </div>
                    <h4 className="text-lg font-medium text-gray-800 mt-2">
                      {item.label}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="testimonial-section py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-800">
              Client <span className="text-primary">Testimonials</span>
            </h3>
            <div className="h-1 w-16 bg-primary mx-auto mt-4"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-block bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <Quote className="text-primary text-4xl mb-4" />
                <p className="text-gray-600 mb-6">{testimonial.text}</p>
                <div className="author-info">

                  <h4 className="text-lg font-semibold text-gray-800">
                    {testimonial.author}
                  </h4>
                  <div className="text-gray-500 text-sm">{testimonial.designation}</div>

                  {/* Social Icons */}
                  <div className="social-box flex justify-center space-x-4 mt-4">
                    <a
                      href="#"
                      className="text-gray-500 hover:text-primary text-xl transition"
                    >
                      <Twitter />
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-primary text-xl transition"
                    >
                      <Facebook />
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-primary text-xl transition"
                    >
                      <Linkedin />
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-primary text-xl transition"
                    >
                      <Globe />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="flex flex-col lg:flex-row">
          {/* Left Column */}
          <div className="flex-1 bg-gradient-to-br from-blue-500 to-blue-700 text-white">
            <div className="p-8 lg:p-16 h-full flex flex-col justify-center">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">Are You A Sender?</h3>
              <p className="text-base lg:text-lg mb-6">
                We have multiple lucrative packages for the individual senders, sed do eiusmod tempor
                incididunt ut labore.
              </p>
              <a
                href="#"
                className="inline-block px-6 py-3 bg-white text-blue-700 font-medium rounded-md shadow-md hover:bg-gray-100 transition"
              >
                Check Packages
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 bg-gradient-to-br from-yellow-500 to-yellow-700 text-white">
            <div className="p-8 lg:p-16 h-full flex flex-col justify-center">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">Are You A Shipper?</h3>
              <p className="text-base lg:text-lg mb-6">
                Lucrative incentives and facilities for large-scale shipping consignments, tempor
                incididunt ut labore.
              </p>
              <a
                href="#"
                className="inline-block px-6 py-3 bg-white text-yellow-700 font-medium rounded-md shadow-md hover:bg-gray-100 transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default HomePage;
