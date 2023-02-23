import { Container, CssBaseline } from '@mui/material';
import { useCallback } from 'react';
import { useState } from 'react';
import './App.css';
import Header from './containers/header/header';
import LoginPage from './pages/login/login.page';
import MessagePage from './pages/message/message.page';

function App() {

  const [username, setUsername] = useState(null);
  const [categorySelected, setCategorySelected] = useState({
    id: 1,
    name: 'Accueil'
  });

  const handleLoginUser = useCallback((username) => {
    setUsername(username);
  })

  const handleDisconnectUser = useCallback(() => {
    setUsername(null);
  })

  return (
    <>
      <CssBaseline />
      <Header username={username} onDisconnect={handleDisconnectUser} />
      <Container maxWidth="md" sx={{paddingTop: '2ch'}}>
        {!username ? (
          <LoginPage  onLogin={handleLoginUser} />
        ) : (!categorySelected) ? (
          <p>Category page ...</p>
        ) : (
          <MessagePage 
            categoryId={categorySelected.id}
            categoryName={categorySelected.name} 
            username={username} />
        )}
      </Container>
    </>
  );
}

export default App;
