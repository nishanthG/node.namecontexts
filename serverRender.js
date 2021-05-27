import axios from "axios";
import config from "./config";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "./src/components/App";

//Loads data from API call
//returns a Promise with APP component with data
const serverRender = () =>
  axios
    .get(`${config.serverURL}/api/contests`)
    .then((resp) => {
      return ReactDOMServer.renderToString(
        <App initialContests={resp.data.contests} />
      );
    })
    .catch(console.error);

export default serverRender;
