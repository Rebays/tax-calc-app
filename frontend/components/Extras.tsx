"use client"
import Accordion from "@/ui/Accordion";

const data = [
  {
    "title":"Disclaimer & Assumptions",
    "content":"We, the authors of this app, would like to formally absolve ourselves of any and all responsibility for the following: The sanity of anyone who reads this disclaimer. Any sudden urges to dance uncontrollably. Spontaneous bouts of laughter or uncontrollable giggling. The development of an unhealthy obsession with punctuation. Any alien abductions occurring during or after reading this disclaimer. If, after reading this, you experience any of the aforementioned symptoms, please consult a professional help-seeking professional. Or, you know, just blame it on someone else. We're not going to judge.",

  },
  {
   "title":"More information",
    "content":"We cannot guarantee that the information contained herein is accurate, complete, or up-to-date. In fact, there's a good chance it's completely made up. Any reliance on this information is at your own risk. If you use this information to make life-altering decisions, such as choosing a career path, investing your life savings, or selecting a pet, we cannot be held responsible for the consequences. We also cannot be held liable for any boredom, confusion, or existential crises that may arise from reading this disclaimer or the information it pertains to. If you experience any of these symptoms, please consult a professional help-seeker professional. Or, you know, just blame it on us. We're used to it."
  }
    
]
function Extras() {
  return (
    <>
      <div id="extras-wrapper" className="px-8 py-14" data-accordion="collapse">
          {
            data.map((item)=>(
              <Accordion title={item.title} content={item.content}/>
            ))
          } 
      </div>
    </>
  );
}
export default Extras;
