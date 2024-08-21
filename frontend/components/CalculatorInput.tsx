"use client"
import calculatePayeTax, { brackets, Period, THRESHOLD } from "@/lib/tax-calc";
import { useState } from "react";


function CalculatorInput(props:any) {
 
    const [Period, setPeriod] = useState('annually');

    function onChange(e: any){
        props.onChange(e.target.value) 
    }
    
    return (
        <div className="space-y-12 animate__animated  animate__fadeIn">
            <div className="flex items-center w-full">
                <div className="flex w-full border bg-white border-neutral-50 rounded-3xl overflow-hidden p-0.5">
                    <div className="flex-1 text-center">
                        <input type="radio" id="monthly" name="period" hidden onChange={e=>setPeriod('monthly')}/>
                        <label htmlFor="monthly" className="block w-full px-6 py-3 bg-white text-purple-500 text-text-normal font-bold cursor-pointer rounded-3xl">monthly</label>
                    </div>
                    <div className="flex-1 text-center">
                        <input type="radio" id="annually" name="period" defaultChecked hidden  onChange={e=>setPeriod('annually')}/>
                        <label htmlFor="annually" className="block w-full px-6 py-3 bg-white text-purple-500 text-text-normal font-bold cursor-pointer rounded-3xl">annually</label>
                    </div>
                    <div className="flex-1 text-center">
                        <input type="radio" id="fortnightly" name="period" hidden onChange={e=>setPeriod('fortnightly')}/>
                        <label htmlFor="fortnightly" className="block w-full px-6 py-3 bg-white text-purple-500 text-text-normal font-bold cursor-pointer rounded-3xl">fortnightly</label>
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <p className="text-text-normal text-neutral-900">Your Income:</p>
                    <p className="text-text-normal text-neutral-100">(This is your gross income)</p>
                </div>
                <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 font-bold text-neutral-900">$</span>
                    <input type="number" className="w-full py-6 pl-12 pr-8 rounded-2xl shadow-lg text-text-normal" onChange={onChange}/>
                </div>
            </div>
        </div>
    );
}
export default CalculatorInput;