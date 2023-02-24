const PersonalProjectsModal = () => {
    return (
        <div className="border-2 border-gray-500 w-[45%] px-7 py-5 rounded-lg justify-content BoxShadow">
            <h2 className="text-[2rem] mb-4">Proyectos hechos por aprendizaje propio</h2>
            <p className="text-justify">También puedes mirar los proyectos que realicé para aprender algun lenguaje o alguna tecnología para ampliar mi conocimiento, podrás ver trabajos que tuve que hacer en proyectos universitarios o bien proyectos que hice por mi propia cuenta.</p>
            <div className="w-full text-right">
                <button className="bg-black text-white px-3 py-1 rounded-xl border border-2 mt-6 font-bold align-center">Conocer más</button>
            </div>
        </div>
    )
}

export default PersonalProjectsModal;