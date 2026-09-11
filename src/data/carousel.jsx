import carousel1 from '../assets/carousel1.jpg'

const carouselData = [
    {
        image: carousel1,
        title1: <span className="uppercase text-6xl font-serif font-light">Welcome to <span className="text-sky-500 font-bold">One</span><span className="font-bold">Pager</span></span>,
        title2: <>we design and develop awesome websites and smart applications, impactful identities using the latest</>,
        button: {text: "Learn More", link: "#slide1"}
    },
    {
        image: carousel1,
        title1: <span className="uppercase text-6xl font-serif font-light">We are a great <span className="font-bold">Company</span></span>,
        title2: <>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</>,
        button: {text: "Learn More", link: "#slide2"}
    },
    {
        image: carousel1,
        title1: <span className="uppercase text-6xl font-serif font-light"><span className="text-sky-500 font-bold">One</span><span className="font-bold">Pager</span> is very suitable</span>,
        title2: <>Duis aute irure dolor in reprehenderit in voluptate velit esse, consectetur adipisicing elit</>,
        button: null
    },
]

export default carouselData;