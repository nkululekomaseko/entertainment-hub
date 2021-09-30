import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Movie, Search, Tv, Whatshot } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#2d313a',
        zIndex: 100

    },
    bottomNavAction: {
        color: 'white'
    }
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const history = useHistory();

    useEffect(() => {
        if (value === 0) history.push("/");
        else if (value === 1) history.push("/movies");
        else if (value === 2) history.push("/series");
        else if (value === 3) history.push("/search");
    }, [value, history]);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction
                label="Trending" 
                style={{color: 'white'}}
                icon={<Whatshot />} />
            <BottomNavigationAction
                label="Movies" 
                style={{color: 'white'}}
                icon={<Movie />} />
            <BottomNavigationAction
                label="TV Series" 
                style={{color: 'white'}}
                icon={<Tv />} />
            <BottomNavigationAction
                label="Search" 
                style={{color: 'white'}}
                icon={<Search />} />
            
        </BottomNavigation>
    );
}