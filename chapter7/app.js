import express from "express";
const app = express();
const port = process.env.PORT || "3000";

// app.get("/product/:category/:id", (req, res) => {
//   console.log(req.params);
//   //   res.send(
//   //     `product category: ${req.params.category}  and  product: ${req.params.id}`
//   //   );

//   const { category, id } = req.params;
//   res.send(
//     `product category: ${category}  and  product: ${id}`
//   );
// });

// app.get("/product/order/:year/and/:month", (req, res) => {
//   console.log(req.params);

//   const { year, month } = req.params;
//   res.send(`product year: ${year} and month :${month}`);
// });

// app.get("/train/:from/:to", (req, res) => {
//   console.log(req.params);

//   const { from, to } = req.params;
//   res.send(`travelling from:${from} and to :${to}`);
// });

// app.get("/location/:state/:city", (req, res) => {
//   console.log(req.params);
//   const { state, city } = req.params;
//   res.send(` location STATE : ${state} and  CITY : ${city}`);
// });

// app.get("/student/delete/:id([0-9]{2})", (req, res) => {
//   console.log(req.params);
//   res.send(`student deleted ${req.params.id}`);
// });

// app.get("/:type(post|article)/:id", (req, res) => {
//   console.log(req.params);
//   res.send("POST ON ARTICLE");
// });

//using app .param
// app.param("id", (req, res, next, id) => {
//   console.log(`ID :${id}`);
//   next();
// });
// app.get("user/:id", (req, res, next) => {
//   console.log("this is the user path of the system");
//   next();
// });
// app.get("/user/:id", (req, res) => {
//   console.log("this is user id");
//   res.send("This is my file");
// });

//using query string
app.get("/product", (req, res) => {
  console.log(req.query);
  res.send(`this is my response ${req.query.category}`);
});

app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port}`);
});
