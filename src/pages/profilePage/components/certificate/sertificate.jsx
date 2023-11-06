import './sertificate.scss'

import sertificate from "../../../../assets/photos/sertificateSample.png"

function Sertificate(){
    return(
        <div className="profile_sertificate">
            <div className="profile_sertificate_container">
                <div className="profile_sertificate_dekoBlock"></div>

                <div className="profile_sertificate_img">
                    <img src={sertificate} alt="sertificate" />
                </div>

                <div className="profile_sertificate_content">123</div>
            </div>
        </div>
    )
}

export default Sertificate;