import { Typography } from '@mui/material';
import LoginForm from '../../components/login-form/login-form';

const LoginPage = ({ onLogin }) => {

    return (
        <>
            <Typography variant='h4' component='h1' >
                Se connecter
            </Typography>

            <LoginForm onLogin={onLogin} />
        </>
    );
};


export default LoginPage;