const mongoose = require("mongoose");

mongoose.
   connect(`mongodb+srv://${process.env.DB_USER_PASS}@social-media.r7ig7.mongodb.net/mern-social`,
      {
         useUnifiedTopology: true,
      }
   )
   .then(() => console.log("Connected to mongoDB"))
   .catch((err) => console.log("Failed to connect to mongoDB", err));