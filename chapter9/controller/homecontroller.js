import { join } from "path";

const homecontroller = (req, res) => {
  console.log(join(process.cwd(), "view", "index.html"));
  res.sendFile(join(process.cwd(), "view", "index.html"));
};

export { homecontroller };
