const express = require("express");
const helmet = require("helmet");

const app = express();

// Apply helmet.hidePoweredBy() middleware
app.use(helmet.hidePoweredBy());

app.get("/", (req, res) => {
  res.send("Hello, world! Security headers applied.");
});

const PORT = 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});













































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
