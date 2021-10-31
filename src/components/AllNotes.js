import React from 'react'
import Note from './Note'
import { useSelector } from 'react-redux'

const AllNotes = () => {

    const notes = useSelector(state => state.notesReducer.notes)

    return (
        <div className='my-3'>
            <h5>All Notes</h5>
            <div className='row'>
                {
                    notes.map((note) => (
                        <Note data={note} key={note.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default AllNotes