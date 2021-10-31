import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import AllNotes from './components/AllNotes'
import CreateNote from './components/CreateNote'
import ImportantNotes from './components/ImportantNotes'
import './index.css'
import { load_notes } from './Redux/actions/notes.actions'
import { storee } from './Redux/Store'

const App = ({ loading }) => {

    useEffect(() => {
        storee.dispatch(load_notes())
    }, [])

    return (
        <div className='container mt-3 p-3'>
            <CreateNote />
            <hr />
            {
                loading &&
                <div className='text-center'>
                    <div className='spinner-border my-3'></div>
                </div>
            }
            <ImportantNotes />
            <hr />
            <AllNotes />
        </div>
    )
}

const mapStateToProps = (state) => ({
    loading: state.notesReducer.loading,
})

export default connect(mapStateToProps)(App)
