

function PersonForm({handleSubmit, newName,handleNewName,newNumber,handleNewNumber}){


    return(
    <>
      <form onSubmit={handleSubmit}>
        <div>
        name: <input value={newName} onChange={handleNewName}/>
        number: <input value={newNumber} onChange={handleNewNumber}/>
        </div>
        <div>
        <button type='submit'> add </button>
        </div>
      </form>
    </>
    )
}

export default PersonForm
