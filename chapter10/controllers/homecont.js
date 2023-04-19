import { join } from "path";
const homecontroller = (req, res) => {
  res.sendFile(join(process.cwd(), "view", "index.html"));
};

export { homecontroller };
