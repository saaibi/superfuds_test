import React, { useState } from 'react';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Chip, Typography, Collapse, CardMedia, Card } from '@material-ui/core';

import Tooltips from './Tooltip';
import { addCart } from './productActions';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 200,
        width: 170,
    },
    media: {
        paddingTop: '56.25%', // 16:9
    },
    cardcontent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardprice: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    button: {
        fontWeight: 'bold',
        textTransform: 'none',
        width: 'inherit',
        borderRadius: `0 0 ${theme.shape.borderRadius}px`
    },
    text: {
        fontWeight: 'bold',
        whiteSpace: 'nowrap'
    },
    textprice: {
        marginTop: '9px'
    },
    svg: {
        width: '0.5em',
        height: '0.5em'
    },
    pd: {
        padding: 5
    },
    bg: {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText
    }
}));

export default function RecipeReviewCard({ item }) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState('');
    const dispatch = useDispatch();

    return (
        <Card
            className={classes.root}
            onMouseEnter={(e) => {
                e.preventDefault()
                setExpanded(item.id);
            }}
            onMouseLeave={(e) => {
                e.preventDefault()
                setExpanded('');
            }}
        >
            <CardMedia
                className={classes.media}
                image={item.image}
            >
                {item.sellos && item.sellos.map((sello, index) => (
                    <Tooltips  key={sello.name} sello={sello} index={index} size={item.sellos.length} />
                ))}
            </CardMedia>
            <div className={classes.pd} >
                <div className={classes.cardcontent}>
                    <Typography variant="body2" color="primary" component="p">Superfüds</Typography>
                    <Chip className={clsx(classes.text, classes.bg)} label={item.net_content} size="small" />
                </div>
                <Typography className={classes.text} variant="body2" component="p">{item.title}</Typography>
                <div className={classes.cardprice}>
                    <Typography className={classes.text} variant="h6" color="primary" component="p"> $</Typography>
                    <Typography className={classes.text} variant="h6" component="p">{new Intl.NumberFormat("de-DE").format(item.price_real)}</Typography>
                    <Typography className={classes.textprice} variant="caption" color="textSecondary" component="p">x 1 unids</Typography>
                </div>
            </div>
            <Collapse in={expanded === item.id} timeout="auto" unmountOnExit>
                <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    onClick={() => dispatch(addCart(item))}
                >
                    Agregar al carrito
                </Button>
            </Collapse>
        </Card>
    );
}
