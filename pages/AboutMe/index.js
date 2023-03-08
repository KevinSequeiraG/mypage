import Aos from "aos";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SettingsBtn from "../../components/buttons/settings/settingsBtn";
import Footer from "../../components/sections/footer";
import Tool from "../../components/tool";
import '../../public/multilanguage/i18n';

const AboutMe = () => {
    const { t } = useTranslation();
    let techSkills = ["ReactJS", "NextJS", "CSS3", "JS", "Tailwind", "Bootstrap", "Java", "C# .NET", "Python", "Git", "Sql Server", "Firebase", "AFRAME", "ARjs"]
    let softSkills = ["teamwork", "work-under-pressure", "puntuality", "ease-of-adaptation", "problem-resolution"]

    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, [])

    return (
        <>
            <Head>
                <title>Kevin Sequeira Garita</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="author" content="Kevin Steven Sequeira Garita"></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='bg-gradient-to-br to-[#3950C3] from-[#9CECFB] dark:bg-gradient-to-br dark:to-[#3950C3] dark:from-black text-white min-h-screen pt-10 pb-32 relative'>
                <div className="relative ml-5">
                    <Link href={'/'}><button className="pt-2 absolute left-0 z-[51]"><span className="material-icons">arrow_back</span></button></Link>
                    <SettingsBtn />
                </div>
                <h1 className="text-[1.8rem] font-bold text-center italic">{t("my-profile")}</h1>

                <p className="mt-3 text-justify  px-8">{t("profile-exp")}</p>

                <h2 className="mt-5 px-8">{t("tech-skills")}:</h2>
                <ul className="grid grid-cols-2 justify-center px-8">
                    {techSkills.map((skill, i) => {
                        return (<Tool key={i} tool={skill} />)
                    })}
                </ul>
                <h2 className="mt-5 px-8">{t("soft-skills")}:</h2>
                <ul className="grid grid-cols-2 justify-center  px-8">
                    {softSkills.map((skill, i) => {
                        return (<Tool key={i} tool={skill} />)
                    })}
                </ul>
                <Footer />
            </div>
        </>
    )
}

export default AboutMe;