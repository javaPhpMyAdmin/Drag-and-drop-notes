import React, { useState } from 'react'
import AllNotes from './components/AllNotes'
import CreateNote from './components/CreateNote'
import ImportantNotes from './components/ImportantNotes'
import './index.css'

const App = () => {
    const [notes, setNotes] = useState([])

    const createNote = (newNote) => {
        setNotes([...notes, newNote])
    }

    const toogleNote = (id) => {

        const aux_notes = notes.slice()
        const index_note = aux_notes.findIndex((note) => note.id === id)
        const find_note = aux_notes[index_note]
        const aux_find_note = { ...find_note, isImportant: !find_note.isImportant }

        aux_notes[index_note] = aux_find_note

        setNotes(aux_notes)
    }

    return (
        <div className='container mt-3 p-3'>
            <CreateNote createNote={createNote} />
            <hr />
            <ImportantNotes notes={notes} toogleNote={toogleNote} />
            <hr />
            <AllNotes notes={notes} toogleNote={toogleNote} />
        </div>
    )
}

export default App
