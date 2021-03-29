const request = require("request");
var express = require("express");
var app = express();
var axios = require("axios");

app.set("view engine", "ejs");
var bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

var answer = require("./sunset.json");

app.use(express.static("./"));

app.get("/", function (req, res) {
  res.render("pages/index");
});

app.post("/results", function (req, res) {
  var city = req.body.city;
  var date = req.body.date;
  var url = "https://api.sunrise-sunset.org/json?" + city + "&date=" + date;
  const promise = axios
    .get(url)
    .then((response) => {
      answer = response.data;
      console.log(answer);
    })
    .finally(() => {
      res.render("pages/results", answer);
      console.log(promise);
    });
});

app.listen(PORT);
