import React from 'react'
import {Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"


const useStyles = makeStyles(() => ({
    title: {
        fontFamily: 'Bowlby One SC',
        color: '#000000',
        marginTop: '1rem',
        textAlign: 'center'
    }
}));
const DrugComp = ({drug}) => {
    const classes = useStyles()
    return (
        <div className="bg" style={{background: 'chocolate'}}>
                        <Typography variant='h5' className={classes.title}>Name: {drug.name}</Typography>
                        <Typography paragraph={true} >Interactions: {drug.interactions}</Typography>
                        <Typography variant='body1' className={classes.title}>Pubmed Links:</Typography>
                        <ul>
                            {drug.pubMedLink.map((link, key)=><Typography variant='body1' key={key}>
                                <a href={link}>{link}</a></Typography>)}
                        </ul>
                        <Typography variant='body1' className={classes.title}>Side Effects:</Typography>
                        <Typography variant='body1'>{drug.sideEffects}</Typography>
                        <Typography variant='body1' className={classes.title}>Target:</Typography>
                        <Typography variant='body1'>{drug.target}</Typography>
                        <Typography variant='body1' className={classes.title}>Uses:</Typography>
                        <Typography variant='body1'>{drug.uses}</Typography>
        </div>        
    )
}

export default DrugComp
