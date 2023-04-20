const homecontroller = (req, res) => {
  const data = {
    name: " Prince  kumar patel",
    age: "30",
    email: "princekumar668348@gmail.com",
    company: "GLA  University",
    marks: [30, 40, 60, 80, 50],
  };
  res.render("index", data);
};

export { homecontroller };
