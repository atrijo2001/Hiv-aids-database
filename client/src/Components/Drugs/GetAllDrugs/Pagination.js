const Pagination = ({drugsPerPage, totalDrugs, paginate}) => {
    const pageNumbers = []
    for(let i = 1; i<Math.ceil(totalDrugs/drugsPerPage); i++){
        pageNumbers.push(i)
    }
    console.log(drugsPerPage)
    return (
            <nav>
                <ul className="pagination mb-6 pb-5">
                {pageNumbers.map(number=>(
                    <li key={number} className='page-item'>
                        <a onClick={()=>paginate(number)} className='page-link'>{number}</a>
                    </li>
                ))}   
                </ul> 
            </nav>
    )
}

export default Pagination
