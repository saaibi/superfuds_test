import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        padding: 0
    },
    text: {
        fontWeight: 'bold',
        color: theme.palette.background.paper
    },
    inline: {
        float: 'right',
        display: 'inline',
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    espand:{
        fontSize: '0.95rem',
        marginBottom: '-2px'
    },
    avatar:{
        marginLeft: '8px'
    }
}));

export default function AlignItemsList() {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body1"
                                className={classes.text}
                            >
                                Saaibi Alimentos
                            </Typography>
                        </React.Fragment>
                    }
                    className={classes.text}
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textSecondary"
                            >
                                Mi perfil <ExpandMoreIcon className={classes.espand} fontSize="small" color="inherit" />
                            </Typography>
                        </React.Fragment>
                    }
                />
                <ListItemAvatar className={classes.avatar}>
                    <Avatar alt="Saaibi Florez" src="https://material-ui.com/static/images/avatar/2.jpg" >SF</Avatar>
                </ListItemAvatar>
            </ListItem>
        </List>
    );
}
