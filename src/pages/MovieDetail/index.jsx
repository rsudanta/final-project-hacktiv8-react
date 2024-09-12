import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CastDetail from "../../components/molecules/CastDetail";
import HeaderMovieDetail from "../../components/molecules/HeaderMovieDetail";
import { getMovieCasts, getMovieDetail, setLoading } from "../../redux/action";
import SectionTitle from "../../components/atoms/SectionTitle";
import DetailSkeleton from "../../components/molecules/DetailSkeleton";

export default function MovieDetailPage() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const { movieDetailData, isAlreadyInWatchlist, movieCasts } = useSelector((state) => state.detailReducer)
    const navigate = useNavigate()
    const { isLoading } = useSelector((state) => state.globalReducer);

    useEffect(() => {
        dispatch(setLoading(true))
        window.scrollTo(0, 0);
        dispatch(getMovieDetail(id))
        dispatch(getMovieCasts(id))

        return () => {
            dispatch({ type: 'SET_MOVIE_DETAIL', payload: [] })
            dispatch({ type: 'SET_MOVIE_CASTS', payload: [] })
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

    return (
        <>
            <div className="w-100 header-detail">
                <div className="w-100 h-100 header-detail-overlay">
                </div>
                {
                    movieDetailData.backdrop_path && <img className='w-100 h-100' src={`https://image.tmdb.org/t/p/w500/${movieDetailData.backdrop_path}`} alt="" />
                }
                <div className="header-detail-content mt-4 container mb-5">
                    {isLoading ? <DetailSkeleton /> : (<>
                        <div className="d-flex justify-content-between">
                            <p><a onClick={onBack} href="#">Back </a>/ <b>{movieDetailData.title}</b></p>
                            {isAlreadyInWatchlist ? (<a href="#" onClick={removeFromWatchlist} className="btn-bookmarks"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-dash-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5M6 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
                            </svg><span className="ms-1">Remove from Watchlist</span></a>) : (<a href="#" onClick={addToWatchList} className="btn-bookmarks"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-plus-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5z" />
                            </svg><span className="ms-1">Add to Watchlist</span></a>)}
                        </div>
                        <HeaderMovieDetail
                            item={movieDetailData}
                        />
                        {
                            movieCasts && movieCasts.length > 0 && (
                                <div className="mt-4">
                                    <SectionTitle title="Casts" />
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
                    </>)}



                    <div className="mt-5"></div>
                </div>
            </div>
        </>
    )
}