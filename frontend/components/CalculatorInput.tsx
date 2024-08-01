function CalculatorInput() {
    return (
        <div className="space-y-12">
            <div className="flex items-center w-full">
                <div className="flex w-full border border-neutral-100 rounded-3xl overflow-hidden p-0.5">
                    <div className="flex-1 text-center">
                        <input type="radio" id="monthly" name="period" hidden/>
                        <label htmlFor="monthly" className="block w-full px-6 py-3 bg-white text-purple-500 text-text-normal font-bold cursor-pointer rounded-3xl">monthly</label>
                    </div>
                    <div className="flex-1 text-center">
                        <input type="radio" id="annually" name="period" defaultChecked hidden/>
                        <label htmlFor="annually" className="block w-full px-6 py-3 bg-white text-purple-500 text-text-normal font-bold cursor-pointer rounded-3xl">annually</label>
                    </div>
                    <div className="flex-1 text-center">
                        <input type="radio" id="fortnightly" name="period" hidden/>
                        <label htmlFor="fortnightly" className="block w-full px-6 py-3 bg-white text-purple-500 text-text-normal font-bold cursor-pointer rounded-3xl">fortnightly</label>
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <p className="text-text-normal text-neutral-900">Your Income:</p>
                    <p className="text-text-normal text-gray-100">(This is your gross income)</p>
                </div>
                <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 font-bold">$</span>
                    <input type="number" className="w-full py-6 pl-12 pr-8 rounded-2xl shadow-lg text-text-normal" />
                </div>
            </div>
        </div>
    );
}

export default CalculatorInput;