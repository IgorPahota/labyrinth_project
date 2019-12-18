const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/labyrinth", {
    useNewUrlParser: true, useUnifiedTopology: true
});

module.exports = mongoose.connection;
