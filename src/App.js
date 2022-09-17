import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import logo from "./nipsey-logo.png";

import QuoteCards from "./components/QuoteCards/QuoteCards";
import useStyles from "./styles";

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
      <QuoteCards quote={newQuote} />
    </div>
  );
};

export default App;
