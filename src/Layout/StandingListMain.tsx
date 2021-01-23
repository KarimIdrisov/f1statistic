import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom"
import FetchRequest from "../Utils/FetchRequest";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        margin: '80px 20px 60px 20px'
    },
    table: {
        margin: 'auto',
        width: "90%",
    }
}))

interface IStanding {
    Constructors: [IConstructor],
    Driver: IDriver,
    points: string,
    position: string,
    wins: string,
}

interface IConstructor {
    constructorId: string,
    name: string,
    nationality: string,
    url: string,
}

interface IDriver {
    dateOfBirth: string,
    driverId: string,
    familyName: string,
    givenName: string,
    nationality: string,
    url: string,
}

export default function StandingListMain(props: {
    season: string,
}) {
    const classes = useStyles();
    const [standings, setStandings] = useState([])
    useEffect(() => {
        async function getSeasonStanding() {
            const response = await FetchRequest(props.season + "/driverStandings")
            setStandings(response.MRData.StandingsTable.StandingsLists[0].DriverStandings)
        }

        getSeasonStanding()
    }, [props.season]);

    return (
        <div className={classes.root}>
            <TableContainer className={classes.table}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Имя гонщика</TableCell>
                            <TableCell>Позиция</TableCell>
                            <TableCell>Очки</TableCell>
                            <TableCell>Команда</TableCell>
                            <TableCell>Победы</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {standings.map((driver: IStanding, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <Link to={'/driver/' + driver.Driver.driverId}
                                          style={{textDecoration: 'none', color: '#000000'}}>
                                        {driver.Driver.givenName + ' ' + driver.Driver.familyName}
                                    </Link>
                                </TableCell>
                                <TableCell>{driver.position}</TableCell>
                                <TableCell>{driver.points}</TableCell>
                                <TableCell>
                                    <Link to={'/constructors/' + driver.Constructors[0].constructorId}
                                          style={{textDecoration: 'none', color: '#000000'}}>
                                    {driver.Constructors[0].name}
                                    </Link>
                                </TableCell>
                                <TableCell>{driver.wins}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}