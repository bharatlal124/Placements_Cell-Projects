import mongoose from "mongoose";

//Add the DB_URL in env file to connect the database
const url = process.env.DB_URL;

//Connect To DB function
export const connectToDb = async () => {
  try {
    await mongoose.connect(url, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true
    });
    console.log("Mongodb connected");
  } catch (err) {
    console.log("Error while connecting to db");
    console.error(err);
  }
};
