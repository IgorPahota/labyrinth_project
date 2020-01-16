const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://labUser:llbbnn123@cluster0-epnwi.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true, useUnifiedTopology: true
});

module.exports = mongoose.connection;
