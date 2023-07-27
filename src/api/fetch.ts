interface data {
  name: string,
  chapter: number,
  number: number,
  text: string,
  abbrev: string
}

const VITE_TOKEN = `${import.meta.env.VITE_TOKEN}`

export default async function fetchAPI(version: string): Promise<data> {
  const header = {
    Authorization: VITE_TOKEN
  }
  const result = await fetch(`https://www.abibliadigital.com.br/api/verses/${version}/random`, {headers: header})
  const data = await result.json()
  
  const name = data.book.name
  const chapter = data.chapter
  const number = data.number
  const text = data.text
  const abbrev = data.book.abbrev.pt
  const response: data = {name, chapter, number, text, abbrev}
  return response
}

export async function fetchSwitchVersion(abbrev: string, chapter: number, number: number, version: string) {
  const header = {
    Authorization: VITE_TOKEN
  }

  const result = await fetch(`https://www.abibliadigital.com.br/api/verses/${version}/${abbrev}/${chapter}/${number}`, {headers: header})
  const data = await result.json()
  const text: string = data.text
  return text
}