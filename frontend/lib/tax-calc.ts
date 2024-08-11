type Bracket = {
    position: number,
    rate: number,
    range: number | null,
    other?: {
        name?: string,
        description?: string,
    }
}

type PayeTaxInfo = {
    finYear: string,
    country: string,
    currency: string,
    threshold: number,
    brackets: Bracket[]
}

enum Period {
    Monthly,
    Forthnightly,
    Annually,
}


const brackets: Bracket[] = [
    {
        position: 1,
        rate: 0.11,
        range: 15000,
    },
    {
        position: 2,
        rate: 0.23,
        range: 15000,
    },
    {
        position: 3,
        rate: 0.35,
        range: 30000,
    },
    {
        position: 4,
        rate: 0.40,
        range: null, // replace with max value for number
    },
];

const THRESHOLD = 30080.00;

type Result = {
    taxPayable: number | null,
    netIncome: number,
    taxableIncome: number,
    marginalTaxRate: number | null,
    summary: {
        description: string, 
        taxInBracket: number | null, 
        bracketRate: number | null,
        bracketRange: number | null,
        bracketFloor: number,
        bracketCeiling: number | null,
    }[],
}

/**
 * Takes in grossIncome, Period, Threshold, and a list of Brackets as arguments.
 * Returns a result Object.
 * @param grossIncome 
 * @param period 
 * @param threshold 
 * @param brackets 
 * @returns 
 */
function calculatePayeTax(
    grossIncome: number,
    period: Period,
    threshold: number, 
    brackets: Bracket[], 
): {} {

    // DEFAULT RESULT
    const result: Result = { 
        taxPayable: null, 
        netIncome: grossIncome, 
        taxableIncome: 0, 
        marginalTaxRate: null, 
        summary: [
            {
                description: `No tax on income between $1 to $${threshold}`, 
                taxInBracket: null, 
                bracketRate: null,
                bracketRange: threshold,
                bracketFloor: 0,
                bracketCeiling: threshold,
            },
        ] 
    }
    
    // return default result if gross income is less or equals THRESHOLD
    if (grossIncome <= threshold)
        return result;

    // set the amount to be taxed on the brackets
    result.taxableIncome = grossIncome - threshold;

    // todo: reorder brackets following position

    // assign taxable amount to be changed across the brackets
    let taxableIncome = result.taxableIncome;

    let totalTax = 0;
    let lowerTaxLimit = threshold;

    // lay the taxableIncome value across the brackets.
    let carryOverToNextBracket = true;

    brackets.every(bracket =>{
        console.log(bracket.rate)
    })

    console.log(brackets.length)
    for(let i=0; i < brackets.length; ++i) {
        
        let bracket = brackets[i];

        // exit if remainder taxable income does not cross over to next bracket
        if (carryOverToNextBracket == false || bracket == null){
            break;
        }

        // stores tax value in current bracket
        let taxInBracket = 0;

        
        // i.e. handles all brackets
        if (bracket.range != null){

            // handles if taxable income remainder fits perfectly inside bracket
            if (taxableIncome <= bracket.range){
                taxInBracket = taxableIncome * bracket.rate;
                carryOverToNextBracket = false;
            }
            // handles if taxable income remainder exceeds bracket
            else {
                taxInBracket = bracket.range * bracket.rate;
                taxableIncome =  taxableIncome - bracket.range;
            }

            let description = `${bracket.rate}c for every dollar between $${lowerTaxLimit + 1} - $${lowerTaxLimit + bracket.range}`;
            result.summary.push({
                description: description, 
                taxInBracket: taxInBracket, 
                bracketRate: bracket.rate,
                bracketRange: bracket.range,
                bracketFloor: lowerTaxLimit + 1,
                bracketCeiling: lowerTaxLimit + bracket.range,
            });
            lowerTaxLimit += bracket.range;
        }
        // handles the last bracket
        else {
            taxInBracket = taxableIncome * bracket.rate;

            let description = `${bracket.rate}c for every dollar over $${lowerTaxLimit + 1}`;
            result.summary.push({
                description: description, 
                taxInBracket: taxInBracket, 
                bracketRate: bracket.rate,
                bracketRange: bracket.range,
                bracketFloor: lowerTaxLimit + 1,
                bracketCeiling: null,
            });
            
        }

        result.marginalTaxRate = bracket.rate;
        totalTax += taxInBracket;
    };

    result.taxPayable = totalTax;
    result.netIncome = grossIncome - result.taxPayable;

    return result;
}


export default calculatePayeTax;
export type { Bracket, PayeTaxInfo, Period };
export { brackets, THRESHOLD };
