import Input from "../ui/Input"

const Searchbar = ({ setFilters, value }) => {

    return(
        <div className='flex gap-2 items-center'>

            <Input
                placeholder='Search characters'
                onChange={(e) => setFilters(e.target.value)}
                className={'rounded-full px-4 py-2 h-fit'}
                value={ value }
            />
    </div>
    )
}

export default Searchbar
