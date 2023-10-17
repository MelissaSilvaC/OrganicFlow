import FeedbackCard from "components/Cards/FeedbackCard";
import TitleComplaint from "components/Cards/Titles/TitleComplaint";

import empresa from '../../../assets/img/logoExample.png'

export default function FeedbacksList(){
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
                <FeedbackCard 
                    photo = {empresa}
                    name= "Seeds sprout"
                    feedbackText= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at ligula condimentum, bibendum ex quis, elementum velit. Sed porta sollicitudin tellus et semper. Sed ut purus cursus, gravida nibh et, tempus ligula. Aenean magna libero."
                />

                <FeedbackCard
                    photo={empresa}
                    name="Seeds sprout"
                    feedbackText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at ligula condimentum, bibendum ex quis, elementum velit. Sed porta sollicitudin tellus et semper. Sed ut purus cursus, gravida nibh et, tempus ligula. Aenean magna libero."
                />

                <FeedbackCard
                    photo={empresa}
                    name="Seeds sprout"
                    feedbackText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at ligula condimentum, bibendum ex quis, elementum velit. Sed porta sollicitudin tellus et semper. Sed ut purus cursus, gravida nibh et, tempus ligula. Aenean magna libero."
                />

                <FeedbackCard
                    photo={empresa}
                    name="Seeds sprout"
                    feedbackText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at ligula condimentum, bibendum ex quis, elementum velit. Sed porta sollicitudin tellus et semper. Sed ut purus cursus, gravida nibh et, tempus ligula. Aenean magna libero."
                />

                <FeedbackCard
                    photo={empresa}
                    name="Seeds sprout"
                    feedbackText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at ligula condimentum, bibendum ex quis, elementum velit. Sed porta sollicitudin tellus et semper. Sed ut purus cursus, gravida nibh et, tempus ligula. Aenean magna libero."
                />

                <FeedbackCard
                    photo={empresa}
                    name="Seeds sprout"
                    feedbackText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at ligula condimentum, bibendum ex quis, elementum velit. Sed porta sollicitudin tellus et semper. Sed ut purus cursus, gravida nibh et, tempus ligula. Aenean magna libero."
                />

                <FeedbackCard
                    photo={empresa}
                    name="Seeds sprout"
                    feedbackText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at ligula condimentum, bibendum ex quis, elementum velit. Sed porta sollicitudin tellus et semper. Sed ut purus cursus, gravida nibh et, tempus ligula. Aenean magna libero."
                />
                
            </div>
        </>
    )
}