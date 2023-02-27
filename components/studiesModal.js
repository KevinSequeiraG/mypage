import Link from "next/link"

const StudiesModal = () => {
    return (
        <div className="border-2 border-gray-500 md:w-[45%] w-[90%] md:mx-0 mx-auto px-4 md:px-7 py-5 rounded-lg justify-content BoxShadow">
            <h2 className="text-[1.4rem] md:text-[2rem] mb-4">Mis estudios</h2>
            <p className="text-[.8rem] md:text-[1rem] text-justify">Puedes ver mis principales estudios en esta pequeña lista, sin embargo puedas precionar en &apos;Ver más&apos; si te interesa conocer de manera mas profunda.</p>
            <div className="w-full text-right">
                <Link href={'/Studies'}>
                    <button className="text-[.8rem] md:text-[1rem] bg-black text-white px-3 py-1 rounded-xl border border-2 mt-6 font-bold">Ver más</button>
                </Link>
            </div>
        </div>
    )
}

export default StudiesModal