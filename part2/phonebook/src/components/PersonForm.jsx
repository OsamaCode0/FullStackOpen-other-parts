
const PersonForm = ({addNote, handleNameChange, handlePhoneChange, newPhone, newName}) => {

    return (
      <div>
         <form onSubmit={addNote}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newPhone} onChange={handlePhoneChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
      </div>
    )
}

export default PersonForm
