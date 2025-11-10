
import React from "react";
import logo from "../../assets/logo pawmart.png";
import { FaFacebook, FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <footer className="footer  bg-[#D9BFA2] sm:footer-horizontal w-11/12 mx-auto  text-base-content p-10">

      <nav className="md:w-60 lg:w-80  text-primary">
        <div className=" flex items-center gap-1 text-xl font-bold">
          <img className="w-8 md:w-12 lg:w-14"  src={logo} alt="" />
          <span>PawMart</span>
         
        </div>
         <p className="text-primary">Your trusted partner in providing premium quality dog food and accessories. We're dedicated to keeping your furry friends healthy and happy.</p>
          <h3 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Connect With Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-200 hover:text-blue-700">
              <FaFacebook size={20}/>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-200 hover:text-black">
              <FaXTwitter size={20} /> 
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-200 hover:text-pink-600">
              <FaSquareInstagram size={20}/>
            </a>
          
          </div>
      </nav>
        <nav>
          <h6 className="footer-title ">Customer Service</h6>
          <a className="link link-hover text-primary">Contact Us</a>
          <a className="link link-hover text-primary">Shipping Information</a>
          <a className="link link-hover text-primary">Returns & Exchanges</a>
          <a className="link link-hover text-primary">FAQs</a>
        </nav>
        <nav>
          <h6 className="footer-title ">Quick Links</h6>
          <a className="link link-hover text-primary">Shop All Products</a>
          <a className="link link-hover text-primary">Best Sellers</a>
          <a className="link link-hover text-primary">New Arrivals</a>
          <a className="link link-hover text-primary">Special Offers</a>
        </nav>
        <nav>
          <h6 className="footer-title">Newsletter</h6>
          <p className="text-primary">Subscribe to get special offers, free giveaways, and exclusive deals.</p>

          <div className="flex mt-2 mb-4 justify-center items-center">
            <input className="bg-white lg:p-3 p-2 mr-2 w-full rounded-xl" type="email" name="" id="" placeholder="Your email"/>
            <button className="btn rounded-xl md:text-[10px] md:p-2  lg:text-[16px] lg:p-6 border-gray-300  btn-sm bg-primary text-white">Subscribe</button>
          </div>

          <a className="link link-hover text-primary gap-2 flex"><IoCallOutline size={16}/>+1 (555) 123-4567</a>
          <a className="link link-hover text-primary gap-2 flex"><MdOutlineMailOutline size={16} />support@pawmart.com</a>
          <a className="link link-hover text-primary gap-2 flex"><IoLocationOutline size={16} />123 Pet Street, Dog City, DC 12345</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
