import { Typography } from '@mui/material';
import Message from '../../containers/message/message';

const MessagePage = ({categoryId, categoryName, username}) => {

    return (
        <>
            <Typography variant='h4' component='h1' >
                Message de {categoryName}
            </Typography>

            <Message categoryId={categoryId} username={username}/>
        </>
    );
};


export default MessagePage;