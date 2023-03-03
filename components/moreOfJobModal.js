import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const MoreOfJobModal = (props) => {
    const { t } = useTranslation();
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        console.log(":aasdfadfasfdasf");
        setShowModal(true)
    }

    useEffect(() => {
        console.log("object");
        document.getElementById("workExpCardBtn").addEventListener("opened-more-job", ()=>openModal())
    }, [])


    return (
        <>
            {showModal ? <div className="min-h-screen max-w-[100vh] w-full bg-opacity-50 bg-black absolute top-0 z-[100]">
                <div className="bg-white w-[90%] lg:w-1/6 px-4 py-4 h-auto rounded-[1rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute opacity-100 ">
                    <h2>{t("description")}</h2>
                    <p>{t("todo")}</p>
                    <h3>{t("tools-list")}</h3>
                    <ul>
                        {props.toolsList?.map(tool => {
                            return <li>{tool}</li>
                        })}
                    </ul>
                </div>
            </div> : null}
        </>
    )
}

export default MoreOfJobModal;