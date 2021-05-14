import React from 'react'

import {Typography, CardContent, Button} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"


const useStyles = makeStyles(() => ({
    button: {
        fontFamily: 'Bowlby One SC',
        background: '#000000',
        color: '#fff',
        padding: '1rem',
        margin: '1rem',
        width: '70%',
        borderRadius: '12px'
    }
   
}));


const StateComp = ({state}) => {
    const classes = useStyles()
    console.log(state)
    return (
        <CardContent>
            <div style={{textAlign: 'center'}}>
               <Typography variant='p'>Name: {state.state}</Typography>
               <br />
               <Typography variant='p'>Cases: {state.cases}</Typography>
               <br />
               <Typography variant='p'>Deaths: {state.deaths}</Typography>
               <br />
               <Button className={classes.button}>More Details</Button>
            </div>
        </CardContent>
    )
}

export default StateComp
