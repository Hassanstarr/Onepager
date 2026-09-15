import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa";
import { IoLogoRss } from "react-icons/io";
import { TiSocialGooglePlus } from "react-icons/ti";

function Footer() {
  return (
    <footer className="bg-[#2bb6b6] py-10">
      <div className="mx-auto w-full lg:max-w-7xl px-3.75">
        <div className="flex items-center justify-between text-center flex-col lg:flex-row">
          
          <div>
            <p className="my-5.25 font-['Courier_New'] text-[16px] text-white">
              © 2014 OnePager, All Rights Reserved
            </p>
          </div>

          <ul className="m-0 flex list-none items-center justify-center gap-3 p-0 flex-wrap">
            <li>
              <a
                href="#"
                className="flex h-14 w-14 md:h-15 md:w-15 items-center justify-center rounded-full border border-white text-white transition hover:bg-white hover:text-[#2bb6b6]"
              >
                <FaFacebookF size={30} />
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex h-14 w-14 md:h-15 md:w-15 items-center justify-center rounded-full border border-white text-white transition hover:bg-white hover:text-[#2bb6b6]"
              >
                <FaTwitter size={30} />
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex h-14 w-14 md:h-15 md:w-15 items-center justify-center rounded-full border border-white text-white transition hover:bg-white hover:text-[#2bb6b6]"
              >
                <IoLogoRss size={30} />
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex h-14 w-14 md:h-15 md:w-15 items-center justify-center rounded-full border border-white text-white transition hover:bg-white hover:text-[#2bb6b6]"
              >
                <TiSocialGooglePlus size={30} />
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex h-14 w-14 md:h-15 md:w-15 items-center justify-center rounded-full border border-white text-white transition hover:bg-white hover:text-[#2bb6b6]"
              >
                <FaLinkedinIn size={30} />
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex h-14 w-14 md:h-15 md:w-15 items-center justify-center rounded-full border border-white text-white transition hover:bg-white hover:text-[#2bb6b6]"
              >
                <FaPinterest size={30} />
              </a>
            </li>
          </ul>

        </div>
      </div>
    </footer>
  );
}

export default Footer;