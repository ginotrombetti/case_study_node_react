import { expect } from 'chai';
import { ValidationService } from '../../src/services/validation.service';
import { ValidityResponse } from '../../src/interfaces/validityResponse';

describe('ValidationService', () => {
    const validationService = new ValidationService();

    describe('validate', () => {
        it('should return a valid response when a valid credit card number is provided', () => {
            const validCreditCardNumber = '4111111111111111';

            const result: ValidityResponse = validationService.validate(validCreditCardNumber);

            expect(result.isValid).to.be.true;
            expect(result.message).to.equal('Credit card number is valid');
        });

        it('should return an invalid response when an invalid credit card number is provided', () => {
            const invalidCreditCardNumber = '1234567890123456';

            const result: ValidityResponse = validationService.validate(invalidCreditCardNumber);

            expect(result.isValid).to.be.false;
            expect(result.message).to.equal('Invalid credit card number');
        });

        it('should return an invalid response when an invalid credit card format is provided', () => {
            const invalidFormatCreditCardNumber = 'abc123';

            const result: ValidityResponse = validationService.validate(invalidFormatCreditCardNumber);

            expect(result.isValid).to.be.false;
            expect(result.message).to.equal('Invalid credit card format');
        });
    });
});