import React from 'react';
import { Card, CardActions, CardActionArea, CardContent, Button, Typography } from '@material-ui/core';

import useStyles from './styles';

const QuoteCard = ({ item, index }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <div className={classes.details}>
          <Typography  variant="body2" color="textPrimary" component="h2"><i>{item.q}</i></Typography>
        </div>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p"> - {item.a}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary"></Button>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

export default QuoteCard