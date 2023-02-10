const express = require("express");
const todoRouter = require("./routes/todoRoutes");
require("dotenv").config();
require("./db/connect");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/v1", todoRouter);

app.listen(port, () => {
	console.log("Server started on port:", port);
});
