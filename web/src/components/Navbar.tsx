import * as React from 'react';
import logo from '../assets/img/Logo/logo-letras.png'
import Placeholder from '../assets/img/placeholder.png'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Outlet, Link, useNavigate } from 'react-router-dom'
import Papel from '../assets/img/Fundo/papel1.png'
import Footer from './Footer';

interface Option {
    id: number,
    label: string,
    to: string
}

const photoStorage = localStorage.getItem('photo');
const idStorage = localStorage.getItem('id');
const roleStorage = localStorage.getItem('id_role');
const nameStorage = localStorage.getItem('name');

const teste: Option[] = [{ id: 1, label: 'Login/Cadastro', to: '/sessao'}, { id: 2, label: 'Timeline',to: '/fiscal/lista/linhatempo/:id'}, {id: 3, label: 'Dashboard', to: '/admin/dashboard'}];
let opcoes: Option[]
let fotoExiste = false;

if (photoStorage) {
    const image = new Image();
    image.src = photoStorage;

    image.onload = () => {
        fotoExiste = true;
    };
}

if (idStorage){
    if (roleStorage === "1"){
        opcoes = [{ id: 1, label: 'Dashboard', to: '/admin/dashboard' }]
    } else if (roleStorage === "2"){
        opcoes = [{ id: 1, label: 'Ver perfil', to: `/${nameStorage}/perfil/${idStorage}` }]
    } else if (roleStorage === "3") {
        opcoes = [{ id: 1, label: 'Ver perfil', to: `/fiscal/perfil/${idStorage}` }]
    } else {
        opcoes = []
    }
} else {
    opcoes = [{ id: 1, label: 'Faça login', to: '/sessao/login' }]
}

/**
 * Se o login exite = idStorage?
 * 
 * idRole
 * 1 = adm
 * 2 = gerente
 * 3 = fiscal
 * undefined = normal
 * 
 */

export default function Navbar() {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => { setAnchorElUser(event.currentTarget) };
    const handleCloseUserMenu = () => { setAnchorElUser(null) };
    const navigate = useNavigate()

    return (
        <>
            <AppBar position="static" sx={{ backgroundImage: `url(${Papel})`, backgroundSize: 'cover' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <div className='flex items-center justify-between w-full max-lg:mx-4'>
                            {/**LOGO ORGANICFLOW */}
                            <Link to={'/'} >
                                <img src={logo} className='flex mr-10 w-[14rem] max-lg:w-[150px] py-4' />
                            </Link>
                            
                            <Box sx={{ flexGrow: 0}}>
                                {/** PERFIL */}
                                <Tooltip title="Open settings">
                                    {idStorage ? (
                                        <div>
                                            {roleStorage === "2" && !fotoExiste ? (
                                                <div
                                                    onClick={handleOpenUserMenu}
                                                    className="w-[4rem] h-[4rem] my-4 max-sm:w-[3rem] max-sm:h-[3rem] max-sm:my-2 rounded-full bg-cover shadow-md hover:cursor-pointer"
                                                    style={{ backgroundImage: `url(${Placeholder})` }}
                                                />
                                            ) : fotoExiste ? (
                                                <div
                                                    onClick={handleOpenUserMenu}
                                                    className="w-[4rem] h-[4rem] my-4 max-sm:w-[3rem] max-sm:h-[3rem] max-sm:my-2 rounded-full bg-cover shadow-md hover:cursor-pointer"
                                                    style={{ backgroundImage: `url(${photoStorage})` }}
                                                />
                                            ) : (
                                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                                    <Avatar alt={`${nameStorage}`} src='/static/images/avatar/2.jpg' />
                                                </IconButton>
                                            )}
                                        </div>
                                    ) : (
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar />
                                        </IconButton>
                                    )}
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '4rem' }}
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                                    keepMounted
                                    transformOrigin={{vertical: 'top', horizontal: 'right'}}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >

                                    {/**OPÇÕES DO PERFIL */}
                                    {opcoes.map((opcao) => (
                                        <MenuItem key={opcao.id} onClick={handleCloseUserMenu}>
                                            <Link to={opcao.to}>
                                                <p className='font-sans'>{opcao.label}</p>
                                            </Link>
                                        </MenuItem>
                                    ))}
                                    {idStorage && (
                                        <button onClick={() => { localStorage.clear(); navigate('/sessao/login')}} className='px-4'>
                                            Desconectar-se
                                        </button>
                                    )}
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

