import { useState } from "react"
import Card from "./Card"
import Modal from "./Modal"

const CharacterList = ({characters, loading}) => {
    const [isOpen, setIsOpen] = useState(false)

    const [selectedCharacter, setSelectedCharacter] = useState({})

    const handleCardClick = (item) => {
        setSelectedCharacter(item);
        setIsOpen(true);
    };
    

    return(
        <div className="sm:grid sm:grid-cols-3 md:grid-cols-4">
            {
                characters?.map((item) => {
                    
                    return (
                        <div className="flex justify-center mt-10" key={item.name}>
                                <Card
                                    handleCardClick={handleCardClick}
                                    image={item.image}
                                    name={item.name}
                                    species={item.species}
                                    gender={item.gender}
                                    origin={item.origin?.name}
                                    status={item.status}
                                />
                        </div>
                    )
                })
            }
            {isOpen && (
                <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
                    <div className="text-center">
                        <img src={selectedCharacter.image} alt={selectedCharacter.name} className="mx-auto mb-4 rounded-full border-2 border-violet-800 shadow-2xl" />
                        <h2 className="text-2xl font-bold mb-4">{selectedCharacter.name}</h2>
                        <p className="text-lg">{selectedCharacter.species}</p>
                        <p className="text-lg">{selectedCharacter.gender}</p>
                        <p className="text-lg">{selectedCharacter.status}</p>
                        <p className="text-lg">{selectedCharacter.origin}</p>
                    </div>
                </Modal>
            )}
            {
                loading && 
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4">Loading...</h2>
                    </div>
            }
        </div>
    )
}

export default CharacterList