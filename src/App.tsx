/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import fetchAPI, {fetchSwitchVersion} from "./api/fetch"
import copyButton from "./copyButton"

function App() {

  const [version, setVersion] = useState('acf')
  const [name, setName] = useState('')
  const [chapter, setChapter] = useState(0)
  const [number, setNumber] = useState(0)
  const [text, setText] = useState('')
  const [abbrev, setAbbrev] = useState('')
  const [requests, setRequests] = useState(0)
  const [loading, setLoading] = useState(false)
  const [copy, setCopy] = useState('COPIAR')

  useEffect(() => {
    setLoading(true)
    fetchAPI(version).then((result) => {
        const {name, chapter, number, text, abbrev} = result
        setName(name)
        setChapter(chapter)
        setNumber(number)
        setText(text)
        setAbbrev(abbrev)
        setLoading(false)
    })
  }, [requests])

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault()
    setCopy('COPIAR')
    copyButton()
    setRequests((counter) => counter+=1)
  }

  function switchVersion(newVersion: string) {
    setVersion(newVersion)
    setCopy('COPIAR')
    copyButton()
    setLoading(true)
    fetchSwitchVersion(abbrev, chapter, number, newVersion).then((result) => setText(result))
    setLoading(false)
  }

  function copyToClipboard() {
    setCopy('COPIADO')
    copyButton('yes')
    navigator.clipboard.writeText(`${text}

${name} ${chapter}:${number}`)
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
          {!loading ? (
            <>
              <p>{text}</p>
              <span>{`${name} ${chapter}:${number}`}</span>
            </>
          ): <span className="loader" style={{display: 'inline-block'}}></span>}
        </div>
        <div id="buttons">
          <input type="submit" value="GERAR" />
          <button type="button" id="copy" onClick={copyToClipboard}>{copy}</button>
        </div>
      </form>
    </>
  )
}

export default App

//const version = React.useRef<HTMLInputElement>(null)