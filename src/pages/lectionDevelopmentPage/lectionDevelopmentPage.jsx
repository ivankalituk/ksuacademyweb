import './lectionDevelopmentPage.scss'

function LectionDevelopmentPage(){
    return(

        <div className="lectionDev">
            <div className="lectionDev_container">
                <div className="lectionDev_Name">
                    <div className="lectionDev_heading">Назва Лекції:</div>
                    <input type="text" />
                </div>

                <div className="lectionDev_content">
                    <div className="lectionDev_heading">Контент лекції:</div>
                </div>
            </div>
        </div>
    )
}

export default LectionDevelopmentPage