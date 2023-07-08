import { ValidationService } from "../services/validation.service";
import { Request, Response } from 'express';
import {ValidityResponse} from "../interfaces/validityResponse";

export class ValidationController {
    private validationService: ValidationService;

    constructor() {
        this.validationService = new ValidationService();
    }
    public validate(req: Request, res: Response) {
        try {
            const valid: ValidityResponse = this.validationService.validate(req.params.number);
            if (valid.isValid) {
                res.status(200).json(valid);
            } else {
                res.status(400).json({error: valid.message});
            }
        } catch (error) {
            res.status(400).json({ error: `Failed to validate CC number: ${error}` });
        }
    }
}