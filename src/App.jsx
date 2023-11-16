import { useEffect, useState } from "react"
import './styles.css'

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
    <div className="container">
      <h1>Todos List</h1>

      <ol className="list-wrapper">
        {todos.map((item) => {
          return(
            
            <li className="list-item" key={item.id}> span.text {item.title} 
            {item.completed ? (
               <span className="status completed"> Status: Completed</span>
            ) : (
              <span className="status uncompleted"> Status: uncompleted</span>
            )}
           </li>
          )
        })}
      </ol>
    </div>
    </>
  )
}



export default App
