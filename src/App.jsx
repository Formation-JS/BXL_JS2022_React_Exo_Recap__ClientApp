import { Container, CssBaseline } from '@mui/material';
import { useCallback } from 'react';
import { useState } from 'react';
import './App.css';
import Header from './containers/header/header';
import CategoryPage from './pages/category/category.page';
import LoginPage from './pages/login/login.page';
import MessagePage from './pages/message/message.page';

function App() {

  const [username, setUsername] = useState(null);
  const [categorySelected, setCategorySelected] = useState(null);

  const handleLoginUser = useCallback((username) => {
    setUsername(username);
  });

  const handleDisconnectUser = useCallback(() => {
    setUsername(null);
    setCategorySelected(null);
  });

  const handleSelectCategory = useCallback((category) => {
    setCategorySelected(category);
  });

  const handleResetCategory = useCallback(() => {
    setCategorySelected(null);
  });

  return (
    <>
      <CssBaseline />
      <Header username={username} onDisconnect={handleDisconnectUser} />
      <Container maxWidth="md" sx={{ paddingTop: '2ch' }}>
        {!username ? (
          <LoginPage onLogin={handleLoginUser} />
        ) : (!categorySelected) ? (
          <CategoryPage onCategorySelected={handleSelectCategory} />
        ) : (
          <MessagePage
            categoryId={categorySelected.id}
            categoryName={categorySelected.name}
            username={username}
            onBack={handleResetCategory} />
        )}
      </Container>
    </>
  );
}

export default App;
