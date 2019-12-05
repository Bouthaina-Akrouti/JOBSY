import React from 'react';
import { Checkbox, FormControlLabel, TextField, CssBaseline, Button, Avatar, Link, Grid, Box, Typography, makeStyles, Container } from '@material-ui/core'

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import RadioGroup from '@material-ui/core/RadioGroup';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const GreenRadio = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})(props => <Radio color="default" {...props} />);

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

const civility = [
    {
        label: 'Select your civility',
    },
    {
        label: 'M',
    },
    {
        label: 'Mme',
    },
    {
        label: 'Mlle',
    }
]

const governorate = [
    {
        label: 'Select your governorate'
    },
    {
        label: 'Ariana'
    },
    {
        label: 'Tunis'
    },
    {
        label: 'Nabeul'
    },
    {
        label: 'Ben Arous'
    },
    {
        label: 'Kef'
    },
    {
        label: 'Beja'
    },
    {
        label: 'Jandouba'
    },
    {
        label: 'Bizerte'
    },
    {
        label: 'Gafsa'
    },
    {
        label: 'Sousse'
    },
    {
        label: 'Monastir'
    },
    {
        label: 'Mahdia'
    },
    {
        label: 'Kairouna'
    },

    {
        label: 'Sidi Bouzid'
    },
    {
        label: 'Kasserine'
    },
    {
        label: 'Manouba'
    },
    {
        label: 'Sfax'
    },
    {
        label: 'Gabés'
    },
    {
        label: 'Tataouine'
    },
    {
        label: 'Siliana'
    },
    {
        label: 'Touzeur'
    },
    {
        label: 'Zaghouan'
    },
    {
        label: 'Kébili'
    },
    {
        label: 'Médenine'
    }
]

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = event => {
        setCurrency(event.target.value);
    };
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = date => {
        setSelectedDate(date);
    };
    return (


        <Container component="main" maxWidth="xs">

            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
        </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="confirmpassword"
                                label="Confirm Password"
                                type="confirmpassword"
                                id="confirmpassword"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-select-currency-native"
                                select
                                fullWidth
                                label="Civility"
                                className={classes.textField}
                                value={currency}
                                onChange={handleChange}
                                SelectProps={{
                                    native: true,
                                    MenuProps: {
                                        className: classes.menu,
                                    },
                                }}
                                helperText="Please select your civility"
                                margin="normal"
                                variant="outlined"
                            >
                                {civility.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
                        </Grid>
                        {/* <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        /> */}
        {/* <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        /> */}
        
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-select-currency-native"
                                select
                                fullWidth
                                label="Governorate"
                                className={classes.textField}
                                value={currency}
                                onChange={handleChange}
                                SelectProps={{
                                    native: true,
                                    MenuProps: {
                                        className: classes.menu,
                                    },
                                }}
                                helperText="Please select your governorate"
                                margin="normal"
                                variant="outlined"
                            >
                                {governorate.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
          </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign in
              </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>

    );
}