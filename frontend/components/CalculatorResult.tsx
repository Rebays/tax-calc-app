import { QuestionMarkCircleIcon } from "@heroicons/react/16/solid";

function CalculatorResult() {
    return (

        <>
            <div id="calculator-result-wrapper" className="shadow-md rounded-2xl mb-12">
                <div id="main-result" className="bg-purple-500 text-white rounded-t-2xl px-8 pt-6">

                    <p className="text-text-normal">Your estimated annual tax</p>

                    <h3 className="text-text-heading py-6 text-wrap">
                        $6000.00
                    </h3>

                </div>

                <div id="addtional-results" className="border-spacing-2">
                    {/*Row start */}
                    <div id="result-item" className="flex text-neutral-900 px-8 py-6 font-bold bg-white border-b-2 border-gray-200">
                        <div className="flex-auto w-72">
                            <span>You pay this tax</span> 
                            <span className="w-6 absolute pl-2 pt-1 text-text-normal roup-open:opacity-100 text-green-600"><QuestionMarkCircleIcon/></span>
                        </div>
                        <div className="flex-none w-10">
                            $0
                        </div>

                    </div>
                    {/* Row end */}
                    {/*Row start */}
                    <div id="result-item" className="flex text-neutral-900 px-8 py-6 font-bold bg-white border-b-2 border-gray-200">
                        <div className="flex-auto w-72">
                            <span>You get to keep</span> 
                            <span className="w-6 absolute pl-2 pt-1 text-text-normal roup-open:opacity-100 text-green-600"><QuestionMarkCircleIcon/></span>
                        </div>
                        <div className="flex-none w-10">
                            $0
                        </div>

                    </div>
                    {/* Row end */}
                    {/*Row start */}
                    <div id="result-item" className="flex text-neutral-900 px-8 py-6 font-bold rounded-b-2xl bg-white">
                        <div className="flex-auto w-72">
                            <span>Marginal Tax Rate</span> 
                            <span className="w-6 absolute pl-2 pt-1 text-text-normal roup-open:opacity-100 text-green-600"><QuestionMarkCircleIcon/></span>
                        </div>
                        <div className="flex-none w-10">
                            0%
                        </div>

                    </div>
                    {/* Row end */}

                </div>
            </div>
        </>
    );
}

export default CalculatorResult;