import Aos from "aos";
import { Footer } from "flowbite-react";
import Link from "next/link"
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SettingsBtn from "../../components/buttons/settings/settingsBtn"
import ProjectByMeCard from "../../components/cards/projectByMeCard"

const MyOwnProjects = () => {
    const { t } = useTranslation();

    useEffect(() => {
        Aos.init({
          duration: 2000
        });
    })

    return(
        <div className='bg-gradient-to-br to-[#3950C3] from-[#9CECFB] dark:bg-gradient-to-br dark:to-[#3950C3] dark:from-black text-white min-h-screen pt-10 pb-32 relative'>
                <div className="relative ml-5">
                    <Link href={'/'}><button className="pt-2 absolute left-0 z-[51]"><span className="material-icons">arrow_back</span></button></Link>
                    <SettingsBtn />
                </div>
                <div className="w-full text-center">
                    <h1 className="text-[1.8rem] font-bold text-center italic">{t("projects-made-by-own-learning")}</h1>
                </div>
                <div className="md:flex md:flex-wrap md:justify-center">
                    {/* <ProjectByMeCard animation={'zoom-in'} image={''} name={"Certificaciones e informes digitales"} startMonth={"jan"} startYear={"2020"} finishMonth={"current"} finishYear={""} careerName={'software-engineering'} />
                    <ProjectByMeCard animation={'zoom-in'} image={''} name={"Gestion de activos, préstamos y traslados"} startMonth={"feb"} startYear={"2017"} finishMonth={"dec"} finishYear={"2019"} careerName={'business-computing'} />
                    <ProjectByMeCard animation={'zoom-in'} image={''} name={"Aplicación de venta de entradas a diferentes eventos"} startMonth={"feb"} startYear={"2012"} finishMonth={"dec"} finishYear={"2016"} careerName={'bachelor'} />
                    <ProjectByMeCard animation={'zoom-in'} image={''} name={"Página web de restaurante de comida china"} startMonth={"feb"} startYear={"2012"} finishMonth={"dec"} finishYear={"2016"} careerName={'bachelor'} /> */}
                    <ProjectByMeCard link={"https://ksgsports.netlify.app/"} animation={'zoom-in'} image={'Images/ksgsports.png'} name={"Página web deportiva"}/>
                    <ProjectByMeCard link={"https://covid19kevin.netlify.app/"} animation={'zoom-in'} image={'Images/covid.png'} name={"Página web informativa del Covid"}/>
                    <ProjectByMeCard link={"https://kevinsequeirag.netlify.app/"} animation={'zoom-in'} image={'Images/cv.png'} name={"Curriculum online"}/>
                    <ProjectByMeCard link={"https://frontendstoreksg2.netlify.app/"} animation={'zoom-in'} image={'Images/tienda1.png'} name={"Visual de tienda sensilla"}/>
                    <ProjectByMeCard link={"https://frontendstoreksg.netlify.app/"} animation={'zoom-in'} image={'Images/tienda1.png'} name={"Tienda de ropa"}/>
                    <ProjectByMeCard link={"https://blogviajesksg.netlify.app/"} animation={'zoom-in'} image={'Images/viajes.png'} name={"Blog de viajes"}/>
                    <ProjectByMeCard link={"https://blogcafeksg.netlify.app/"} animation={'zoom-in'} image={'Images/cafe.png'} name={"Blog de café"}/>
                    <ProjectByMeCard link={"https://bienesraicesksg.netlify.app/"} animation={'zoom-in'} image={'Images/bienesraices.png'} name={"Página de bienes raíces"}/>
                    <ProjectByMeCard link={"https://freelancerksg.netlify.app/"} animation={'zoom-in'} image={'Images/formulario.png'} name={"Diseño de formulario"}/>
                    <ProjectByMeCard link={"https://xmlloadksg.netlify.app/"} animation={'zoom-in'} image={'Images/xmlpage.png'} name={"Carga desde XML"}/>
                </div>
                <Footer />
            </div>
    )
}

export default MyOwnProjects;