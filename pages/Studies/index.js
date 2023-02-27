import Link from "next/link";
import StudyCard from "../../components/StudyCard";

const Studies = () => {
    return (
        <div className='MainBg text-white min-h-screen py-10'>
            <div data-aos="zoom-in" data-aos-duration="1000" className="flex items-center mx-6">
                <Link href={'/'}><button><span class="material-icons">arrow_back</span> </button></Link>
                <div className="w-full text-center">
                    <h1 className="text-[1.8rem] font-bold text-center italic">Mis estudios</h1>
                </div>
            </div>
            <div className="md:flex">
                <StudyCard mobileAnimation={"zoom-in-right"} animation={'zoom-in'} image={'Images/utn.png'} name={"Universidad Técnica Nacional"} startDate={'Enero, 2020'} finishDate={'Actualmente'} careerName={'Ingeniería del Software'} />
                <StudyCard mobileAnimation={"zoom-in-left"} animation={'zoom-in'} image={'Images/grego.jpg'} name={"Colegio técnico nacional Carlos Luis Fallas"} startDate={'Febrero, 2017'} finishDate={'Diciembre, 2019'} careerName={'Informática Empresarial'} />
                <StudyCard mobileAnimation={"zoom-in-right"} animation={'zoom-in'} image={'Images/calufa.jpg'} name={"Colegio Grogorio José Ramírez"} startDate={'Febrero, 2012'} finishDate={'Diciembre, 2016'} careerName={'Bachillerato'} />
            </div>
        </div>
    )
}

export default Studies;