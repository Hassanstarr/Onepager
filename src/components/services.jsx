import servicesData from "../data/services.jsx";
import serviceImg from "../assets/services.png"

function Services () {
    return (
        <div id='Services' className="w-full pt-40 flex items-center justify-center flex-col">
            <h1 className="text-[45px] text-center uppercase font-bold font-['Courier_New']">Our Services</h1>
            <p className="text-[18px] text-center text-gray-600 font-['Courier_New']">This is Photoshop's version of Lorem Ipsum. Proin gravida</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 py-20 px-5 md:px-10 lg:px-50">
                {servicesData.map((service) => (
                    <div key={service.title} className="grid grid-cols-[56px_1fr] items-center min-h-20">
                        <a
                            href="#"
                            className="relative ml-3.75 flex h-20 w-14 items-center justify-center text-center text-white bg-[#2bb6b6] transition-colors"
                        >
                            {service.icon}
                        </a>
                        <div className="flex flex-col justify-center pl-5 text-center">
                            <div className="mb-1 font-['Courier_New'] text-[20px] font-normal uppercase text-[#181818]">
                                {service.title}
                            </div>
                            <div className="font-['Courier_New'] text-[15px] font-normal leading-5.5 text-[#a8a8a8]">
                                {service.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div class="flex flex-col px-5">
                <img src={serviceImg} class="w-full mx-auto mt-auto" />
            </div>

        </div>
    );
}

export default Services;