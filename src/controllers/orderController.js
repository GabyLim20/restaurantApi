const path = require("path");
const fs = require("fs")

const dataPath = path.join(__dirname, "../data/order.json")

const getOrders = (req, res) => {
    try {
        const orders = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: "Error reading orders", error });
    }
};
const addOrders = (req, res) => {
    const { items } = req.body;
    const orders = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
    try {
        const lastOrderId = orders.length > 0 ? orders[orders.length - 1].orderId : 0;
        const newOrderId = lastOrderId + 1;
        const newOrder = {
            orderId: newOrderId,
            items,
        };

        orders.push(newOrder);
        fs.writeFileSync(dataPath, JSON.stringify(orders, null, 2));

        res.status(201).json({ message: "Order added successfully", order: newOrder });
    } catch (error) {
        res.status(500).json({ message: "Error saving order", error });
    }
};
const editOrder = (req, res) => {
    const { id } = req.params
    const updateOrder = req.body
    try {
        let orders = JSON.parse(fs.readFileSync(dataPath, "utf-8"))
        let index = orders.findIndex(order => order.orderId === parseInt(id))
        if (index === -1) {
            return res.status(404).json({ message: "Order not found" });
        }
        orders = orders.map(order => {
            if (order.orderId === parseInt(id)) {
                return { ...order, ...updateOrder };
            }
            return order;
        });

        fs.writeFileSync(dataPath, JSON.stringify(orders, null, 2))
        res.status(203).json({ message: "Order edited successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error saving order" });
    }
}

const deletOrder = (req, res) => {
    const { id } = req.params
    try {
        let orders = JSON.parse(fs.readFileSync(dataPath, "utf-8"))
        let index = orders.findIndex(order => order.orderId === parseInt(id))
        if (index === -1) {
            return res.status(404).json({ message: "Order not found" });
        }
        orders = orders.filter(order => order.orderId !== parseInt(id))
        fs.writeFileSync(dataPath, JSON.stringify(orders, null, 2))

        res.json({ message: "Order deleted successfully" });

    } catch (error) {
        res.status(500).json({ error: "Error saving order" });
    }

}
module.exports = { getOrders, addOrders, editOrder, deletOrder };
