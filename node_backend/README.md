#### Hello Team, I appreciate your time and consideration for the opportunity ! This is my backend application for the case study
#### Simply start the server by running `npm start` it is defaulted to port `3100` please do not change

#### You can also run tests the tests I created with the `npm test` script


## Routes

## Validate Credit Card Number

**Endpoint:** `/validate/:number`

**Method:** `GET`

**Description:**
Validates a credit card number using the `ValidationService`.

**Request Parameters:**
- `number` (string): The credit card number to validate.

**Success Response:**
- **Status Code:** 200
- **Content:** JSON object with the following properties:
    - `isValid` (boolean): Indicates if the credit card number is valid.
    - `message` (string): A message describing the validity of the credit card number.

**Error Response:**
- **Status Code:** 400
- **Content:** JSON object with the following properties:
    - `error` (string): An error message describing the reason for the validation failure.
    