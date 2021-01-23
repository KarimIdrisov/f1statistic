import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Layout from "../Layout/Layout";
import DriverPageMain from "../Layout/DriverPageMain";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        paddingBottom: 60
    }
}))

export default function DriverPage(props: any) {
    const classes = useStyles()
    const driverId = props.match.params.driverId

    return (
        <div className={classes.root}>
            <Layout>
                <DriverPageMain driver={driverId}/>
            </Layout>
        </div>
    );
};
