const Pagination = ({proteinsPerPage, totalProteins, paginate}) => {
    const pageNumbers = []
    for(let i = 1; i<Math.ceil(totalProteins/proteinsPerPage); i++){
        pageNumbers.push(i)
    }
    return (
            <nav>
                <ul className="pagination mb-6 pb-5">
                {pageNumbers.map(number=>(
                    <li key={number} className='page-item'>
                        <a onClick={()=>paginate(number)} href="/scientist/getallproteins" className='page-link'>{number}</a>
                    </li>
                ))}   
                </ul> 
            </nav>
    )
}

export default Pagination
