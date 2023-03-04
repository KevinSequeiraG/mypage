import Link from "next/link";
import { useTranslation } from "react-i18next";
import SettingsBtn from "../../components/buttons/settings/settingsBtn";
import StudyCard from "../../components/cards/StudyCard";

const Studies = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className='bg-gradient-to-br to-[#3950C3] from-[#9CECFB] dark:bg-gradient-to-br dark:to-[#3950C3] dark:from-black text-white min-h-screen py-10'>
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
            </div>
        </>
    )
}

export default Studies;