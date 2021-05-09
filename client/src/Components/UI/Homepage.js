import React from 'react';
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper, Typography, Button } from '@material-ui/core';
import './Homepage.css';

const useStyles = makeStyles((theme) => ({
	title: {
		fontFamily: 'Bowlby One SC',
		color: '#ffffff',
		margin: theme.spacing(6),
		marginTop: '4em',
	},
	button: {
		fontFamily: 'Bowlby One SC',
		backgroundColor: '#000000',
		color: '#ffffff',
		padding: theme.spacing(3),
		margin: theme.spacing(5),
		marginLeft: theme.spacing(5),
		borderRadius: '15px',
		width: '20vh',
	},
}));

const Homepage = () => {
	const classes = useStyles();
	return (
		<>
			<Header />
			<Grid className='bg'>
				<Container>
					<Typography variant='h5' className={classes.title}>
						Choose your proffession:
					</Typography>
					<Grid xs={8}>
						<Button variant='contained' className={classes.button}>
							Scientist
						</Button>
						<Button variant='contained' className={classes.button}>
							Layman
						</Button>
					</Grid>
				</Container>
			</Grid>
		</>
	);
};

export default Homepage;
