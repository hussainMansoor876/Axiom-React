import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Input, Button } from 'antd'
import { loginUser, removeUser } from '../Redux/Actions/authActions'
import { Link } from 'react-router-dom'
import axios from 'axios'
import allPaths from '../Config/path'
import { errorMessage, successMessage } from '../utils/helpers'

const Signup = (props) => {
    const { history } = props
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(removeUser())
    }, [])

    const onFinish = (values) => {
        console.log('values', values)

        if (!values?.lastName) {
            delete values.lastName
        }
        axios.post(`http://localhost:8081/auth/register`, values)
            .then((res) => {
                const { data } = res
                console.log('data', data)

                if (data?.success) {
                    successMessage('Successfully Registered!')
                    return history.push(allPaths.LOGIN)
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
        <div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '80%', display: 'flex', justifyContent: 'center' }}>
                    <Form
                        name="basic"
                        onFinish={onFinish}
                        requiredMark={false}
                        style={{ width: '100%' }}
                    // onFinishFailed={onFinishFailed}
                    >
                        <h1>Signup Form</h1>
                        <Form.Item
                            name="userName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your userName!',
                                }
                            ]}
                        >
                            <Input placeholder='UserName Here!' />
                        </Form.Item>
                        <Form.Item
                            name="firstName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your userName!',
                                }
                            ]}
                        >
                            <Input placeholder='FIrst Name Here!' />
                        </Form.Item>
                        <Form.Item
                            name="lastName"
                        >
                            <Input placeholder='Last Name Here! (Optional)' />
                        </Form.Item>
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
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <Button type='primary' style={{ marginLeft: 140 }}>
                <Link to={allPaths.LOGIN} >Log In</Link>
            </Button>
        </div>
    )
}

export default Signup