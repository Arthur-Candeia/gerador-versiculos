export default async function fetchAPI(version: string) {
  const result = await fetch(`https://www.abibliadigital.com.br/api/verses/${version}/random`)
  const data = await result.json()
  console.log(data)
  const name = data.book.name
  const chapter = data.chapter
  const number = data.number
  const content = data.content
  return {name, chapter, number, content}
}