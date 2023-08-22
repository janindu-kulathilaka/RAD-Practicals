const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use("/images", express.static(path.join(__dirname, "images")));

app.get("/", (req, res) => {
  res.send(
    `<!DOCTYPE html>
     <html>
       <head>
         <title>Question 01 - Image Gallery </title>
       </head>
       <body>
         <h1>Image Gallery</h1>
         <img src="./images/image1.jpg" alt="Image 1">
         <img src="./images/image2.jpg" alt="Image 2">
         <img src="./images/image3.jpg" alt="Image 3">
       </body>
     </html>
`
  );
});
