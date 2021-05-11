import React from 'react'

import {Card, Typography, Container, Grid} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
    title: {
        fontFamily: 'Bowlby One SC',
        color: '#000000',
        marginTop: '1rem',
        textAlign: 'center'
    }
}));

const ProteinComp = ({protein}) => {
    const classes = useStyles()
    const {pdbAccessionId, image, macromolecules, method, organism, releaseDate, structureDetails, uniqueLigands, organism} = protein
    console.log(protein)
    return (
        <>
                        <Typography variant='h5' className={classes.title}>Name: {organism}</Typography>
                        <Grid>

                        </Grid>
                        <Typography variant='p'></Typography>
        </>
    )
}

export default ProteinComp
