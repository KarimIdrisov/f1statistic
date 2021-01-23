import React, {FunctionComponent} from 'react';

import Navbar from "./Navbar";
import Footer from "./Footer";
import {makeStyles} from "@material-ui/core/styles";

interface OwnProps {
    children: React.ReactElement,
}

type Props = OwnProps;

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    }
}))

const Layout: FunctionComponent<Props> = (props) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Navbar/>
            {props.children}
            <Footer/>
        </div>
    );
};

export default Layout;
