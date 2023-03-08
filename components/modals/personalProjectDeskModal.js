import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const PersonalProjectDeskModal = () => {
    const { t } = useTranslation();
    const [showModal, setShowModal] = useState(false)
    const [galleryImgs, setGalleryImgs] = useState([])

    const openModal = () => {
        setShowModal(true)
        document.getElementById("MyOwnProjects").classList.add("overflow-y-hidden")
        document.getElementById("MyOwnProjects").classList.add("max-h-[100vh]")
    }

    const closeModal = () => {
        setShowModal(false)
        document.getElementById("MyOwnProjects").classList.remove("overflow-y-hidden")
        document.getElementById("MyOwnProjects").classList.remove("max-h-[100vh]")
    }

    useEffect(() => {
        document.getElementById("projectDeskCardBtn").addEventListener("opened-project-desk", () => openModal())
    }, [])


    return (
        <>{showModal ? <div className={`min-h-screen max-w-[100vh] lg:max-w-[100%] w-full bg-opacity-70 bg-black absolute top-0 z-[100]`}>
            <button className="absolute right-2 lg:right-[25%] top-[15%] lg:top-[25%] lg:bg-gray-500 lg:border-gray-200 lg:rounded-full lg:items-center lg:h-10 lg:w-10 hover:bg-gray-700" onClick={() => { closeModal() }}><span className="material-icons text-gray-200 !text-[2.4rem]">close</span></button>
            <div className="text-center animate__animated animate__flipInX bg-gray-300 dark:bg-gray-800 w-[90%] lg:w-3/6 px-6 py-4 h-auto rounded-[1rem] top-1/4 left-[5%] lg:top-1/3 lg:left-1/4 -translate-x-1/2 -translate-y-1/2 absolute opacity-100 max-h-[66%] overflow-auto dark:text-gray-300">
                <h2 className="text-[1.5rem] md:text-[3rem]">{t(window.localStorage.getItem("project-title"))}</h2>
                {
                    JSON.parse([window.localStorage.getItem("project-gallery")])?.map((image, i)=>{
                        return(<img className="max-w-[90%] mx-auto my-4" src={image} key={i}/>)
                    })
                }

            </div>
        </div> : null}</>

    )
}

export default PersonalProjectDeskModal;