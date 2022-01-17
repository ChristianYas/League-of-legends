import { useEffect, useState } from 'react';
import Card from './Card'
import './ContainerCard.css'

const ContainerCard = ({el,setGonnaShow,setEspecific}) =>{
    const [champs, setChamps] = useState('')

    let difficulty = ''

    let keys = Object.keys(el)

    useEffect(()=>{
        let array = []

        for(let i=0; i<keys.length; i++){
            array.push(el[keys[i]])
        }

        setChamps(array)
    },[])

    return(
       <div className='container-card'>
           {
            champs.length > 0 ?  champs.map(el => <Card setEspecific={setEspecific} data_dificultad={el['info']['difficulty']} data_rol={el['tags'][0]} setGonnaShow={setGonnaShow} key={el['id']} el={el}/>) : null
           }
       </div>
    )
}

export default ContainerCard