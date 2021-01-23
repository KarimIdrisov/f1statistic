import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Layout from "../Layout/Layout";
import ConstructorPageMain from "../Layout/ConstructorPageMain";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1
    }
}))

export default function ConstructorPage(props: any) {
    const classes = useStyles()
    const constructorId = props.match.params.constructorId

    return (
        <div className={classes.root}>
            <Layout>
                <ConstructorPageMain constructor={constructorId}/>
            </Layout>
        </div>
    )
};
