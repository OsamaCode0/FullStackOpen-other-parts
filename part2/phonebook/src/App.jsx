import { useState } from 'react';

import Filter from './components/Filter';
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'





const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-123456' }]);
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')

  const addNote = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
      return;
    }

    setPersons(persons.concat({ name: newName, number: newPhone }))
    setNewName('')
    setNewPhone('')
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  };

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  };

  const personsToShow = filter
  ? persons.filter((person) =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    )
  : persons;


  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h3>Add a new</h3>
      <PersonForm
        addNote={addNote}
        newName={newName}
        handleNameChange={handleNameChange}
        newPhone={newPhone}
        handlePhoneChange={handlePhoneChange}
      />

      <h3>Numbers</h3>
      <Persons persons={personsToShow} />
    </div>
  );
};

export default App;
