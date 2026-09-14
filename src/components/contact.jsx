import { IoHomeSharp } from "react-icons/io5";  
import { FaPhoneAlt, FaEnvelope, FaUser } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";


function Contact() {
    return(
        <div id='Contact' className="w-full px-35 py-15 flex items-center justify-center flex-col bg-[#333333]">
            <h1 className="text-[45px] uppercase text-white font-bold font-['Courier_New']">Get in touch!</h1>
            <p className="mb-5 text-[18px] text-white font-['Courier_New']">This is Photoshop's version of Lorem Ipsum. Proin gravida</p>

            <div className="grid grid-cols-2 gap-10">
                
                <div className="grid grid-rows-[auto-1fr]">
                    <div className="mb-10 border-b border-[#4f4e4e]">
                        <h2 className="mb-1.5 text-white font-['Courier_New'] text-[35px] font-bold">
                            Contact info
                        </h2>
                        <p className="mb-2 font-['Courier_New'] text-[15px] leading-5.25] text-white">Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat.</p>
                        <p className="mb-2 font-['Courier_New'] text-[15px] leading-5.25 text-white">Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperd iet nisi. Proin condimentum</p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                        <div className="flex flex-col gap-2 font-['Courier_New'] text-[16px] text-[#919191]">

                            <div className="flex items-center gap-3">
                            <IoHomeSharp className="text-white" />
                            <span>Lorem ipsum street</span>
                            </div>

                            <div className="flex items-center gap-3">
                            <FaEnvelope className="text-white" />
                            <span>info@domain.com</span>
                            </div>

                        </div>

                        <div className="flex items-center gap-3 font-['Courier_New'] text-[16px] text-[#919191]">
                            <FaPhoneAlt className="text-white" />
                            <span>+399 (500) 321 9548</span>
                        </div>

                    </div>
                </div>

                <form className="grid grid-cols-2 gap-5 mt-5">

                   <div>
                        <div className="mb-2.5 flex">
                            <div className="flex h-18 w-14.25 shrink-0 items-center justify-center border border-r-0 bg-white border-[#eaeaea] text-[#848484]">
                            <FaUser />
                            </div>

                            <input
                            type="text"
                            placeholder="Your Name"
                            className="block h-18 w-full rounded-none bg-white border border-[#eaeaea] p-4.5 font-['Courier_New'] text-[14px] text-[#848484] outline-none placeholder:text-[#848484]"
                            />
                        </div>

                        <div className="mb-2.5 flex">
                            <div className="flex h-18 w-14.25 shrink-0 items-center justify-center bg-white border border-r-0 border-[#eaeaea] text-[#848484]">
                            <FaEnvelope />
                            </div>

                            <input
                            type="email"
                            placeholder="E-mail"
                            className="block h-18 w-full rounded-none bg-white border border-[#eaeaea] p-4.5 font-['Courier_New'] text-[14px] text-[#848484] outline-none placeholder:text-[#848484]"
                            />
                        </div>

                        <div className="mb-2.5 flex">
                            <div className="flex h-18 w-14.25 shrink-0 items-center justify-center bg-white border border-r-0 border-[#eaeaea] text-[#848484]">
                            <IoIosLink />
                            </div>

                            <input
                            type="text"
                            placeholder="Website"
                            className="block h-18 w-full rounded-none bg-white border border-[#eaeaea] p-4.5 font-['Courier_New'] text-[14px] text-[#848484] outline-none placeholder:text-[#848484]"
                            />
                        </div>
                    </div>

                    <div>
                        <textarea
                        type="text"
                        placeholder="Message"
                        className="mb-2.5 h-38.5 block w-full rounded-none bg-white border border-[#eaeaea] p-4.5 font-['Courier_New'] text-[14px] text-[#848484] outline-none placeholder:text-[#848484]"
                        ></textarea>

                        <button
                        type="submit"
                        className="block h-18 cursor-pointer w-full border-none bg-[#1ab5b3] p-[4.75] text-center font-['Courier_New'] text-[14px] uppercase text-white "
                        >
                        Send Message
                        </button>
                    </div>

                </form>
            </div>


        </div>
    );
}

export default Contact;