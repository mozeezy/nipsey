import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanAPIKey =
  "ad3f902c08ba1bf8144e10672821a09d2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanAPIKey,
      onCommand: ({ command, body }) => {
        if (command === 'newQuote') {
          console.log("The quote is", JSON.parse(body));
        }
      },
    });
  }, []);
  return (
    <div>
      <h1> Nipsey's Quote of the Day</h1>
    </div>
  );
};

export default App;
