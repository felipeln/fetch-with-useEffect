import { useEffect, useState } from "react"


function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    // Função assíncrona
    async function getData(){
      // pegando dados de uma api json
      const result = await fetch('https://jsonplaceholder.typicode.com/todos')
      // transformando ela em json mesmo
      const finalResult = result.json()
      // retornando o resultado em json
      return finalResult
    }
    
    // usando a função, ela retorna uma promise
    // resolvo a promise pegando somente a response
    // atualizo o valor da variável todos, com o valor da response
    getData().then((response) => {
      console.log(response);
      setTodos(response)
    })
  }, [])


  return (
    <>
      <h1>Buscando dados</h1>

      <ol>
        {todos.map((item) => {
          return(
            
            <li key={item.id}> {item.title} | <span>{item.completed ? 'Completo' : 'Incompleto'}</span></li>
          )
        })}
      </ol>

    </>
  )
}



export default App
