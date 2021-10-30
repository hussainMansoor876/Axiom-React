import { Result, Button } from 'antd'
import { Link } from 'react-router-dom'
import allPaths from '../Config/path'

const PageNotFound = (props) => {
    console.log('props', props)
    return (
        <Result
            status='404'
            title='404'
            subTitle='Sorry, the page you visited does not exist.'
            extra={<Button type='primary'><Link to={allPaths.HOME}>Back Home</Link></Button>}
        />
    )
}

export default PageNotFound