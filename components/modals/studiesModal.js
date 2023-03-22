import Link from "next/link"
import { useRouter } from 'next/router'
import en from "../../public/multilanguage/translations-en.json"
import es from "../../public/multilanguage/translations-es.json"

const StudiesModal = () => {
    const router = useRouter()
    const { locale } = router;
    const t = locale === "en" ? en : es

    return (
        <div className="border-2 border-gray-400 dark:border-gray-500 xl:w-[45%] w-[90%] xl:mx-0 mx-auto px-4 xl:px-7 py-5 rounded-lg justify-content BoxShadow text-white font-semibold">
            <h2 className="text-[1.4rem] xl:text-[2rem] mb-4">{t["my-studies"]}</h2>
            <p className="text-[.8rem] xl:text-[1rem] text-justify">{t["studies-explication"]}</p>
            <div className="w-full text-right">
                <Link href={'/Studies'}>
                    <button className="text-[.8rem] xl:text-[1rem] bg-gray-500 dark:bg-black text-white px-3 py-1 rounded-xl border border-2 mt-6 font-bold">{t["see-more"]}</button>
                </Link>
            </div>
        </div>
    )
}

export default StudiesModal