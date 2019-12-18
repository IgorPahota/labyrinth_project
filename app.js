const express = require("express");
const useMiddleware = require("./middleware");
const indexRouter = require("./routes/index");

const app = express();
useMiddleware(app);

app.use("/", indexRouter);

module.exports = app;
