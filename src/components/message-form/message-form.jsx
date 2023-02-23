import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';


const MessageForm = ({onNewMessage}) => {

    const { handleSubmit } = useForm();

    const handleMessage = (data) => {

        onNewMessage({
            content: 'Hello World'
        })
    };

    return (
        <form onSubmit={handleSubmit(handleMessage)}>
            TODO Finir le formulaire O_o

            <Button type='submit' variant='contained' color='primary'>Envoyer</Button>
        </form>
    )
}

export default MessageForm;