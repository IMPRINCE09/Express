import { join } from "path";

const aboutcontroller = (req, res) => {
  res.sendFile(join(process.cwd(), "view", "about.html"));
};

export { aboutcontroller };
