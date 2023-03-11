import { useTranslation } from "next-i18next";
import Router from "next/router";
import { useRouter } from 'next/router'
import en from "../../public/multilanguage/translations-en.json"
import es from "../../public/multilanguage/translations-es.json"


const ProjectByMeCard = (props) => {
    const router = useRouter()
    const { locale } = router;
    const t = locale === "en" ? en : es

    return (
        <>
            <div data-aos={props.animation} className="shadow-lg shadow-white md:mt-32 md:mx-8 w-[85%] md:w-[20%] mx-auto border-2 border-white dark:border-[#B8B8B8] max-h-[20rem] rounded-xl my-8 py-5 px-3 text-center text-white font-semibold">
                <div className="h-[50%]">
                    <img className="rounded-xl w-full mx-auto max-h-[10rem] min-h-[10rem] object-cover" src={props.image}></img>
                </div>
                <div className="h-[50%] flex items-center justify-center content-center flex-col mt-4">
                    <h2 className="my-2">{props.name}</h2>
                    <div className="flex">
                        <button onClick={() => { Router.push(props.link) }} className="mx-2 truncate text-[.8rem] md:text-[1rem] bg-gray-500 dark:bg-black text-white px-3 py-1 rounded-xl border border-2 mt-6 font-bold">{t["go-to-page"]}</button>
                        <button onClick={() => { Router.push(props.repolink) }} className="mx-2 truncate text-[.8rem] md:text-[1rem] bg-gray-500 dark:bg-black text-white px-3 py-1 rounded-xl border border-2 mt-6 font-bold">{t["go-to-repo"]}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectByMeCard;