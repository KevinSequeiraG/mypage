import Link from "next/link";
import { useTranslation } from "react-i18next";

const AboutMeModal = () => {
    const { t } = useTranslation();

    return (
        <div className="border-2 border-gray-400 dark:border-gray-500 md:w-[45%] w-[90%] md:mx-0 mx-auto px-4 md:px-7 py-5 rounded-lg justify-content BoxShadow text-white">
            <h2 className="text-[1.4rem] md:text-[2rem] mb-4">{t("know-a-little-more-about-me")}</h2>
            <p className="text-[.8rem] md:text-[1rem] text-justify">{t("about-me-explication")}</p>
            <div className="w-full text-right">
                <Link href={"AboutMe"}>
                    <button className="text-[.8rem] md:text-[1rem] bg-gray-500 dark:bg-black text-white px-3 py-1 rounded-xl border border-2 mt-6 font-bold">{t("know-more")}</button>
                </Link>
            </div>
        </div>
    )
}

export default AboutMeModal;