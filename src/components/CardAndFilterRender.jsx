import Cards from "./Cards"
import Filters from "./Filters"

const CardAndFilterRender = () => {

    return (
        <div className="flex flex-col md:flex-row">
            <Filters/>
            <Cards/>
        </div>
    )
}

export default CardAndFilterRender
