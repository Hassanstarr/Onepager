import { FaFacebookF, FaTwitter, FaRss, FaGooglePlusG } from "react-icons/fa";

function teamCard({image, name, role}) {
    return(
        <div className="w-[262.5px]">
        
            <img
                src={image}
                alt="Team member"
                className="block h-[225.862px] w-[262.5px] object-cover"
            />

            
            <div className="px-5 py-5.75 bg-[#302e2e]">
                <h3 className="m-0 font-['Courier_New'] text-[20px] font-bold text-white">
                    {name}
                </h3>

                <p className="m-0 mt-2 font-['Courier_New'] text-[15px] text-[#919191]">
                    {role}
                </p>
            </div>

            <div className="m-0 flex items-center justify-center gap-3 bg-[#2bb6b6] px-5 py-5.75">
                <a
                href="#"
                className="text-white transition hover:opacity-70 rounded-full border border-white p-2"
                >
                <FaFacebookF />
                </a>

                <a
                href="#"
                className="text-white transition hover:opacity-70 rounded-full border border-white p-2"
                >
                <FaTwitter />
                </a>

                <a
                href="#"
                className="text-white transition hover:opacity-70 rounded-full border border-white p-2"
                >
                <FaRss />
                </a>

                <a
                href="#"
                className="text-white transition hover:opacity-70 rounded-full border border-white p-2"
                >
                <FaGooglePlusG />
                </a>
            </div>
        </div>
    );
}

export default teamCard;