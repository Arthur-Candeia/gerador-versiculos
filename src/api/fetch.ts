interface data {
  name: string,
  chapter: number,
  number: number,
  text: string,
  abbrev: string
}

export default async function fetchAPI(version: string): Promise<data> {
  const result = await fetch(`https://www.abibliadigital.com.br/api/verses/${version}/random`, {headers: header})
  const data = await result.json()
  console.log(data)
  const name = data.book.name
  const chapter = data.chapter
  const number = data.number
  const text = data.text
  const abbrev = data.book.abbrev.pt
  const response: data = {name, chapter, number, text, abbrev}
  return response
}

export async function fetchSwitchVersion(abbrev: string, chapter: number, number: number, version: string) {
  const result = await fetch(`https://www.abibliadigital.com.br/api/verses/${version}/${abbrev}/${chapter}/${number}`, {headers: header})
  const data = await result.json()
  console.log(data)
  const text: string = data.text
  return text
}