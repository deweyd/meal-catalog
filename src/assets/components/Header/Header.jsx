import './Header.scss'
import {useState} from "react";
import Logo from "../Logo/Logo.jsx";
import Search from "../Search/index.jsx";
import { Link } from "react-router-dom";


function Header() {
    const [click, setClick] = useState(null)
    return (
        <div className={"header"}>
            <div className="container-wrap">
                <div className={"header__left"}>
                    <Logo/>
                </div>
                <div className={"header__right"}>
                    <Link to="/catalog" className="header__link">
                        Catalog of meals
                    </Link>
                    {/*<Link to="/about" className="header__link">*/}
                    {/*    Про ехінодоруси*/}
                    {/*</Link>*/}
                    <Search/>
                </div>
            </div>
        </div>
    );
}

export default Header;