function Hero() {
    return ( 
        <div className="bg-hero-gradient min-h-[400px] flex flex-col items-center align-middle justify-center gap-10">
            <h3 className="text-white text-text-heading inline-block text-center ps-2 pe-2 ">
                Income Tax Calculator
            </h3>
            <button className=" capitalize font-bold pt-4 pb-4 ps-6 pe-6 bg-white text-purple-900 rounded-2xl">
                calculate now
            </button>
        </div>
     );
}

export default Hero;