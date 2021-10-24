import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import axios from 'axios'

const PropsDemo = (props) => {
    const [apiArr, setApiArr] = useState([])
    const [allArr, setAllArr] = useState([])
    const [apiCallsCount, setApiCalls] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            getData()
        }, 1000)
    }, [])

    useEffect(() => {
        if (allArr?.length && currentIndex <= 5000) {
            setTimeout(() => {
                setApiArr(allArr?.slice(currentIndex, currentIndex + 50))
                setCurrentIndex(currentIndex + 50)
                setApiCalls(apiCallsCount + 1)
            }, 300)
        }
        else {
            console.log('else!!!')
        }
    }, [apiCallsCount])

    const getData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/photos`)
            .then((res) => {
                console.log('data', res.data)
                setApiArr(res?.data?.slice(0, 10))
                setAllArr(res?.data)
                setCurrentIndex(10)
                setApiCalls(1)
            })
    }

    return (
        <div>
            <h1>Prop Message</h1>
            {/* <p>{props?.message}</p> */}
            <p>Api Calls: {apiCallsCount}</p>
            <p>Current Index: {currentIndex}</p>

            <div>
                {!apiArr?.length ? <p>Loading Data...</p> :
                    apiArr?.map((v, i) => {
                        return (
                            <div key={i}>
                                <p>{v?.title}</p>
                                <img src={v?.thumbnailUrl} alt={v?.title} />
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

PropsDemo.propTypes = {
    message: PropTypes.string.isRequired,
}

PropsDemo.defaultProps = {
    message: 'This is Default Prop.'
}

export default PropsDemo