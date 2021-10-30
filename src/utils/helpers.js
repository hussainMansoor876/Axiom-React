import message from 'antd/lib/message'

const errorMessage = (msg = 'Something Went Wrong!') => message.error(msg)

const successMessage = (msg = 'Successful!') => message.success(msg)

const warningMessage = (msg = 'Warning!') => message.warning(msg)

export {
    errorMessage,
    successMessage,
    warningMessage
}