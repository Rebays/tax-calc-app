import CalculatorInput from "./CalculatorInput";
import CalculatorResult from "./CalculatorResult";
import CalculatorSummary from "./CalculatorSummary";

function Calculator() {
    return ( 
        <>
        <CalculatorInput/>
        <div id="calculator-result-box">
            <CalculatorResult/>
            <CalculatorSummary/>
        
       </div>

        </>
     );
}

export default Calculator;