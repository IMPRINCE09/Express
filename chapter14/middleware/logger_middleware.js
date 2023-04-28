var mylogger = (req, res, next) => {
  console.log("loged");
  next();
};
export default mylogger;
