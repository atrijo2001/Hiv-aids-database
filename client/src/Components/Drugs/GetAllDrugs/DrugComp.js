import React from 'react'
import {Container, Typography, Card} from "@material-ui/core"
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
    console.log(drug)
    return (
        <div className="bg" style={{overflow: 'auto', background: 'chocolate'}}>
            <Container>
                <div style={{textAlign: 'center', marginTop: '1rem'}}>
                    <Card>
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
                    </Card>
                </div>
            </Container>
        </div>        
    )
}

export default DrugComp
