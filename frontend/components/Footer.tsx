import Container from "@/ui/Container";

function Footer() {
    return ( 
        <footer className=" bg-purple-600">        
            <Container>
                <div className="py-8 px-2 space-y-2 text-center text-sm text-white bg-purple-600">
                    <p>built with &#10084; by Rebays</p>
                    <p>copyright 2024. All rights reserved</p>
                </div>
            </Container>
        </footer>

     );
}

export default Footer;