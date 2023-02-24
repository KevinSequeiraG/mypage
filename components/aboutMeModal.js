const AboutMeModal = () => {
    return (
        <div className="border-2 border-gray-500 md:w-[45%] w-[90%] md:mx-0 mx-auto px-4 md:px-7 py-5 rounded-lg justify-content BoxShadow">
            <h2 className="text-[1.4rem] md:text-[2rem] mb-4">Conoce un poco más sobre mí</h2>
            <p className="text-[.8rem] md:text-[1rem] text-justify">Si estas interesa en un ver mis diferentes habilidades o alguna información personal puedes entrar en esta sección y encontrar lo que buscas.</p>
            <div className="w-full text-right">
                <button className="text-[.8rem] md:text-[1rem] bg-black text-white px-3 py-1 rounded-xl border border-2 mt-6 font-bold">Conocer más</button>
            </div>
        </div>
    )
}

export default AboutMeModal;