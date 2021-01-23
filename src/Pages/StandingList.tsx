import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Layout from "../Layout/Layout";
import StandingListMain from "../Layout/StandingListMain";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        paddingBottom: 60
    }
}))

export default function StandingList(props: any) {
    const classes = useStyles()
    const [season, setSeason] = useState('')
    if (season !== props.match.params.season) {
        setSeason(props.match.params.season)
    }

    return (
        <div className={classes.root}>
            <Layout>
                <StandingListMain season={season}/>
            </Layout>
        </div>
    );
}
