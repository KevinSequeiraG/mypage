import Link from "next/link";
import { useTranslation } from "react-i18next";
import StudyCard from "../../components/StudyCard";

const Studies = () => {
    const { t } = useTranslation();

    return (
        <div className='MainBg text-white min-h-screen py-10'>
            <div data-aos="zoom-in" data-aos-duration="1000" className="flex items-center mx-6">
                <Link href={'/'}><button><span class="material-icons">arrow_back</span></button></Link>
                <div className="w-full text-center">
                    <h1 className="text-[1.8rem] font-bold text-center italic">{t("my-studies")}</h1>
                </div>
            </div>
            <div className="md:flex">
                <StudyCard animation={'zoom-in'} image={'Images/utn.png'} name={"Universidad Técnica Nacional"} startMonth={"jan"} startYear={"2020"} finishMonth={"current"} finishYear={""} careerName={'software-engineering'} />
                <StudyCard animation={'zoom-in'} image={'Images/calufa.jpg'} name={"Colegio técnico nacional Carlos Luis Fallas"} startMonth={"feb"} startYear={"2017"}  finishMonth={"dec"} finishYear={"2019"} careerName={'business-computing'} />
                <StudyCard animation={'zoom-in'} image={'Images/grego.jpg'} name={"Colegio Grogorio José Ramírez"} startMonth={"feb"}  startYear={"2012"} finishMonth={"dec"} finishYear={"2016"} careerName={'bachelor'} />
            </div>
        </div>
    )
}

export default Studies;