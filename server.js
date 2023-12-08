
import config from "./config/config.js";
import app from "./server/express.js";
import mongoose from "mongoose";

// Set mongoose to use global Promise library
mongoose.Promise = global.Promise;

// Connect to MongoDB database
mongoose
  .connect(config.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to the database!")) // Log success message
  .catch((err) => console.error(`Unable to connect to database`, err)); // Log error message

// Define a route for the root path
app.get("/", (req, res) => {
  res.json({ message: "Welcome to User application." }); // Send a JSON response
});



// Start the server
app.listen(config.port, 'localhost', (err) => {
  if (err) {
    console.log(err); // Log any errors
  }
  console.info("Server started on port %s.", config.port); // Log success message
});

