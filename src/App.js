import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import logo from "./nipsey-logo.png";

import QuoteCards from "./components/QuoteCards/QuoteCards";
import useStyles from "./styles";

import { AiFillGithub } from "react-icons/ai";

const App = () => {
  const [newQuote, setNewQuote] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: process.env.REACT_APP_ALAN_API_KEY,
      onCommand: ({ command, body }) => {
        if (command === "newQuote") {
          const alanQuote = JSON.parse(body);
          setNewQuote(alanQuote);
        }
        if (command === "goingBack") {
          setNewQuote([]);
        }
      },
    });
  }, []);
  return (
    <div>
      <div className={classes.logoContainer}>
        <img src={logo} alt="nipsey-logo" className={classes.nipseyLogo} />
      </div>
      <a
        href="https://github.com/mozeezy/nipsey"
        rel="noreferrer"
        target="_blank"
        style={{ display: "flex", justifyContent: "center", fontSize: "2rem" }}
      >
        <AiFillGithub />
      </a>
      <QuoteCards quote={newQuote} />
    </div>
  );
};

export default App;
