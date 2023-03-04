import Aos from "aos";
import Link from "next/link";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import MoreOfJobModal from "../../components/moreOfJobModal";
import SettingsBtn from "../../components/settingsBtn";
import WorkExpCard from "../../components/workExpCard";

const WorkExperience = () => {
    const { t } = useTranslation();

    useEffect(() => {
        Aos.init({
            duration: 2000
          });
    }, [])
    

    return (
        <>
            <div className="relative">
                <div id="workExpWindow" className="relative bg-gradient-to-br to-[#3950C3] from-[#9CECFB] dark:bg-gradient-to-br dark:to-[#3950C3] dark:from-black text-white min-h-screen py-10">
                    <div className="relative ml-5">
                        <Link href={'/'}><button className="pt-2 absolute left-0 z-[51]"><span className="material-icons">arrow_back</span></button></Link>
                        <SettingsBtn />
                    </div>

                    <div className="w-full text-center">
                        <h1 className="text-[1.4rem] mt-1 font-bold text-center italic">{t("my-work-experience")}</h1>
                    </div>
                    <div className="md:flex">
                        <WorkExpCard tools={["Next-js", "Tailwind", "HTML5", "Firebase"]} animation={'zoom-in'} description={"job-desc-doit"} image={'Images/Doit.jpg'} name={"DoitXR"} startMonth={"aug"} startYear={"2022"} finishMonth={"current"} finishYear={""} position={'soft-engineer'} />
                        <WorkExpCard tools={["React-js", "Bootstrap", "HTML5", "AFRAME", "ARjs"]} animation={'zoom-in'} description={"job-desc-immerso"} image={'Images/Immerso.jpg'} name={"Immerso"} startMonth={"feb"} startYear={"2022"} finishMonth={"sep"} finishYear={"2022"} position={'soft-engineer'} />
                    </div>

                </div>

                <MoreOfJobModal />
            </div>

        </>

    )
}

export default WorkExperience;