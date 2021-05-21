import React, { useContext, useEffect, useRef } from 'react'
import ProteinContext from "../../../context/ProteinContext/ProteinContext"

const ProteinFilter = () => {
    const proteinContext = useContext(ProteinContext);
    const {filtered, filterProteins, clearFilter} = proteinContext
    const text = useRef('');
    useEffect(()=>{
        if (filtered === null) {
            text.current.value = '';
        }
    })

    const onChange = e => {
        if (text.current.value !== '') {
          filterProteins(e.target.value);
          console.log(filtered)
        } else {
          clearFilter();
        }
      };
    return (
        <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Proteins...'
        onChange={onChange}
      />
    </form>
    )
}

export default ProteinFilter
