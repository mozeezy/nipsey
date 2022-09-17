import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import logo from "./nipsey-logo.png";

import QuoteCards from "./components/QuoteCards/QuoteCards";
import useStyles from "./styles";

const alanAPIKey =
  "ad3f902c08ba1bf8144e10672821a09d2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newQuote, setNewQuote] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: alanAPIKey,
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
