import { useEffect, useRef, useState } from "react";
import {
    FaVoicemail,
    FaPhoneAlt,
} from "react-icons/fa";
import QRCode from "react-qr-code";

const Payment = () => {
    const Ref = useRef(null);
    const [timer, setTimer] = useState('00:00:00');
    const [time, setTime] = useState(false)
    console.log(time)

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }

    const startTimer = (e) => {
        let { total, hours, minutes, seconds }
                    = getTimeRemaining(e);
        if (total >= 0) {
 
            // update the timer
            // check if less than 10 then we need to
            // add '0' at the beginning of the variable
            setTime(true)
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }

    const clearTimer = (e) => {
 
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next   
        setTimer('00:00:10');
 
        // If you try to remove this line the
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
    const getDeadTime = () => {
        let deadline = new Date();
 
        // This is where you need to adjust if
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + 10);
        return deadline;
    }
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
 
    // Another way to call the clearTimer() to start
    // the countdown is via action event from the
    // button first we create function to be called
    // by the button
    const onClickReset = () => {
        clearTimer(getDeadTime());
    }

    return (
        <div className="hero min-h-screen mb-8">
            <div className="hero-content flex-col lg:flex-row">

                <div className="w-full lg:w-6/12 lg:text-left  text-black">
                    <div className="flex items-center mb-8">
                        <div className="border-4 border-white"><img src="https://i.ibb.co/X4q0YGv/1633933253987.jpg" className="h-16 w-20" alt="Writo" /></div>
                        <h4 className="ms-4 text-xl font-semibold">Pregrad</h4>
                    </div>
                    <h3 className="text-3xl text-[#0d2366] font-semibold">Pre-Graduation Program <br /> Enrollment</h3> <br />
                    <hr className="bg-green-500 w-10 h-2" /> <br />
                    <h1 className="text-xl font-semibold">Hey Learner!</h1>
                    <p>Finally that you're here give us a high-five! This is the Pre-final step to get into the Pre-Graduation  Program (Live Online Course) and to start the learning journey and career with Pregrad.</p> <br />
                    <h1 className="text-xl font-semibold">Fee breakup</h1>
                    <p>This is the Pre-enrollment fee, Our Support team will get in touch with you for remaining fee that has to be paid within 3-4 days of Pre-enrollment. Note- You'll be receiving all further intimations over your WhatsApp.</p> <br />
                    <br />
                    <h3 className="text-xl font-semibold">Contact Us:</h3>
                    <p className="flex items-center gap-x-1"><FaVoicemail></FaVoicemail> info@gmail.com</p>
                    <p className="flex items-center gap-x-1"><FaPhoneAlt />info@gmail.com</p>
                    <br />

                    <h1 className="text-xl font-semibold">Terms & Conditions:</h1>
                    <p>Course fee once Paid is not refundable for more details visit <a className="text-blue-500" href="">https://pregrad.in/refund_returns/</a></p>
                    <p className="mt-4">You agree to share information entered on this page with Pregrad (owner of this page) and Razorpay, adhering to applicable laws.</p>
                    <hr className="mt-8 h-2" />

                    <div className="mt-2">
                        <img src="https://i.ibb.co/X4q0YGv/1633933253987.jpg" className="h-8 w-16" alt="Writo" />
                        <p>Want to create page like this for your Business? Visit <br /> <a className="text-blue-500" href="">Razorpay Payment Pages</a> to get started</p>
                    </div>


                </div>

                <div className="card lg:ms-8 mx-2 w-full md:mx-0 lg:w-5/12 shadow-2xl bg-white">
                    <div className="p-8">
                        <h3 className="text-2xl font-semibold">Payment Details</h3>
                        <hr className="bg-green-500 w-10 h-2 mt-8" /> <br />
                        <div className="md:flex items-center justify-between">
                            <h4 className="md:text-[16px] text-[14px]">Student Name</h4>
                            <input className="appearance-none border border-[#e2e2e2] w-full md:ms-4 md:w-72 py-2 leading-tight  outline-green-400" id="text" type="text" />
                        </div>

                        <div className="md:flex items-center justify-between mt-6">
                            <h4 className="md:text-[16px] text-[14px]">Email</h4>
                            <input className="appearance-none border border-[#e2e2e2] w-full md:ms-4 md:w-72 py-2 leading-tight  outline-green-400" id="email" type="email" />
                        </div>

                        <div className="md:flex items-center justify-between mt-6">
                            <h4 className="md:text-[16px] text-[14px]">Number</h4>
                            <input className="appearance-none border border-[#e2e2e2] w-full md:ms-4 md:w-72 py-2 leading-tight  outline-green-400" id="number" type="number" />
                        </div>

                        <div className="md:flex items-center justify-between mt-6">
                            <h4 className="md:text-[16px] text-[14px]">Live Program Selected</h4>
                            <select className="select border rounded-none border-[#e2e2e2] w-full md:ms-4 md:w-72 py-2">
                                <option selected>--Select--</option>
                                <option>Data Science & Analytics</option>
                                <option>DSA With C/C++</option>
                                <option>Full Stack Development MERN PGP </option>
                                <option>Digital Marketing PGP</option>
                                <option>Finance</option>
                                <option>Business Analytics PGP</option>
                                <option>Cyber Security </option>
                                <option>Android App Development</option>
                                <option>Python Core to Advanced</option>
                                <option>Artifiicial Intelligennce...</option>
                                <option>AutoCAD</option>
                                <option>Cloud Computing AWS</option>
                                <option>Full Stack with Java </option>
                                <option>Investment Banking</option>
                                <option>AutoCAD June</option>
                            </select>
                        </div>

                        <div className="md:flex items-center justify-between mt-6">
                            <h4 className="md:text-[16px] text-[14px]">Enrollment Fee <br /> including Gateway <br /> Charge</h4>
                            <input className="appearance-none border border-[#e2e2e2] w-full md:ms-4 md:w-72 py-2 leading-tight  outline-green-400" id="number" type="number" value={1220} />
                        </div>

                        <div className="md:flex items-center justify-between mt-6">
                            <h4 className="md:text-[16px] text-[14px]">GST</h4>
                            <input className="appearance-none border border-[#e2e2e2] w-full md:ms-4 md:w-72 py-2 leading-tight  outline-green-400" id="number" type="number" value={180} />
                        </div>

                    </div>

                    <div className="md:flex items-center justify-between bg-[#f5f6f7]">
                        <div className="md:flex hidden gap-2 mx-2">
                            <img className="h-6 w-12" src="https://i.ibb.co/8cS08gX/images-1-removebg-preview-1.png" alt="" />
                            <img className="h-8 w-12" src="https://i.ibb.co/Z8XpVXg/visa-349221.png" alt="" />
                            <img className="h-6 w-12" src="https://i.ibb.co/0n0515F/maestro-217445.png" alt="" />
                            <img className="h-6 w-12" src="https://i.ibb.co/3vybWr4/ruble-10040420.png" alt="" />
                            <img className="h-6 w-12" src="https://i.ibb.co/7GX248v/download-7.png" alt="" />

                        </div>
                        <div className="h-15">
                            {/* <button onClick={() => window.my_modal_4.showModal()} className="ms-2 bg-[#05ad11] p-5 text-white font-bold w-48 ">Pay ₹ 1400</button> */}
                            <button className="md:ms-2 bg-[#05ad11] p-5 text-white font-bold w-full md:w-48" onClick={() => window.my_modal_3.showModal()}>Pay ₹ 1400</button>
                        </div>
                    </div>

                </div>

                <dialog id="my_modal_3" className="modal">
                    <form method="dialog" className="modal-box">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <div className="flex items-center gap-4">
                            <div>
                                <QRCode
                                    size={200}
                                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                    value='Sir Mujhe pizza Chaiyee -Written by Emran'
                                    viewBox={`0 0 100 256`}
                                />
                            </div>
                            <div>
                                <p>Scan the QR using any UPI app on your phone</p>
                            <div className="flex justify-center">
                                <img className="h-8 w-12" src="https://i.ibb.co/HdcNn0J/images-2-removebg-preview-1.png" alt="" />
                                <img className="h-8 w-12" src="https://i.ibb.co/WGnTwK7/images-3-removebg-preview.png" alt="" />
                                <img className="h-8 w-12" src="https://i.ibb.co/WP6Py6v/images-4-removebg-preview.png" alt="" />
                                <img className="h-8 w-12" src="https://i.ibb.co/SPFczny/download-8-removebg-preview.png" alt="" />
                            </div>
                            <div>
                                {
                                    time? <p>Time out</p> : <p className="text-center my-4">{timer}</p>
                                }
                            </div>
                            </div>
                        </div>
                    </form>
                </dialog>




            </div>
        </div>
    );
};

export default Payment;