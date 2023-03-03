import { useTranslation } from "react-i18next";

const WorkExpCard = (props) => {
    const { t } = useTranslation();

    const OpenJobModal = () => {
        document.getElementById("workExpCardBtn").dispatchEvent(new CustomEvent("opened-more-job"))
    }

    return (
        <>
            <div data-aos={props.animation} className="md:mt-32 relative md:mx-8 w-[85%] mx-auto border-2 border-white dark:border-[#B8B8B8] rounded-xl my-8 py-5 px-3 text-center text-white font-semibold">
                <img className="rounded-xl max-w-[10rem] mx-auto" src={props.image}></img>
                <h2 className="my-2">{props.name}</h2>
                <p className="my-2">{t(props.position)}</p>
                <p>{t(props.startMonth) + ', ' + props.startYear + ' - ' + t(props.finishMonth) + ', ' + props.finishYear}</p>
                <button onClick={()=>OpenJobModal()} id="workExpCardBtn" className="text-[.8rem] md:text-[1rem] bg-gray-500 dark:bg-black text-white px-3 py-1 rounded-xl border border-2 mt-6 font-bold">{t("know-more")}</button>
            </div>
        </>
    )
}

export default WorkExpCard;