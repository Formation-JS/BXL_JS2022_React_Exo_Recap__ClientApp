import { List, ListItem, ListItemText, Stack, Typography } from '@mui/material';

const MessageList = ({ messages }) => {

    return (
        <List>
            {messages.map(message => (
                <ListItem key={message.id}>
                    <Stack direction='column' sx={{ width: '100%' }}>
                        <ListItemText>
                            <Typography variant='h6' component='p'>
                                {message.content}
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Stack direction='row' justifyContent='space-between'>
                                <p>{message.author}</p>
                                <p>{message.createAt.toLocaleString('fr-be')}</p>
                            </Stack>
                        </ListItemText>
                    </Stack>
                </ListItem>
            ))}
        </List>
    );
};

MessageList.defaultProps = {
    messages: []
};

export default MessageList;