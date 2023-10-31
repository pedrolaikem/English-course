import Evolve from './video/videoenglish.mp4'
import Poster from './video/videoposter.png'

function Videos (){
    return (
        <div className="Video">
            <video src={Evolve} controls poster={Poster}></video>
        </div>
         
    )
}

export default Videos