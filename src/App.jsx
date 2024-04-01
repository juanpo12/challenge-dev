import { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar'
import { useQuery } from '@apollo/client';
import CharacterList from './components/CharacterList';
import Filters from './components/Filters';
import { GET_CHARACTERS } from './utils/queries';


function App() {
  const [filters, setFilters] = useState({
    name: '',
    status: '',
    species: '',
    gender: '',
    page: 1,
  });

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: {
      ...filters,
      page: filters.page
    }
  });

  useEffect(() => {
    setFilters(filters => ({
      ...filters,
      page: 1
    }))
  },[filters.name, filters.status, filters.species, filters.gender])

  return (
    <div className='h-screen'>
      <Navbar filter={filters} setFilters={setFilters}/>
      <div className="flex flex-col md:flex-row w-screen">
        <Filters filters={filters} setFilters={setFilters} totalPages={data?.characters?.info.pages} loading={loading}/>
        <CharacterList characters={data?.characters?.results} loading={loading} error={error}/>
      </div>
    </div>
  )
}

export default App
