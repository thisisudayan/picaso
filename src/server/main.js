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
  const { id, attachments, question, body, imgqty } = req.body.prompt;
  //generating false image qty from here -----------
  let links = []
  for (let i = 0; i < imgqty; i++) {
    links.push("https://picsum.photos/200/300")
  }
  //generating false image qty to here -----------
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

    const snapshot2 = await ConversationModel.findOneAndUpdate({
      _id: snapshot._id
    },
      {
        $push: {
          messages: {
            question: false,
            body: body,
            //replaced links with handcoded links
            attachments: links
            // [
            //   "https://picsum.photos/200/300",
            //   "https://picsum.photos/200/300",
            //   "https://picsum.photos/200/300",
            //   "https://picsum.photos/200/300",
            //   // "https://picsum.photos/200/300",
            //   // "https://picsum.photos/200/300",
            //   // "https://picsum.photos/200/300",

            // ]
          }
        }
      }, { new: true })

    res.json({ error: false, isNew: true, data: snapshot2 })
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
                //replaced links with handcoded links
                attachments: links
                // [
                //   "https://picsum.photos/200/300",
                //   "https://picsum.photos/200/300",
                //   "https://picsum.photos/200/300",
                //   "https://picsum.photos/200/300",
                //   // "https://picsum.photos/200/300",
                //   // "https://picsum.photos/200/300",
                //   // "https://picsum.photos/200/300",

                // ]
              }
            ]
          },
        },
      }, { new: true });
    res.json({ error: false, isNew: false, data: snapshot })
  }
})
// get all the conversation from db
app.get("/v1/conversations",async(req,res)=>{
  try {
    const conversations = await ConversationModel.find()
    res.status(200).send(conversations)
  } catch (error) {
    res.status(500).send(error)
  }
})


ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
