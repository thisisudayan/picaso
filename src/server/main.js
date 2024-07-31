import express from "express";
import ViteExpress from "vite-express";
import path from "path";
import bodyParser from "body-parser";
import { mongoose } from "./db.js";
import { ConversationModel } from "./models.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/hello", (req, res) => {
  res.send("Hello Vite + React!");
});


app.post("/v1/prompt", async (req, res) => {
  const { id, attachments, question, body } = req.body.prompt;
  if (id === null) {
    const newMessage = new ConversationModel({
      author: "null",
      title: body,
      messages: {
        question: true,
        body: body,
        attachments: attachments
      },
    });
    const snapshot = await newMessage.save();
    res.json({ error: false, isNew: true, data: snapshot })
  } else {
    const snapshot = await ConversationModel.findOneAndUpdate({
      _id: id
    },
        {
          $push: {
            messages: {
              $each: [
                {
                  question: true,
                  body: body,
                  attachments: attachments
                },
                {
                  question: false,
                  body: body,
                  attachments: [
                    "https://picsum.photos/200/300",
                  "https://picsum.photos/200/300",
                  "https://picsum.photos/200/300",
                  "https://picsum.photos/200/300",
                  // "https://picsum.photos/200/300",
                  // "https://picsum.photos/200/300",
                  // "https://picsum.photos/200/300",
    
                  ]
                }
              ]
            },
          },
      }, { new: true });
    res.json({ error: false, isNew: false, data: snapshot })
  }
})
ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
