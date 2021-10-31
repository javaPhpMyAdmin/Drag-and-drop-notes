import { ADD_NOTE, LOAD_NOTES, SET_LOADER } from "../types"
const initialState = {
    notes: [],
    loading: false
}

const reducer = (previousState = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case ADD_NOTE:
            return {
                ...previousState,
                loading: false,
                notes: [...previousState.notes, payload]
            }

        case LOAD_NOTES:
            return {
                ...previousState,
                loading: false,
                notes: payload
            }

        case SET_LOADER:
            return {
                ...previousState,
                loading: true
            }

        default:
            return previousState
    }
}

export default reducer