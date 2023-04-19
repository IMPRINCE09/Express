import express from "express";
const app = express();
const port = process.env.PORT || "3000";
import student from "./routers/student.js";
import teacher from "./routers/teacher.js";

app.use("/student", student);
app.use("/teacher", teacher);

app.listen(port, () => {
  console.log(`server is listening at http"//localhost:${port}`);
});
