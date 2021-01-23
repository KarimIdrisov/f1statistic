import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Layout from "../Layout/Layout";
import ConstructorsCupMain from "../Layout/ConstructorsCupMain";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1
    }
}))

export default function ConstructorsCup() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Layout>
                <ConstructorsCupMain/>
            </Layout>
        </div>
    )
};
