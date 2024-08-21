function Hero() {
    return ( 
        <div className="bg-hero-gradient min-h-[400px] flex flex-col items-center align-middle justify-center gap-10">
            <h3 className="text-white text-text-heading inline-block text-center ps-2 pe-2 animate__animated  animate__fadeInLeft">
                Income Tax Calculator
                <p className="text-text-normal text-wrap text-purple-200">Applies only for Solomon Islands Tax Law</p>
            </h3>
            
            <button className="capitalize font-bold pt-4 pb-4 ps-6 pe-6 border-4 border-cyan-50 text-white rounded-full animate__animated animate__pulse animate__infinite">
                calculate now
            </button>
        </div>
     );
}

export default Hero;