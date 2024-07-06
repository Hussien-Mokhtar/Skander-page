import { Link } from "react-router-dom";
function Navbar(){
return(
<>
<nav>
<div className="container">
    <div className="left">
<h1>Skander Blaiti</h1>
    </div>
    <div className="right">
        <ul>
            <li><Link to="/">{"<Home/>"}</Link></li>
            <li> <Link to="/About">About</Link> </li>
            <li><Link to="/Contact">Contact</Link></li>
        </ul>

    </div> 
</div>
</nav>
</>
)
}
export default Navbar;