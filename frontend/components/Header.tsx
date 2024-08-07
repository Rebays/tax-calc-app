import Image from "next/image";
import logo from "@/assets/tax-calc-logo.svg"

function Header() {
    return ( 
        <header className="ps-8 pt-6 pb-6 bg-purple-600">
            <Image
                src={logo} 
                alt="logo" 
            />            
        </header>
     );
}

export default Header;