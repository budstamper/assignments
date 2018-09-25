import React from 'react'
import Bot from './components/Bot'
import Mokky from './components/Mokky'
import Bastiat from './components/Bastiat'
import { Switch, Route } from 'react-router-dom'
import './App.css'

const App = () => {
    return (
        <div className='diver'>
            <Switch>
                <Route exact path='/' component={ Bot }/>
                <Route path='/mokky' component={ Mokky }/>
                <Route path='/bastiat' component={ Bastiat } />
            </Switch>
        </div>
    )
}

export default App