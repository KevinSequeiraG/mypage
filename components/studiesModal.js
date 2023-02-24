const StudiesModal = () => {
    return (
        <div className="border-2 border-gray-500 w-[45%] px-7 py-5 rounded-lg justify-content BoxShadow">
            <h2 className="text-[2rem] mb-4">Mis estudios</h2>
            <p className="text-justify">Puedes ver mis principales estudios en esta pequeña lista, sin embargo puedas precionar en &apos;Ver más&apos; si te interesa conocer de manera mas profunda.</p>
            <div className="w-full text-right">
                <button className="bg-black text-white px-3 py-1 rounded-xl border border-2 mt-6 font-bold">Ver más</button>
            </div>
        </div>
    )
}

export default StudiesModal