import React, { useContext, useEffect, useState } from 'react';
import ProteinContext from '../../../context/ProteinContext/ProteinContext';
import Spinner from '../../UI/Spinner';

import Header from '../../UI/Header';
import Footer from '../../UI/Footer';
import ProteinComp from './ProteinComp';

import { TextField, Container, Card, Typography } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

import ProteinFilter from "./ProteinFilter"

const useStyles = makeStyles((theme) => ({
	title: {
		fontFamily: 'Bowlby One SC',
		color: '#000000',
		marginTop: '1rem',
		textAlign: 'center',
	},
	text: {
		width: '40%',
		marginRight: '0.5rem',
		color: '#fff',
		marginTop: theme.spacing(2),
	},
	input: {
		backgroundColor: 'white',
	},
	cardStyles: {
		margin: theme.spacing(2),
	},
}));

const GetAllProtein = () => {
	const classes = useStyles();

	const proteinContext = useContext(ProteinContext);
	const { allProteins, error, FetchProteins, filtered} = proteinContext;
	const [pdb, setPdb] = useState('');
	const [structure, setStructure] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		FetchProteins(pdb, structure);
		setLoading(false);
	}, [pdb, structure]);

	return (
		<div
			style={{
				background: 'linear-gradient(90deg, #221E1B -1.67%, #262320 98.54%)',
			}}
		>
			<Header />
			<Container>
				<div style={{ textAlign: 'center' }}>
					<TextField
						className={classes.text}
						id='pdb'
						variant='outlined'
						label='PDB Accession Id'
						onChange={(e) => setPdb(e.target.value)}
						InputProps={{
							className: classes.input,
						}}
					/>
					<ProteinFilter/>
				</div>
				{!loading && !error && filtered!==null
					? filtered.map((protein, key) => (
							<Card className={classes.cardStyles}>
									<ProteinComp key={key} protein={protein} />
							</Card>
					  ))
					: allProteins.map((protein, key) => (
						<Card className={classes.cardStyles}>
								<ProteinComp key={key} protein={protein} />
						</Card>
				  ))}
			</Container>
			<Footer />
		</div>
	);
};

export default GetAllProtein;