import React, { useLayoutEffect, useState } from "react";
import ComplaintsList from "./DashboardPanels/ComplaintsList";
import AbleManager from "./DashboardPanels/AbleManager";
import BanedUserView from "./DashboardPanels/BanedUserView";
import TitleComplaint from "components/Cards/Titles/Title-complaint";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { AiOutlineMenu } from 'react-icons/ai';
import Toolbar from '@mui/material/Toolbar';
import { Link, Outlet } from "react-router-dom";

const drawerWidth = 240;
const itens = [{
    id: 1,
    label: 'Validar gerentes',
    to: ''
}, {
    id: 2,
    label: 'Lista de denúncias',
    to: 'admin/dashboard/lista-denuncias'
}, {
    id: 3,
    label: 'Ver usuários banidos',
    to: 'admin/dashboard/lista-banidos'
}]

export default function Dashboard() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => { setMobileOpen(!mobileOpen) };
    const [isVerticalNavVisible, setVerticalNavVisibility] = useState(true);
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {itens.map((itens) => (
                    <ListItem key={itens.id} disablePadding>
                        <Link to={itens.to}>
                            <li className="selection:underline my-5">
                                {itens.label}
                            </li>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    useLayoutEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            if (windowWidth >= 1024) { // Tela grande, exibe a barra de navegação vertical
                setVerticalNavVisibility(true);
            } else { // Tela menor, exibe o botão
                setVerticalNavVisibility(false);
            }
        };
        handleResize(); // Chama a função quando o componente é montado
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="flex max-sm:flex-col bg-preto">
            {isVerticalNavVisible && (
                <div className="bg-cinza_escuro w-[20%] max-sm:w-auto text-white max-sm:flex max-sm:flex-col">
                    <ul className="font-medium text-lg pl-12 pt-24 max-sm:p-5 space-y-5 hover:cursor-pointer">

                        <Link to="">
                            <li className="selection:underline my-5">
                                Validar gerentes
                            </li>
                        </Link>
                        <Link to="admin/dashboard/lista-denuncias">
                            <li className="selection:underline my-5">
                                Lista de denúncias
                            </li>
                        </Link>
                        <Link to="admin/dashboard/lista-banidos">
                            <li className="selection:underline my-5">
                                Ver usuários banidos
                            </li>
                        </Link>
                    </ul>
                    <div className="h-screen max-sm:h-0" />
                </div>
            )}

            {!isVerticalNavVisible && (
                <>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ 
                            display: "flex", 
                            justifyContent: "start", 
                            padding: "1.5rem"
                        }}
                    >
                        <AiOutlineMenu className='text-white w-8 h-8' />
                    </IconButton>

                    {/**menu lateral */}
                    <Box
                        component="nav"
                        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                        aria-label="mailbox folders"
                    >
                        <Drawer
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{ keepMounted: true }}
                            sx={{ 
                                display: { xs: 'block', sm: 'none' }, 
                                '& .MuiDrawer-paper': { 
                                    boxSizing: 'border-box', 
                                    width: drawerWidth, 
                                    backgroundColor: "#525252",
                                    color: "white",
                                    fontFamily: "montserrat",
                                    fontSize: "18px",
                                    padding: "20px"
                                } 
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Box>
                </>
            )}
            <div className="w-[80%] max-sm:w-full">
                <Outlet/>
            </div>
        </div>
    );
}
