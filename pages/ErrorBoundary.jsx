import { Link } from "react-router-dom";
import Navbar from "../src/components/NavBar";

export default function ErrorBoundary() {
    return (<div>
        <Navbar />
        <div className="errorstyle">
            <h1 id="errorh1">Error [404]</h1>
            <p>
                Podana strona nie istnieje!
            </p>
            <Link to="/">STRONA GŁÓWNA</Link>
        </div>
        </div>
    )
}