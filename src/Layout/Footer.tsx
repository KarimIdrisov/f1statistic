import React, { FunctionComponent } from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";

interface OwnProps {}

type Props = OwnProps;

const useStyles = makeStyles( () => ({
    root: {
        flexGrow: 1
    },
    footer: {
        background: "rgba(0,0,0,0.46)",
        position: "fixed",
        margin: 0,
        bottom: 0,
        left: 0,
        height: 50,
        width: "100%",
        overflowX: 'hidden',
        whiteSpace: "normal",
        color: '#fff',
    },
    text: {
        textAlign: "center",
        marginTop: 15
    }
}))

const Footer: FunctionComponent<Props> = () => {
  const classes = useStyles()

  return (
      <div className={classes.root}>
          <footer className={classes.footer}>
              <Typography variant="h6" className={classes.text}>
                  {new Date().getFullYear() + ' by Karim Idrisov'}
              </Typography>
          </footer>
      </div>
  );
};

export default Footer;

