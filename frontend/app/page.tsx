import Calculator from "@/components/Calculator";
import Extras from "@/components/Extras";
import Hero from "@/components/Hero";
import Information from "@/components/Information";
import Image from "next/image";

export default function Home() {
  return (
    <>
       
       <Hero/>
       <Information/>
       <Calculator/>
       <Extras/>
       
    </>
     
  );
}
