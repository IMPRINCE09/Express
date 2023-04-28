import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 2, max: 90 },
  fees: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 5000.5,
  },
  hobbies: { type: Array },
  isactive: { type: Boolean },
  comments: [
    { value: { type: String }, publish: { type: Date, default: Date.now } },
  ],

  join: { type: Date, default: Date.now },
});

const studentModel = mongoose.model("student", studentSchema);

// const createDoc = async () => {
//   try {
//     const studentDoc = new studentModel({
//       name: "prince kumar patel",
//       age: 30,
//       fees: 6000.5,
//       hobbies: ["dancing", "cricket"],
//       isactive: true,
//       comments: [{ value: "Mongo db is good server" }],
//     });

//     const result = await studentDoc.save();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

const multiDoc = async () => {
  try {
    const rishabhDoc = new studentModel({
      name: "risabh",
      age: 30,
      fees: 6000.5,
      hobbies: ["dancing", "cricket", "walking"],
      isactive: true,
      comments: [{ value: "Mongo db is good server" }],
    });

    const ankitDoc = new studentModel({
      name: "ankit patel",
      age: 57,
      fees: 8000.5,
      hobbies: ["dancing", "cricket"],
      isactive: true,
      comments: [{ value: "Mongo db is best" }],
    });
    const princeDoc = new studentModel({
      name: "prince kumar patel",
      age: 60,
      fees: 6000.5,
      hobbies: ["dancing"],
      isactive: true,
      comments: [{ value: "this  is good server" }],
    });

    // const result = await studentDoc.save();
    const result = await studentModel.insertMany([
      rishabhDoc,
      ankitDoc,
      princeDoc,
    ]);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// export default createDoc;

export { multiDoc };
