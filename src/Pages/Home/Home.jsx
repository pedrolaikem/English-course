import Menu from "../Menu"
import Images from "./Images/Images"
import Buttons from './Buttons/Buttons'
import Videos from './Video/Videos'
import App from './Buttons/Buttons'
import './Video/Video.css'

function Home (){
    return (
        <div>
            <Menu />
        {/*Welcome section*/}
            <section id="section-1" className="section-1">
                <main>
                    <Images />
                    <Buttons />
                    <App />
                </main>
            </section>
        {/*Video section*/}
            <section id="section-2" className="section-2">
                <div className="title-container">
                    <h1 className="title">Speaking Matters</h1>
                </div>
                <Videos />
                <p className="txt-section-2">Um curso que cria um ambiente de fala seguro <br />onde a fala pode realmente prosperar, <br />EVOLUIR e decolar.</p>
            </section>
        </div>
    )
}

export default Home