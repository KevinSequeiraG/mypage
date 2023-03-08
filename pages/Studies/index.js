import Aos from "aos";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SettingsBtn from "../../components/buttons/settings/settingsBtn";
import StudyCard from "../../components/cards/StudyCard";
import Footer from "../../components/sections/footer";
import '../../public/multilanguage/i18n';

const Studies = () => {
    const { t } = useTranslation();

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
                <div className="w-full text-center">
                    <h1 className="text-[1.8rem] font-bold text-center italic">{t("my-studies")}</h1>
                </div>
                <div className="md:flex">
                    <StudyCard animation={'zoom-in'} image={'Images/utn.png'} name={"Universidad Técnica Nacional"} startMonth={"jan"} startYear={"2020"} finishMonth={"current"} finishYear={""} careerName={'software-engineering'} />
                    <StudyCard animation={'zoom-in'} image={'Images/calufa.jpg'} name={"Colegio técnico nacional Carlos Luis Fallas"} startMonth={"feb"} startYear={"2017"} finishMonth={"dec"} finishYear={"2019"} careerName={'business-computing'} />
                    <StudyCard animation={'zoom-in'} image={'Images/grego.jpg'} name={"Colegio Grogorio José Ramírez"} startMonth={"feb"} startYear={"2012"} finishMonth={"dec"} finishYear={"2016"} careerName={'bachelor'} />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Studies;