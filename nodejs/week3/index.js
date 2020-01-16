const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);

const PORT = process.env.PORT || 3030;

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "user2",
  password: "12345678",
  database: "hyf_db"
});

connection.connect(null, function(err) {
  if (err) {
    console.error("Failed to connect", err);
  } else {
    console.log("Connected to hyf_db");
  }
});

// let concerts = [
//   {
//     title: "Rocking 2000s",
//     band: "Audioslave",
//     venue: "JYSK Arena",
//     createdDate: new Date(),
//     performanceDate: new Date(),
//     price: "free"
//   },
//   {
//     title: "Rocking 2000s",
//     band: "Rage Against the Machine",
//     venue: "JYSK Arena",
//     createdDate: new Date(),
//     performanceDate: new Date(),
//     price: "free"
//   },
// {
//   title: "Rocking 2000s",
//   band: "Stone Temple Pilots",
//   venue: "JYSK Arena",
//   createdDate: new Date(),
//   performanceDate: new Date(),
//   price: "free"
// }
// ];

// for (const concert of concerts) {
//   console.log(concert);
//   insertConcerts(concert);
// }
// function insertConcerts(concert) {
//   connection.query("INSERT INTO concerts SET ?", concert, function(
//     err,
//     results,
//     query
//   ) {
//     if (err) throw err;
//     if (!err) {
//       console.log(results);
//     }
//   });
// }

app.get("/", (request, response) => {
  connection.query("select * from concerts", function(err, results, query) {
    if (err) throw err;
    if (!err) {
      console.log(results);
      response.send(results);
    }
  });
});

let newConcert = {
  title: "Rocking 1900s",
  band: "Stoned Pilots",
  venue: "Under the bridge",
  createdDate: new Date(),
  performanceDate: new Date(),
  price: "free"
};

app.post("/", (request, response) => {
  connection.query("insert into concerts, set ?", newConcert, function(
    err,
    results,
    query
  ) {
    if (err) throw err;
    if (!err) {
      console.log(results);
      response.send(results);
    }
  });
});

app.listen(PORT, () => console.log(`Server is running at PORT', ${PORT}`));
