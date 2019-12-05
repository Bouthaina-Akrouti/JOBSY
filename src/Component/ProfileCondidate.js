import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function SwipeableTemporaryDrawer() {
    const classes = useStyles();

    return (
        <div className="    ">
            <Typography variant="h1" >My account</Typography>
            <Button> My CV</Button>
            <Button>My condidatures</Button>
            <Button>My profile</Button>

        </div>
    );
}