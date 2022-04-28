import React from 'react'
import './App.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'

import { Link, Route } from 'wouter'
import StaticContext from './context/StaticContext'

function App() {
    return (
        <StaticContext.Provider value={{ name: 'Emir' }}>
            <div className='App'>
                <section className='App-content'>
                    <Link to='/'>
                        <img
                            className='App-logo'
                            alt='Giffy logo'
                            src='/logo.png'
                        />
                    </Link>
                    <Route component={Home} path='/' />
                    <Route component={SearchResults} path='/search/:keyword' />
                    <Route component={Detail} path='/gif/:id' />
                </section>
            </div>
        </StaticContext.Provider>
    )
}

export default App
