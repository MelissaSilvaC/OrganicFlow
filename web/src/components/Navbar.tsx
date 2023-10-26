import * as React from 'react';
import logo from '../assets/img/Logo/logo-letras.png'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Outlet, Link } from 'react-router-dom'
import Papel from '../assets/img/Fundo/papel1.png'
import Footer from './Footer';

const settings = [
    {
        id: 1,
        label: 'Login',
        to: '/sessao/login'
    }, {
        id: 2,
        label: 'Sign up',
        to: '/sessao'
    }, {
        id: 3,
        label: 'Dashboard',
        to: '/admin/dashboard'
    }
];

export default function Navbar() {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => { setAnchorElUser(event.currentTarget) };
    const handleCloseUserMenu = () => { setAnchorElUser(null) };

    return (
        <>
            <AppBar position="static" sx={{ backgroundImage: `url(${Papel})`, backgroundSize: 'cover' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <div className='flex items-center justify-between w-full max-lg:mx-4'>
                            <Link to={'/'} >
                                <img src={logo} className='flex mr-10 w-[14rem] max-lg:w-[150px] py-4' />
                            </Link>

                            {/**Perfil */}
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
                                            <Link to={setting.to}>
                                                <Typography textAlign="center">{setting.label}</Typography>
                                            </Link>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>
            <div>
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

