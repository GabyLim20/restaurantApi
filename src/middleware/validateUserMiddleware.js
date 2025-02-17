const { ZodError } = require('zod');

const validateUserRequest = (schema) => {
    return (req, res, next) => {
        try {
            schema.parse(req.body);  
            next();
        } catch (error) {
            if (error instanceof ZodError) {
                res.status(400).json({
                    message: "Error de validación",
                    errors: error.errors,
                });
            } else {
                next(error);  
            }
        }
    };
};

module.exports = { validateUserRequest };
