const PersonalProjectsModal = () => {
    return (
        <div className="border-2 border-gray-500 md:w-[45%] w-[90%] md:mx-0 mx-auto px-4 md:px-7 py-5 rounded-lg justify-content BoxShadow">
            <h2 className="text-[1.4rem] md:text-[2rem] mb-4">Proyectos hechos por aprendizaje propio</h2>
            <p className="text-[.8rem] md:text-[1rem] text-justify">También puedes mirar los proyectos que realicé para aprender algun lenguaje o alguna tecnología para ampliar mi conocimiento, podrás ver trabajos que tuve que hacer en proyectos universitarios o bien proyectos que hice por mi propia cuenta.</p>
            <div className="w-full text-right">
                <button className="text-[.8rem] md:text-[1rem] bg-black text-white px-3 py-1 rounded-xl border border-2 mt-6 font-bold">Conocer más</button>
            </div>
        </div>
    )
}

export default PersonalProjectsModal;