import React, { useContext, useEffect, useState } from 'react'
import ProteinContext from "../../../context/ProteinContext/ProteinContext";
import Spinner from "../../UI/Spinner"

const GetAllProtein = () => {
    const proteinContext = useContext(ProteinContext);
    const {allProteins, error, FetchProteins} = proteinContext
    const [pdb, setPdb] = useState('')
    const [structure, setStructure] = useState('')
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
       FetchProteins(pdb, structure);
       setLoading(false);
    }, [pdb, structure])

    if(allProteins.length>0){
        console.log(allProteins)
    }
    return (
        <div>
           <label htmlFor="pdb">Enter pdb accession id</label>
           <input type="text" value={pdb} onChange={(e)=>setPdb(e.target.value)}/>

           <label htmlFor="structure">Enter some key structure details</label>
           <input type="text" value={structure} onChange={(e)=>setStructure(e.target.value)} />
        </div>
    )
}

export default GetAllProtein
