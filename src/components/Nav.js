import { useEffect, useState } from 'react';
import lupa from'./lupa.png'
import './Nav.css'
import Swal from 'sweetalert2';

const Nav = () => {
  const [position, setPosition] = useState('all')
  const [contexto, setContexto] = useState()

  useEffect(()=>{
    let cafe = '#D0A85C', negro = '#cacaca'
    let ALL = document.getElementById('all')
    let ASSASSIN = document.getElementById('ass')
    let FIGHTER = document.getElementById('fig')
    let MAGE = document.getElementById('mag')
    let MARKSMAN = document.getElementById('mar')
    let TANK = document.getElementById('tan')

    if(position === 'all'){
      ALL.style.color = cafe
    }
    else{
      ALL.style.color = negro
    }

    if(position === 'ass'){
      ASSASSIN.style.color = cafe
    }
    else{
      ASSASSIN.style.color = negro
    }

    if(position === 'fig'){
      FIGHTER.style.color = cafe
    }
    else{
      FIGHTER.style.color = negro
    }

    if(position === 'mag'){
      MAGE.style.color = cafe
    }
    else{
      MAGE.style.color = negro
    }

    if(position === 'mar'){
      MARKSMAN.style.color = cafe
    }
    else{
      MARKSMAN.style.color = negro
    }

    if(position === 'tan'){
      TANK.style.color = cafe
    }
    else{
      TANK.style.color = negro
    }

  },[position])

  const handlerChange = (e,type) =>{
    let champios = document.querySelectorAll('.card')
    let value = e.target.value.toUpperCase()
    if(type === 'input'){
      setPosition('nothing')
      champios.forEach((card) =>{
        if(value.includes(card.id.toUpperCase())){
          card.style.display = 'block'
        }
        else{
          card.style.display = 'none'
        }
       }
      )}

    if(type === 'select'){
      if(position === 'ass'){
        if(e.target.value === 'low'){
          Swal.fire({
            title: 'Upsi!',
            text: 'no existe ningun campeon facil en la seccion de asesinos',
            icon: 'error'
          })
        }
      }
      contexto.map((el,index) =>{
        let dificultad = el.dataset['dificultad']
        if(e.target.value === 'all'){
          el.style.display = 'block'
        }

        if(e.target.value === 'high'){
          if(dificultad > 7){
            el.style.display = 'block'
          }
          else{
            el.style.display = 'none'
          }
        }

        if(e.target.value === 'medium'){
          if(dificultad > 3 && dificultad < 8){
            el.style.display = 'block'
          }
          else{
            el.style.display = 'none'
          }
        }

        if(e.target.value === 'low'){
          if(dificultad < 4){
            el.style.display = 'block'
          }
          else{
            el.style.display = 'none'
          }
         }
      })
    }
  }

  const handlerClick = (e) =>{
    if(e.target.tagName === 'SMALL'){
      setPosition(e.target.id)
      let champios = document.querySelectorAll('.card')
      if(e.target.innerHTML === 'ALL'){
        champios.forEach(card =>{
          card.style.display = 'block'
        })
      }
      else{
        champios.forEach(card => {
          if(card.dataset['rol'].toUpperCase() !== e.target.innerHTML.toUpperCase()){
            card.style.display = 'none'
          }
          else{
            card.style.display = 'block'
          }
        })  
      }

      let arraya = []

      champios.forEach(card =>{
       let validation = card.style.display
       if(validation === 'block'){
         arraya.push(card)
       }
      })
      setContexto(arraya)
    }
  }

  const handlerVisible = ()=>{
    let ol = document.getElementById('lista')

    ol.style.display = 'block'
  }

  const handlerNoVisible = (e) =>{
   if(window.screen.width < 415){
    let ol = document.getElementById('lista')
    let type = document.getElementById('type')

    type.innerHTML = e.target.innerHTML

    ol.style.display = 'none'
   }
  }

  return (
    <div className="container-nav">
      <span className='border2-top'></span>
      <form className='search' onChange={(e)=> handlerChange(e,'input')}>
        <img src={lupa} alt="" />
        <input type="text" placeholder="BUSCAR" name="search" />
      </form>

      <div className='type' onClick={handlerClick}>
        <span onClick={handlerVisible} className='option-none' id='type'>All</span>
        <ol id='lista' onClick={handlerNoVisible}>
          <li>
            <small id='all'>ALL</small>
          </li>
          <li>
            
            <small id='ass'>ASSASSIN</small>
          </li>
          <li>
            
            <small id='fig'>FIGHTER</small>
          </li>
          <li>
            
            <small id='mag'>MAGE</small>
          </li>
          <li>
            
            <small id='mar'>MARKSMAN</small>
          </li>
          <li>
            
            <small id='tan'>TANK</small>
          </li>
        </ol>
      </div>

      <div className='option' onChange={e=> handlerChange(e,'select')}> 
        <select>
           <option value='first'>--Dificultad--</option> 
           <option value='all'>All</option>
           <option value='high'>High</option>
           <option value='medium'>Medium</option>
           <option value='low'>Low</option>
        </select>
      </div>
      <span className='border2-bottom'></span>
    </div>
  );
};

export default Nav;
