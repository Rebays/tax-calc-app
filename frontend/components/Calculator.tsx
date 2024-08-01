import CalculatorInput from "./CalculatorInput";
import CalculatorResult from "./CalculatorResult";
import CalculatorSummary from "./CalculatorSummary";

function Calculator() {
    return ( 
        <div className="bg-green-100 px-8 py-16 space-y-12">
            <CalculatorInput/>
            <div id="calculator-result-box">
                <CalculatorResult/>
                <CalculatorSummary/>
            
            </div>
        </div>
     );
}

export default Calculator;