import BlogCard from "./blogCard.jsx";
import blogData from "../data/blog.js";


function Blog() {
    return(
        <div id='Blog' className="w-full md:p-15 lg:p-30 flex items-center justify-center flex-col">
            <h1 className="text-[45px] uppercase font-bold font-['Courier_New']">Latest Posts</h1>
            <p className="mb-10 text-[18px] text-gray-600 font-['Courier_New']">This is Photoshop's version of Lorem Ipsum. Proin gravida</p>

            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-4 gap-7 lg:px-10"> 
                {blogData.map((blog) => (
                    <BlogCard image={blog.image} date={blog.date} commentNo={blog.commentNo} title={blog.title} description={blog.description}  />
                ))}
            </div>
        </div>
    );
}

export default Blog;