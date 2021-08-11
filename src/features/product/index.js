import React, { useEffect, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Grid from '@material-ui/core/Grid';

import Items from './Items';
import { Link, Typography } from '@material-ui/core';
import { getAllProducts } from './productActions';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        height: 0,
        backgroundColor: 'transparent'
    },
    paper: {
        height: 140,
        width: 100,
    },
    grid: {
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        margin: 0
    },
    text: {
        fontWeight: 'bold',
        marginLeft: 10
    },
    mt: {
        marginTop: ' 9px'
    },
    slider: {
        transition: theme.transitions.create(['all'], {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.standard,
        }),
    },

    sliderstep: ({ activeStep }) => {
        return ({
            transform: activeStep === 0 ? 'none' : `translate3d(-${88 * activeStep}%, 0px, 0px)`
        })
    },
    button: {
        bottom: '-150px',
        zIndex: 1,
        color: theme.palette.common.white,
        backgroundColor: '#494949',
        '&:hover': {
            backgroundColor: '#494949 !important'
        }
    },
    buttons: {
        margin: '0 13px',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
    },
    dots: {
        position: 'absolute',
        right: 0
    },
    op: {
        opacity: 0
    }
}));

export default function DotsMobileStepper() {
    const [items, setItems] = useState([]);
    const [activeStep, setActiveStep] = useState(0);
    const { dataProducts } = useSelector(({ product }) => ({ dataProducts: product.products }));
    const dispatch = useDispatch();
    const theme = useTheme();
    const steps = Math.round(items.length / 5)
    const classes = useStyles({ activeStep });

    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])

    useEffect(() => {
        if (!dataProducts || dataProducts.length === 0) return
        setItems(dataProducts)
    }, [dataProducts])

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Grid container spacing={2}>
            <div className={classes.buttons}>
                <Button
                    className={clsx(classes.button, classes.slider, { [classes.op]: activeStep === 0 })}
                    onClick={handleBack}
                    color="primary"
                >
                    {theme.direction === 'rtl' ? <ArrowForwardIosIcon /> : <ArrowBackIosIcon />}
                </Button>
                <Button
                    className={clsx(classes.button, classes.slider, { [classes.op]: (activeStep + 1) === steps })}
                    onClick={handleNext}
                    color="primary"
                >
                    {theme.direction === 'rtl' ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
                </Button>
            </div>
            <Typography className={classes.text} variant="h5" component="h2">Nuevo en SuperFuds</Typography>
            <Typography className={clsx(classes.text, classes.mt)} variant="body2" color="primary" component="p">
                <Link underline="none" href="#"  >Ver más</Link>
                <MobileStepper
                    variant="dots"
                    steps={steps}
                    classes={{ dots: classes.dots }}
                    position="static"
                    activeStep={activeStep}
                    className={classes.root}
                />
            </Typography>
            <Grid item xs={12} className={clsx(classes.slider, classes.sliderstep)}>
                <Grid className={classes.grid} container justifyContent="center" spacing={3}>
                    {items.map((value) => (
                        <Grid key={value.id} item>
                            <Items item={value} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}
