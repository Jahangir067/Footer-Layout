import {
    FaHandHoldingMedical,
    FaSearch,
    FaLightbulb,
    FaRocket,
    FaSatelliteDish,
  } from "react-icons/fa";
  
  const Work = () => {
    return (
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="text-center font-bold text-5xl">How we <span className="text-[#ee4962] underline">work?</span></h1>
        <p className="text-center my-4 mb-8">
          Revolutionize the era of learning by creating high-quality content
          courses mentored by top-notch skilled <br /> trainers with full time
          support & live corporate trainings accompanied by placement assistance &
          networking <br /> support.
        </p>
        <div className="grid md:grid-cols-5 gap-4 mt-4 my-4">

          <div className="flex relative my-4">
            <div>
            <div className="flex items-center justify-center">
                <div>
                  <FaHandHoldingMedical className="text-9xl p-4 border-2 border-dotted border-green-500 text-green-500 bg-white rounded-full" />
                </div>
                <div className="absolute border-2 flex justify-center items-center h-9 w-9 rounded-full  border-green-500 bg-green-500 -top-[0.50rem] left-[4rem] ">
                  <p className="text-xl text-white p-3 font-extrabold  ">01</p>
                </div>
              </div>
  
              <div className="text-center mt-8">
                <h3 className="text-2xl font-bold my-4">
                  Learn with top experts
                </h3>
                <p>
                  Get your confusion replaced with <br /> confidence and doubts with
                  solution under  the guidance of our top experts
                </p>
              </div>
            </div>
            <div className="hidden md:inline-block">
              <img
                src="https://i.ibb.co/sRDjCD5/arrow-removebg-preview.png"
                className="-top-16 -right-20 w-40  absolute"
                alt=""
              />
            </div>
          </div>

          <div className="flex relative my-4">
            <div>
            <div className="flex items-center justify-center">
                <div>
                  <FaSearch className="text-9xl p-4 border-2 border-dotted border-[#ee4962] text-[#ee4962] bg-white rounded-full" />
                </div>
                <div className="absolute border-2 flex justify-center items-center h-9 w-9 rounded-full  border-[#ee4962] bg-[#ee4962] -top-[0.50rem] left-[4rem] ">
                  <p className="text-xl text-white p-3 font-extrabold  ">02</p>
                </div>
              </div>
  
              <div className="text-center mt-8">
                <h3 className="text-2xl font-bold my-4">Community discussion</h3>
                <p>
                  Attend the regular and planned community discussions to share
                  and support innovative ideas and dreams.
                </p>
              </div>
            </div>
            <div className="hidden md:inline-block">
              <img
                src="https://i.ibb.co/sRDjCD5/arrow-removebg-preview.png"
                className="-top-16 -right-20 w-40  absolute"
                alt=""
              />
            </div>
          </div>
          <div className="flex relative my-4">
            <div>
            <div className="flex items-center justify-center">
                <div>
                  <FaLightbulb className="text-9xl p-4 border-2 border-dotted border-[#ee4962] text-[#ee4962] bg-white rounded-full" />
                </div>
                <div className="absolute border-2 flex justify-center items-center h-9 w-9 rounded-full  border-[#ee4962] bg-[#ee4962] -top-[0.50rem] left-[4rem] ">
                  <p className="text-xl text-white p-3 font-extrabold  ">03</p>
                </div>
              </div>
  
              <div className="text-center mt-8">
                <h3 className="text-2xl font-bold my-4">
                  Live Corporate projects
                </h3>
                <p>
                  Work on live projects and get the practical knowledge required
                  to boost up your career
                </p>
              </div>
            </div>
            <div className="hidden md:inline-block">
              <img
                src="https://i.ibb.co/sRDjCD5/arrow-removebg-preview.png"
                className="-top-16 -right-20 w-40  absolute"
                alt=""
              />
            </div>
          </div>
          <div className="flex relative my-4">
            <div>
            <div className="flex items-center justify-center">
                <div>
                  <FaRocket className="text-9xl p-4 border-2 border-dotted border-[#ee4962] text-[#ee4962] bg-white rounded-full" />
                </div>
                <div className="absolute border-2 flex justify-center items-center h-9 w-9 rounded-full  border-[#ee4962] bg-[#ee4962] -top-[0.50rem] left-[4rem] ">
                  <p className="text-xl text-white p-3 font-extrabold  ">04</p>
                </div>
              </div>
  
              <div className="text-center mt-8">
                <h3 className="text-2xl font-bold my-4">Placement Assistance</h3>
                <p>
                  Learn to crack interviews from our experienced trainers and get
                  placed at top companies.
                </p>
              </div>
            </div>
            <div className="hidden md:inline-block">
              <img
                src="https://i.ibb.co/sRDjCD5/arrow-removebg-preview.png"
                className="-top-16 -right-20 w-40  absolute"
                alt=""
              />
            </div>
          </div>
          <div className="flex relative my-4">
            <div>
            <div className="flex items-center justify-center">
                <div>
                  <FaSatelliteDish className="text-9xl p-4 border-2 border-dotted border-[#ee4962] text-[#ee4962] bg-white rounded-full" />
                </div>
                <div className="absolute border-2 flex justify-center items-center h-9 w-9 rounded-full  border-[#ee4962] bg-[#ee4962] -top-[0.50rem] left-[4rem] ">
                  <p className="text-xl text-white p-3 font-extrabold  ">05</p>
                </div>
              </div>
  
              <div className="text-center mt-8">
                <h3 className="text-2xl font-bold my-4">
                  Networking and Investment Support
                </h3>
                <p>
                  Master the art of networking by enhancing your communication
                  skills and get the financial aid to start your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Work;