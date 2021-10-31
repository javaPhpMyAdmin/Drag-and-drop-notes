import React, { useState } from 'react'
import { connect } from 'react-redux'

const CreateNote = ({ addNote }) => {

    const [note, setNote] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            note,
            id: Math.floor(Math.random() * 1000),
            date: new Date().toJSON().slice(0, 10),
            isImportant: false,
        }
        addNote(data)
        setNote('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <textarea
                        cols='3'
                        className='form-control'
                        placeholder='Write a new note'
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                    />
                    <button type='submit' className='btn'>Add Note</button>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return ({
        // dispatching plain actions
        addNote: (data) => dispatch({ type: 'ADD_NOTE', payload: data }),
    })
}

export default connect(null, mapDispatchToProps)(CreateNote)
