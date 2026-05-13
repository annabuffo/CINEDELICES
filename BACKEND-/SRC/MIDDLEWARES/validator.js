import { validatorR } from 'express-validator';
import { ValidationError } from 'sequelize';

export const validate = (req, res, next) => {
    const error = validateResult(req);
    if(!error.isEmpty()) {
        return res.status(404).json({ errors: error.messages});
    }
    next();
};