import './lection.scss'

import lectionvideo from '../../../../../../assets/photos/lectionVideo.svg'
import lectionText from '../../../../../../assets/photos/lectionText.svg'

function Lection(){
    return(
        <a className="lection" href='#'>
            <div className="lection_container">
                <div className="lection_type">
                    <img src={lectionvideo} alt="lectionType" />
                </div>

                <h5>Навза лекції</h5>
            </div>



        </a>

        
    )
}

export default Lection;