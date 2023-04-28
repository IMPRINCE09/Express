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

// const getAllDoc = async () => {
//   const result = await studentModel.find();
//   console.log(result);

//   result.forEach((item) =>
//     console.log(item.name, item.age, item.hobbies[0], item.hobbies[1])
//   );
// };

const getAllspecifiedDoc = async () => {
  //  const result = await studentModel.find().select("name age");
  // const result = await studentModel.find().select(["name", "fees"]);
  //const result = await studentModel.find().select("-name -age");
  const result = await studentModel.find().select({ name: 0, age: 0 });
  console.log(result);
};
export { getAllspecifiedDoc };
