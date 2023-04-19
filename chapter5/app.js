import express from "express";
const app = express();
const port = process.env.PORT || "3000";

app.get("/", (req, res) => {
  res.send("this is my file");
});

// app.get("/about", (req, res) => {
//   res.send("this is my about page");
// });

// app.all("*", (req, res) => {
//   res.send("page not found");
// });
// app.all('/sabkuch',(req,res)=>{
//     res.send("All method")
// })

//srting pattern
// app.get("/ab?cd", (req, res) => {
//   res.send("This route path will match acd and abcd");
// });

//regural expression path
// app.get(/a/, (req, res) => {
//   res.send("this is a");
// });

//call back   and multiple callback
// app.get("/cdexample1", (req, res, next) => {
//   console.log("first callback");
//   next();
// });

// app.get("/cdexample2", (req, res) => {
//   console.log("second callback");
//   res.send("this is callback two");
// });
// app.get("/cdexample3", (req, res) => {
//   res.send("this is callback three");
// });

//an array of calback
// const cb1 = (req, res, next) => {
//   console.log("first callback");
//   next();
// };
// const cb2 = (req, res, next) => {
//   console.log("second callback");
//   next();
// };
// const cb3 = (req, res) => {
//   console.log("three callback");
//   res.send("this is callback three array example");
// };

// app.get("/cbexample3", [cb1, cb2, cb3]);

// combination of independent callback and array of function
// const cb1 = (req, res, next) => {
//   console.log("first callback");
//   next();
// };
// const cb2 = (req, res, next) => {
//   console.log("second callback");
//   next();
// };
// app.get(
//   "/cbexample4",
//   [cb1, cb2],
//   (req, res, next) => {
//     console.log("third callback");
//     next();
//   },
//   (req, res) => {
//     console.log("fourth callback ");
//     res.send("this is last callback");
//   }
// );

//chained route callback
// app
//   .route("/student")
//   .get((req, res) => {
//     res.send("all student ");
//   })
//   .post((req, res) => {
//     res.send("all student files");
//   })
//   .put((req, res) => {
//     res.send(" student files");
//   });

app
  .route("/student")
  .all((req, res, next) => {
    console.log(" runs first all student ");
    next();
  })
  .get((req, res) => {
    console.log("  student ");
    res.send("all student files");
  })
  .put((req, res) => {
    console.log("  all ");
    res.send(" student files");
  });

app.listen(port, () => {
  console.log(`server is listenong at http://localhost:${port}`);
});
