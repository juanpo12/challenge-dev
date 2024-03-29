import CardAndFilterRender from './components/CardAndFilterRender'
import Cards from './components/Cards'
import Filters from './components/Filters'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <div className='h-screen'>
      <Navbar/>
      <CardAndFilterRender/>
    </div>
  )
}

export default App
