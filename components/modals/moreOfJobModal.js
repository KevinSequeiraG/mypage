import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import en from "../../public/multilanguage/translations-en.json"
import es from "../../public/multilanguage/translations-es.json"
import Tool from "../tool";
import projects from "../../public/projects/projects.json"

const MoreOfJobModal = (props) => {
    const router = useRouter()
    const { locale } = router;
    const t = locale === "en" ? en : es
    const [showModal, setShowModal] = useState(false)
    const [showModal2, setShowModal2] = useState(false)
    const [showProjects, setShowProjects] = useState(false)
    const [projectsData, setProjectsData] = useState()

    const openModal = () => {
        setShowProjects(JSON.parse(window.localStorage.getItem("show-projects")))
        setShowModal(true)
        document.getElementById("workExpWindow").classList.add("overflow-y-hidden")
        document.getElementById("workExpWindow").classList.add("max-h-[100vh]")
        if (window.localStorage.getItem("company-name") == "Immerso") {
            setProjectsData(projects.immerso)
        } else {
            setProjectsData(projects.doit)
        }
    }

    const closeModal = () => {
        setShowModal(false)
        document.getElementById("workExpWindow").classList.remove("overflow-y-hidden")
        document.getElementById("workExpWindow").classList.remove("max-h-[100vh]")
    }

    useEffect(() => {
        document.getElementById("workExpCardBtn").addEventListener("opened-more-job", () => openModal())
        console.log("A", window.localStorage.getItem("company-name"));

    }, [])


    return (
        <>
            {showModal ? <div className={`min-h-screen max-w-[100vh] lg:max-w-[100%] w-full bg-opacity-70 bg-black absolute top-0 z-[100]`}>
                <button className="absolute right-2 lg:right-[25%] top-[15%] lg:top-[25%] lg:bg-gray-500 lg:border-gray-200 lg:rounded-full lg:items-center lg:h-10 lg:w-10 hover:bg-gray-700" onClick={() => { closeModal() }}><span className="material-icons text-gray-200 !text-[2.4rem]">close</span></button>
                <div className="animate__animated animate__flipInX bg-gray-300 dark:bg-gray-800 w-[90%] lg:w-3/6 px-6 py-4 h-auto rounded-[1rem] top-1/4 left-[5%] lg:top-1/3 lg:left-1/4 -translate-x-1/2 -translate-y-1/2 absolute opacity-100 max-h-[50%] overflow-auto dark:text-gray-300">
                    <h2 className="font-bold text-[1.3rem] my-4">{t["description"]}</h2>
                    <p className="text-justify">{t[window.localStorage.getItem("job-description")]}</p>
                    <h3 className="font-bold text-[1.2rem] my-3">{t["tools-list"] + ":"}</h3>
                    <ul className="grid grid-cols-2 justify-center">
                        {JSON.parse([window.localStorage.getItem("job-tools")])?.map((tool, i) => {
                            return <Tool key={i} tool={tool} />
                        })}
                    </ul>
                    {showProjects ? <button onClick={() => { setShowModal2(true) }} className="text-[.8rem] xl:text-[1rem] bg-gray-500 dark:bg-black text-white px-3 py-1 rounded-xl border border-2 mt-6 font-bold">Conocer proyectos</button> : null}
                </div>
            </div> : null}

            {showModal2 ? <div className={`min-h-screen max-w-[100vh] lg:max-w-[100%] w-full bg-opacity-70 bg-black absolute top-0 z-[100]`}>
                <button onClick={() => { setShowModal2(false) }} className="absolute right-5 lg:right-10 top-12 z-50 lg:top-10 lg:bg-gray-500 lg:border-gray-200 lg:rounded-full lg:items-center lg:h-10 lg:w-10 hover:bg-gray-700"><span className="material-icons text-gray-200 !text-[2.4rem]">close</span></button>
                <div className="animate__animated animate__flipInX bg-gray-300 dark:bg-gray-800 w-[90%] min-w-[90%] min-h-[90%] lg:w-3/6 lg:px-6 lg:py-4 h-auto rounded-[1rem] top-10 left-[5%] lg:top-10 lg:left-30 -translate-x-1/2 -translate-y-1/2 absolute opacity-100 max-h-[50%] overflow-auto dark:text-gray-300">
                    {/* CARD */}
                    {
                        projectsData.map((project,i) => {
                            return (
                                <div key={i} className="border border-gray-400 text-center py-[1rem] lg:lg:mx-4 h-full py-10 rounded-[1rem]">
                                    <h3 className="text-[1.8rem] font-bold mb-4">{t[project.title]}</h3>
                                    <p className="w-[90%] mx-auto mb-6">{t[project.description]}</p>
                                    {
                                        project.videos.map((video, i) => {
                                            return (<video key={i} controls src={video} style={{ width: '80%', height: '500px' }} className="mx-auto" loop />)
                                        })
                                    }
                                    <div className="flex w-[90%] mx-auto justify-between mt-4">
                                        <div>
                                            <h4 className="text-[1.4rem] font-bold">{t["technologies"]}</h4>
                                            <ul className="text-left list-disc ml-5">
                                                {project.techSkills.map((skill, i) => {
                                                    return (<li key={i}>{skill}</li>)
                                                })}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-[1.4rem] font-bold">{t["soft-skills"]}</h4>
                                            <ul className="text-left list-disc ml-5">
                                                {project.softSkills.map((skill, i) => {
                                                    return (<li key={i}>{t[skill]}</li>)
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                    {project.link && <p className=" mx-auto w-[90%] mt-4">Link: <a className="text-yellow-300" href="https://app.immerso.io/">{t["see-page"]}</a></p>}
                                </div>
                            )
                        })
                    }
                    {/* <div className="border border-gray-400 text-center py-[1rem] lg:lg:mx-4 h-full py-10 rounded-[1rem]">
                        <h3 className="text-[1.8rem] font-bold mb-4">Web aplication</h3>
                        <p className="w-[90%] mx-auto mb-6">Se crea una aplicacion capaz de administrar eventos, permitiendo que personas</p>
                        <video controls src={'/Videos/WebAr.mp4'} style={{ width: '80%', height: '500px' }} className="mx-auto" loop />
                        <div className="flex w-[90%] mx-auto justify-between">
                            <div>
                                <h4 className="text-[1.4rem] font-bold">{t["technologies"]}</h4>
                                <ul className="text-left list-disc ml-5">
                                    <li>Reactjs</li>
                                    <li>Git</li>
                                    <li>HTML5</li>
                                    <li>CSS</li>
                                    <li>Bootstrap</li>
                                    <li>AFRAME</li>
                                    <li>ARjs</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-[1.4rem] font-bold">{t["soft-skills"]}</h4>
                                <ul className="text-left list-disc ml-5">
                                    <li>{t["teamwork"]}</li>
                                    <li>{t["organization"]}</li>
                                    <li>{t["self-learning"]}</li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div> : null}
        </>
    )
}

export default MoreOfJobModal;