import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    root: {
    },
});

function Comment() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        </div>
    );
}

export default Comment;
