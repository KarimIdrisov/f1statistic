import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import FetchRequest from "../Utils/FetchRequest";
import {Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        margin: '80px 20px 60px 20px'
    },
    table: {
        paddingBottom: 76,
        width: 500,
        margin: 'auto',
    }
}))

interface IStanding {
    Constructor: IConstructor,
    points: string,
    position: string,
    wins: string
}

interface IConstructor {
    constructorId: string,
    name: string,
    nationality: string,
    url: string
}

export default function ConstructorsCupMain() {
    const classes = useStyles()
    const [standings, setStandings] = useState([])
    useEffect(() => {
        async function getSeasonStanding() {
            const response = await FetchRequest("current/constructorStandings")
            setStandings(response.MRData.StandingsTable.StandingsLists[0].ConstructorStandings)
        }

        getSeasonStanding()
    }, []);

    return (
        <div className={classes.root}>
            <TableContainer className={classes.table}>
                <Typography variant='h5'>Кубок конструкторов</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Имя команды</TableCell>
                            <TableCell>Национальность</TableCell>
                            <TableCell>Очки</TableCell>
                            <TableCell>Позиция</TableCell>
                            <TableCell>Победы</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {standings.map((constructor: IStanding, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <Link to={'/constructors/' + constructor.Constructor.constructorId}
                                          style={{textDecoration: 'none', color: '#000000'}}>
                                        {constructor.Constructor.name}
                                    </Link>
                                    <a href={constructor.Constructor.url} target={'_blank'} rel="noopener noreferrer"
                                       style={{textDecoration: 'none', marginLeft: 3}}>
                                        <Chip variant="outlined" size={"small"} label={'Wiki'}
                                              icon={<LocalLibraryIcon/>} clickable={true}/>
                                    </a>
                                </TableCell>
                                <TableCell>{constructor.Constructor.nationality}</TableCell>
                                <TableCell>{constructor.points}</TableCell>
                                <TableCell>{constructor.position}</TableCell>
                                <TableCell>{constructor.wins}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
};
