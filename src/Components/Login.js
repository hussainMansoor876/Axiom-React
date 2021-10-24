import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Input, Button } from 'antd'
import { loginUser } from '../Redux/Actions/authActions'

const Login = (props) => {
    const dispatch = useDispatch()

    const onFinish = (values) => {
        console.log('values', values)
        dispatch(loginUser(values))
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
        </div>
    )
}

export default Login