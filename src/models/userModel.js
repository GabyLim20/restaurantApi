const { z } = require('zod');

const userSchema = z.object({
    name: z.string().min(1, 'Name es requerido'),
    password: z.string().min(1, 'Password es requerido')
});
module.exports = { userSchema }