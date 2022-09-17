import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import QuoteCards from "./components/QuoteCards/QuoteCards";

const alanAPIKey =
  "ad3f902c08ba1bf8144e10672821a09d2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newQuote, setNewQuote] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanAPIKey,
      onCommand: ({ command, body }) => {
        if (command === "newQuote") {
          const alanQuote = JSON.parse(body);
          setNewQuote(alanQuote);
        }
      },
    });
  }, []);
  return (
    <div>
      <h1> Nipsey's Quote of the Day</h1>
      <QuoteCards quote={newQuote} />
    </div>
  );
};

export default App;
