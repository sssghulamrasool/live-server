require("./config/config");
const express = require("express");
const app = express();
const usersRoute = require("./routes/users");

app.use(express.static("public"));
app.use(express.json());

app.use("/api", usersRoute);

app.listen(9090, () => {
  console.log("Server listening on port 9090");
});
