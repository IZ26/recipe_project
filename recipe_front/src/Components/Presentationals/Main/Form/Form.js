import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {styles} from "./style";
import PropTypes from 'prop-types';

const Form = (props) => {
    const {classes} = props;
    return (
        <div className={classes.container}>
            <form className={classes.form}>
                <TextField
                    id="outlined-dense"
                    label="Titre de la recette"
                    placeholder="Titre de la recette"
                    margin="dense"
                    value={props.value}
                    onChange={props.onChange}
                    variant="outlined"
                />
                <TextField
                    id="outlined-textarea"
                    label="Ingredients"
                    placeholder="Ingredients"
                    multiline
                    rows="4"
                    margin="normal"
                    value={props.value}
                    onChange={props.onChange}
                    variant="outlined"
                />
                <TextField
                    id="outlined-textarea"
                    label="Etapes"
                    placeholder="Etapes"
                    multiline
                    rows="4"
                    margin="normal"
                    value={props.value}
                    onChange={props.onChange}
                    variant="outlined"
                />
                <Button
                    variant="contained"
                    className={classes.button}
                    onClick={props.submit}
                >
                    Ajouter
                </Button>
            </form>
        </div>
    )
};

Form.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};

export default withStyles(styles)(Form);

/*
                    <TextField
                    id="standard-name"
                    label={props.label}
                    className={classes.textField}
                    value={props.value}
                    onChange={props.onChange}
                    margin="normal"
                    />
                */