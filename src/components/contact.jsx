import { useState } from 'react';
import { IoHomeSharp } from "react-icons/io5";  
import { FaPhoneAlt, FaEnvelope, FaUser } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        website: '',
        message: ''
    });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const res = await fetch(`${apiUrl}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', website: '', message: '' });
            } else {
                setStatus('error');
                console.error(data);
            }
        } catch (error) {
            setStatus('error');
            console.error(error);
        }
    };

    return(
        <div id='Contact' className="w-full px-5 md:px-15 lg:px-35 py-15 flex items-center justify-center flex-col bg-[#333333]">
            <h1 className="text-[45px] uppercase text-white font-bold font-['Courier_New']">Get in touch!</h1>
            <p className="mb-5 text-[18px] text-white font-['Courier_New']">This is Photoshop's version of Lorem Ipsum. Proin gravida</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl">
                
                <div className="grid grid-rows-[auto-1fr]">
                    <div className="mb-10 pb-1 border-b border-[#4f4e4e]">
                        <h2 className="mb-1.5 text-white font-['Courier_New'] text-[35px] font-bold">
                            Contact info
                        </h2>
                        <p className="mb-2 font-['Courier_New'] text-[15px] leading-5.25] text-white">Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat.</p>
                        <p className="mb-2 font-['Courier_New'] text-[15px] leading-5.25 text-white">Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperd iet nisi. Proin condimentum</p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-2">
                        <div className="flex items-center gap-3 font-['Courier_New'] text-[16px] text-[#919191]">
                            <IoHomeSharp className="shrink-0 text-white" />
                            <span>Lorem ipsum street</span>
                        </div>

                        <div className="flex items-center gap-3 font-['Courier_New'] text-[16px] text-[#919191]">
                            <FaEnvelope className="shrink-0 text-white" />
                            <span>info@domain.com</span>
                        </div>
                        
                        <div className="flex items-center gap-3 font-['Courier_New'] text-[16px] text-[#919191]">
                            <FaPhoneAlt className="shrink-0 text-white" />
                            <span>+399 (500) 321 9548</span>
                        </div>
                    </div>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 md:gap-5 mt-5" onSubmit={handleSubmit}>
                   <div>
                        <div className="mb-2.5 flex">
                            <div className="flex h-18 w-14.25 shrink-0 items-center justify-center border border-r-0 bg-white border-[#eaeaea] text-[#848484]">
                            <FaUser />
                            </div>

                            <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
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
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
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
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            placeholder="Website"
                            className="block h-18 w-full rounded-none bg-white border border-[#eaeaea] p-4.5 font-['Courier_New'] text-[14px] text-[#848484] outline-none placeholder:text-[#848484]"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Message"
                        className="mb-2.5 h-38.5 block w-full rounded-none bg-white border border-[#eaeaea] p-4.5 font-['Courier_New'] text-[14px] text-[#848484] outline-none placeholder:text-[#848484]"
                        ></textarea>

                        <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="block h-18 cursor-pointer w-full border-none bg-[#1ab5b3] p-[4.75] text-center font-['Courier_New'] text-[14px] uppercase text-white disabled:opacity-50"
                        >
                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                        </button>
                        {status === 'success' && <p className="text-green-500 mt-2 font-['Courier_New']">Message sent successfully!</p>}
                        {status === 'error' && <p className="text-red-500 mt-2 font-['Courier_New']">Failed to send message.</p>}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;