//ESTE PROYECTO TIENE RESPONSIVE DESIGN

import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Request from "./Helpers/Request";
import Nav from "./components/Nav";
import ContainerCard from "./components/CointainerCard";
import EspeificChamp from "./components/EspecifiChamp";
import EspecificChamp from "./components/EspecifiChamp";

function App() {
  const [allChamps, setAllChamps] = useState([]);
  const [gonnaShow, setGonnaShow] = useState('principal')
  const [especific, setEspecific] = useState('')

  useEffect(() => {
    Request().then((data) => {
      setAllChamps([data["data"]]);
    });
  }, []);

  function render(){
    if (gonnaShow === 'principal'){
      return <>
       <Header/>
       <Nav/>
       {
         allChamps.length > 0 ? <ContainerCard setEspecific={setEspecific} setGonnaShow={setGonnaShow} el={allChamps[0]}/> : null
       }
      </>
    }

    else{
      return <EspecificChamp setGonnaShow={setGonnaShow} name={gonnaShow} el={especific} data={especific[gonnaShow]}/>
    }
  }

  return (
    <div className="App">
      {render()}
    </div>
  );
}

export default App;
