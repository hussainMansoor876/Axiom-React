import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../Redux/Actions/authActions'
import allPaths from '../Config/path'
import { Button, Image } from 'antd'
import Lottie from 'react-lottie'
import coding from '../assets/coding.gif'
import { Todo } from '.'

const Home = (props) => {
    console.log('props', props)
    const dispatch = useDispatch()
    const user = useSelector(state => state?.authReducer?.user)

    return (
        <div>
            <h1>This is Home</h1>
            <h1>Email: {user?.email}</h1>
            {/* <img src={coding} /> */}
            <Todo />
            <Lottie options={{
                animationData: require('../assets/coding.json')
            }}
                height={400}
                width={400}
            />
            <Button type='primary' onClick={() => dispatch(removeUser())}>
                <Link to={allPaths.LOGIN}>Logout</Link>
            </Button>
        </div>
    )
}

export default Home