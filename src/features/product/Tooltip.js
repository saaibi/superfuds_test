import React from 'react';
import { capitalize, Fab, makeStyles, Tooltip, Typography } from "@material-ui/core";
import { withStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    fab: ({ index, size }) => {
        return ({
            position: 'relative',
            top: `-${90 - (25 * index)}px`,
            left: `${70 - (20 * index) + (size > 0 ? 10 * (size - 1) : 0)}px`,
            width: '20px',
            height: '20px',
            minHeight: 'auto',
            boxShadow: 'none',
            backgroundColor: 'transparent'
        })
    },
    svg: {
        width: '0.5em',
        height: '0.5em'
    },
    prod: {
        color: theme.palette.warning.main
    },
    img: {
        width: '100%'
    }
}));

const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: '#115293',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
    },
    arrow: {
        top: 'unset !important',
        color: '#115293',
    }
}))(Tooltip);

export default function Tooltips({ sello, index, size }) {
    const classes = useStyles({ index, size });
    return (
        <HtmlTooltip
            arrow
            placement="right"
            title={
                <React.Fragment>
                    <Typography className={classes.prod}>Producto</Typography>
                    {capitalize(sello.name)}
                </React.Fragment>
            }
        >
            <Fab className={classes.fab} size="small">
                <img className={classes.img} alt="endIcon" src={sello.image} />
            </Fab>
        </HtmlTooltip>
    )
}