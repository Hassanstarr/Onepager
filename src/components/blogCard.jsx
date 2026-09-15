import { LuClock9 } from "react-icons/lu";
import { FaComments } from "react-icons/fa";

function BlogCard({ image, date, commentNo, title, description }) {
    return(
        <div className="w-full text-center">
            <div className="relative">
                <img
                src={image}
                alt="Blog post"
                className="h-full w-full object-cover"
                />

                <span
                className="absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-1/2 items-center gap-2 whitespace-nowrap bg-[#54babb] p-4.5 text-white"
                >
                <LuClock9 />
                <span>{date}</span>
                <FaComments />
                <span>{commentNo}</span>
                </span>
            </div>

            <a
                href="#"
                className="mt-11.25 mb-3 inline-block border-b border-[#cccccc] pb-3.75 text-[#454545] no-underline"
            >
                {title}
            </a>

            <p
                className="max-h-15.75 overflow-hidden font-['Courier_New'] text-[15px] leading-5.5 text-[#919191] text-center"
            >
                {description}
            </p>
        </div>
    );
}

export default BlogCard;