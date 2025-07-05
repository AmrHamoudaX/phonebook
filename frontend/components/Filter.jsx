

function Filter({toSearch, handleToSearch}){

    return(

          <p> filter shown with <input value={toSearch} onChange={handleToSearch} /> </p>
    )
}

export default Filter
