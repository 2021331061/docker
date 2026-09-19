import express from "express";

const app = express();
const port= process.env.PORT ?? 8080

app.get("/", (req, res) => {
  return res.send("Hello World, it is from md omi,i have a new plan to exe!");

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    })