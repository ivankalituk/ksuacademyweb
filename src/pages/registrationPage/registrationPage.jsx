import './registrationPage.scss'

import cat from '../../assets/photos/regBanner.png'
import inputImg from '../../assets/photos/reginput.svg'
import google from '../../assets/photos/Google.svg'

function RegistrationPage(){
    return(
        <div className="registrationPage">
            <div className="registrationPage_container">
                
                <div className="registration_first">
                    <img src={cat} alt="cat" />
                </div>

                <div className="registration_second">
                    <div className="registration_second_container">
                        
                        <div className="registration_logIn"> 
                            <div className="registration_logInJoin_text">Вхід</div>

                            <div className="registration_input">
                                <img src={inputImg} alt="inputImg" />
                                <input type="email" placeholder ="Email"/>
                            </div>

                            <div className="registration_input">
                                <img src={inputImg} alt="inputImg" />
                                <input type="password" placeholder ="Пароль"/>
                            </div>

                            <a href="new password" className="registration_changePas">Забули пароль?</a>

                            <a className="registration_fastLogin" href='GoogleLogIn'>
                                <img src={google} alt="google" /> 
                                <span>Увійти з Google</span>
                            </a>

                            <div className="registration_additional">Ще не зареєстровані? <a href='da'>Реєстрація</a> </div>
                        </div>

                        <div className="registration_join">
                            <div className="registration_logInJoin_text">Реєстрація</div>

                            <div className="registration_input">
                                <img src={inputImg} alt="inputImg" />
                                <input type="email" placeholder ="Email"/>
                            </div>

                            <div className="registration_input">
                                <img src={inputImg} alt="inputImg" />
                                <input type="text" placeholder ="Ім'я користувача"/>
                            </div>

                            <div className="registration_input">
                                <img src={inputImg} alt="inputImg" />
                                <input type="password" placeholder ="Пароль"/>
                            </div>

                            <div className="registration_additional">Вже є аккаунт? <a href='da'>Вхід</a> </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationPage;