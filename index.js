const request = require("request");
var express = require("express");
var app = express();

app.set("view engine", "ejs");
var bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static("./"));

var answer = require("./sunset.json");
var url =
  "https://api.sunrise-sunset.org/json?lat=60.29414&lng=25.04099&date=today";

app.get("/", function (req, res) {
  res.render("pages/index");
});

request(url, { json: true }, (err, res, body) => {
  if (err) {
    return console.log(err);
  } else answer = body;
});

app.post("/results", function (req, res) {
  var city = req.body.city;
  var date = req.body.date;
  var url = "https://api.sunrise-sunset.org/json?" + city + "&date=" + date;

  request(url, { json: true }, (err, res, body) => {
    if (err) {
      return console.log(err);
    } else answer = body;
  });

  res.render("pages/results", answer);
  console.log(answer);
});

app.listen(PORT);
