import FeedbackCard from "components/Cards/FeedbackCard";
import TitleComplaint from "components/Cards/Titles/TitleComplaint";

export default function FeedbacksList(){
    return(
        <>
            <TitleComplaint titulo="Feedbacks dos usuários" />
            <div className="flex flex-wrap px-10 pb-10">
                <FeedbackCard /><FeedbackCard /><FeedbackCard />
                <FeedbackCard /><FeedbackCard /><FeedbackCard />
                <FeedbackCard /><FeedbackCard /><FeedbackCard />
            </div>
        </>
    )
}