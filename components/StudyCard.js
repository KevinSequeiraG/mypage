import { useTranslation } from "react-i18next";

const StudyCard = (props) => {
    const { t } = useTranslation();

    return (
        <div data-aos={props.animation} className="md:mt-32 md:mx-8 w-[85%] mx-auto border-2 border-[#B8B8B8] rounded-xl my-8 py-5 px-3 text-center">
            <img className="rounded-xl max-w-[10rem] mx-auto" src={props.image}></img>
            <h2 className="my-2">{props.name}</h2>
            <p className="my-2">{t(props.careerName)}</p>
            <p>{t(props.startMonth) + ', ' + props.startYear + ' - ' + t(props.finishMonth) + ', ' + props.finishYear}</p>
        </div>
    )
}

export default StudyCard;