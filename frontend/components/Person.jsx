function Person({person, handleDelete}){
  return(

          <div>
          <li> {person.name}: {person.number} </li>
            <button onClick={handleDelete}> Delete </button>
          </div>
  )

        }

export default Person
