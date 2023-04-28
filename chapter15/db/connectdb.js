import mongoose from "mongoose";

// const connectdb = (DATABASE_URL) => {
//   return mongoose
//     .connect("mongodb://localhost:27017/schooldb")
//     .then((DATABASE_URL) => {
//       console.log("connected successfully ..");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

const connectdb = async (DATABASE_URL) => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("connected succesfully ..");
  } catch (err) {
    console.log(err);
  }
};

export default connectdb;
