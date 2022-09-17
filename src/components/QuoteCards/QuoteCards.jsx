import React from 'react';
import Card from '../Card/Card'

const QuoteCards = (props) => {
  const quote = props.quote;
  console.log(quote);
  return (
    <div>
      {quote.map((item, index) => (
        <Card />
      ))}
    </div>
  )
}

export default QuoteCards