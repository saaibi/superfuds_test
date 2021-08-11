import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, InputBase, Badge, MenuItem, Menu } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import Profile from './Profile'
import DialogCart from '../dialogCart';

const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-end',
        flexGrow: 2,
        backgroundColor: '#fff',
        borderRadius: theme.shape.borderRadius,
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        width: '100%',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            width: '6ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    icon: {
        '&:hover': {
            backgroundColor: 'transparent'
        }
    }
}));

export default function Header() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const { shopCart } = useSelector(({ product }) => ({ shopCart: product.shopCart }));
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton color="inherit">
                    <Badge badgeContent={shopCart.length} color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
                <p>Carrito</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="profile" color="inherit">
                    <AccountCircle />
                </IconButton>
                <p>Mi perfil</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <svg width="200" height="20" viewBox="0 0 256 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg"><path d="M69.7871 9.05273H77.4467L75.1062 21.0526C75.1062 21.2632 75.1062 21.6842 75.1062 21.8947C75.1062 22.3158 75.319 22.7368 75.5318 23.1579C75.9573 23.7895 76.3828 24 77.2339 24C78.936 24 80.2126 22.5263 80.4254 20.8422L82.553 9.05273H90.2126L86.1701 30.3158H79.1488L79.5743 28.421H79.1488C77.8722 29.8947 75.7445 30.9474 73.1913 30.9474C70.8509 30.9474 69.1488 30.3158 68.0849 29.0526C67.2339 28 66.8083 26.9474 66.8083 25.4737C66.8083 25.0526 66.8084 24.4211 67.0211 23.7895L69.7871 9.05273Z" fill="white"></path><path d="M88.5105 39.3683L94.2552 9.05248H101.702L101.276 10.9472H101.702C102.766 9.68406 104.681 8.4209 107.447 8.4209C112.128 8.4209 115.106 11.5788 115.106 16.4209C115.106 23.9998 109.787 30.5262 103.191 30.5262C100.425 30.5262 98.936 29.4735 98.2977 27.9998H97.8722L95.7445 39.1577H88.5105V39.3683ZM102.766 23.9998C104.042 23.9998 105.106 23.5788 106.17 22.5262C107.021 21.4735 107.447 20.2104 107.447 18.7367C107.447 16.6314 106.17 15.3683 104.255 15.3683C102.979 15.3683 101.915 15.7893 100.851 16.842C99.9999 17.8946 99.5743 19.1577 99.5743 20.6314C99.5743 22.7367 100.851 23.9998 102.766 23.9998Z" fill="white"></path><path d="M139.362 16.8424C139.362 16.0003 139.149 14.9476 138.936 14.316C137.872 10.9476 134.893 8.63184 130.213 8.63184C122.127 8.63184 116.808 14.5266 116.808 21.895C116.808 24.4213 117.659 26.5266 119.362 28.4213C121.064 30.1055 123.191 30.9476 125.957 30.9476C128.936 30.9476 131.702 30.316 133.83 29.0529C135.745 28.0003 137.021 26.316 137.872 24.4213H130.638C129.787 24.8424 128.723 25.2634 127.234 25.2634C126.17 25.2634 125.319 24.8424 124.681 24.2108C124.255 23.5792 123.83 22.9476 123.83 22.1055V21.6845H138.936L139.362 19.7897C139.574 19.1582 139.574 18.316 139.574 17.6845C139.362 17.2634 139.362 17.0529 139.362 16.8424ZM124.681 17.0529C125.319 15.5792 127.021 14.1055 129.362 14.1055C131.702 14.1055 132.766 15.3687 132.766 17.0529H124.681Z" fill="white"></path><path d="M141.276 30.3156L145.319 9.05232H152.34L151.702 11.9997H152.127C153.191 10.3155 155.532 8.8418 158.085 8.8418H160.213L158.936 15.7892H156.17C153.404 15.7892 151.064 17.6839 150.425 21.0523L148.723 30.1051H141.276V30.3156Z" fill="white"></path><path d="M161.915 39.3684L166.383 14.7367H162.979L164.042 9.05248H167.447L167.659 8.21037C168.085 5.89458 169.362 3.99984 171.064 2.52616C172.979 1.05248 175.106 0.420898 177.659 0.420898H181.489L180.425 6.52616H177.872C176.383 6.52616 175.319 7.36826 175.106 8.63142V9.05248H180L178.723 14.9472H173.83L169.362 39.5787H161.915V39.3684Z" fill="white"></path><path d="M183.83 9.05263H191.489L189.149 21.0526C188.723 22.7368 189.574 24 191.277 24C192.979 24 194.255 22.5263 194.468 20.8421L196.596 9.05263H204.255L200.213 30.3158H193.191L193.617 28.4211H193.191C191.915 29.8947 189.787 30.9474 187.234 30.9474C182.766 30.9474 180.213 28 181.064 23.7895L183.83 9.05263ZM188.723 1.26316C189.574 0.421053 190.425 0 191.489 0C193.191 0 194.255 1.05263 194.255 2.52632C194.255 4.84211 192.553 6.52632 190.213 6.52632C188.511 6.52632 187.447 5.47368 187.447 4C187.659 2.94737 188.085 1.89474 188.723 1.26316ZM200 0C201.702 0 202.766 1.05263 202.766 2.52632C202.766 3.57895 202.34 4.42105 201.489 5.26316C200.638 6.10526 199.787 6.31579 198.723 6.31579C197.021 6.31579 195.957 5.26316 195.957 3.78947C196.17 1.68421 197.872 0 200 0Z" fill="white"></path><path d="M217.659 8.63142C220.213 8.63142 222.127 9.89458 222.766 11.1577H223.191L225.106 0.420898H232.766L228.723 21.6842C228.723 21.8947 228.723 22.1052 228.723 22.3157C228.723 23.3684 229.149 23.7894 230.213 23.7894H230.851L229.574 30.3157H226.17C223.617 30.3157 222.127 29.4736 221.915 27.7894V27.5789H221.702C220.213 29.2631 217.659 30.7368 214.255 30.7368C209.149 30.7368 206.17 27.3684 206.17 22.3157C205.957 14.7367 211.489 8.4209 217.659 8.63142ZM217.021 23.9999C218.298 23.9999 219.361 23.5789 220.425 22.5263C221.276 21.4736 221.702 20.2104 221.702 18.7367C221.702 16.6314 220.425 15.3683 218.51 15.3683C217.234 15.3683 216.17 15.7893 215.106 16.8419C214.255 17.8946 213.83 19.1577 213.83 20.6314C213.83 22.7368 215.106 23.9999 217.021 23.9999Z" fill="white"></path><path d="M50.4255 23.5788C50.4255 24.2104 50.6382 24.6314 51.0638 24.842C51.4893 25.263 52.1276 25.263 52.9786 25.263C54.6808 25.263 55.7446 24.6314 55.7446 23.7893C55.7446 21.263 45.3191 23.1577 45.3191 17.263C45.3191 14.7367 46.3829 12.6314 48.2978 10.9472C50.2127 9.263 52.9786 8.4209 55.9574 8.4209C58.7233 8.4209 60.851 9.05248 62.3403 10.3156C63.4042 11.3683 64.0425 12.6314 64.0425 14.3156C64.0425 14.7367 64.0425 15.1577 64.0425 15.3683H57.6595V15.5788C57.6595 15.1577 57.4467 14.5262 57.0212 14.3156C56.5957 13.8946 55.9574 13.8946 55.1063 13.8946C53.4042 13.8946 52.3403 14.5262 52.3403 15.5788C52.3403 17.8946 63.1914 16.4209 63.1914 22.1051C63.1914 24.842 62.1276 26.9472 60.2127 28.6314C58.2978 30.3156 55.5318 31.1577 51.9148 31.1577C48.7233 31.1577 46.3829 30.5262 45.1063 29.263C44.0425 28.2104 43.6169 26.9472 43.6169 25.4735C43.6169 25.0525 43.6169 24.4209 43.8297 23.9998H50.4255V23.5788Z" fill="white"></path><path d="M241.702 23.5788C241.702 24.2104 241.915 24.6314 242.34 24.842C242.766 25.263 243.404 25.263 244.255 25.263C245.957 25.263 247.021 24.6314 247.021 23.7893C247.021 21.263 236.596 23.1577 236.596 17.263C236.596 14.7367 237.66 12.6314 239.574 10.9472C241.489 9.263 244.255 8.4209 247.234 8.4209C250 8.4209 252.128 9.05248 253.617 10.3156C254.681 11.3683 255.319 12.6314 255.319 14.3156C255.319 14.7367 255.319 15.1577 255.319 15.3683H248.936V15.5788C248.936 15.1577 248.723 14.5262 248.298 14.3156C247.872 13.8946 247.234 13.8946 246.383 13.8946C244.681 13.8946 243.617 14.5262 243.617 15.5788C243.617 17.8946 254.468 16.4209 254.468 22.1051C254.468 24.842 253.404 26.9472 251.489 28.6314C249.574 30.3156 246.808 31.1577 243.191 31.1577C240 31.1577 237.66 30.5262 236.383 29.263C235.319 28.2104 234.894 26.9472 234.894 25.4735C234.894 25.0525 234.894 24.4209 235.106 23.9998H241.702V23.5788Z" fill="white"></path><path d="M15.1064 30.1053C15.3191 29.6842 15.7447 28.6316 15.7447 28.6316C16.383 26.7368 17.6596 21.2632 14.2553 17.2633C9.99998 12.2106 2.12764 9.68431 0.851048 9.26326C0.638282 9.26326 0.212751 9.05273 0.212751 9.05273C0.212751 9.05273 0.212751 9.47379 0.212751 9.68431C0.212751 9.68431 -0.425547 16.8422 2.76594 23.1579C5.74466 29.0526 12.3404 29.8947 13.4042 30.1053C13.1915 30.3158 14.4681 30.3158 15.1064 30.1053Z" fill="white"></path><path d="M24.2553 30.3162C25.3192 30.1057 31.9149 29.2636 34.8936 23.3688C38.0851 17.0531 37.4468 9.89525 37.4468 9.89525C37.4468 9.68472 37.4468 9.26367 37.4468 9.26367L36.8085 9.4742C35.5319 9.89525 27.6596 12.4216 23.4043 17.4742C20 21.4741 21.2766 26.9478 21.9149 28.8425C21.9149 28.8425 22.3404 29.8951 22.5532 30.3162C22.9787 30.3162 24.2553 30.3162 24.2553 30.3162Z" fill="white"></path></svg>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon color="action" />
                        </div>
                        <InputBase
                            placeholder="Buscar marcas y productos"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton className={classes.icon} onClick={() => setOpen(true)}>
                            <Badge badgeContent={shopCart.length} color="secondary">
                                <ShoppingCartIcon htmlColor="#fff" />
                            </Badge>
                        </IconButton>
                        <Profile />
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon htmlColor="#fff" />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            <DialogCart open={open} setOpen={setOpen} shopCart={shopCart} />
        </div>
    );
}
