import mongoose from "mongoose";

const connectdb = async (DATABASE_URL) => {
  try {
    const DB_OPTION = {
      dbName: "collegedb",
    };
    await mongoose.connect(DATABASE_URL, DB_OPTION);
    console.log("connected succesfully ..");
  } catch (err) {
    console.log(err);
  }
};
export default connectdb;
