
const initialState = {
    notes: [{
        id: 1,
        date: '30/10/21',
        note: 'Im a note',
        isImportant: false,
    },
    {
        id: 2,
        date: '30/10/21',
        note: 'Im a note',
        isImportant: false,
    }
    ]
}

const reducer = (previousState = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case 'ADD_NOTE':
            return {
                ...previousState,
                notes: [...previousState.notes, payload]
            }
        case 'CHANGE_IMPORTANT':
            return {
                ...previousState,
                notes: previousState.notes.map((note) =>
                    note.id === payload
                        ?
                        { ...note, isImportant: !note.isImportant }
                        : note
                )
            }
        default:
            return previousState
    }
}

export default reducer