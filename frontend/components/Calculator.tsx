import CalculatorInput from "./CalculatorInput";
import CalculatorResult from "./CalculatorResult";
import CalculatorSummary from "./CalculatorSummary";
import Container from "@/ui/Container";


function Calculator() {
    return ( 
        <section> 
            <Container>

                <div 
                    className="grid grid-cols-1 gap-12 px-8 py-16 rounded-2xl bg-neutral-20    
                                lg:grid-cols-7 lg:px-16"
                >

                    <div 
                        className="lg:col-span-3"
                    >
                        <CalculatorInput/>
                    </div>
                    
                    <div 
                        className="lg:col-span-4"
                        id="calculator-result-box"
                    >
                        <CalculatorResult/>
                        <CalculatorSummary/>
                    </div>

                </div>

            </Container>
        </section>
     );
}

export default Calculator;

