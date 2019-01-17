import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {styles} from "./style";
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

const Recipe = (props) => {
    const {classes} = props;
    return (
        <div className={classes.container}>
            <Typography component="h3" variant="display1" className={classes.title} gutterBottom>
                Liste des recettes
            </Typography>
            <div className={classes.recipeContainer}>
                <Typography variant="title" className={classes.recipeName}> Charlotte au chocolat </Typography>
                <Typography variant="title" className={classes.recipeIngredients}> ingrédients: </Typography>
                <p className={classes.ingredients}> Biscuit cuillère</p>
                <Typography variant="title" className={classes.recipeSteps}> étapes: </Typography>
                <p className={classes.steps}> Mettre au four</p>
                <div className={classes.recipeManager}>
                    <Fab size="small" color="secondary" aria-label="Delete" className={classes.fab}>
                        <Icon className={classes.icon}>delete-icon</Icon>
                    </Fab>
                    <Fab size="small" color="secondary" aria-label="Edit" className={classes.fab}>
                        <Icon className={classes.icon}>edit_icon</Icon>
                    </Fab>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(Recipe);