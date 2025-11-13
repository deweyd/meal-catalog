import './Footer.scss'
import Logo from "../Logo/index.jsx";

function Footer() {
    return (
        <div className={"footer"}>
            <div className="container-wrap">
                <div className="footer__top">
                    <Logo/>
                    <div className="footer__box">
                        © 2025. All rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;