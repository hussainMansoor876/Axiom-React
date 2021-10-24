import './App.css'
import { useState, useEffect } from 'react'
import { Login, Todo, Count } from './Components'
import { useSelector } from 'react-redux'
// import * as Components from './Components'

// const { Todo } = Components

const App = () => {
  const [key, setKey] = useState('')
  const [value, setValue] = useState('')
  const [obj, setObj] = useState({})
  const [todoTask, setTodoTask] = useState('')
  const [message, setMessage] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")
  const user = useSelector((state) => state?.user)

  useEffect(() => {
    console.log('todoTask', todoTask)
  }, [todoTask])

  useEffect(() => {
    console.log('user', user)
  }, [user])

  const addKeyValue = () => {
    obj[key] = value
    setObj({ ...obj })
    // setObj({ ...obj, [key]: value })

    console.log('obj', Object.entries(obj))
    setKey('')
    setValue('')
  }

  return (
    <div>
      {/* <PropsDemo message={message} /> */}
      {user?.email ? <div>
        <Count todoTask={todoTask} />
        <Todo setTodoTask={setTodoTask} />
      </div> : <Login />}
      {/* <Todo /> */}
      {/* <Count /> */}
      {/* <div>
        <input name='key' value={key} onChange={e => setKey(e?.target?.value?.replace(' ', '_'))} placeholder='Please Enter Key Here!' />
        <input name='value' value={value} onChange={e => setValue(e?.target?.value)} placeholder='Please Enter Value Here!' />
        <button onClick={addKeyValue}>Add</button>
      </div>
      <div>
        {Object.entries(obj)?.map((v, i) => {
          return <p key={i}>{`${v[0]?.charAt(0)?.toUpperCase()}${v[0]?.slice(1,)}: ${v[1]}`}</p>
        })}
      </div> */}
    </div>
  );
}

export default App