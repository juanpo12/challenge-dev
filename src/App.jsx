import { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar'
import { gql, useQuery } from '@apollo/client';
import CharacterList from './components/CharacterList';
import Filters from './components/Filters';

const GET_CHARACTERS = gql`
  query GetCharacters($name: String, $status: String, $species: String, $gender: String, $page: Int!) {
    characters(filter: {name: $name, status: $status, species: $species, gender: $gender}, page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
        species
        gender
        status
        origin {
          name
        }
      }
    }
  }
`;

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
