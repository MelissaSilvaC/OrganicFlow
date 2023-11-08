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
import { Outlet } from "react-router-dom";

const drawerWidth = 240;
const itens = [{
    id: 1,
    label: 'Validar gerentes'
}, {
    id: 2,
    label: 'Lista de denúncias'
}, {
    id: 3,
    label: 'Ver usuários banidos'
}]

export default function Dashboard() {
    const [selectedOption, setSelectedOption] = useState("Validar gerentes")
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => { setMobileOpen(!mobileOpen) };
    const [isVerticalNavVisible, setVerticalNavVisibility] = useState(true);
    const handleOptionClick = (option: string) => { setSelectedOption(option) };
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {itens.map((itens) => (
                    <ListItem key={itens.id} disablePadding>
                        <li onClick={() => handleOptionClick(itens.label)}
                            className={selectedOption === `${itens.label}` ? "underline my-2" : "my-2"}
                        >
                            {itens.label}
                        </li>
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
                        <li
                            onClick={() => handleOptionClick("Validar gerentes")}
                            className={selectedOption === "Validar gerentes" ? "underline" : ""}
                        >
                            Validar gerentes
                        </li>
                        <li
                            onClick={() => handleOptionClick("Lista de denúncias")}
                            className={selectedOption === "Lista de denúncias" ? "underline" : ""}
                        >
                            Lista de denúncias
                        </li>
                        <li
                            onClick={() => handleOptionClick("Ver usuários banidos")}
                            className={selectedOption === "Ver usuários banidos" ? "underline" : ""}
                        >
                            Ver usuários banidos
                        </li>
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
                        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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

            {/**Area onde vai aparecer a interface selecionada */}
            <div className="w-[80%] max-sm:w-full">
                <Outlet/>
                {/**
                 * {selectedOption === "Validar gerentes" && <AbleManager />}

                {selectedOption === "Lista de denúncias" &&
                    <div className="pb-28 max-sm:h-screen">
                        <TitleComplaint titulo="Denúncias" estilo="max-sm:pt-0" />
                        <div className="px-16 max-sm:px-2">
                            <div className="bg-gray-200">
                                <ComplaintsList />
                            </div>
                        </div>
                    </div>
                }
                {selectedOption === "Ver usuários banidos" && <BanedUserView />}
                 */}
            </div>
        </div>
    );
}
