import { Link } from 'react-router-dom';

const NavBar = (params) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <Link to="/" className="navbar-brand">Travel Blogs</Link>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cal-travel-exp" className="nav-link">Calculate Travel Expenses</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <div>
                    Login
                </div>
                <div>
                    Sing up
                </div>
            </div>
        </nav>
    )
}

export default NavBar;