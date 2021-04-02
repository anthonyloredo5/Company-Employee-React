import "./Header.css";
import img from "../../src/logo.svg";

function Header() {
    return (
        <header class="header">
            <img alt="react" class="img" src={img}></img>
            <h1>Employee Directory</h1>
        </header>
    );
}

export default Header;