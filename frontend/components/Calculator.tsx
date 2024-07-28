import CalculatorInput from "./CalculatorInput";
import CalculatorResult from "./CalculatorResult";
import CalculatorSummary from "./CalculatorSummary";

function Calculator() {
    return ( 
        <div className="bg-green-100 py-14">
        <CalculatorInput/>
        <div className="px-4" id="calculator-result-box">
            <CalculatorResult/>
            <CalculatorSummary/>
        
       </div>

        </div>
     );
}

export default Calculator;