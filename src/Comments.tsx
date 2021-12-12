import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: 100,
    '& *': {
      padding: 0,
      margin: 0,
      boxSizing: 'border-box',
      position: 'relative',
    }
  },
  container: {
    minWidth: 940,
    display: "flex",
    flexDirection: 'column',
  }
});

function Comments() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div>comment 1</div>
        <div>comment 2</div>
      </div>
    </div>
  );
}

export default Comments;
