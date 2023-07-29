import {
  FaFacebookF,
  FaHome,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitter,
  FaRegEnvelope,
  FaYoutube,
  FaPhoneAlt,
  FaAngleRight,
} from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <div className="w-full relative">
      <div className="mt-60 md:mt-32">
        {/* Form section */}
        <div className="flex justify-center">
          <div className="bg-gradient w-10/12 mx-auto rounded-2xl absolute -top-60 md:-top-28">
            <div>
              <div className="flex flex-col md:flex-row justify-evenly  p-8">
                <div className="text-white md:w-8/12 p-4">
                  <h1 className="text-4xl font-bold mb-2">
                    Subscribe us for the latest newsletter
                  </h1>
                  <p>
                    Expand your knowledge and skills by choosing the right mentor!
                  </p>
                </div>
                <div className="input-field p-1 md:w-4/12">
                  <input type="text" placeholder="Enter Email" className="input w-full" />{" "}
                  <br />
                  <button className="btn bg-[#13e27a] btn-form btn-md w-full">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Form section end */}

        <footer className="footer p-12  pt-36 text-base-content text-white bg-[#000] text-lg">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-white">
              <span className="font-bold text-2xl">Quick Links</span>
              <hr className="w-1/2 h-[3px] bg-[#dc3545] my-3" />
              <div className="flex items-center">
                <FaAngleRight />
                <a className="link link-hover">Home</a>
              </div>
              <div className="flex items-center">
                <FaAngleRight />
                <a className="link link-hover">Career</a>
              </div>
              <div className="flex items-center">
                <FaAngleRight />
                <a className="link link-hover">Hire From Us</a>
              </div>
              <div className="flex items-center">
                <FaAngleRight />
                <a className="link link-hover">BTH - Talent Hunt Exam</a>
              </div>
              <div className="flex items-center">
                <FaAngleRight />
                <a className="link link-hover">Refer and Earn</a>
              </div>
            </div>

            <div className="text-white">
              <span className="font-bold text-2xl">Other Links</span>
              <hr className="w-1/2 h-[3px] bg-[#dc3545] my-3" />
              <div className="flex items-center">
                <FaAngleRight />
                <a className="link link-hover">Blog</a>
              </div>
              <div className="flex items-center">
                <FaAngleRight />
                <a className="link link-hover">Events and Contest</a>
              </div>
              <div className="flex items-center">
                <FaAngleRight />
                <a className="link link-hover">Contact Us</a>
              </div>
            </div>

            <div className="text-white">
              <span className="font-bold text-2xl">Courses</span>
              <hr className="w-1/2 h-[3px] bg-[#dc3545] my-3" />
              <div className="flex items-center">
                <FaAngleRight />
                <a className="link link-hover">Entrepreneurship</a>
              </div>
              <div className="flex items-center">
                <FaAngleRight />
                <a className="link link-hover">Product Management</a>
              </div>
              <div className="flex items-center">
                <FaAngleRight />
                <a className="link link-hover">SAP FICO</a>
              </div>
            </div>

            <div className="text-white">
              <span className="font-bold text-2xl">Contact Us</span>
              <hr className="w-1/2 h-[3px] bg-[#dc3545] my-3" />
              <div className="flex items-center gap-x-2">
                <FaHome className="text-4xl p-2 bg-[#1ab79d] rounded-xl text-white"></FaHome>
                <a className="link link-hover">
                  B Block Noida Sector 15 Uttar Pradesh
                </a>
              </div>
              <div className="flex items-center gap-x-2">
                <FaRegEnvelope className="text-4xl p-2 bg-[#1ab79d] rounded-xl text-white"></FaRegEnvelope>
                <a className="link link-hover">tutors@baoiam.com</a>
              </div>
              <div className="flex items-center gap-x-2">
                <FaPhoneAlt className="text-4xl p-2 mt-2 bg-[#1ab79d] rounded-xl text-white"></FaPhoneAlt>
                <a className="link link-hover">+91-9992754599</a>
              </div>
              <div className="flex text-4xl gap-x-4 relative mt-4">
                <FaFacebookF className="bg-[#1ab79d] cursor-pointer p-2 rounded-xl text-white hover:bg-white hover:duration-700"></FaFacebookF>
                <FaInstagramSquare className="bg-[#1ab79d] cursor-pointer p-2 rounded-xl text-white hover:bg-white hover:duration-700"></FaInstagramSquare>
                <FaTwitter className="bg-[#1ab79d] cursor-pointer p-2 rounded-xl text-white hover:bg-white hover:duration-700"></FaTwitter>
                <FaYoutube className="bg-[#1ab79d] cursor-pointer p-2 rounded-xl text-white hover:bg-white hover:duration-700"></FaYoutube>
                <FaLinkedinIn className="bg-[#1ab79d] cursor-pointer p-2 rounded-xl text-white hover:bg-white hover:duration-700"></FaLinkedinIn>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div className="p-8 bg-gradient text-base-content">  
          <p className="text-center text-white">Copyright © 2023 BAOIAM. All Rights Reserved</p>  
      </div>

    </div>
  );
};

export default Footer;