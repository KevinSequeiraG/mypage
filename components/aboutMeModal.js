const AboutMeModal = () => {
    return (
        <div className="border-2 border-gray-500 w-[45%] px-7 py-5 rounded-lg justify-content BoxShadow">
            <h2 className="text-[2rem] mb-4">Conoce un poco más sobre mí</h2>
            <p className="text-justify">Si estas interesa en un ver mis diferentes habilidades o alguna información personal puedes entrar en esta sección y encontrar lo que buscas.</p>
            <div className="w-full text-right">
                <button className="bg-black text-white px-3 py-1 rounded-xl border border-2 mt-6 font-bold mx-auto">Conocer más</button>
            </div>
        </div>
    )
}

export default AboutMeModal;