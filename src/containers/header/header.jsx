import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const Header = ({ username, onDisconnect }) => (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Message App
                </Typography>

                {username && (<>
                    <Typography variant='h6' component='span' sx={{ marginRight: '0.7ch' }}>
                        {username}
                    </Typography>
                    <Button variant='contained' color="secondary" onClick={onDisconnect}>Se déconnecter</Button>
                </>)}
            </Toolbar>
        </AppBar>
    </Box>
);

Header.defaultProps = {
    username: null,
    onDisconnect: () => { }
};

Header.propTypes = {
    username: PropTypes.string,
    onDisconnect: PropTypes.func
};

export default Header;