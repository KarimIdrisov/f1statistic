import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import FetchRequest from "../Utils/FetchRequest";
import {Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import {Link} from 'react-router-dom'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        margin: '80px 20px 200px 20px'
    },
    table: {
        paddingBottom: 76,
        margin: 'auto',
        width: "90%",
    }
}))

interface IRace {
    Circuit: ICircuit,
    date: string,
    raceName: string,
    round: string,
    time: string,
    url: string,
}

interface ICircuit {
    circuitName: string
}

export default function CurrentRaceScheduleMain() {
    const classes = useStyles()
    const [races, setRaces] = useState([])
    useEffect(() => {
        async function getSchedule() {
            const response = await FetchRequest("current")
            setRaces(response.MRData.RaceTable.Races)
        }

        getSchedule()
    }, []);


    return (
        <div className={classes.root}>
            <TableContainer className={classes.table}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Название трассы</TableCell>
                            <TableCell>Время гонки</TableCell>
                            <TableCell>Имя гонки</TableCell>
                            <TableCell>Раунд</TableCell>
                            <TableCell>Время</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {races.map((race: IRace, index) => (
                            <TableRow key={index}>
                                <TableCell>{race.Circuit.circuitName}</TableCell>
                                <TableCell>{race.date}</TableCell>
                                <TableCell>
                                    <Link to={'/race/' + race.round} style={{textDecoration: 'none', color: '#000'}}>
                                    {race.raceName}
                                    </Link>
                                    <a href={race.url} target={'_blank'} rel="noopener noreferrer"
                                       style={{textDecoration: 'none', marginLeft: 3}}>
                                        <Chip variant="outlined" size={"small"} label={'Wiki'}
                                              icon={<LocalLibraryIcon/>} clickable={true}/>
                                    </a>

                                </TableCell>
                                <TableCell>{race.round}</TableCell>
                                <TableCell>{race.time}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
};
