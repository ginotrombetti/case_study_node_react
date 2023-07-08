import { expect } from 'chai';
import * as request from 'supertest';
import { ValidationController } from '../../src/controllers/validation.controller';
import { createServer } from '../../src/server';
import { Done } from "mocha";

const app = createServer();

describe('ValidationController', () => {

    describe('GET /validate/:number', () => {
        it('should return a valid response when a valid credit card number is provided', (done) => {
            const validCreditCardNumber = '4111111111111111';

            request(app)
                .get(`/validate/${validCreditCardNumber}`)
                .expect(200)
                .end((err, res) => {
                    expect(res.body.isValid).to.be.true;
                    done(err);
                });
        });

        it('should return an invalid response when an invalid credit card number is provided', (done) => {
            const invalidCreditCardNumber = '1234567890123456';

            request(app)
                .get(`/validate/${invalidCreditCardNumber}`)
                .expect(400)
                .end((err, res) => {
                    expect(res.body.error).to.equal('Invalid credit card number');
                    done(err);
                });
        });

        it('should return a 400 error response when an error occurs during validation', (done) => {
            const validationError = 'Invalid credit card format';

            request(app)
                .get('/validate/abc11')
                .expect(400)
                .end((err, res) => {
                    expect(res.body.error).to.equal(`${validationError}`);
                    done(err);
                });
        });
    });
});