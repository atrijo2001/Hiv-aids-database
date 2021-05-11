import React from 'react'

import {Card, Typography, Container} from "@material-ui/core"
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
    const {pdbAccessionId} = protein
    console.log(pdbAccessionId)
    return (
        <>
                        <Typography variant='h5' className={classes.title}>Name: {protein.organism}</Typography>
        </>
    )
}

export default ProteinComp
