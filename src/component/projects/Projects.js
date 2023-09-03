import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import javaScript from '../../assets/lang/javaScript.png';
import typeScript from '../../assets/lang/typeScript.png';
import netCore from '../../assets/lang/netCore.png';

import Project from './Project';


const useStyles = makeStyles(theme => ({
    main: {
        color: '#ffffff'
    },
    navTitle: {
        backgroundColor: 'rgb(0,0,0,0.5)',
        paddingLeft: '1.2em',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '0em'
        }
    },
    gridItemAll: {
        marginTop: '2em',
        width:'100%'
    },

}));
 
const myProjects = [
    {
        type: 'TypeScript',
        name: 'Cake Ordering App',
        features: 'Cake Ordering, Order status, Admin User, Login and Logout and more. Login credentials are available in Cover Letter',
        technology: 'Node JS, TypeScript, React, Redux Toolkit, Express, MongoDB, Material UI and AWS EC2 instance to deploy.',
        gitLink: 'https://github.com/mahmudulhasan5050/cake_ordering_app',
        link: 'http://ec2-16-170-228-119.eu-north-1.compute.amazonaws.com/',
        image: typeScript
    },
    {
        type: 'JavaScript',
        name: 'ChatGPT with Voice',
        features: 'In this application user can use ChatGPT writing text and using own voice',
        technology: 'JavaScript, React, NodeJs, react-speech-recognition API, OpenAI API',
        gitLink: 'https://github.com/mahmudulhasan5050/ChatGPT_voice',
        link: '',
        image: javaScript
    },
    {
        type: 'TypeScript',
        name: 'Country Info App',
        features: 'Country Info Table, Searching, Individual Country Info, Favorite Country Table and Mobile Responsive. ',
        technology: 'TypeScript, React, Redux and Material UI',
        gitLink: 'https://github.com/mahmudulhasan5050/project_country_info',
        link: 'https://ephemeral-valkyrie-4e4e57.netlify.app/',
        image: typeScript
    },
    {
        type: 'JavaScript',
        name: 'Breweries Info App',
        features: 'List of Breweries Info, Searching, Individual Brewery Info and Mobile Responsive.',
        technology: 'JavaScript, React and Material UI',
        gitLink: 'https://github.com/mahmudulhasan5050/project_breweries',
        link: 'https://vigilant-noyce-f53e5e.netlify.app/',
        image: javaScript
    },
    {
        type: '.NET Core 6 C#',
        name: 'Naan&Curry',
        features: 'Dynamic buffet menu change according to the date and a la carte menu and table booking.',
        technology: 'C#, .NET Core 6 framework, Bootstrap template, MailKit',
        gitLink: 'https://github.com/mahmudulhasan5050/naanNcurry',
        link: '',
        image: netCore
    }
]

export default function Projects() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

 console.log(myProjects)
    return (

        <Grid container direction='column' justify='center' className={classes.main}>
            <Grid item >
                <Typography variant='h4'
                    className={classes.navTitle}
                    align={matchesSm ? 'center' : undefined}>
                    Projects
                </Typography>
            </Grid>
            <Grid item>
                <Grid container justify='center'>
                    {myProjects.map((myPro, i) =>
                        <Grid item sm={12} md={4} className={classes.gridItemAll} key={i}>
                            <Project myPro={myPro} />
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </Grid>
    )
}