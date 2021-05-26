import React from 'react'
import StateChart from "./StateChart"

import {Typography, CardContent, Button} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import {Link} from "react-router-dom"


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
    const {_id} = state
    const classes = useStyles()
    return (
        <CardContent>
            <div style={{textAlign: 'center'}}>
               <Typography variant='p'>Name: {state.state}</Typography>
               <br />
               <Typography variant='p'>Cases: {state.cases}</Typography>
               <br />
               <Typography variant='p'>Deaths: {state.deaths}</Typography>
               <br />
               <Link to={`/layman/statewisedetails/${_id}`}>
                   <Button className={classes.button}>More Details</Button>
               </Link>
            </div>
        </CardContent>
    )
}

export default StateComp
