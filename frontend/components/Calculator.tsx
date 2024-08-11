"use client"
import calculatePayeTax, { brackets, Period, THRESHOLD } from "@/lib/tax-calc";
import CalculatorInput from "./CalculatorInput";
import CalculatorResult from "./CalculatorResult";
import CalculatorSummary from "./CalculatorSummary";
import Container from "@/ui/Container";
import { useCallback, useState } from "react";


function Calculator() {
   
    const [result, setResult] = useState({});

    function calculate(gross: any){
        
        let res = calculatePayeTax(gross,Period.Annually,THRESHOLD,brackets);
        setResult(res);

        console.log(res);
    }
    

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
                        <CalculatorInput onChange={calculate}/>
                    </div>
                    
                    <div 
                        className="lg:col-span-4"
                        id="calculator-result-box"
                    >
                        <CalculatorResult/>
                        <CalculatorSummary result={result}/>
                    </div>

                </div>

            </Container>
        </section>
     );
}

export default Calculator;

