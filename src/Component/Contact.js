import React from 'react';
import { CssBaseline, Button, TextField, Typography, makeStyles, Container, Toolbar, Grid, AppBar } from '@material-ui/core';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import ContactsIcon from '@material-ui/icons/Contacts';



const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },

    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));


export default function Album() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                <ContactsIcon className={classes.icon} />

                    <Typography variant="h6" color="inherit" noWrap>
                        Contact Us
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}

                <Container maxWidth="sm">
                    <div className="contact">
                        <div classname="pagefb">
                        <FacebookIcon className={classes.icon} />
                            <Typography component="h1" variant="h5">
                                Jobsy
                    </Typography>
                        </div>
                        <div className="telephone">
                        <ContactPhoneIcon className={classes.icon} />

                            <Typography component="h1" variant="h5" color="primary">
                                Telephone:
                    </Typography>
                            <Typography component="h3" variant="h5 " color="default">
                                (+216)71 71 71 71
                    </Typography>
                        </div>
                    </div>
                    <div className="comment">
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="name"
                                    label="First Name && Last Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    autoComplete="lname"
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="comment"
                                label="Comment"
                                type="comment"
                                id="comment"

                            />
                        </Grid>
                        <Button variant="outlined" color="primary">
                            Send
                        </Button>
                    </div>
                </Container>
            </main>

        </React.Fragment>
    );
}