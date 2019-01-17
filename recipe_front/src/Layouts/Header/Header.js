import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {styles} from "./style";

class Header extends Component {
    render() {
        const {classes} = this.props;
        console.log(this.props);
        return (
            <header className={classes.headerSection}>
                <Typography component="h2" variant="display3" className={classes.title} gutterBottom>
                    recettes
                </Typography>
            </header>
        )
    }
};

export default withStyles(styles)(Header);