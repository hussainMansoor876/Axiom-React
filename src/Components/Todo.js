import { useState, useEffect } from 'react'
import axios from 'axios'
import { successMessage, errorMessage } from '../utils/helpers'

const Todo = (props) => {
    const [arr, setArr] = useState([])
    const [task, setTask] = useState('')
    const [isEdit, setEdit] = useState(false)
    const [updateIndex, setIndex] = useState(null)

    useEffect(() => {
        getAllTodos()
    }, [])

    const getAllTodos = () => {
        axios.get(`http://localhost:8081/todo/get_all`)
            .then((res) => {
                const { data } = res

                console.log('data', data)
                if (data?.success) {
                    setArr(data?.tasks)
                }
            })
            .catch(e => console.log('e****', e))
    }

    const AddTodo = () => {
        if (!task?.length) {
            return console.log('Please Add Task First!')
        }

        // arr.push(task)
        // setArr([...arr])

        axios.post(`http://localhost:8081/todo/add_todo`, { task })
            .then((res) => {
                const { data } = res
                console.log('data', data)

                if (data?.success) {
                    setArr([...arr, data?.todo])
                    return successMessage(data?.message)
                }

                errorMessage(data?.message)
            })
            .catch(e => console.log('e****', e))

        setTask('')
    }

    const deleteTodo = (index) => {
        // console.log('index', arr.filter((v, i) => i !== index))
        // console.log('arr', arr)
        // arr.splice(index, 1)
        // setArr([...arr])
        let id = arr[index]?._id

        axios.delete(`http://localhost:8081/todo/delete_todo/${id}`)
            .then((res) => {
                const { data } = res

                if (data?.success) {
                    successMessage(data?.success)
                    arr.splice(index, 1)
                    setArr([...arr])
                }
                errorMessage(data?.message)
            })
            .catch(e => console.log('e****', e))

        cancelUpdate()
    }

    const editTodo = (index) => {
        setTask(arr[index]?.task)
        setEdit(true)
        setIndex(index)
    }

    const cancelUpdate = () => {
        setTask('')
        setEdit(false)
    }

    const updateTask = () => {
        arr[updateIndex].task = task

        let obj = arr[updateIndex]

        console.log('arr[updateIndex]', obj)

        axios.put(`http://localhost:8081/todo/update_todo`, obj)
            .then((res) => {
                const { data } = res
                console.log('data', data)

                if (data?.success) {
                    // setArr([...arr, data?.todo])
                    return successMessage(data?.message)
                }

                errorMessage(data?.message)
            })
            .catch(e => console.log('e****', e))

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
                        <span>{v?.task}</span>
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