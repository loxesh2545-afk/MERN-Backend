const mongoose = require("mongoose")
require("dotenv").config();


mongoose.connect(process.env.MONGO_URL)
.then(()=> {console.log("mongodb running successfully");

}
)
.catch((err) => {
      console.log("Mongodb not connected",process.env)
})