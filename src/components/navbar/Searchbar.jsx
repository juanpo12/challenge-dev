
const Searchbar = ({ setValue }) => {

    return(
        <div className='flex gap-2 items-center'>
            <input
                placeholder='Search characters'
                onChange={(e) => setValue(e.target.value)}
                onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        console.log('Searching...');
                    }
                }}
                className={'rounded-full px-4 py-2 h-fit'}/>
            <button
                onClick={() => {
                    console.log('Searching...');
                }}
                className='bg-transparent'
            >
                <img
                    src='/buscar.png'
                    alt='search'
                    width={20}
                    height={20}
                    className='hidden sm:flex cursor-pointer items-center'
                />
            </button>
    </div>
    )
}

export default Searchbar
