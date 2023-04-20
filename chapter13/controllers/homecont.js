const homecontroller = (req, res) => {
  res.render("index", { title: "Home" });
};

export { homecontroller };
