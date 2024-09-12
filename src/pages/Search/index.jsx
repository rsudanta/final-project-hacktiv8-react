import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getSearch } from "../../redux/action"
import MovieCard from "../../components/molecules/MovieCard"

export default function SearchPage() {
    const { query } = useParams()
    const dispatch = useDispatch()
    const search = useSelector((state) => state.searchReducer)

    useEffect(() => {
        // dispatch(getSearch(query))
        console.log("test")
    }, [query, dispatch])

    return (
        <>
            <div className="container">
                <section className="mt-4">
                    <div className="d-flex align-items-end">
                        <h5 className="fw-bold mb-0">Search results for "{query}"</h5>
                    </div>
                    <div className="row">
                        {search.searchData.map((item, idx) => (
                            <div key={idx} className="col-6 col-md-3 col-lg-2 mt-3">
                                <MovieCard item={item} />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}