import Select from "./ui/Select"
import Button from "./ui/Button"


const Filters = ({filters, setFilters}) => {

    const gender = ['Male', 'Female', 'unknown']
    const status = ['Alive', 'Dead', 'unknown']
    const species = ['Human', 'Alien', 'unknown']

    const cleanFilters = () => {

        setFilters({
            status: '',
            species: '',
            gender: '',
            name: ''
        })
    }


    return (
        <div className="bg-violet-600/60 p-2 gap-4 md:rounded-xl flex flex-col md:m-10 shadow-lg shadow-violet-800 md:w-1/4 h-fit">
            <h1 className="text-2xl font-bold text-center">Filters</h1>
            <div className="flex sm:flex-col p-4 gap-2">
                <Select options={status} value={filters.status} placeholder="Status" setValue={(value) => setFilters({...filters, status: value})}/>
                <Select options={species} value={filters.species} placeholder="Species" setValue={(value) => setFilters({...filters, species: value})}/>
                <Select options={gender} value={filters.gender} placeholder="Gender" setValue={(value) => setFilters({...filters, gender: value})}/>
                <div className="flex w-full justify-center gap-2">
                    <Button onClick={cleanFilters}>Clear</Button>
                </div>
            </div>
        </div>
    )
}

export default Filters 
