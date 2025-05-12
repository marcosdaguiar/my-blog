const {connectDB} = require("./database/connection");
const express = require("express");
const cors = require("cors");

console.log("Node app started..");

//connect to database
connectDB();

// create node server
const app = express();
const port = 3900;

// cors config
app.use(cors());

// parse json body
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// Create routes
const article_route = require("./routes/Articles_Routes");
app.use("/api", article_route);



//create servers and listen to requests
app.listen(port, () => {
  console.log("Server is running on port " + port);
});