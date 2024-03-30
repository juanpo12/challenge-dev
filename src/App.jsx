import { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar'
import { gql, useQuery } from '@apollo/client';
import CharacterList from './components/CharacterList';
import Filters from './components/Filters';

const GET_CHARACTERS = gql`
  query GetCharacters($name: String, $status: String, $species: String, $gender: String) {
    characters(filter: {name: $name, status: $status, species: $species, gender: $gender }) {
      results {
        id
        name
        image
        species
        gender
        status
      }
    }
  }
`;

function App() {
  const [filters, setFilters] = useState({
    name: '',
    status: '',
    species: '',
    gender: ''
  });

  useEffect(() => {
    
    console.log(filters);
  },[ filters ]);


  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: filters
  });

  return (
    <div className='h-screen'>
      <Navbar filter={filters} setFilters={setFilters}/>
      <div className="flex flex-col md:flex-row">
        <Filters filters={filters} setFilters={setFilters}/>
        <CharacterList characters={data?.characters?.results} loading={loading} error={error}/>
      </div>
    </div>
  )
}

export default App
