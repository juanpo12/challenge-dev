import Button from "./ui/Button";

const Pagination = ({setFilters, currentPage, totalPages, loading}) => {

    const nextPage = () => {
        setFilters((prevFilters) => ({
          ...prevFilters,
          page: prevFilters.page + 1
        }));
      };
    
      const prevPage = () => {
        setFilters((prevFilters) => ({
          ...prevFilters,
          page: Math.max(prevFilters.page - 1, 1)
        }));
      };

    
    
    return (
        <div className="flex justify-center">
            <div className="flex gap-2 items-center">
                <Button disabled={ loading || currentPage === 1 } onClick={prevPage}>Prev</Button>
                <span>{`Page ${currentPage} of ${totalPages !== undefined ? totalPages : '...'}`}</span>
                <Button disabled={ loading || currentPage === totalPages } onClick={nextPage}>Next</Button>
            </div>
        </div>
    )
}

export default Pagination