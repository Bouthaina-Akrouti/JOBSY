import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { modifyJob } from '../Action/Actions'


const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

 function ModalComponent(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState(props.allOffers.title);
  const [city, setcity] = React.useState(props.allOffers.city);
  const [company, setcompany] = React.useState(props.allOffers.company);
  const [date, setDate] = React.useState(props.allOffers.date);
  const [date_expiration, setExpiration] = React.useState(props.allOffers.date_expiration);
  const [open_position, setPosition] = React.useState(props.allOffers.open_position);
  const [description, setDesc] = React.useState(props.allOffers.description)

    const handleTitle = e => {
        setTitle(e.target.value)
    }
    const handleDate = e => {
        setDate(e.target.value)
    }
    const handleExp = e => {
        setExpiration(e.target.value)
    }
    const handlePosition = e => {
        setPosition(e.target.value)
    }
    const handleDesc = e => {
        setDesc(e.target.value)
    }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const jobModif = () => {
        props.edit({date, title, city, company, description, date_expiration, open_position, id: props.allOffers.id, status: props.allOffers.status, companyId: props.allOffers.companyId})
        setOpen(false);
  }
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Modify
    </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Modify Job</h2>
            <div>
        </div>
        <div>
            <TextField
          id="standard-helperText"
          label="NEW Title"
          defaultValue={title}
          onChange={handleTitle}
          className={classes.textField}
          margin="normal"
        />  
        </div> 
        <div>
            <TextField
          id="standard-read-only-input"
          label="City"
          defaultValue={city}
          className={classes.textField}
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
        />
        </div> 
        <div>
            <TextField
          id="standard-read-only-input"
          label="Company Name"
          value={company}
          className={classes.textField}
          margin="normal"
          InputProps={{
            readOnly: true,
          }}
        />
        </div> 
        <div>
        <TextField
    id="date"
    label="NEW Date"
    type="date"
    defaulValue={date}
    className={classes.textField}
    onChange={handleDate}
    InputLabelProps={{
      shrink: true,
    }}
  />  
  </div>   
  <div>
        <TextField
    id="date"
    label="NEW Date expiration"
    type="date"
    defaultValue={date_expiration}
          onChange={handleExp}
          className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />  
  </div>
  <div>
  <TextField
          id="outlined-number"
          label="NEW Open Position"
          type="number"
          value={open_position}
          onChange={handlePosition}
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          variant="outlined"
        /></div> 
        <div>
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          onChange={handleDesc}
          rows="4"
          defaultValue={description}
          className={classes.textField}
          margin="normal"
          variant="outlined"
        /></div>  
      <Button variant="contained" color="primary" onClick={jobModif}>
        Modify
    </Button>
        </div>
        </Fade>
      </Modal>
    </div>
  );
}
// const mapStateToProps = state => {
//     return {
//       offers: state.offers
//     }
//   }
const mapDispatchToProps = dispatch => {
    return{
        edit: job => dispatch(modifyJob(job)) 
    }
}
export default connect(null, mapDispatchToProps)(ModalComponent)