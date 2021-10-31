import React from 'react'
import { connect } from 'react-redux'

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

const mapDispatchToProps = (dispatch) => {
    return ({
        // dispatching plain actions
        toogleNote: (id) => dispatch({ type: 'CHANGE_IMPORTANT', payload: id }),
    })
}

export default connect(null, mapDispatchToProps)(Note)
