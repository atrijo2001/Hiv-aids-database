import React, { useContext, useEffect } from 'react'
import DetailsContext from "../../../context/DetailsContext/DetailsContext"

const AllDetails = () => {
    const detailsContext = useContext(DetailsContext);
    const {fetchDetails, stateWiseDetails} = detailsContext

    useEffect(()=>{
        fetchDetails()
    }, [])

    if(stateWiseDetails.length>0){
        console.log(stateWiseDetails)
    }
    return (
        <div>
            {stateWiseDetails.length>0 ? stateWiseDetails[10].services : <h2>henlo</h2>}
        </div>
    )
}

export default AllDetails
