import express from "express";

const app = express();
const port= process.env.PORT ?? 8080

app.get("/", (req, res) => {
  return res.send("i am  a failure");

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    })