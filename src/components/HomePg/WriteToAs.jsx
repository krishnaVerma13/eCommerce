import React from "react";
import { IoMdCall } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { Ri24HoursFill } from "react-icons/ri";

const WriteToAs = () => {
    return (<>

        <div className="grid gap-6 md:grid-cols-2 p-6 bg-background rounded-lg">
            {/* Form Section */}
            <div className="w-full p-4 border border-black">
                <div className="flex justify-center">
                    <h2 className="text-2xl font-poppins font-bold mb-4">Write to Us Anytime</h2>
                </div>
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-2 mb-4 border border-black rounded"
                        />
                        <input
                            type="email"
                            placeholder="Enter E-mail"
                            className="w-full p-2 mb-4 border border-black rounded"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full p-2 mb-4 border border-black rounded"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full p-2 mb-4 border border-black rounded"
                        />
                    </div>
                    <textarea
                        placeholder="Write a Message"
                        className="w-full p-2 mb-4 border border-black rounded h-32"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-black text-white py-2 px-6 rounded-full"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            {/* Contact Information Section */}
            <div className="w-full p-4 flex flex-col justify-center">
                <div className="ml-0 md:ml-6 space-y-8">
                    <h2 className="font-bold font-inter text-3xl md:text-5xl mb-4">
                        Don’t Forget to Contact Us
                    </h2>
                    <div className="flex items-center mb-2">
                        <IoMdCall className="text-3xl" />
                        <span className="font-inter text-lg md:text-xl mx-2">
                            Call Us: +96305333562
                        </span>
                    </div>
                    <div className="flex items-center mb-2">
                        <MdMessage className="text-3xl" />
                        <span className="font-inter text-lg md:text-xl mx-2">
                            Send E-Mail: @dharmatechgamil.com
                        </span>
                    </div>
                    <div className="flex items-center mb-2">
                        <Ri24HoursFill className="text-3xl" />
                        <span className="font-inter text-lg md:text-xl mx-2">
                            Available: 24 Hour
                        </span>
                    </div>
                </div>
            </div>
        </div>


    </>)
}

export default WriteToAs