import * as React from 'react';
import logo from '../assets/img/Logo/logo-letras.png'
import logoSimples from '../assets/img/Logo/color-icon.png'
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

const settings = ['Dashboard', 'Logout'];

export default function Navbar() {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => { setAnchorElUser(event.currentTarget) };
    const handleCloseUserMenu = () => { setAnchorElUser(null) };

    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: '#f8f0df' }}>
                <Container maxWidth="xl" className='bg-amarelo_areia'>
                    <Toolbar disableGutters>
                        <div className='flex items-center justify-between w-full max-md:mx-10'>
                            <Link to='/sessao' >
                                <img src={logo} className='flex mr-10 w-[200px] max-md:w-[150px] py-4' />
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
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
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
        </>
    );
}

