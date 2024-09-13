import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SectionTitle from "../../components/atoms/SectionTitle";
import CastDetail from "../../components/molecules/CastDetail";
import DetailSkeleton from "../../components/molecules/DetailSkeleton";
import HeaderMovieDetail from "../../components/molecules/HeaderMovieDetail";
import Review from "../../components/molecules/Review";
import { getMovieCasts, getMovieDetail, getSimilarMovie, setLoading } from "../../redux/action";
import { getMovieReview } from "../../redux/action/review";
import SearchCard from "../../components/molecules/SearchCard";

export default function MovieDetailPage() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const { movieDetailData, isAlreadyInWatchlist, movieCasts, similarMovie } = useSelector((state) => state.detailReducer)
    const { review } = useSelector((state) => state.reviewReducer)
    const navigate = useNavigate()
    const { isLoading } = useSelector((state) => state.globalReducer);

    useEffect(() => {
        dispatch(setLoading(true))
        window.scrollTo(0, 0);
        dispatch(getMovieDetail(id))
        dispatch(getMovieCasts(id))
        dispatch(getMovieReview(id))
        dispatch(getSimilarMovie(id))

        return () => {
            dispatch({ type: 'SET_MOVIE_DETAIL', payload: [] })
            dispatch({ type: 'SET_SIMILAR_MOVIE', payload: [] })
            dispatch({ type: 'SET_MOVIE_CASTS', payload: [] })
            dispatch({ type: 'SET_REVIEW', payload: { results: [], totalResult: 0 } })
        }
    }, [dispatch, id])

    const onBack = () => {
        navigate(-1)
    }

    const addToWatchList = () => {
        let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
        watchlist.push(movieDetailData);
        localStorage.setItem("watchlist", JSON.stringify(watchlist));
        dispatch({ type: 'SET_WATCHLIST', payload: true })
    }

    const removeFromWatchlist = () => {
        let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
        const updatedWatchlist = watchlist.filter(movie => movie.id !== movieDetailData.id);
        localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
        dispatch({ type: 'SET_WATCHLIST', payload: false })
    }

    const containerRef = useRef(null);
    const absoluteElementRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const absoluteElement = absoluteElementRef.current;

        if (container && absoluteElement) {
            container.style.height = `${absoluteElement.offsetHeight}px`;
        }
    }, [movieDetailData, isAlreadyInWatchlist, movieCasts, similarMovie]);

    return (
        <div ref={containerRef}>
            <div className="w-100 header-detail">
                <div className="w-100 h-100 header-detail-overlay">
                </div>
                {
                    movieDetailData.backdrop_path && <div><img className='w-100 h-100' src={`https://image.tmdb.org/t/p/w500/${movieDetailData.backdrop_path}`} alt="" /></div>
                }
                <div className="header-detail-content mt-4 container mb-5" ref={absoluteElementRef}>
                    {isLoading ? <DetailSkeleton /> : (<>
                        <div className="d-flex justify-content-between align-items-center mb-2">
                            <p className="mb-0"><button className="btn btn-back mb-1" onClick={onBack} >Back</button> / <span className="fw-semibold">{movieDetailData.title}</span></p>
                            {isAlreadyInWatchlist ? (<button onClick={removeFromWatchlist} className="btn btn-bookmarks"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-dash-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5M6 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
                            </svg><span className="ms-1">Remove from Watchlist</span></button>) : (<button onClick={addToWatchList} className="btn-bookmarks btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-plus-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5z" />
                            </svg><span className="ms-1">Add to Watchlist</span></button>)}
                        </div>
                        <HeaderMovieDetail
                            item={movieDetailData}
                        />
                        <div className="row mt-4">
                            <div className="col-12 col-lg-8">
                                {
                                    movieCasts && movieCasts.length > 0 && (
                                        <div>
                                            <SectionTitle title="Top Casts" />
                                            <div className="row">
                                                {movieCasts.map((item, idx) => (
                                                    <div key={idx} className="col-12 col-sm-6 col-md-4 mt-3">
                                                        <CastDetail item={item} />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                }
                                <div className="mt-4">
                                    <SectionTitle title="Reviews" />
                                    {review.length > 0 ?
                                        review.map((item) => (
                                            <Review item={item} />
                                        ))
                                        : (<div className="mt-4 text-center">
                                            No Review
                                        </div>)
                                    }

                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="mb-3">
                                            <SectionTitle title="Similar Movies" />
                                        </div>
                                        {similarMovie.length > 0 ? similarMovie.map((item) => (
                                            <div className="mt-2">
                                                <SearchCard item={item} />
                                            </div>
                                        )) : <div className="mt-4 text-center">
                                            No Movie
                                        </div>}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)}
                    <div className="mt-5"></div>
                </div>
            </div>
        </div>
    )
}