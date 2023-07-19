import { useState } from "react"
import fetchAPI from "./api/fetch"

function App() {
  
  const [version, setVersion] = useState('acf')

  fetchAPI(version)

  return (
    <>
      <h1>Gerador de Versículos </h1>
      <form>
        <div>
          <p>Versão:</p>
          <span>
            <input type="radio" name="version" id="acf" onChange={(ev) => setVersion(ev.target.value)} value={'acf'}  defaultChecked/>
            <label htmlFor="acf">ACF</label>
          </span>
          <span>
            <input type="radio" name="version" id="nvi" onChange={(ev) => setVersion(ev.target.value)}  value={'nvi'}/>
            <label htmlFor="nvi">NVI</label>
          </span>
        </div>
        <textarea cols={80} rows={10} disabled></textarea>
        <div id="buttons">
          <input type="submit" value="GERAR" />
          <button type="button">COPIAR</button>
        </div>
        <span className="loader" style={{display: 'none'}}></span>
        {/* https://www.abibliadigital.com.br/ */}
      </form>
    </>
  )
}

export default App

//const version = React.useRef<HTMLInputElement>(null)