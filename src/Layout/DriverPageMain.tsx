import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
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
import FetchRequest from "../Utils/FetchRequest";
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
        width: 500,
        marginLeft: 30,
    }
}))

interface IConstructor {
    constructorId: string,
    name: string,
    nationality: string,
    url: string,
}

export default function DriverPageMain(props: {
    driver: string;
}) {
    const classes = useStyles()
    const [driver, setDriver] = useState({
        code: '',
        dateOfBirth: '',
        familyName: '',
        givenName: '',
        nationality: '',
        permanentNumber: '',
        url: '',
    })
    const [constructors, setConstructors] = useState([])
    useEffect(() => {
        async function getDriver() {
            const response = await FetchRequest('drivers/' + props.driver)
            setDriver({
                code: response.MRData.DriverTable.Drivers[0].code,
                dateOfBirth: response.MRData.DriverTable.Drivers[0].dateOfBirth,
                familyName: response.MRData.DriverTable.Drivers[0].familyName,
                givenName: response.MRData.DriverTable.Drivers[0].givenName,
                nationality: response.MRData.DriverTable.Drivers[0].nationality,
                permanentNumber: response.MRData.DriverTable.Drivers[0].permanentNumber,
                url: response.MRData.DriverTable.Drivers[0].url,
            })
        }

        async function getTeams() {
            const response = await FetchRequest('drivers/' + props.driver + '/constructors')
            setConstructors(response.MRData.ConstructorTable.Constructors)
        }

        getDriver()
        getTeams()
    }, [])

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <Typography variant='h5'>{driver.givenName + ' ' + driver.familyName}</Typography>
                <Typography>Дата рождения: {driver.dateOfBirth}</Typography>
                {driver.code ? <Typography>Код: {driver.code}</Typography> : <></>}
                <Typography>Национальность: {driver.nationality}</Typography>
                {driver.permanentNumber ? <Typography>Код: {driver.permanentNumber}</Typography> : <></>}
                <a href={driver.url} target={'_blank'} rel="noopener noreferrer"
                   style={{textDecoration: 'none', marginLeft: 3}}>
                    <Chip variant="outlined" size={"small"} label={'Wiki'}
                          icon={<LocalLibraryIcon/>} clickable={true}/>
                </a>
            </Card>
            <TableContainer className={classes.table}>
                <Typography variant='h5'>Команды гонщика</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Имя команды</TableCell>
                            <TableCell>Национальность</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {constructors.map((constructor: IConstructor, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <Link to={'/constructors/' + constructor.constructorId}
                                          style={{textDecoration: 'none', color: '#000000'}}>
                                        {constructor.name}
                                    </Link>
                                    <a href={constructor.url} target={'_blank'} rel="noopener noreferrer"
                                       style={{textDecoration: 'none', marginLeft: 3}}>
                                        <Chip variant="outlined" size={"small"} label={'Wiki'}
                                              icon={<LocalLibraryIcon/>} clickable={true}/>
                                    </a>
                                </TableCell>
                                <TableCell>{constructor.nationality}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
