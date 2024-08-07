import { PlusIcon } from "@heroicons/react/16/solid";
function Extras() {
  return (
    <>
      <div id="extras-wrapper" className="px-8 py-14">
        {/*Accordian item 1*/}
        <div id="extras-accordion-item-1" className="relative mb-3">
          <h6 className="mb-0">
            <button
              className="relative flex items-center rounded-2xl  w-full p-6 font-semibold text-left transition-all ease-in border-b  cursor-pointer text-white bg-purple-500"
              data-collapse-target="collapse-1"
            >
              <span>Disclaimer & Assumptions</span>
              <PlusIcon className="absolute right-2 pt-1 pr text-text-normal w-6 roup-open:opacity-100" />
            </button>
          </h6>
          <div
            data-collapse="collapse-1"
            className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
          >
            <div className="p-4 text-text-normal leading-normal text-blue-gray-500/80">
              Disclaimer & Asumption details go here
            </div>
          </div>
        </div>
        {/*Accordion item 2**/}
        <div id="extras-accordion-item-2" className="relative mb-3">
          <h6 className="mb-0">
            <button
              className="relative flex items-center rounded-2xl  w-full p-6 font-semibold text-left transition-all ease-in border-b  cursor-pointer text-white bg-purple-500"
              data-collapse-target="collapse-2"
            >
              <span>More Information</span>
              <PlusIcon className="absolute right-2 pt-1 pr text-text-normal w-6 roup-open:opacity-100" />
            </button>
          </h6>
          <div
            data-collapse="collapse-2"
            className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
          >
            <div className="p-4 text-text-normal leading-normal text-blue-gray-500/80">
              More information content goes here
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Extras;
