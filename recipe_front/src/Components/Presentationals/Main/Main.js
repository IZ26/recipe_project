import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {styles} from "./style";
import {Form , Recipe} from "../index";

const Main = (props) => {
    const {classes} = props;
    return(
        <div className={classes.container}>
            <Form/>
            <Recipe/>
        </div>
    )
}

export default withStyles(styles)(Main);