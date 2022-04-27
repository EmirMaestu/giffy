import { Link } from 'wouter'
import './Home.css'


const Home = () => {
    return (
        <div className='home'>
            <h3>Gifs populares:</h3>
            <Link to='/gif/panda'>Gif de pandas</Link>
            <Link to='/gif/messi'>Gif de Messi</Link>
            <Link to='/gif/cr7'>Gif de CR7</Link>
        </div>
    )
}

export default Home
