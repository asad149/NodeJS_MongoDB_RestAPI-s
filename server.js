const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const mongoURI=require('./config/keys').mongoURI;
// app config
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(bodyParser.json());
app.use(cors());

// DB config

mongoose.connect(mongoURI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("DB Connected");
});

// api routes

app.get("/", (req, res) => res.status(200).send("Hello Asad"));
const alientRouter= require('./routes/alien');
app.use('/aliens',alientRouter);


// listen
app.listen(port, () => console.log(`App is running on port ${port}`));