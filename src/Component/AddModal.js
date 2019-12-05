import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, TextField, Fab } from '@material-ui/core';
import { connect } from 'react-redux';
import { modifyJob, addJob } from '../Action/Actions'
import AddIcon from '@material-ui/icons/Add';




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

function AddModal(props) {
    const classes = useStyles();
    const filtered = props.allOffers.filter(el => el.companyId == props.companyId)[0]
    const [open, setOpen] = React.useState(false);
    const [companyId, setCompanyId] = React.useState(filtered.companyId);
    const [city, setCity] = React.useState(filtered.city);
    
    const [company, setcompany] = React.useState(filtered.company);
    const [title, setTitle] = React.useState('');
      const [date, setDate] = React.useState('');
      const [date_expiration, setExpiration] = React.useState('');
      const [open_position, setPosition] = React.useState('');
      const [description, setDesc] = React.useState('')

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

    const jobAdd = () => {
        props.add({date, title, city, company, description, date_expiration, open_position, id: Math.round(Math.random() * 1000), status: 'open', companyId})
        setOpen(false);
        setTitle('')
        setDate('')
        setDesc('')
        setExpiration('')
        setPosition('')
    }
    return (
        <div>
            <Fab color="primary" aria-label="add" onClick={handleOpen}>
                <AddIcon />
            </Fab>
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
                        <Button variant="contained" color="primary" onClick={jobAdd}>
                            Add
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
    return {
        add: job => dispatch(addJob(job)),
        edit: job => dispatch(modifyJob(job))
    }
}
export default connect(null, mapDispatchToProps)(AddModal)