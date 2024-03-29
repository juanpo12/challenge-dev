import { useState } from "react";
import Searchbar from "./Searchbar";
const Navbar = () => {
    const [value, setValue] = useState('')

    console.log(value);

    return (
        <div className="bg-violet-600 w-screen p-2 items-center grid grid-cols-3">
            <div className="justify-self-center">
                <img src="image.png" alt="Rick and Morty" className="hidden sm:flex h-16 place-self-center" />
            </div>
            <div className="justify-self-center">
                <Searchbar setValue={setValue}/>
            </div>
            <div className="justify-self-center">
                <img src="rickandmorty.png" alt="Rick and Morty" className="hidden sm:flex h-16" />
            </div>
        </div>
    )
}

export default Navbar
