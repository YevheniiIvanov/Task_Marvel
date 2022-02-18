import error from './error.gif';
import './errorMessage.scss';

const ErrorMessage = () => {
    return (
        <img className='error' src={error} alt="error" />
    )
}

export default ErrorMessage;