const mongoose = require("mongoose");

const DB = "mongodb+srv://debabratodas729:s7R9K6K8E0WGuJtA@cluster0.wwewrnw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  
 
mongoose.connect(DB, {})
    .then(() => console.log("Connection successful"))
    .catch((error) => {
        //console.error("MongoDB connection error:", error);
        console.error("Cause:", error.cause);
    });
