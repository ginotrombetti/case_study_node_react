import {ValidityResponse} from "../interfaces/validityResponse";

export class ValidationService {


    public validate(ccNumber: string): ValidityResponse {
        // Check if the credit card number is a valid numeric value
        if (/\D/.test(ccNumber)) {
            return {isValid: false, message: 'Invalid credit card format'};
        }

        if (ccNumber.length < 13 || ccNumber.length > 19) {
            return { isValid: false, message: 'Invalid credit card number length' };
        }

        const creditCardNumber = ccNumber.replace(/\D/g, ''); // Remove non-digit characters

        let sum: number = 0;
        let double: boolean = false;

        for (let i = creditCardNumber.length - 1; i >= 0; i--) {
            let digit: number = parseInt(creditCardNumber.charAt(i), 10);

            if (double) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }

            sum += digit;
            double = !double;
        }
        const isValid: boolean = sum % 10 === 0;
        const message: string = isValid ? 'Credit card number is valid' : 'Invalid credit card number';
        return {isValid, message};
    }
}