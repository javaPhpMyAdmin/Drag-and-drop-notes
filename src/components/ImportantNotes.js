import React from 'react'
import { connect } from 'react-redux'
import Note from './Note'

const ImportantNotes = ({ notes }) => {
    return (
        <div>
            <h5>
                IMPORTANT NOTES
            </h5>
            <div className='importantNotes row'>
                {
                    notes.filter((note) => note.isImportant === true).map(note => (
                        <Note data={note} key={note.id} />
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    notes: state.notesReducer.notes
})

export default connect(mapStateToProps)(ImportantNotes)
