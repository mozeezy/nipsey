import React from 'react';
import QuoteCard from '../QuoteCard/QuoteCard';
import { Grid, Grow, Typography } from '@material-ui/core';

import useStyles from './styles'

const QuoteCards = ({ quote }) => {
  const classes = useStyles();

  if(!quote.length) {
    return (
      <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
          <div className={classes.card} style={{backgroundColor: "#62a7c8"}}>
            <Typography variant="h6">Click on the Microphone Icon Below and Try Saying: <br /> <i>Give me the Word of the Day</i> <br /> or <br />  <i>Give me the Quote of the Day</i></Typography>
          </div>
        </Grid>
      </Grid>
      </Grow>
    )
  }

  console.log(quote);
  return (
    <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {quote.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
              <QuoteCard item={item} index={index} />
            </Grid>
          ))}
        </Grid>

    </Grow>
  )
}

export default QuoteCards