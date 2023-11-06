import { Link } from "react-router-dom";
import "./account.scss"

function Account(){
    return(
        <div className="account">
            <div className="account_nonauthorized">
                <Link to="/registration" className="logIn">Вхід</Link>
                <Link to="/registration" className="registration">Реєстрація</Link>
            </div>

            <a className="account_authorized" href="account">
                <span>testLongNickname</span>
                <div className="account_avatar">
                    <img src="" alt="avatar" />
                </div>
            </a>
        </div>
    )
}

export default Account;