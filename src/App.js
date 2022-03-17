import { useState } from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";

function App() {
  const [paises, setPaises] = useState([]);
  function onSearch(pais = '') {
    fetch(`https://restcountries.com/v3.1/name/${pais}`)
    .then(r => r.json())
    .then(recurso => {
      console.log(Object.values(Object.values(recurso[0].currencies)));
      if(recurso[0].name.common !== undefined) {
        const pais = {
          id: recurso[0].cca2,
          flag: recurso[0].flags.png,
          name: recurso[0].name.official,
          capital: recurso[0].capital[0],
          region: recurso[0].region,
          borders: recurso[0].borders.join(),
          languages: Object.values(recurso[0].languages).join(),
          currencies: Object.values(Object.values(recurso[0].currencies)[0]).join()
        };
        var ids = paises.map(p => p.id);
        if(!ids.includes(pais.id)){
          setPaises(paises => [...paises, pais]);
        }
        else alert("País ya agregado");
      } else {
        alert("País no encontrado");
      }
    });
  }
  function onClose(id) {
    setPaises(paises => paises.filter(p => p.id !== id));
  }
  return (
    <div className="App">
      <Navbar onSearch={onSearch}/>
      <Cards paises={paises} onClose={onClose}/>
    </div>
  );
}

export default App;
