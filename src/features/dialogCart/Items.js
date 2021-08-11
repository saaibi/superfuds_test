import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import { deleteCart } from '../product/productActions';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginBottom: theme.spacing(3),
        justifyContent: ' space-around',
       
    },
    details: {
        display: 'flex',
        width: 300,
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    text: {
        fontWeight: 'bold',
        whiteSpace: 'nowrap'
    },
}));

export default function MediaControlCard({ item }) {
    const classes = useStyles();
    const [counter, setCounter] = useState(1);
    const dispatch = useDispatch();

    const price = new Intl.NumberFormat("de-DE").format(item.price_real) * counter;

    return (
        <Card className={classes.root} elevation={0} >
            <CardMedia
                className={classes.cover}
                image={item.image}
                title={item.title}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5"> {item.title}</Typography>
                    <Typography variant="subtitle1" color="textSecondary">x 1 unids - {item.net_content} </Typography>
                    <Typography variant="body2" color="primary" component="p">Superfüds</Typography>
                </CardContent>

            </div>
            <div className={classes.controls}>
                <IconButton color={counter > 1 ? 'primary' : 'default'} onClick={() => counter === 1 ? null : setCounter(state => state -= 1)} >
                    <RemoveCircleOutlineIcon fontSize="large" />
                </IconButton>
                {counter}
                <IconButton color="primary" onClick={() => setCounter(state => state += 1)}>
                    <AddCircleOutlineIcon fontSize="large" />
                </IconButton>
            </div>
            <div className={classes.controls}>
                <Typography className={classes.text} variant="h6" color="primary" component="p"> $</Typography>
                <Typography className={classes.text} variant="h6" component="p">{price.toFixed ? price.toFixed(3) : price}</Typography>
            </div>
            <div className={classes.controls}>
                <IconButton onClick={() => dispatch(deleteCart(item.id))}>
                    <DeleteOutlineIcon fontSize="large" />
                </IconButton>
            </div>
        </Card>
    );
}
