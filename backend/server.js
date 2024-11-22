import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5500;

// app.get("/", (req, resp) => {
//   resp.json({ message: "Hello world!" });
// });

const corsOption = {
  origin: ["https://localhost5173"],
};

app.use(cors(corsOption));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
