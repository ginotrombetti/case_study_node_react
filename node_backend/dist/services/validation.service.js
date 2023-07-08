"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationService = void 0;
class ValidationService {
    validate(ccNumber) {
        if (/\D/.test(ccNumber)) {
            return { isValid: false, message: 'Invalid credit card format' };
        }
        if (ccNumber.length < 13 || ccNumber.length > 19) {
            return { isValid: false, message: 'Invalid credit card number length' };
        }
        const creditCardNumber = ccNumber.replace(/\D/g, '');
        let sum = 0;
        let double = false;
        for (let i = creditCardNumber.length - 1; i >= 0; i--) {
            let digit = parseInt(creditCardNumber.charAt(i), 10);
            if (double) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }
            sum += digit;
            double = !double;
        }
        const isValid = sum % 10 === 0;
        const message = isValid ? 'Credit card number is valid' : 'Invalid credit card number';
        return { isValid, message };
    }
}
exports.ValidationService = ValidationService;
//# sourceMappingURL=validation.service.js.map