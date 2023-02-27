import { Button, Stack, Typography } from '@mui/material';
import Message from '../../containers/message/message';

const MessagePage = ({ categoryId, categoryName, username, onBack }) => {

    return (
        <>
            <Stack direction='row' justifyContent='space-between' >
                <Typography variant='h4' component='h1' >
                    Message de {categoryName}
                </Typography>
                <Button onClick={() => onBack()} variant='contained'>Retour</Button>
            </Stack>

            <Message categoryId={categoryId} username={username} />
        </>
    );
};


export default MessagePage;