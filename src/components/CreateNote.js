import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add_new_note } from '../Redux/actions/notes.actions'

const CreateNote = () => {

    const [note, setNote] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            note,
            id: Math.floor(Math.random() * 1000),
            date: new Date().toJSON().slice(0, 10),
            isImportant: false,
        }
        dispatch(add_new_note(data))
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

// export default connect(null, { add_new_note })(CreateNote)
export default CreateNote
