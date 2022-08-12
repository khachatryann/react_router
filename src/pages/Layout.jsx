import {Outlet, Link} from "react-router-dom";

export function Layout() {
    return(
        <>
        <nav>
            <ul style={{
                display: 'flex', 
                justifyContent: 'space-around', 
                listStyleType: 'none'
                }}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/properties">Properties</Link>
                </li>
            </ul>
        </nav>

        <Outlet />
        </>
    );
}