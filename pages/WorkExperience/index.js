import Link from "next/link";
import { useTranslation } from "react-i18next";
import SettingsBtn from "../../components/settingsBtn";
import WorkExpCard from "../../components/workExpCard";

const WorkExperience = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-gradient-to-br to-[#3950C3] from-[#9CECFB] dark:bg-gradient-to-br dark:to-[#3950C3] dark:from-black text-white min-h-screen py-10">
            <div className="relative ml-5">
                <Link href={'/'}><button className="pt-2 absolute left-0 z-[51]"><span class="material-icons">arrow_back</span></button></Link>
                <SettingsBtn />
            </div>

            <div className="w-full text-center">
                <h1 className="text-[1.8rem] font-bold text-center italic">{t("my-studies")}</h1>
            </div>
            <div className="md:flex">
                <WorkExpCard animation={'zoom-in'} image={'Images/Doit.jpg'} name={"DoitXR"} startMonth={"aug"} startYear={"2022"} finishMonth={"current"} finishYear={""} position={'soft-engineer'} />
                <WorkExpCard animation={'zoom-in'} image={'Images/Immerso.jpg'} name={"Immerso"} startMonth={"feb"} startYear={"2022"} finishMonth={"sep"} finishYear={"2022"} position={'soft-engineer'} />
                <WorkExpCard animation={'zoom-in'} image={''} name={"Regional Directorate of Migration and Immigration"} startMonth={"aug"} startYear={"2019"} finishMonth={"nov"} finishYear={"2019"} position={'soft-engineer'} />
            </div>
        </div>
    )
}

export default WorkExperience;