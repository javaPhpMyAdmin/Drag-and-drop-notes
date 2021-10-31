import { db } from '../../firebase'
import { ADD_NOTE, LOAD_NOTES, SET_LOADER } from "../types"
import { doc, setDoc, getDocs, collection, updateDoc } from "firebase/firestore"

export const add_new_note = (data) => async (dispatch) => {

    try {
        dispatch({
            type: SET_LOADER
        })

        await setDoc(doc(db, 'notes', data.id.toString()), data);

        dispatch({
            type: ADD_NOTE,
            payload: data
        })

    } catch (error) {
        console.log(error.message);
    }
}

//I NEED TO IMPROVE THIS METHOD, I THINK IT'S SUCK BUT FOR NOW IT'S WORKS
export const toogleNote = (id) => async (dispatch) => {
    try {

        dispatch({
            type: SET_LOADER
        })
        const snapshot = await getDocs(collection(db, 'notes'));

        let aux_boolean = false

        snapshot.forEach(doc => (
            doc.data().id === id ? aux_boolean = doc.data().isImportant : null
        ))

        const snapshot2 = doc(db, 'notes', id.toString())

        await updateDoc(snapshot2, {
            isImportant: !aux_boolean,
        })

        dispatch(load_notes())

    } catch (error) {
        console.log(error.message)
    }
}

export const load_notes = () => async (dispatch) => {
    try {

        dispatch({
            type: SET_LOADER
        })

        const snapshot = await getDocs(collection(db, 'notes'));

        const all_notes = []

        snapshot.forEach(doc => all_notes.push(doc.data()))

        dispatch({
            type: LOAD_NOTES,
            payload: all_notes
        })

    } catch (error) {
        console.log(error.message)
    }
}