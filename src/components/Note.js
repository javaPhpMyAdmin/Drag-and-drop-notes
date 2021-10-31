import React from 'react'
import { connect } from 'react-redux'
import { toogleNote } from '../Redux/actions/notes.actions'

const Note = ({ data: { date, note, isImportant, id }, toogleNote }) => {

    return (
        <div className='card m-2'>
            <div className='card-header'>
                {date}
            </div>
            <div className='card-body'>
                {note}
            </div>
            <button className='btn m-2' onClick={() => toogleNote(id)}>{isImportant ? 'Remove from important' : 'Add to Important'}</button>
        </div>
    )
}

export default connect(null, { toogleNote })(Note)
