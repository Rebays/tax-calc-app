import Image from "next/image";
import logo from "@/assets/tax-calc-logo.svg"
import Container from "@/ui/Container";

function Header() {
    return ( 
        <header className=" bg-purple-600">
            <Container>
                <div className="ps-8 pt-6 pb-6">
                    <Image
                        src={logo} 
                        alt="logo" 
                    /> 
                </div>        
            </Container>   
        </header>
     );
}

export default Header;