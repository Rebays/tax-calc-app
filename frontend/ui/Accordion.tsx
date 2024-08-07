import { useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid";

{/**
    NOTE TO DEV: 
    Render this as client side component
    props: 
        title   -   item title/summary, 
        content -   item description
    usage:
        <Accordian title="Info" content="whatever"/>
    */}
function Accordion({title="Title", content ="Awesome content"}) {
    const [isExpanded, setIsExpanded] = useState(false)
    return ( <>
        <details className="group py-2" onClick={()=>setIsExpanded(pIsExpanded=>!pIsExpanded)}>
            <summary className="relative flex items-center rounded-2xl  justify-between w-full p-6 font-semibold text-left transition-all ease-in border-b  cursor-pointer text-white bg-purple-500">
                {title}

                {isExpanded? <MinusIcon className="absolute right-2 text-text-normal w-6 roup-open:opacity-100"/> : <PlusIcon className="absolute right-2 text-text-normal w-6 roup-open:opacity-100" /> }        
            </summary>
            {isExpanded && <div className="p-4 text-neutral-600">{content}</div>}
        </details>
    </> );
}

export default Accordion;