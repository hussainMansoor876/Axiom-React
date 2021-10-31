import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Input, Button } from 'antd'
import { loginUser, removeUser } from '../Redux/Actions/authActions'
import { Link } from 'react-router-dom'
import axios from 'axios'
import allPaths from '../Config/path'
import { errorMessage, successMessage } from '../utils/helpers'

const Login = (props) => {
    const { history } = props
    const dispatch = useDispatch()
    console.log('props', props)

    useEffect(() => {
        dispatch(removeUser())
    }, [])

    const onFinish = (values) => {
        console.log('values', values)
        axios.post(`https://axiom-node-example.herokuapp.com/auth/login`, values)
            .then((res) => {
                const { data } = res
                console.log('data', data)

                if (data?.success) {
                    dispatch(loginUser(data?.user))
                    console.log('*********')
                    successMessage(data?.message)
                    return history.push(allPaths.HOME)
                }

                errorMessage(data?.message)
            })
            .catch(e => console.log('e****', e))
        // if (values?.email === 'admin@admin.com' && values?.password === 'admin') {
        //     dispatch(loginUser(values))
        //     console.log('*********')
        //     successMessage('Successfully LoggedIn!!!')
        //     return history.push(allPaths.HOME, values)
        // }

        // errorMessage('Invalid Email or Password!')
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '80%', display: 'flex', justifyContent: 'center' }}>
                <Form
                    name="basic"
                    onFinish={onFinish}
                    requiredMark={false}
                    style={{ width: '100%' }}
                // onFinishFailed={onFinishFailed}
                >
                    <h1>Login Form</h1>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                            {
                                type: 'email',
                                message: 'Please Enter Valid Email!'
                            }
                        ]}
                    >
                        <Input placeholder='Email Here!' type='email' />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password placeholder='Password Here!' />
                    </Form.Item>
                    <Form.Item
                    >
                        <Button type="primary" block htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>

            {/* <Button type='primary'>
                <Link to={allPaths.HOME} >Go to Home</Link>
            </Button> */}
        </div>
    )
}

export default Login