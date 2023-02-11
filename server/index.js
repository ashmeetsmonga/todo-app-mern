const express = require("express");
require("express-async-errors");
const errorHandler = require("./middleware/errorHandler");
const notFound = require("./middleware/notFound");
const todoRouter = require("./routes/todoRoutes");
require("dotenv").config();
require("./db/connect");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/v1", todoRouter);

//middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
	console.log("Server started on port:", port);
});
