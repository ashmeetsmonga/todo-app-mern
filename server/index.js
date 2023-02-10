const express = require("express");
require("express-async-errors");
const errorHandler = require("./middleware/errorHandler");
const notFound = require("./middleware/notFound");
const todoRouter = require("./routes/todoRoutes");
require("dotenv").config();
require("./db/connect");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/v1", todoRouter);

//middlewares
app.use(errorHandler);
app.use(notFound);

app.listen(port, () => {
	console.log("Server started on port:", port);
});
