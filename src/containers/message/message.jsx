import { useCallback } from 'react';
import { useState, useEffect } from 'react';
import { fetchMessages, sendNewMessage } from '../../api/subject.api';
import MessageForm from '../../components/message-form/message-form';
import MessageList from '../../components/message-list/message-list';

const Message = ({categoryId, username}) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const [update, setUpdate] = useState(new Date());

    useEffect(() => {
        fetchMessages(categoryId)
            .then((result) => setData(result))
            .catch((error) => setError(error));

        return () => {
            setData(null);
            setError(null);
        }
    }, [categoryId, update]);

    const handleNewMessage = useCallback(({content}) => {
        const newMessage = {
            author: username,
            content
        };

        sendNewMessage(categoryId, newMessage)
            .then(() => setUpdate(new Date()));
    });

    return (
        <>
            {(!data && !error) ? (
                <p>Loading...</p>
            ) : data ? (<>
                <MessageList messages={data} />
                <MessageForm onNewMessage={handleNewMessage} />
            </>) : (
                <p>Error :o</p>
            )}
        </>
    );
};

export default Message;