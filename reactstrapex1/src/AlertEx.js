import {Alert} from 'reactstrap';

const AlertEx = () => {
    return(
        <div>
            <Alert color='primary'>
                This is a primary alert
            </Alert>
            <Alert color='secondary'>
                This is a secondary alert
            </Alert>
            <Alert color='success'>
                This is a success alert
            </Alert>
            <Alert color='danger'>
                This is a danger alert
            </Alert>
            <Alert color='warning'>
                This is a warning alert
            </Alert>
            <Alert color='info'>
                This is a info alert
            </Alert>
            <Alert color='light'>
                This is a light alert
            </Alert>
            <Alert color='dark'>
                This is a dark alert
            </Alert>
        </div>
    )
}

export default AlertEx;