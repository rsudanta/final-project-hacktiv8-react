import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import SectionTitle from "../../components/atoms/SectionTitle"
import SearchCard from "../../components/molecules/SearchCard"
import { getSearchMovie, loadMoreMovie } from "../../redux/action"

export default function SearchPage() {
    const { query } = useParams()
    const dispatch = useDispatch()
    const { searchMovie } = useSelector((state) => state.searchReducer)

    useEffect(() => {
        dispatch(getSearchMovie(query))
    }, [query, dispatch])

    const handleLoadMoreMovie = () => {
        dispatch({ type: 'SET_SEARCH_MOVIE_PAGE', payload: searchMovie.page + 1 })
        let newPage = searchMovie.page + 1;
        dispatch(loadMoreMovie(query, newPage))
    }

    return (
        <>
            <div className="container">
                <section className="mt-4">
                    <div className="d-flex align-items-end">
                        <h5 className="fw-bold mb-0">Search results for "{query}"</h5>
                    </div>
                    <div className="card mt-4">
                        <div className="card-body">
                            <SectionTitle title="Movies" />
                            <div className="pt-2">
                                <small >Result <b>{searchMovie.items.length}</b> of <b>{searchMovie.totalResult}</b> for "{query}"</small>
                            </div>
                            <div className="row mt-2">
                                {searchMovie.items.map((item) => (
                                    <div key={item.id} className="col-3 mt-2">
                                        <SearchCard item={item} />
                                    </div>
                                ))}
                            </div>
                            {searchMovie.hasMore && <div className="text-center">
                                <button onClick={handleLoadMoreMovie} className="btn btn-sm btn-outline-danger mt-4 px-5">Load More</button>
                            </div>}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}