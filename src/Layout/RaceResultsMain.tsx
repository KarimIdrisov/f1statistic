import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import FetchRequest from "../Utils/FetchRequest";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        margin: '80px 20px 60px 20px'
    },
    table: {
        paddingBottom: 76,
        margin: '30px',
    }
}))

interface IConstructor {
    constructorId: string,
    name: string,
}

interface IDriver {
    driverId: string,
    permanentNumber: string,
    familyName: string,
    givenName: string,
}

interface ITime {
    time: string
}

interface IResult {
    Constructor: IConstructor,
    Driver: IDriver,
    Time: ITime,
    grid: string,
    laps: string,
    points: string,
    position: string,
    status: string
}

export default function RaceResultsMain(props: {
    round: string
}) {
    const classes = useStyles()
    const [results, setResults] = useState([])
    useEffect(() => {
        async function getRaceResults() {
            const response = await FetchRequest('current/' + props.round + '/results')
            console.log(response.MRData.RaceTable.Races[0].Results)
            setResults(response.MRData.RaceTable.Races[0].Results)
        }

        getRaceResults()
    }, [])

    return (
        <div className={classes.root}>
            <TableContainer className={classes.table}>
                <Typography variant='h5'>Результаты гонки</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Позиция</TableCell>
                            <TableCell>NO</TableCell>
                            <TableCell>Гонщик</TableCell>
                            <TableCell>Команда</TableCell>
                            <TableCell>Круги</TableCell>
                            <TableCell>Позиция старта</TableCell>
                            <TableCell>Время</TableCell>
                            <TableCell>Статус</TableCell>
                            <TableCell>Очки</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {results.map((result: IResult, index) => (
                            <TableRow key={index}>
                                <TableCell>{result.position}</TableCell>
                                <TableCell>{result.Driver.permanentNumber}</TableCell>
                                <TableCell>
                                    <Link to={'/driver/' + result.Driver.driverId}
                                          style={{textDecoration: 'none', color: '#000000'}}>
                                        {result.Driver.givenName + ' ' + result.Driver.familyName}
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <Link to={'/constructors/' + result.Constructor.constructorId}
                                          style={{textDecoration: 'none', color: '#000000'}}>
                                        {result.Constructor.name}
                                    </Link>
                                </TableCell>
                                <TableCell>{result.laps}</TableCell>
                                <TableCell>{result.grid}</TableCell>
                                <TableCell>{result.Time !== undefined ? (
                                    result.Time.time
                                ) : (
                                    0
                                )}</TableCell>
                                <TableCell>{result.status}</TableCell>
                                <TableCell>{result.points}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
};
