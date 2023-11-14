import "./Images.css"
import polaroids from "./img-sitee.png"
import text from "./text.png"

function Images (){
    return (    
        <div className="Images">
            <div className="img-txt">
                <img src={text} alt="texto" className="Texto" />
            </div>
            <div className="img-2">
                <img src={polaroids} alt="Polaroides" className="Polaroids"/>
            </div>
                
        </div>
        
         
    )
}

export default Images