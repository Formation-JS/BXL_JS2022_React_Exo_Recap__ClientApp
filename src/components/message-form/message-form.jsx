import { Button, Stack, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const messageSchema = yup.object({
    content: yup.string().required().trim()
});

const MessageForm = ({ onNewMessage }) => {

    const { handleSubmit, control, reset, setFocus } = useForm({
        resolver: yupResolver(messageSchema),
        defaultValues: {
            content: ''
        }
    });

    const handleMessage = (data) => {
        onNewMessage(data);
        setFocus('content');
        reset();
    };

    return (
        <form onSubmit={handleSubmit(handleMessage)}>
            <Stack direction='column' spacing={1}>
                <Controller name='content' control={control} render={({ field: {ref, ...field} }) => (
                    <TextField
                        label='Contenu du message'
                        multiline
                        rows={3}
                        inputRef={ref}
                        {...field}
                    />
                )} />

                <Button type='submit' variant='contained' color='primary'>Envoyer</Button>
            </Stack>
        </form>
    );
};

export default MessageForm;