import React, { useContext, useState } from 'react'
import DetailsContext from "../../../context/DetailsContext/DetailsContext";

const StateWiseDetails = () => {
    const [name, setName] = useState('')
    const [fetched, setFetched] = useState(false)
    const detailsContext = useContext(DetailsContext);
    const {FetchStateDetails, particularStateDetails} = detailsContext;
    const onSubmit = (e) => {
         e.preventDefault();
         FetchStateDetails(name);
         setFetched(true);
    }
    if(fetched){
        console.log(particularStateDetails)
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                <label htmlFor="name">Please enter the name of the state</label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default StateWiseDetails
