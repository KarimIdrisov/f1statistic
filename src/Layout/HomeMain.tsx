import React, {FunctionComponent} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Button, Card, CardContent, Chip, Typography} from "@material-ui/core";
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import {Link} from 'react-router-dom';

interface OwnProps {
}

type Props = OwnProps;

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        margin: '64px 20px 30px 20px',
    },
    season1950: {
        display: 'flex',
        height: '400px',
        boxShadow: 'none',
        marginTop: 80,
    },
    img: {
        borderRadius: 30,
        width: 500,
    },
}))

interface ISeason {
    season: string,
    url: string,
    title: string,
    description: string,
    wiki: string,
}

const HomeMain: FunctionComponent<Props> = () => {
    const classes = useStyles()
    const seasons = [
        {
            season: '1950',
            url: 'http://leonardasf1.narod.ru/F1_Challenge/1950/50s04020dr.jpg',
            wiki: 'https://en.wikipedia.org/wiki/1950_Formula_One_season',
            title: 'Сезон Формулы-1 1950 года',
            description: 'Сезон Формулы-1 1950 года стал четвертым сезоном гонок Формулы-1 FIA. Он включал в себя ' +
                'первый чемпионат мира FIA среди пилотов, который начался 13 мая и завершился 3 сентября, а также\n' +
                'ряд гонок вне чемпионата. Чемпионат состоял из шести гонок Гран-при, каждая из которых\n' +
                'проводилась в Европе и открыта для автомобилей Формулы-1, а также гонок Indianapolis 500,\n' +
                'который проводился в соответствии с правилами национального чемпионата AAA. Джузеппе Фарина\n' +
                'выиграл чемпионат у Хуана Мануэля Фанхио и Луиджи Фаджиоли.'
        },
        {
            season: '1960',
            url: 'https://sfcriga.com/images/others/9-days-in-summer.jpg',
            wiki: 'https://en.wikipedia.org/wiki/1960_Formula_One_season',
            title: 'Сезон Формулы-1 1960 года',
            description: 'Сезон Формулы-1 1960 года стал 14-м сезоном автогонок Формулы-1 FIA. В нем участвовали ' +
                'одиннадцатый чемпионат мира среди пилотов FIA, третий международный кубок производителей F1 и ' +
                'многочисленные гонки Формулы-1, не относящиеся к чемпионату. Чемпионат мира начался 7 февраля 1960 ' +
                'года и завершился 20 ноября после десяти гонок. Джек Брэбэм выиграл свой второй титул подряд, а его ' +
                'команда Cooper защитила титул конструкторов.'
        },
        {
            season: '1970',
            url: 'https://images.fineartamerica.com/images-medium-large-5/ferrari-f1-1970-steve-jones.jpg',
            wiki: 'https://en.wikipedia.org/wiki/1970_Formula_One_season',
            title: 'Сезон Формулы-1 1970 года',
            description: 'Сезон Формулы-1 1970 года стал 24-м сезоном автогонок Формулы-1 FIA. В нем участвовали 21-й' +
                ' чемпионат мира среди водителей и 13-й Международный кубок производителей F1. В период с 7 марта 1970' +
                ' года по 25 октября 1970 года было проведено 13 гонок, в которых чемпионат пилотов выиграл Йохен Риндт' +
                ', а титул конструкторов - Lotus. Риндт умер за четыре гонки до конца сезона, но заработал ровно ' +
                'столько очков чемпионата мира, что ни одному другому гонщику не удалось превзойти его общее количество' +
                ' к концу сезона. На сегодняшний день это единственный сезон, в котором титул чемпиона мира ' +
                'среди водителей был присужден посмертно. Джеки Икс, выступавший за Ferrari, завершил сезон ' +
                'уверенно, но его низкое 4-е место в предпоследнем раунде обеспечило Риндту лидерство в чемпионате. ' +
                'В итоге все 45 очков Риндта были получены благодаря его пяти победам в сезоне.'
        },
        {
            season: '1980',
            url: 'https://i.ytimg.com/vi/Lr9qkfYLA-E/maxresdefault.jpg',
            wiki: 'https://en.wikipedia.org/wiki/1980_Formula_One_season',
            title: 'Сезон Формулы-1 1980 года',
            description: 'Сезон Формулы-1 1980 года стал 34-м сезоном гонок FIA Formula One. В нем участвовали' +
                ' Чемпионат мира среди водителей 1980 года и Международный кубок конструкторов Формулы-1 1980 года,' +
                ' которые проводились одновременно с 13 января по 5 октября в серии из четырнадцати гонок. В сезоне ' +
                'также была одна гонка вне чемпионата - Гран-при Испании.'
        },
        {
            season: '1990',
            url: 'https://maxf1.net/wp-content/uploads/2014/04/japan_profil_4.jpg',
            wiki: 'https://en.wikipedia.org/wiki/1990_Formula_One_World_Championship',
            title: 'Сезон Формулы-1 1990 года',
            description: 'Чемпионат мира FIA Formula One 1990 года стал 44-м сезоном гонок FIA Formula One. В нем' +
                ' участвовали чемпионат мира «Формула-1» 1990 года для водителей и чемпионат мира «Формула-1» 1990' +
                ' года для конструкторов, которые соревновались одновременно в серии из шестнадцати гонок, которая' +
                ' началась 11 марта и завершилась 4 ноября. Айртон Сенна выиграл чемпионат пилотов во второй раз, а' +
                ' McLaren-Honda выиграл свой третий подряд чемпионат конструкторов.'
        },
        {
            season: '2000',
            url: 'https://cdn-1.motorsport.com/images/mgl/YNyBA4V2/s8/f1-japanese-gp-2000-michael-schumacher-ferrari-f1-2000.jpg',
            wiki: 'https://en.wikipedia.org/wiki/2000_Formula_One_World_Championship',
            title: 'Сезон Формулы-1 2000 года',
            description: 'Чемпионат мира FIA Formula One 2000 года стал 54-м сезоном гонок FIA Formula One.' +
                ' Он начался 12 марта и закончился 22 октября после семнадцати гонок. Михаэль Шумахер стал ' +
                'первым чемпионом мира среди пилотов Ferrari за 21 год, завоевав титул пилота в предпоследней ' +
                'гонке сезона. Ferrari успешно защитила свой титул конструкторов. Этот сезон стал первым для будущего' +
                ' чемпиона мира Дженсона Баттона.'
        },
        {
            season: '2010',
            url: 'https://www.crankandpiston.com/media/2013/04/Formula-1-2010-Chinese-Grand-Prix-Jenson-Button-728x501.jpg',
            wiki: 'https://en.wikipedia.org/wiki/2010_Formula_One_World_Championship',
            title: 'Сезон Формулы-1 2010 года',
            description: 'Чемпионат мира FIA Formula One 2010 стал 64-м сезоном автоспорта FIA Formula One. Red Bull' +
                ' Racing выиграла свой первый кубок конструкторов со счетом один-два в Бразилии, а Себастьян ' +
                'Феттель из Red Bull Racing выиграл чемпионат пилотов после победы в финальной гонке сезона в Абу-Даби.' +
                ' При этом Феттель стал самым молодым чемпионом мира среди пилотов за 61-летнюю историю чемпионата.' +
                ' Победа Феттеля в чемпионате произошла после драматического финала сезона в Абу-Даби, где три других' +
                ' пилота также могли выиграть чемпионат - товарищ Феттеля по команде Red Bull Racing Марк Уэббер, ' +
                'Фернандо Алонсо из Ferrari и Льюис Хэмилтон из McLaren.'
        },
        {
            season: '2020',
            url: 'img/bg.jpg',
            wiki: 'https://en.wikipedia.org/wiki/2020_Formula_One_World_Championship',
            title: 'Сезон Формулы-1 2020 года',
            description: 'Чемпионат мира FIA Формулы-1 2020 года был чемпионатом по автоспорту для автомобилей' +
                ' Формулы-1, который ознаменовал 70-ю годовщину первого чемпионата мира среди водителей Формулы-1.' +
                ' Чемпионат был признан руководящим органом международного автоспорта,' +
                ' "Fédération Internationale de l"Automobile (FIA), как высший класс соревнований для гоночных' +
                'автомобилей с открытыми колесами. Пилоты и команды соревновались за титулы чемпиона мира среди пилотов' +
                'и чемпиона мира среди конструкторов соответственно.'
        },
    ]

    return (
        <div className={classes.root}>
            {seasons.reverse().map((season: ISeason, index) => (
                <Card key={index} className={classes.season1950}>
                    <img alt="1950 preview" className={classes.img}
                         src={season.url}/>
                    <CardContent>
                        <Typography variant='h5'>
                            {season.title}
                            <a href={season.wiki} target={'_blank'} rel="noopener noreferrer"
                               style={{textDecoration: 'none', marginLeft: 3}}>
                                <Chip variant="outlined" size={"small"} label={'Wiki'}
                                      icon={<LocalLibraryIcon/>} clickable={true}/>
                            </a>
                        </Typography>
                        <Typography variant='subtitle1'>{season.description}</Typography>
                        <Link to={'standing-list/' + season.season}>
                            <Button>Подробнее</Button>
                        </Link>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default HomeMain;
