const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const asyncify = require("express-asyncify");

//initiate dotenv
require("dotenv").config();

//define a default port
const port = process.env.PORT || 3030;

//initiate express app with asyncify
var app = asyncify(express());

app.use(cors({ origin: true }));

//initiate routes
require("./routes/routes.provider")(app);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../public")));

//Start mongodb with mongoose
const startDB = () => {
  mongoose.connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  const db = mongoose.connection;

  console.log("Connecting to database.");

  db.on("error", (err) => {
    console.error(err);
  });

  db.once("open", () => {
    console.log("Connected to database successfully.");

    //Start app when we connected to database
    startApp();
  });
};

//Start the express app after connecting to database
const startApp = () => {
  app.listen(port, () => {
    console.log("App Started on port:", port);
  });
};

//First call
startDB();
