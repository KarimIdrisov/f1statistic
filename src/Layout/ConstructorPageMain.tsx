import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import FetchRequest from "../Utils/FetchRequest";
import {
    Card,
    Chip,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import {Link} from "react-router-dom";

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        margin: '80px 20px 60px 20px'
    },
    card: {
        width: 300,
        padding: 30,
        height: 300
    },
    table: {
        paddingBottom: 76,
        width: 500,
        marginLeft: 30,
    }
}))

interface IDriver {
    driverId: string,
    code: string,
    dateOfBirth: string,
    familyName: string,
    givenName: string,
    nationality: string,
    permanentNumber: string,
    url: string,
}

export default function ConstructorPageMain(props: {
    constructor: string
}) {
    const classes = useStyles()
    const [constructor, setConstructor] = useState({
        name: '',
        nationality: '',
        url: '',
    })
    const [drivers, setDrivers] = useState([])
    useEffect(() => {
        async function getConstructor() {
            const response = await FetchRequest('constructors/' + props.constructor)
            setConstructor({
                name: response.MRData.ConstructorTable.Constructors[0].name,
                nationality: response.MRData.ConstructorTable.Constructors[0].nationality,
                url: response.MRData.ConstructorTable.Constructors[0].url
            })
        }

        async function getDrivers() {
            const response = await FetchRequest('constructors/' + props.constructor + '/drivers')
            setDrivers(response.MRData.DriverTable.Drivers.slice(0, 10))
        }

        getConstructor()
        getDrivers()
    }, [])

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <Typography variant='h5'>{constructor.name}</Typography>
                <Typography>Национальность: {constructor.nationality}</Typography>
                <a href={constructor.url} target={'_blank'} rel="noopener noreferrer"
                   style={{textDecoration: 'none', marginLeft: 3}}>
                    <Chip variant="outlined" size={"small"} label={'Wiki'}
                          icon={<LocalLibraryIcon/>} clickable={true}/>
                </a>
            </Card>
            <TableContainer className={classes.table}>
                <Typography variant='h5'>Гонщики команды</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Имя гонщика</TableCell>
                            <TableCell>Национальность</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {drivers.map((driver: IDriver, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <Link to={'/driver/' + driver.driverId}
                                          style={{textDecoration: 'none', color: '#000000'}}>
                                        {driver.givenName + ' ' + driver.familyName}
                                    </Link>
                                    <a href={constructor.url} target={'_blank'} rel="noopener noreferrer"
                                       style={{textDecoration: 'none', marginLeft: 3}}>
                                        <Chip variant="outlined" size={"small"} label={'Wiki'}
                                              icon={<LocalLibraryIcon/>} clickable={true}/>
                                    </a>
                                </TableCell>
                                <TableCell>{driver.nationality}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
};
