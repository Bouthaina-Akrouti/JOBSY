import React from 'react';
import { AppBar, Tabs, Fab, Tab, ListItem, List, Button, ListItemText, CssBaseline, Typography, Box } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import WorkIcon from '@material-ui/icons/Work';
import Toolbar from '@material-ui/core/Toolbar';

import SwipeableViews from 'react-swipeable-views';
import { connect } from 'react-redux';
import { addJob, closeJob, openJob } from '../Action/Actions'
import ModalComponent from './ModalComponent.js'
import AddModal from './AddModal';


const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%'
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function ProfileCompany(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };



  const modify = x => {
    var title = prompt(" New Job Title");
    var description = prompt("New Job Description");
    var open_position = prompt("New Open Position")
    props.edit({ id: x.id, city: x.city, companyId: x.companyId, company: x.company, title: title, description: description, open_position: open_position });
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
                <Toolbar>
                    <WorkIcon className={classes.icon} />
                    <Typography variant="h6" color="inherit" noWrap>
                        Company Name
                    </Typography>
                </Toolbar>
            </AppBar>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Our Job Offers" {...a11yProps(0)} />
            <Tab label="Candidate List" {...a11yProps(1)} />
            <Tab label="Favorite List" {...a11yProps(2)} />
            <Tab label="Closed Offers" {...a11yProps(3)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <List className={classes.root}>
              {
                props.offers.filter(el => String(el.companyId) === props.match.params.id && el.status === "open").map(el => (
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      primary={el.title}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            {el.company}
                          </Typography>
                          {el.description}
                        </React.Fragment>
                      }
                    />
                    
                    <ModalComponent allOffers={el}/>
                    <Button variant="contained" color="secondary" onClick={() => props.close(el.id)}>
                      Close
                    </Button>
                  </ListItem>
                ))
              }
            </List>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
            Item Three
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
              {
                props.offers.filter(offer => String(offer.companyId) === props.match.params.id && offer.status === "closed").map((el,i) =>(
                  <ListItem key={i} alignItems="flex-start">
                    <ListItemText
                      primary={el.title}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            {el.company }
                          </Typography>
                          {el.description}
                        </React.Fragment>
                      }
                    />
                    
                    <ModalComponent allOffers={el}/>
                    <Button variant="contained" color="secondary" onClick={() => props.open(el.id)}>
                      Open
                    </Button>
                  </ListItem>
                ))
              }
        </TabPanel>
        </SwipeableViews>
      </div>
      <AddModal allOffers = {props.offers} companyId={props.match.params.id}/>
    </React.Fragment>
  );
}
const mapStateToProps = state => {
  return {
    offers: state.offers
  }
}
const mapDispatchToProps = dispatch => {
  return {
    close: id => dispatch(closeJob(id)),
    open: id => dispatch(openJob(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCompany)