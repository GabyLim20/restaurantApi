const { z } = require("zod");
const orderSchema = z.object({
    orderId: z.number().int().positive().optional(),
    items: z.array(
        z.object({
            amount: z.number().int().positive(),
            item: z.string().min(1, { message: "item string" }),
        })
    ),
});

module.exports = { orderSchema };
