import { Button, Stack, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const loginSchema = yup.object({
    username: yup.string().required().trim().min(2)
});

const LoginForm = ({ onLogin }) => {

    const { handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: { username: '' },
        resolver: yupResolver(loginSchema)
    });

    const handleLogin = (data) => {
        onLogin(data.username);
    };

    return (
        <form onSubmit={handleSubmit(handleLogin)}>
            <Stack direction='column' spacing={1} >
                <Controller name='username' control={control} render={({ field }) => (
                    <TextField
                        error={!!errors.username}
                        label="Username"
                        size="small"
                        {...field}
                    />
                )}
                />
                <Button type='submit' variant='contained' color='primary' >Se connecter</Button>
            </Stack>
        </form>
    );
};

LoginForm.defaultProps = {
    onLogin: () => { }
};

LoginForm.propTypes = {
    onLogin: PropTypes.func
};

export default LoginForm;