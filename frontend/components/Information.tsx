import Container from "@/ui/Container";

function Information() {
    return ( 
        <Container>
            <div className="py-14 px-8 space-y-12">
                <div className="space-y-8 animate__animated animate__fadeInUp">
                    <h5 className="text-text-title text-purple-500 font-bold">Stay on top of your tax</h5>
                    <p className="text-neutral-800">If you&apos;re earning an income, you&apos;ll probably need to pay income tax. How much you pay depends on how much you earn.</p>
                </div>
                <div className="space-y-8 animate__animated animate__fadeInUp">            
                    <h6 className="text-text-sub-title text-purple-500 font-bold">Calculate your tax</h6>
                    <p className="text-neutral-800">To see how much tax is deducted you can use the calculator.</p>
                    <p className="text-neutral-800">If you&apos;re an employee, your employer will deduct tax from each pay and send it to IRD.</p>
                </div>
            </div>
        </Container>
     );
}

export default Information;