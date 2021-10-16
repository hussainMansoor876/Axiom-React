import { useState } from 'react'

const Todo = () => {
    const [arr, setArr] = useState([])
    const [task, setTask] = useState('')
    const [isEdit, setEdit] = useState(false)
    const [updateIndex, setIndex] = useState(null)

    const AddTodo = () => {
        if (!task?.length) {
            return console.log('Please Add Task First!')
        }

        arr.push(task)
        setArr([...arr])

        setTask('')
    }

    const deleteTodo = (index) => {
        // console.log('index', arr.filter((v, i) => i !== index))
        // console.log('arr', arr)
        arr.splice(index, 1)
        setArr([...arr])

        cancelUpdate()
    }

    const editTodo = (index) => {
        setTask(arr[index])
        setEdit(true)
        setIndex(index)
    }

    const cancelUpdate = () => {
        setTask('')
        setEdit(false)
    }

    const updateTask = () => {
        arr[updateIndex] = task

        setTask('')
        setEdit(false)
        setIndex(null)
        setArr([...arr])
    }

    return (
        <div>
            <h1>Todo App</h1>
            <div>
                <input
                    name='task'
                    placeholder='Add Todo'
                    onChange={e => setTask(e?.target?.value)}
                    value={task}
                />
                {!isEdit ? <button onClick={AddTodo}>Add Task</button> : <span>
                    <button onClick={updateTask}>Update</button>
                    <button onClick={cancelUpdate}>Cancel</button>
                </span>}
            </div>
            <ol>
                {arr?.map((v, i) => {
                    return <li key={i}>
                        <span>{v}</span>
                        &nbsp;
                        <button onClick={() => editTodo(i)}>Edit</button>
                        &nbsp;
                        <button onClick={() => deleteTodo(i)}>Delete</button>
                    </li>
                })}
            </ol>
        </div>
    )
}

export default Todo