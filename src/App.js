import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from './Component/Home';
import SignIn from './Component/SignIn';
import SignUpCompany from './Component/SingnUpCompany'
import SignUpCondidate from './Component/SignUpCondidate'
import Contact from './Component/Contact'
import {Button, FormControl, Select, InputLabel, Box, Toolbar, Typography, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProfileCondidate from './Component/ProfileCondidate'
import ProfileCompany from './Component/ProfileCompany'
import Offer from './Component/Offer'
import ProfileAdmin from './Component/ProfileAdmin'
import logo from './img/jobsy.png'
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Jobsy
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function App() {
  const classes = useStyles();
  const [state, setState] = React.useState('');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  const handleChange = name => event => {
    setState(
      name= event.target.value,
    );
  };


  return (
    <BrowserRouter>
      <Container>
        <div className="App" >
          <Toolbar className={classes.toolbar}>
            <div className="navbar">
            <div className="logo">
            <img src={logo} alt="..."></img>
            </div>
            <div className="button">
              <Link to={`/signin`}><Button className="btn-signin" variant="primary" size="small" >
                Sign in
          </Button></Link>
              <Link to={`signupcondidate`}><Button className="btn-signup" variant="primary" size="small">Sign Up Condidate?</Button></Link>
              <Link to={`signupcompany`}><Button className="btn-signup" variant="primary" size="small">Sign Up Company?</Button></Link>
              <Link to={`profilecompany/1`}><Button className="btn-signup" variant="primary" size="small">Company Profil</Button></Link>
              </div>
              </div>
        </Toolbar>
            <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
              <Link to={`/`}><Button>Jobs</Button></Link>
            
     
       <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Job by city</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange('value')}
          inputProps={{
            name: 'value',
            id: 'city-native-simple',
          }}
        >
          <option value="" />
          <option value={'Tunis'}>Tunis</option>
          <option value={'Bizerte'}>Bizerte</option>
          <option value={'Nabeul'}>Nabeul</option>
          <option value={'Kef'}>Kef</option>
          <option value={'Jandouba'}>Jandouba</option>
          <option value={'Beja'}>Beja</option>
          <option value={'Mahdia'}>Mahdia</option>
          <option value={'Monastir'}>Monastir</option>
          <option value={'Sousse'}>Sousse</option>
          <option value={'Kairouan'}>Kairouan</option>
          <option value={'Sidi Bouzid'}>Sidi Bouzid</option>
          <option value={'Kasserine'}>Kasserine</option>
          <option value={'Sfax'}>Sfax</option>
          <option value={'Gabes'}>Gabes</option>
          <option value={'Gafsa'}>Gafsa</option>
          <option value={'Médenine'}>Médenine</option>
          <option value={'Siliana'}>Siliana</option>
          <option value={'Kebili'}>Kebili</option>
          <option value={'Tataouine'}>Tataouine</option>
          <option value={'Zaghouan'}>Zaghouan</option>

        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Job by profession</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange('value')}
          inputProps={{
            name: 'value',
            id: 'profession-native-simple',
          }}
        >
          <option value="" />
          <option value={'>React js'}>>React js</option>
          <option value={'Node js'}>Node js</option>
          <option value={'Angular js'}>Angular js</option>
          <option value={'Symfony'}>Symfony</option>
          <option value={'Laravel'}>Laravel</option>
          <option value={'C++'}>C++</option>
          <option value={'IoT'}>IoT</option>
          <option value={'C#'}>C#</option>
          <option value={'Javascript'}>Javascript</option>
          <option value={'PHP'}>PHP</option>
          <option value={'J2E'}>J2E</option>

        </Select>
      </FormControl>
     

              <Link to={`contact`}><Button>Contact</Button></Link>
            </Toolbar>

            <Route exact path="/" component={Home} ></Route>
            <Route path="/signin" component={SignIn}></Route>
            <Route path="/signupcondidate" component={SignUpCondidate}></Route>
            <Route path="/signupcompany" component={SignUpCompany}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/profilecondidate" component={ProfileCondidate}></Route>
            <Route path="/profilecompany/:id" component={ProfileCompany}></Route>
            <Route path="/offer/:id" component={Offer}></Route>

      </div>
      </Container>
       {/* Footer */}
       <footer className={classes.footer}>
       <Box mt={8}>
        <Copyright />
      </Box>
      </footer>
      {/* End footer */}
    </BrowserRouter>
      );
    }
    
    export default App;
