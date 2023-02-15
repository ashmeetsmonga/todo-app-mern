const express = require("express");
require("express-async-errors");
const errorHandler = require("./middleware/errorHandler");
const notFound = require("./middleware/notFound");
const todoRouter = require("./routes/todoRoutes");
const authRouter = require("./routes/authRoutes");
require("dotenv").config();
require("./db/connect");
const cors = require("cors");
const authorizationMiddleware = require("./middleware/auth");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/todos", authorizationMiddleware, todoRouter);

//middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
	console.log("Server started on port:", port);
});
