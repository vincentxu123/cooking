import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <header>
            <Link to="/groceries" style={{color: "white"}}> <h1>GROCERIES</h1></Link>
            <Link to="/recipes" style={{color: "white"}}>  <h1>RECIPES</h1></Link>
        </header>
        
    )
}

export default Home;