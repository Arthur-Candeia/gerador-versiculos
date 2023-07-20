/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import fetchAPI, {fetchSwitchVersion} from "./api/fetch"

function App() {

  const [version, setVersion] = useState('acf')
  const [name, setName] = useState('')
  const [chapter, setChapter] = useState(0)
  const [number, setNumber] = useState(0)
  const [text, setText] = useState('')
  const [abbrev, setAbbrev] = useState('')
  const [requests, setRequests] = useState(0)

  useEffect(() => {
    fetchAPI(version).then((result) => {
        const {name, chapter, number, text, abbrev} = result
        setName(name)
        setChapter(chapter)
        setNumber(number)
        setText(text)
        setAbbrev(abbrev)
    })
  }, [requests])

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault()
    setRequests((counter) => counter+=1)
    console.log(requests)
  }

  function switchVersion(newVersion: string) {
    setVersion(newVersion)
    fetchSwitchVersion(abbrev, chapter, number, newVersion).then((result) => setText(result)) 
  }

  return (
    <>
      <h1>Gerador de Versículos </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Versão:</p>
          <span>
            <input type="radio" name="version" id="acf" onChange={(ev) => switchVersion(ev.target.value)} value={'acf'}  defaultChecked/>
            <label htmlFor="acf">ACF</label>
          </span>
          <span>
            <input type="radio" name="version" id="nvi" onChange={(ev) => switchVersion(ev.target.value)}  value={'nvi'}/>
            <label htmlFor="nvi">NVI</label>
          </span>
        </div>
        <div id="show">
          <p>{text}</p>
          <span>{`${name} ${chapter}:${number}`}</span>
        </div>
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