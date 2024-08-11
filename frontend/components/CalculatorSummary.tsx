function CalculatorSummary(props: any) {
    const { result } = props;
    
    let summaries = <></>;

    let grossIncome = 0;
    if (result) {
        grossIncome = result.taxPayable + result.netIncome;
    }
    
    if(result.summary) {
        
        let summary = result.summary;
        let key = 0;
        summaries = summary.map((summaryItem: any) => {
            key++;
            return (
                <li key={key} className="bg-white flex justify-between p-4">
                    <span className="text-neutral-900">{summaryItem.description}</span>
                    <span className="font-bold text-neutral-900" >${summaryItem.taxInBracket | 0}</span>
                </li>
            )
        });
       
    }

    return (  
        result && (
            <div className="pt-4 pb-4 flex flex-col gap-4 ">
            
            <div className=" flex flex-col gap-2 px-4">
                <h6 className="text-neutral-800 font-bold">Summary</h6>
                <p className="text-neutral-600">This means for an annual income of ${grossIncome} you pay:</p>
            </div>
            
            <ul className="rounded-2xl flex flex-col overflow-hidden gap-[1px] shadow-md">
                {summaries}
            </ul>

        </div>)
        
       
    );
}

export default CalculatorSummary;