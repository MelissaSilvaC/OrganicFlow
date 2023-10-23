import FeedbackCard from "components/Cards/FeedbackCard";
import TitleComplaint from "components/Cards/Titles/Title-complaint";

import { useEffect,useState } from "react";
import axios from 'axios';

import empresa from '../../../assets/img/logoExample.png'

export default function FeedbacksList(){
    const [feeds, setFeeds] = useState<any[]>([]);
    useEffect(() => { 

        axios.get(`http://localhost:3000/feed`)
        .then(response => {

            const feeds = response.data.map((item: any) => ({
                id: item.id,
                description:item.description,
                name:item.user.name,
                photo: item.user.photo,
              }));
              setFeeds(feeds);
              console.log(feeds)

        console.log(feeds)
        })
        //retorna o objeto inteiro
        .catch((error) => {
            console.log(error);
        });
        // console.log('aa')
        
  }, []);
    return(
        <>
            <TitleComplaint titulo="Feedbacks dos usuários" />
            <div className="flex flex-wrap px-10 pb-10">
                {/**
                 * Função map preenchendo os seguintes parametros:
                     * photo
                     * name
                     * feedbackText
                 */}
               {feeds?.map((feed) => (
                        
                        <FeedbackCard 
                        photo = {feed.photo}
                        name= {feed.name}
                        feedbackText= {feed.description}
                    />
                        ))}
                
            </div>
        </>
    )
}