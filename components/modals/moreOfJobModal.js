import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import en from "../../public/multilanguage/translations-en.json"
import es from "../../public/multilanguage/translations-es.json"
import Tool from "../tool";

const MoreOfJobModal = (props) => {
    const router = useRouter()
    const { locale } = router;
    const t = locale === "en" ? en : es
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(true)
        document.getElementById("workExpWindow").classList.add("overflow-y-hidden")
        document.getElementById("workExpWindow").classList.add("max-h-[100vh]")
    }

    const closeModal = () => {
        setShowModal(false)
        document.getElementById("workExpWindow").classList.remove("overflow-y-hidden")
        document.getElementById("workExpWindow").classList.remove("max-h-[100vh]")
    }

    useEffect(() => {
        document.getElementById("workExpCardBtn").addEventListener("opened-more-job", () => openModal())
    }, [])


    return (
        <>
            {showModal ? <div className={`min-h-screen max-w-[100vh] lg:max-w-[100%] w-full bg-opacity-70 bg-black absolute top-0 z-[100]`}>
            <button className="absolute right-2 lg:right-[25%] top-[15%] lg:top-[25%] lg:bg-gray-500 lg:border-gray-200 lg:rounded-full lg:items-center lg:h-10 lg:w-10 hover:bg-gray-700" onClick={() => { closeModal() }}><span className="material-icons text-gray-200 !text-[2.4rem]">close</span></button>
                <div className="animate__animated animate__flipInX bg-gray-300 dark:bg-gray-800 w-[90%] lg:w-3/6 px-6 py-4 h-auto rounded-[1rem] top-1/4 left-[5%] lg:top-1/3 lg:left-1/4 -translate-x-1/2 -translate-y-1/2 absolute opacity-100 max-h-[50%] overflow-auto dark:text-gray-300">
                    <h2 className="font-bold text-[1.3rem] my-4">{t["description"]}</h2>
                    <p className="text-justify">{t[window.localStorage.getItem("job-description")]}</p>
                    <h3 className="font-bold text-[1.2rem] my-3">{t["tools-list"]+":"}</h3>
                    <ul className="grid grid-cols-2 justify-center">
                        {JSON.parse([window.localStorage.getItem("job-tools")])?.map((tool, i) => {
                            return <Tool key={i} tool={tool}/>
                        })}
                    </ul>
                </div>
            </div> : null}
        </>
    )
}

export default MoreOfJobModal;