import { useState } from "react";

const StudyCard = (props) => {
    const [isMobile, setIsMobile] = useState(navigator.userAgentData.mobile)

    return(
        <div data-aos={isMobile?props.mobileAnimation:props.animation} className="w-[85%] mx-auto border-2 border-[#B8B8B8] rounded-xl my-8 py-5 px-3 text-center">
            <img className="rounded-xl max-w-[10rem] mx-auto" src={props.image}></img>
            <h2 className="my-2">{props.name}</h2>
            <p className="my-2">{props.careerName}</p>
            <p>{props.startDate+' - '+props.finishDate}</p>
        </div>
    )
}

export default StudyCard;