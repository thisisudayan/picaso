import express from "express";
import ViteExpress from "vite-express";
import path from "path";
import bodyParser from "body-parser";


const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});


app.post("/v1/prompt", async(req, res) => {
  console.log(req.body);
  res.json({
    id:'dfgfhg',
    title:"Create a beautiful potrait",
    messages: [
      {
        id:'sfadagag',
        attachments:[
          "https://picsum.photos/200/300",
          "https://picsum.photos/200/300",
          "https://picsum.photos/200/300",
          "https://picsum.photos/200/300",
          "https://picsum.photos/200/300",
        ],
        question: false,
        body: 'Hello World'
      }
    ]
  })
})
ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
