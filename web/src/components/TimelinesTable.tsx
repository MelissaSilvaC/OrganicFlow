import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useState, useEffect } from "react";
import api from '../axiosUrl'
import Button from './Items_Forms/Button';

interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
        event: React.MouseEvent<HTMLButtonElement>,
        newPage: number,
    ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
    const handleFirstPageButtonClick = ( event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

function createData(id: number, data: string) { return { id, data }; }

export default function TimelinesTable(nome : string) {
    const [rows, setLinhas] = useState<any[]>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [mobile, setMobile] = useState(false)
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    
    const url = window.location.href;
    const id = url.split("/").pop();
    const idStorage = localStorage.getItem('id');
    const roleStorage = localStorage.getItem('id_role');
    let perfil = true
    let comum = false
    if (id != idStorage) { perfil = false }
    if (roleStorage === null) { comum = true }

    useEffect(() => {
        const url = window.location.href;
        const id = url.split("/").pop();
        api.get(`/produto/${id}`)
            .then(response => {
                const novaslinhas = response.data.Linha.map((linha: { id: number; date: string; }) => ({
                    id: linha.id,
                    data: linha.date
                }));

                setLinhas(novaslinhas);
                console.log(novaslinhas)
            })
            //retorna o objeto inteiro
            .catch((error) => {
                console.log(error);
            });
    }, []);
    
    React.useLayoutEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            if (windowWidth >= 1024) { // Tela grande, exibe a barra de navegação vertical
                setMobile(false);
            } else { // Tela menor, exibe o botão
                setMobile(true);
            }
        };

        handleResize(); // Chama a função quando o componente é montado
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const cadastro = () => {
        api.post(`/linha`, {
            id_produto: id,
        })
            .then(response => console.log(response))//se for sucedido 
            .catch((error) => {
                console.log(error);
            });
    }

    const deletar = () => {
        api.delete(`/produto/${id}`, {
        })
            .then(response => console.log(response))//se for sucedido 
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="py-28 max-lg:py-10 px-28 max-lg:px-4">
            <TableContainer component={Paper} style={{ backgroundColor: `transparent` }}>
                <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                    <TableBody>
                        {(rowsPerPage > 0
                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : rows
                        ).map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row" style={{ color: `white` }}>
                                    <Link to={`${nome}/lista/linha/${row.id}`}>ID: {row.id}</Link>
                                </TableCell>
                                <TableCell component="th" scope="row" style={{ color: `white` }}>
                                    <Link to={`${nome}/lista/linha/${row.id}`}>Criado em: {row.data}</Link>
                                </TableCell>
                            </TableRow>
                        ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                style={{ color: `white` }}
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                                colSpan={3}
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{ inputProps: {'aria-label': 'Linhas por página'}, native: true }}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
            <div className="flex mt-8 max-lg:flex-wrap max-sm:flex-nowrap max-sm:flex-col max-lg:space-y-5 max-sm:text-sm max-sm:items-center">
                {mobile &&
                    <Button
                        texto='Escanear linha do tempo'
                        botaoCSS='bg-verde_folha h-[40px] rounded-lg font-semibold max-lg:font-medium text-white px-5 mr-6 max-sm:mr-0 shadow hover:bg-verde_palido'
                        onClick={() => { }}
                    />
                }

                {comum ? '' :
                    <Button
                        texto='Cadastrar linha do tempo'
                        botaoCSS='bg-verde_folha h-[40px] rounded-lg font-semibold max-lg:font-medium text-white px-5 shadow hover:bg-verde_palido'
                        onClick={() => { cadastro() }}
                    />
                }

                {perfil &&
                    <Button
                        texto='Deletar produto'
                        botaoCSS='ml-12 max-lg:ml-0 text-red-600 h-[40px] rounded-lg font-semibold max-lg:font-medium px-5 mr-6 max-sm:mr-0 shadow border-2 border-red-600 hover:animate-pulse'
                        onClick={() => {
                            const confirmacao = window.confirm('Tem certeza? Esta ação vai deletar TODAS as linhas do tempo relacionadas a esse produto');
                            if (confirmacao) { deletar() }
                        }}
                    />
                }
            </div>
        </div>
    );
}
