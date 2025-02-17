const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const orderRoutes = require("./routes/orderRoute");
const userRoutes = require("./routes/userRoute");

const port = process.env.PORT || 3000;


const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../public")));

app.use("/api/order", orderRoutes);
app.use("/api/user", userRoutes);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
