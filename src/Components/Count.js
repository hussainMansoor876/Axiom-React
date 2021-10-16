import { useState } from 'react'

const Count = () => {
    const [name, setName] = useState('')
    const [wordsCount, setWordsCount] = useState(0)
    const [obj, setObj] = useState({})

    const updateName = (e) => {
        let value = e?.target?.value
        setName(value)

        console.log('values', value)
        setWordsCount(value?.trim()?.split(' ')?.length)

        let wordsArray = value?.trim()?.split(' ')

        for (var v of wordsArray) {
            v = v?.toLowerCase()
            if (!obj[v]) {
                obj[v] = 1
            }
            else {
                obj[v]++
            }
        }

        setObj({ ...obj })
    }

    return (
        <div>
            <h1>{name}</h1>
            <input placeholder='Enter your Name Here!' onChange={updateName} />
            <p>Characters Count: {name?.length}</p>
            <p>Words Count: {wordsCount}</p>

            <div>
                {Object.entries(obj)?.map((v, i) => {
                    return <p key={i}>{`${v[0]?.charAt(0)?.toUpperCase()}${v[0]?.slice(1,)}: ${v[1]}`}</p>
                })}
            </div>
        </div>
    )
}

export default Count