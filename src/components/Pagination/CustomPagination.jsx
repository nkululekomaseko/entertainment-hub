import { createTheme, ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import './customPagination.css';

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 50,
        zIndex: 200,
        backgroundColor: '#2d313a',
        display: 'flex',
        justifyContent: 'center'
    }
});

const darkTheme = createTheme({
    palette: {
        type: 'dark'
    }
});

const CustomPagination = ({setPage, numOfPages = 10}) => {
    const classes = useStyles();
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    }

    return (
        <div className='paginationContainer'>
            <ThemeProvider theme={darkTheme}>
                <Pagination className={classes.root} count={numOfPages} onChange={(event) => handlePageChange(event.target.textContent)} color='primary'/>
            </ThemeProvider>
        </div>
    )
}

export default CustomPagination
