import Link from "next/link";
import { useRouter } from 'next/router'
import en from "../../public/multilanguage/translations-en.json"
import es from "../../public/multilanguage/translations-es.json"

const PersonalProjectsModal = () => {
    const router = useRouter()
    const { locale } = router;
    const t = locale === "en" ? en : es

    return (
        <div className="border-2 border-gray-400 dark:border-gray-500 mdx1200:w-[45%] w-[90%] mdx1200:mx-0 mx-auto px-4 mdx1200:px-7 py-5 rounded-lg justify-content BoxShadow text-white font-semibold">
            <h2 className="text-[1.4rem] mdx1200:text-[2rem] mb-4">{t["projects-made-by-own-learning"]}</h2>
            <p className="text-[.8rem] mdx1200:text-[1rem] text-justify">{t["personal-projects-explication"]}</p>
            <div className="w-full text-right">
                <Link href={"MyOwnProjects"}>
                    <button className="text-[.8rem] mdx1200:text-[1rem] bg-gray-500 dark:bg-black text-white px-3 py-1 rounded-xl border border-2 mt-6 font-bold">{t["know-more"]}</button>
                </Link>
            </div>
        </div>
    )
}

export default PersonalProjectsModal;