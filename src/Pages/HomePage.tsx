import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import Layout from "../Layout/Layout";
import HomeMain from "../Layout/HomeMain";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        paddingBottom: 60
    }
}));

export default function HomePage() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Layout>
                <HomeMain/>
            </Layout>
        </div>
    );
}
