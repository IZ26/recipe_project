export const styles = theme => ({
    container: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        left: 0,
    },
    form: {
        width: '70%',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
    button: {
        background: theme.palette.primary.light,
        paddingTop: '15px',
        paddingBottom: '15px',
        marginTop: '10%',
    },
});