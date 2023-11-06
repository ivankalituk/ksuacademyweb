import './profilePage.scss'

import profileLogo from "../../assets/photos/profilePhotoEx.png"
import settings from "../../assets/photos/settings.svg"

import Sertificate from './components/certificate/sertificate'

import { Link } from 'react-router-dom'

function ProfilePage(){
    return(
        <div className="profilePage">
            <div className="profilePage_container">
                <div className="firstPart">
                    <div className="profile_progress">Прогрес</div>
                </div>

                <div className="secondPart">
                    <div className="profile_profileInfo">
                        <div className="profile_profileInfo_container">

                            <div className="profile_profileInfo_account">
                                
                                <img src={profileLogo} alt="avatar" />

                                <div className="profile_account">
                                    <div className="profile_account_nickname">
                                        <span>Nickname nicknamovich</span>
                                        <a href="settings"><img src={settings} alt="settings" /></a>
                                    </div>

                                    <div className="profile_account_tag">
                                        Вчитель
                                    </div>
                                </div>

                            </div>

                            <div className="profile_coursesEnded">
                                <div className="profile_coursesEnded_num">12</div>
                                <span>Курсів пройдено</span>
                            </div>
                            
                        </div>
                    </div>
                         
                    <div className="profile_certificates">
                        <div className="profile_certificates_container">
                            <div className="profile_certificates_heading">Сертифікати</div>

                            <div className="profile_certificates_list">
                                <Sertificate></Sertificate>
                                <Sertificate></Sertificate>
                                <Sertificate></Sertificate>
                                <Sertificate></Sertificate>
                                <Sertificate></Sertificate>
                                <Sertificate></Sertificate>
                                <Sertificate></Sertificate>
                            </div>
                        </div>
                    </div>
                    
                    <Link className="profile_createMaterial" to='/SubjectDevelopment'>+ Створити Курс</Link>

                    <div className="profile_subjectProgress">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProfilePage;