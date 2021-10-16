import './App.css'
import { useState } from 'react'
// import { Todo, Count } from './Components'
import * as Components from './Components'

// const { Todo } = Components

const App = () => {
  const [key, setKey] = useState('')
  const [value, setValue] = useState('')
  const [obj, setObj] = useState({})

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
      <Components.Count />
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