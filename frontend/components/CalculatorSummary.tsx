function CalculatorSummary() {
    return (  
        <div className="pt-4 pb-4 flex flex-col gap-4 ">
            
            <div className=" flex flex-col gap-2 px-4">
                <h6 className="text-neutral-800 font-bold">Summary</h6>
                <p className="text-neutral-600">This means for an annual income of $60000.00 you pay:</p>
            </div>
            
            <ul className="rounded-2xl flex flex-col overflow-hidden gap-[1px] shadow-md">
                <li className="bg-white flex justify-between p-4">
                    <span className="text-neutral-900">text</span>
                    <span className="font-bold text-neutral-900" >$0</span>
                </li>
                <li className="bg-white flex justify-between p-4">
                    <span className="text-neutral-900">text</span>
                    <span className="font-bold text-neutral-900" >$0</span>
                </li>
                <li className="bg-white flex justify-between p-4">
                    <span className="text-neutral-900">text</span>
                    <span className="font-bold text-neutral-900" >$0</span>
                </li>
            </ul>

        </div>
    );
}

export default CalculatorSummary;