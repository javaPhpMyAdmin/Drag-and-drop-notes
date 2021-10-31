import React from 'react'
import Note from './Note'
import { connect } from 'react-redux'

const AllNotes = ({ notes }) => {

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

const mapStateToProps = (state) => {
    const { notes } = state

    return { notes }
}

export default connect(mapStateToProps)(AllNotes)
