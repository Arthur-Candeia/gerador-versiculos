function App() {

  return (
    <>
      <h1>Gerador de Versículos </h1>
      <form>
        <div>
          <p>Versão:</p>
          <input type="radio" name="version" id="acf" value={'ACF'}/>
          <label htmlFor="acf">ACF</label>
          <input type="radio" name="version" id="nvi" value={'NVI'}/>
          <label htmlFor="nvi">NVI</label>
        </div>
        <textarea cols={30} rows={10} disabled></textarea>
        <input type="submit" value="GERAR" />
        <button type="button">Copiar</button>
        <span className="loader"></span>
        {/* https://www.abibliadigital.com.br/ */}
      </form>
    </>
  )
}

export default App
