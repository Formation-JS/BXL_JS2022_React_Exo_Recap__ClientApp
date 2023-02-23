import axios from 'axios';

// Pour utiliser les variables d'env : 
// CRA  : process.env.REACT_APP_NAME
// Vite : import.meta.env.VITE_NAME

export const fetchMessages = (categoryId) => {
    const url = import.meta.env.VITE_API_URL + '/api/subject/' + categoryId + '/message';
    return axios.get(url).then(({ data }) => data.map(message => ({
        id: message.id,
        content: message.content,
        author: message.author,
        createAt: new Date(message.createAt * 1000)
    })));
};

export const sendNewMessage = ((categoryId, data) => {
    const url = import.meta.env.VITE_API_URL + '/api/subject/' + categoryId + '/message';

    return axios.post(url, data);
})