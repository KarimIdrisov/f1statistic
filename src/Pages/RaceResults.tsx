import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Layout from "../Layout/Layout";
import RaceResultsMain from "../Layout/RaceResultsMain";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1
    }
}))

export default function RaceResults(props: any) {
    const classes = useStyles()
    const round = props.match.params.id

    return (
        <div className={classes.root}>
            <Layout>
                <RaceResultsMain round={round}/>
            </Layout>
        </div>
    )
};
