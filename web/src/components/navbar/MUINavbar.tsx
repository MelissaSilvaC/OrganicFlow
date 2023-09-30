import * as React from 'react';
import logo from '../../assets/img/Logo/color-words-horizontal.png'
import logoSimples from '../../assets/img/Logo/color-icon.png'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Outlet, Link } from 'react-router-dom'

const settings = ['Dashboard', 'Logout'];

export default function MUINavbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const rotas = [
        { label: 'Empresas', to: '/empresas'}, 
        { label: 'Quem somos', to: '/sobre'}, 
        { label: 'Perfil empresa', to: '/empresa/perfil'},
        { label: 'Perfil fiscal', to: '/fiscal/perfil' },
        { label: 'Linha do tempo', to: '/fiscal/linhatempo' },
        { label: 'Lista de denúncias', to: '/admin/listadenuncias' },
    ];

  return (
    <>
        <AppBar position="static" sx={{backgroundColor: '#f8f0df'}}>
            <Container maxWidth="xl" className='bg-amarelo_areia'>
                <Toolbar disableGutters>
                    {/** Logo normal*/}
                    <Link to='/sessao' >
                          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        {/**<img src={logo} className='w-[220px] ml-12' /> */}
                    </Link>

                    {/** Menu de navegação */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', color:'black' } }}>
                        <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                        >
                        <MenuIcon />
                        </IconButton>
                        <Menu 
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                        >
                        {rotas.map((rota, index) => (
                            <MenuItem key={index} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    {rota.label}
                                </Typography>
                            </MenuItem>
                        ))}
                        
                        </Menu>
                    </Box>

                    {/** Logo simples*/}
                    <Link to='/sessao' >
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        {/**<img src={logoSimples} className='w-[220px] ml-12' /> */}
                    </Link>

                    {/** Menu de navegação */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {rotas.map((rota, index) => (
                            <Link to={rota.to}>
                                <Button
                                    key={index}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'black', display: 'block' }}
                                >
                                    {rota.label}
                                </Button>
                            </Link>
                        ))}
                    </Box>

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
                </Toolbar>
            </Container>
        </AppBar>
        <div>
            <Outlet />
        </div>
    </>
  );
}

