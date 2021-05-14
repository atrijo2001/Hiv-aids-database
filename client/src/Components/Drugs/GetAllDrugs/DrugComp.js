import React from 'react'
import {Typography, Button} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"


const useStyles = makeStyles(() => ({
    title: {
        fontFamily: 'Bowlby One SC',
        color: '#000000',
        marginTop: '1rem',
        textAlign: 'center'
    },
    buttonStyles: {
        padding: ' 1rem 3rem',
        color: '#fff',
        backgroundColor: '#000',
        margin: '0 1rem',
        marginBottom: '1rem',
        borderRadius: '8px'
    }
}));
const DrugComp = ({drug}) => {
    const classes = useStyles()
    return (
        <div>
            <Typography variant='h5' className={classes.title}>Name: {drug.name}</Typography>
            <Typography variant='body1' className={classes.title}>Pubmed Links:</Typography>
            <ul>
                {drug.pubMedLink.map((link, key)=><Typography variant='body1' key={key}>
                <a href={link}>{link}</a></Typography>)}
            </ul>
            <Typography variant='h5' className={classes.title}>Target: {drug.target}</Typography>
            <br />
            <Button className={classes.buttonStyles}>Uses</Button>
            <Button className={classes.buttonStyles}>SideEffects</Button>
            <Button className={classes.buttonStyles}>Precautions</Button>
            <Button className={classes.buttonStyles}>Interactions</Button>
        </div>        
    )
}

export default DrugComp
