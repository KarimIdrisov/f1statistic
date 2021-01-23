import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Layout from "../Layout/Layout";
import CurrentRaceScheduleMain from "../Layout/CurrentRaceScheduleMain";

const useStyles = makeStyles( () => ({
    root: {
        flexGrow: 1
    }
}))

export default function CurrentRaceSchedule(){
  const classes = useStyles()

  return (
    <div className={classes.root}>
        <Layout>
            <CurrentRaceScheduleMain/>
        </Layout>
    </div>
  )
};
