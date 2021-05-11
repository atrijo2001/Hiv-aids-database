import React, { useContext, useEffect, useState } from 'react';
import ProteinContext from '../../../context/ProteinContext/ProteinContext';
import Spinner from '../../UI/Spinner';

import Header from '../../UI/Header';
import Footer from '../../UI/Footer';
import ProteinComp from './ProteinComp';

import { TextField, Container, Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import styles from "./Proteins.module.css"

const useStyles = makeStyles(() => ({
    title: {
        fontFamily: 'Bowlby One SC',
        color: '#000000',
        marginTop: '1rem',
        textAlign: 'center'
    },
    text: {
        width: '40%',
        marginRight: '0.5rem',
        color: '#fff'
    },
    cardStyles: {
        marginTop: '0.5rem'
    },
    footerStyles: {
        marginTop: '6rem'
    }

}));

const GetAllProtein = () => {
	const classes = useStyles();



    const proteinContext = useContext(ProteinContext);
    const {allProteins, error, FetchProteins} = proteinContext
    const [pdb, setPdb] = useState('')
    const [structure, setStructure] = useState('')
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
       FetchProteins(pdb, structure);
       setLoading(false);
    }, [pdb, structure])


    return (
        <div className={styles.sb} style={{background: 'linear-gradient(90deg, #221E1B -1.67%, #262320 98.54%)'}}>
        <Header/>
            <Container>
                <div style={{textAlign: 'center'}}>
                    <TextField variant='filled' className={classes.text} id="pdb" label="PDB Accession Id" onChange={(e)=> setPdb(e.target.value)}/>
                    <TextField variant='filled' className={classes.text} id="structure" label="Structure" onChange={(e)=> setStructure(e.target.value)}/>
                </div>
                    {!loading && !error && allProteins? allProteins.map((protein, key)=><Card className={classes.cardStyles}><ProteinComp key={key} protein={protein}/></Card>):<Spinner/>}
            </Container>
           <Footer className={classes.footerStyles}/>
        </div>
    )
}

export default GetAllProtein
