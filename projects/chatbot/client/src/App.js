import React from 'react'
import Bot from './components/Bot'
import Chat from './components/Chat'
import { Switch, Route } from 'react-router-dom'
import './App.css'

const App = () => {
    return (
        <div className='diver'>
            <Switch>
                <Route exact path='/' component={ Bot }/>
                <Route path='/chat' component={ Chat }/>
            </Switch>
        </div>
    )
}

export default App