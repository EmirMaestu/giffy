import { Link, Route } from 'wouter'
import './App.css'
import Home from './components/Home'
import ListOfGifs from './components/ListOfGifs'
import Logo from './img/logo.jpg'

function App() {
    return (
        <div className='App'>
            <section className='App-content'>
                <Link to='/'><img className='logo' src={Logo} alt='' /></Link>
                <Route component={Home} path='/' />
                <Route component={ListOfGifs} path='/gif/:keyword' />
                {/* <Route component={Detail} path='/gif/:id' /> */}
            </section>
        </div>
    )
}

export default App
