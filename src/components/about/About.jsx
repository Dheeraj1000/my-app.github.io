import "./about.css"
import gamer from "../../img/gamer.png"
import award from "../../img/award.png"

const about = () => {

    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={gamer} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">My Skills</h1>
                <p className="a-sub">
                    <p>HTML</p>
                    <div class="a-container">
                    <div class="skills html">90%</div>
                    </div>

                    <p>CSS</p>
                    <div class="a-container">
                    <div class="skills css">70%</div>
                    </div>

                    <p>JavaScript</p>
                    <div class="a-container">
                    <div class="skills js">50%</div>
                    </div>  
                </p>
                <div className="a-award">
                    <img src={award} alt="" className="a-award-image" />
                    <div className="a-award-texts">
                    <h4 className="a-award-title">Aim Award</h4>
                    <p className="a-award-desc">
                    Be specific in how the nominee met the award criteria • . 
                    Review and ask for clarification about nomination criteria. 
                    It's the quality not quantity of the nominations! 
                    Follow the directions!
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about
