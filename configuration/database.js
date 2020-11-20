const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect("mongodb+srv://Naman:Naman123@cluster0.07z08.mongodb.net/my_database?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("database is successfully connected...");
  } catch (err) {
    
    console.log(err.message);
  }
};

module.exports = connectDatabase;
