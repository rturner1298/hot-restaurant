// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data  ok
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.listen(PORT, function(req, res) {
//   res.json(path.join(__dirname, "home.html"));
// });
// // Reservation system (DATA)
// // =============================================================
var reservations = [
  {
    customerName: "",
    phoneNumber: "",
    customerEmail: "",
    customerID: ""
  }

];

var waitList = [
    {
    customerName: "",
    phoneNumber: "",
    customerEmail: "",
    customerID: ""    
    }
  
  ];


// // Routes
// // =============================================================

// // Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reservations", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
// // Displays all characters
// app.get("/api/characters", function(req, res) {
//   return res.json(characters);
// });

// // Displays a single character, or returns false
// app.get("/api/characters/:character", function(req, res) {
//   var chosen = req.params.character;

//   console.log(chosen);

//   for (var i = 0; i < characters.length; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }

//   return res.json(false);
// });

// Create New reservertaion - takes in JSON input
app.post("/api/reservations", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newRes = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newRes.routeName = newRes.name.replace(/\s+/g, "").toLowerCase();

  console.log(newRes)
 if(reservations.length <= 5){
    reservations.push(newRes);
    res = true;
 }else{
     waitList.push(newRes);
     res = false;
 }

  

  res.json(newRes);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  