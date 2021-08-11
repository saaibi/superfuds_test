import React from 'react';
import { makeStyles, Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, Typography, IconButton } from '@material-ui/core';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

import Items2 from './Items'

const useStyles = makeStyles((theme) => ({
    text: {
        fontWeight: 'bold',
    },
    items: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        '& > p:nth-of-type(2)': {
            marginLeft: theme.spacing(57),
        },
        '& > p:nth-of-type(3)': {
            marginRight: theme.spacing(16),
        }
    },
    backButton: {
        display: 'flex',
        alignItems: 'center'
    },
}));

const Transition = React.forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ open, setOpen, shopCart }) {
    const classes = useStyles();
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Dialog
            open={open}
            keepMounted
            fullWidth
            maxWidth="md"
            scroll="body"
            TransitionComponent={Transition}
            onClose={handleClose}
        >
            <DialogTitle >
                <div className={classes.backButton}>
                    <IconButton onClick={handleClose}>
                        <KeyboardArrowLeftIcon color="primary" />
                    </IconButton>
                    <Typography variant="body1" component="p">Volver a la tienda</Typography>
                </div>
                <h2 className={classes.text}>Carrito de compras</h2>
            </DialogTitle>
            <DialogContent>
                <div className={classes.items}>
                    <Typography className={classes.text} variant="body2" color="primary" component="p">{shopCart.length}</Typography>
                    <Typography className={classes.text} variant="body2" component="p">items</Typography>
                </div>
                <div className={classes.root}>
                    <Typography className={classes.text} variant="body2" component="p">Item</Typography>
                    <Typography className={classes.text} variant="body2" component="p">Cantidad</Typography>
                    <Typography className={classes.text} variant="body2" component="p">Precio</Typography>
                </div>
                {shopCart.map((item) => (
                    <Items2 key={item.id} item={item} />
                ))}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" variant="contained">
                    Continuar compra
                </Button>
            </DialogActions>
        </Dialog>
    );
}
