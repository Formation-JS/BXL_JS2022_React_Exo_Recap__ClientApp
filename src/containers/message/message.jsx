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
        // Envoye de la requete
        fetchMessages(categoryId)
            .then((result) => setData(result))
            .catch((error) => setError(error));

        return () => {
            setData(null);
            setError(null);
        }

        // Ce useEffect utilise les parametres "categoryId", "update" en tant que garde
        // → Cela permet d'actualiser les données quand la valeur de "update" est modifié
    }, [categoryId, update]);

    const handleNewMessage = useCallback(({content}) => {
        const newMessage = {
            author: username,
            content
        };

        // Envoye d'un nouveau message dans l'API
        // Mise a jour de la valeur "update" pour re-déclancher le code du "useEffect"
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