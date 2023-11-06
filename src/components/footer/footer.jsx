import "./footer.scss"

import logo from "../../assets/photos/logo.svg"
import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer>
            <div className="footer_container">
                <div className="footer_inner">
                    <div className="footer_mainInfo">
                        <a className="footer_mainInfo_heading" href="mainPage">
                            <img src={logo} alt="logo" />
                            <span>ksu academy</span>
                        </a>
                        <div className="footer_mainInfo_info">
                            Академія представляє широкі можливості для комунікації та взаємодії 
                            учасників навчального процесу. система створює і зберігає портфоліо 
                            кожного учня: всі здані ним роботи, всі повідомлення у форумі, всі 
                            оцінки і коментарі викладача до робіт.
                        </div>
                    </div>

                    <div className="footer_links">
                        <div className="footer_links_mainLinks">
                            <Link to="/profile">Профіль</Link>
                            <Link to="/registration">Реєстрація</Link>
                            <a href="SAMPLE">Sample link</a>
                            <a href="SAMPLE">Sample link</a>
                            <a href="SAMPLE">Sample link</a>
                        </div>

                        <div className="footer_themelinks">
                            <div className="footer_themeLinks_name">Theme name</div>
                            
                            <a href="SAMPLE">Theme link</a>
                            <a href="SAMPLE">Theme link</a>
                            <a href="SAMPLE">Theme link</a>
                            <a href="SAMPLE">Theme link</a>
                            <a href="SAMPLE">Theme link</a>
                            <a href="SAMPLE">Theme link</a>
                        </div>

                        <div className="footer_themelinks">
                            <div className="footer_themeLinks_name">Theme name</div>

                            <a href="SAMPLE">Theme link</a>
                            <a href="SAMPLE">Theme link</a>
                            <a href="SAMPLE">Theme link</a>
                            <a href="SAMPLE">Theme link</a>
                            <a href="SAMPLE">Theme link</a>
                            <a href="SAMPLE">Theme link</a>
                            <a href="SAMPLE">Theme link</a>
                            <a href="SAMPLE">Theme link</a>                            
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;