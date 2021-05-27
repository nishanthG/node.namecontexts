import config from "./config";
import express from "express";
import apirouter from "./api";
import sassMiddleware from "node-sass-middleware";
import path from "path";

// instanse of express-js
const server = express();

// setting up sass middleware:
// converts sass files into css files.
server.use(
    sassMiddleware({
      src: path.join(__dirname, "sass"),
      dest: path.join(__dirname, "public"),
    })
  );
  
server.set("view engine", "ejs");

import serverRender from './serverRender';
// server handling GET requests
// renders index.ejs with prop 'content'
server.get("/", (req, res) => {
  serverRender()
    .then((content) => {
      res.render('index', {
          content
      })
    })
    .catch(console.error);
});

//API router - handles data.
server.use("/api", apirouter);
server.use(express.static("public"));

//configuring server to run on 8080
//through importing config object
server.listen(config.port, config.host, () => {
  console.info("listening on :", config.port);
});