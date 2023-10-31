import './Menu.css'

function Menu (){
    return (
        <nav>
            <div className='logo'>
                <a href="/" className="img-logo"><img width={50} src="./src/imgs/bartlogo.jpg" alt="logo"/>
                </a>
            </div> 
                <ul>
                    <li><a href="/sobre" className="nav-text">Sobre</a></li>
                    <li><a href="/contato" className="nav-text">Contato</a></li>
                    <li><a href="/faça-sua-matricula" className="nav-text">Matricula</a></li>
                </ul>
        </nav>
                 
        
    )
}
export default Menu