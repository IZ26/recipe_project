export const styles = theme => ({
    container: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        position: 'absolute',
        right: 0,
    },
    recipeContainer:{
        width: '90%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        marginTop: '30px',
        border: '1px solid #3f50b5',
        borderRadius: 10,
        padding: 15,
    },
    title: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.palette.secondary.light,
    },
    recipeName: {
        color: theme.palette.primary.main,
    },
    recipeIngredients: {
        fontSize: 15,
        textTransform: 'uppercase',
        marginTop: 20,
    },
    ingredients: {
        fontSize: 13,
        margin: 0,
        marginTop: 5,
    },
    recipeSteps: {
        fontSize: 15,
        textTransform: 'uppercase',
        marginTop: 20,
    },
    steps: {
        fontSize: 13,
        margin: 0,
        marginTop: 5,
    },
    fab: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
    recipeManager: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    icon:{
        fontSize: 20,
    }
});