import React, {FunctionComponent} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {AppBar, Button, Menu, MenuItem, Toolbar, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

interface OwnProps {
}

type Props = OwnProps;

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    appbar: {
        backgroundColor: "#121212"
    }
}));

const Navbar: FunctionComponent<Props> = () => {
    const classes = useStyles()
    let years = Array.from({length: 71}, (v, k) => k + 1950);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appbar}>
                <Toolbar>
                    <Link to={"/"} style={{textDecoration: 'none'}}>
                        <Button>
                            <img height={50} alt="f1 car" src="/img/f1.png"/>
                            <Typography variant="h6" style={{color: "#fff", marginLeft: 10}}>F1 Statistic</Typography>
                        </Button>
                    </Link>

                    <span className={classes.root}/>
                    <Link to={"/current"} style={{textDecoration: 'none'}}>
                        <Button aria-controls="season" aria-haspopup="true" style={{color: '#fff'}}>
                            Текущее расписание
                        </Button>
                    </Link>
                    <Link to={"/constructor-list"} style={{textDecoration: 'none'}}>
                        <Button aria-controls="constructor" aria-haspopup="true" style={{color: '#fff'}}>
                            Кубок конструкторов
                        </Button>
                    </Link>
                    <Button aria-controls="drivers" aria-haspopup="true" onClick={handleClick} style={{color: '#fff'}}>
                        Результаты сезонов
                    </Button>
                    <Menu id="drivers" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                        {years.map((year, index) => (
                            <Link key={index} to={'/standing-list/' + year.toString()}
                                  style={{textDecoration: 'none', color: '#000000'}}>
                                <MenuItem>{year}</MenuItem>
                            </Link>
                        ))}
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
