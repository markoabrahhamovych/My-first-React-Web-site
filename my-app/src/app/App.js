import './App.css';
import {
    AppBar,
    Container,
    Toolbar,
    IconButton,
    Typography,
    Box,
    Paper,
    Grid,
    Card,
    CardMedia,
    CardContent,
    CardActions
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import Button from "@material-ui/core/Button";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import {makeStyles} from "@material-ui/core";
import React, {useState} from "react";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),

    },
    title: {
        flexGrow: 1
    },
    mainFeaturesPost: {
        position: 'relative',
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),

        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    },
    overlay: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundOverlay: "rgba(0,0,0,0.77)",
    },

    mainFeaturesPostContent: {
        position: 'relative',
        padding: theme.spacing(9),
        marginTop: theme.spacing(8)
    },
    mainButtons: {
        marginTop: theme.spacing(3)
    },
    CardMedia: {
        paddingTop: "56.25%",
    },
    CardContent: {
        flexGrow: 1
    },
    cardGrid: {
        marginTop: theme.spacing(4)
    }

}))

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState("recents");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [open , setOpen] = React.useState(false);

    const  handleClickOpen = () => {
        setOpen(true);
    }

    const  handleClose = ()=> {
        setOpen(false);
    }

    return (
        <>
            <AppBar postion="fixed">
                <Container fixed>
                    <Toolbar>
                        <IconButton edge="start"
                                    color="inherit" aria-laabel='menu' className={classes.menuButton}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>Frontend developer</Typography>
                        <Box mr={3}>
                            <Button color="inherit" variant="outlined" onClick={handleClickOpen}>Log In</Button>
                            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                                <DialogTitle id  = "form-dialog-title">Log in</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>Log in to see videos</DialogContentText>
                                    <TextField
                                        autoFocus
                                        margin = "dense"
                                        id = "pass"
                                        label = "Password"
                                        type = "password"
                                        fullWidth
                                    />
                                    <TextField
                                        autoFocus
                                        margin = "dense"
                                        id = "name"
                                        label = "Email Adress"
                                        type = "email"
                                        fullWidth
                                    />
                                </DialogContent>
                                <DialogActions>
                                        <button onClick={handleClose} color = "primary">Cancel</button>
                                    <button onClick={handleClose} color = "primary">Log in</button>
                                </DialogActions>
                            </Dialog>


                        </Box>
                        <Button color="secondary" variant="contained">Sign Up</Button>
                    </Toolbar>
                </Container>
            </AppBar>
            <main>

                <Paper className={classes.mainFeaturesPost}
                       style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
                    <Container fixed>
                        <div className={classes.overlay}/>
                        <Grid container>
                            <Grid item md={6}>
                                <div className={classes.mainFeaturesPostContent}>
                                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                        Frontend Developer
                                    </Typography>
                                    <Typography variant="h5" color="inherit" gutterBottom>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.
                                    </Typography>
                                    <Button variant="contained" color="secondary">Learn more</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
                <div className={classes.mainContent}>
                    <Container fixed>
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Frontend Developer
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            <div className={classes.mainButtons}>
                                <Grid container spacing={5} justify="center">
                                    <Grid item>
                                        <Button variant="contained" color="primary">Start now</Button>

                                    </Grid>
                                    <Grid item>

                                        <Button variant="outlined" color="primary">Learn more</Button>
                                    </Grid>
                                </Grid>
                            </div>

                        </Typography>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.CardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="h5" gutterBottom>
                                            Blog post
                                        </Typography>
                                        <Typography>
                                            Blog post.Frontend developer React developer. Blog post
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                        <LayerIcon/>
                                        <PlayCircleFilledIcon/>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer>
                <Typography variant="h6" align="center" gutterBottom>Footer </Typography>
                <BottomNavigation value={value} onChange={handleChange}
                                  className={classes.root}
                >
                    <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon/>}/>
                    <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon/>}/>
                    <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon/>}/>
                    <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon/>}/>

                </BottomNavigation>
                <Typography align="center" color="textSecondary" component="p" variant="subtitle1">
                    Frontend Developer React js Material Ui site
                </Typography>
            </footer>
        </>
    );
}

export default App;
