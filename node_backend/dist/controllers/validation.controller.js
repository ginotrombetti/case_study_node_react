"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationController = void 0;
const validation_service_1 = require("../services/validation.service");
class ValidationController {
    constructor() {
        this.validationService = new validation_service_1.ValidationService();
    }
    validate(req, res) {
        try {
            const valid = this.validationService.validate(req.params.number);
            if (valid.isValid) {
                res.status(200).json(valid);
            }
            else {
                res.status(400).json({ error: valid.message });
            }
        }
        catch (error) {
            res.status(400).json({ error: `Failed to validate CC number: ${error}` });
        }
    }
}
exports.ValidationController = ValidationController;
//# sourceMappingURL=validation.controller.js.map