import { useState } from "react"
import Card from "./Card"
import Modal from "./Modal"

const Cards = () => {
    const [isOpen, setIsOpen] = useState(false)

    const [selectedCharacter, setSelectedCharacter] = useState({})

    const character = [
        {
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            name: 'Rick',
            species: 'Human',
            gender: 'Male'
        },
        {
            image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
            name: 'Morty',
            species: 'Human',
            gender: 'Male'
        },
        {
            image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
            name: 'Beth',
            species: 'Human',
            gender: 'Female'
        },
        {
            image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
            name: 'Jerry',
            species: 'Human',
            gender: 'Male'
        },
        {
            image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
            name: 'Abadango Cluster Princess',
            species: 'Alien',
            gender: 'Female'
        },
        {
            image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
            name: 'Abradolf Lincler',
            species: 'Human',
            gender: 'Male'
        },
        {
            image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
            name: 'Abadango Cluster Princess',
            species: 'Alien',
            gender: 'Female'
        },
        {
            image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
            name: 'Abradolf Lincler',
            species: 'Human',
            gender: 'Male'
        }
    ]

    const handleCardClick = (item) => {
        setSelectedCharacter(item);
        setIsOpen(true);
    };
    
    console.log(selectedCharacter);
    return(
        <div className="sm:grid sm:grid-cols-3 md:grid-cols-4">
            {
                character.map((item) => {
                    return (
                        <div className="flex justify-center mt-10" key={item.name}>
                                <Card
                                    handleCardClick={handleCardClick}
                                    image={item.image}
                                    name={item.name}
                                    species={item.species}
                                    gender={item.gender}
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
                    </div>
                </Modal>
            )}
        </div>
    )
}

export default Cards