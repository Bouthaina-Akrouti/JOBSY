import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import WorkIcon from '@material-ui/icons/Work';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardActionArea from '@material-ui/core/CardActionArea';
import Link from '@material-ui/core/Link';
import { connect } from 'react-redux';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

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

function Offer(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <WorkIcon className={classes.icon} />
                    <Typography variant="h6" color="inherit" noWrap>
                        Offer
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.heroContent}>

                    <Container maxWidth="sm">
                        {props.job.filter(el => String(el.id) === props.match.params.id).map(el => (
                            <Grid item xs={12}>
                                <Paper className={classes.paper}><CardActionArea component="a" href="#">
                                    <Card className={classes.card}>
                                        <div className={classes.cardDetails}>
                                            <CardContent>
                                                <div>
                                                    <Typography component="h2" variant="h5">
                                                        {el.title}
                                                    </Typography>
                                                </div>
                                                <div>
                                                    <Typography variant="subtitle1" paragraph>
                                                        {el.city}
                                                    </Typography>
                                                </div>
                                                <div>
                                                    <Typography variant="subtitle1" paragraph>
                                                        {el.company}
                                                    </Typography>
                                                </div>
                                                <Typography variant="subtitle1" color="textSecondary">
                                                    {el.date}
                                                </Typography>
                                                <Typography variant="subtitle1" color="textSecondary">
                                                    {el.open_position}
                                                </Typography>
                                                <Typography variant="subtitle1" color="textSecondary">
                                                    {el.description}
                                                </Typography>
                                                <Typography variant="subtitle1" color="textSecondary">
                                                    {el.date_expiration}
                                                </Typography>
                                                <Button variant="contained" color="primary">
                                                    Apply Now
                                                </Button>

                                            </CardContent>
                                        </div>
                                    </Card>
                                </CardActionArea>
                                </Paper>
                            </Grid>
                        ))}


                    </Container>
                </div>
            </main>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        job: state.offers
    }
}

export default connect(mapStateToProps)(Offer)