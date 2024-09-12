import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import MovieCard from "../../components/molecules/MovieCard"
import { getSearch } from "../../redux/action"
import SectionTitle from "../../components/atoms/SectionTitle"
import SearchCard from "../../components/molecules/SearchCard"

export default function SearchPage() {
    const { query } = useParams()
    const dispatch = useDispatch()
    const { searchData } = useSelector((state) => state.searchReducer)

    useEffect(() => {
        // dispatch(getSearch(query))
    }, [query, dispatch])

    return (
        <>
            <div className="container">
                <section className="mt-4">
                    <div className="d-flex align-items-end">
                        <h5 className="fw-bold mb-0">Search results for "{query}"</h5>
                    </div>
                    {/* <div className="row">
                        {searchData.map((item, idx) => (
                            <div key={idx} className="col-6 col-md-3 col-lg-2 mt-3">
                                <MovieCard item={item} />
                            </div>
                        ))}
                    </div> */}

                    <div className="card mt-4">
                        <div className="card-body">
                            <SectionTitle title="Movies" />
                            <div className="row mt-2">
                                <div className="col-4 mt-2">
                                    <SearchCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}