import './Card.css'
import Request from '../Helpers/Request'

const Card = ({el,setGonnaShow,setEspecific,data_rol,data_dificultad }) =>{
    let {id,name} = el
    let img = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg` 
        
    let imgstyle = {
        background: `url(${img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '-190px',
        display: 'block'
    }

    const Resize = () =>{
        imgstyle.backgroundPosition = '-270px'
    }

    const Resize2 = () =>{
        imgstyle.backgroundPosition = '-120px'
    }

    if(id === 'Akali' || id === 'Rakan' || id === 'Neeko' || id === 'Irelia' || id === 'XinZhao' || id === 'Yuumi' || id === 'Sylas' || id === 'Sett' || id === 'Seraphine' || id === 'Pyke' || id === 'Ornn' || id === 'Mordekaiser' || id === 'Galio' || id === 'DrMundo' || id === 'Kaisa' || id === 'Lillia'){
        Resize2()
    }

    if(id === 'Kayn'){
        imgstyle.backgroundPosition = '-150px'
    }

    if(id === 'Annie' || id === 'Caitlyn' || id === 'Vladimir' || id === 'Vi' || id === 'Taric' || id === 'Syndra' || id === 'Sona' || id === 'Shen' || id === 'Shyvana' || id === 'Nautilus' || id === 'Nidalee' || id === 'Karma' || id === 'MissFortune' || id === 'Jinx' || id === 'Kayle' || id === 'Zyra' || id === 'Ziggs' || id === 'Yasuo' || id === 'Vayne' || id === 'Teemo' || id === 'Shaco' || id === 'Ryze' || id === 'Morgana' || id === 'MasterYi' || id === 'Lissandra' || id === 'Leona' || id === 'Kled' || id === 'Leblanc' || id === 'Khazix' || id === 'Kennen' || id === 'Azir' || id === 'Elise' || id === 'Brand' || id === 'Braum' || id === 'Camille' || id === 'Diana' || id === 'Draven' || id === 'Ekko' || id === 'Fizz' || id === 'Garen' || id === 'Gangplank' || id === 'Gnar' || id === 'Hecarim' || id === 'Janna' || id === 'JarvanIV' || id === 'Jayce'){
        Resize()
    }

    const handlerMouseOver = (e) =>{
        let text = document.getElementById(`text-${e.target.id}`);
        text.style.backgroundColor = 'rgb(20, 66, 141)'
    }

    const handlerMouseOut = (e) =>{
        let text = document.getElementById(`text-${e.target.id}`)
        text.style.backgroundColor = '#061c25'
    }

    const handlerClick = (e) =>{
        Request(e.target.id).then(data => {setEspecific(data['data'])})
        setGonnaShow(id)
    }

    return(
        <div onClick={handlerClick} id={id} className="card" style={imgstyle} data-dificultad={data_dificultad} data-rol={data_rol} onMouseOut={handlerMouseOut} onMouseOver={handlerMouseOver}>
            <span className='borde'></span>
            <div className='container-text'>
                <p  id={`text-${id}`} className='text'>{name}</p>
            </div>
        </div>
    )
}

export default Card;