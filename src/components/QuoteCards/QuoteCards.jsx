import React from 'react';
import QuoteCard from '../QuoteCard/QuoteCard';
import { Grid, Grow, Typography } from '@material-ui/core';

import useStyles from './styles'

const QuoteCards = ({quote}) => {
  const classes = useStyles();

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