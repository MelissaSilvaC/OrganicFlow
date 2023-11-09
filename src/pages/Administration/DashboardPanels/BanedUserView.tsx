import React, { useState, useEffect } from 'react';
import api from '../../../axiosUrl'

import TitleComplaint from "components/Cards/Titles/Title-complaint";
import empresa from '../../../assets/img/logoExample.png'
import BanedUserCard from "components/Cards/InfoCards/BanedUser";

export default function BanedUserView() {
    const [users, setUsers] = useState<{ id: number, name: string, email: string, cnpj: string,photo:string }[]>([]);

  useEffect(() => {
    api.get('/ban') // Substitua 'URL_DA_API_AQUI' pela URL da sua API
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar usuários banidos:', error);
      });
  }, []);

  return (
    <>
      <TitleComplaint titulo="Usuários banidos" estilo="max-sm:pt-0" />
      <div className="text-white px-20 max-sm:px-2">
        <div className="flex flex-wrap max-sm:pb-14">
          {users.map(user => (
            <BanedUserCard
              key={user.id}
              id={user.id}
              photo={user.photo}
              name={user.name}
              email={user.email}
              cnpj={user.cnpj} />
          ))}
        </div>
      </div>
    </>
  )
}
