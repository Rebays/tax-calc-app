import { QuestionMarkCircleIcon } from "@heroicons/react/16/solid";
import CountUp from "react-countup";


function AdditionalResult(props: any){
    return(
        <div className="flex justify-between text-neutral-900 px-8 py-6 font-bold bg-white border-b-2 border-gray-200">
            <div>
                <span>{props.text}</span> 
                <span className="w-6 absolute pl-2 pt-1 text-text-normal roup-open:opacity-100 text-green-600"><QuestionMarkCircleIcon/></span>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

function CalculatorResult(props:any) {
    
    return (

            <div className="shadow-md rounded-2xl mb-12 animate__animated animate__fadeIn">
                
                <div className="bg-purple-500 text-white rounded-t-2xl px-8 pt-6">
                    <p className="text-text-normal">
                        Your estimated annual tax
                    </p>
                    <h3 className="text-text-heading py-6 text-wrap">
                        $<CountUp end={props.input.taxPayable} decimals={2} />
                    </h3>
                </div>

                <div className="border-spacing-2">

                    <AdditionalResult 
                        text={'you pay this tax'}
                        helper={'your total tax'}
                    >
                        $<CountUp 
                            end={props.input.taxPayable} 
                            decimals={2}
                        />
                    </AdditionalResult>

                    <AdditionalResult 
                        text={'you get to keep'}
                        helper={'your net income'}
                    >
                        $<CountUp 
                            end={props.input.netIncome} 
                            decimals={2}
                        />
                    </AdditionalResult>

                    <AdditionalResult 
                        text={'Marginal Tax Rate'}
                        helper={'marginal tax rate'}
                    >
                        <CountUp 
                            end={props.input.marginalTaxRate * 100}
                        />%
                    </AdditionalResult>

                </div>

            </div>
        
    );
}


export default CalculatorResult;