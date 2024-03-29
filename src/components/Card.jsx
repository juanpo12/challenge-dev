
const Card = ({image, name, species, gender, status}) => {

    return (
        <div className="border flex flex-col w-2/3 h-full p-2 border-violet-900 bg-violet-600/60 rounded-3xl cursor-pointer hover:scale-105 shadow-lg shadow-violet-700">
            <div className="flex justify-center">
                <img src={image} alt={name} className="w-2/3 rounded-full border-2 border-violet-800 shadow-2xl" />
            </div>
            <div className="text-center flex flex-col">
                <h1 className="text-2xl font-bold p-2">{name}</h1>
                <p className="text-xl">{species}</p>
                <p className="text-xl">{status}</p>
                <p className="text-xl">{gender}</p>
            </div>
        </div>
    )
}

export default Card
