import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HeaderMovieDetail from "../../components/molecules/HeaderMovieDetail";
import { getMovieCasts, getMovieDetail } from "../../redux/action";
import CastDetail from "../../components/molecules/CastDetail";

export default function MovieDetailPage() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const detail = useSelector((state) => state.detailReducer)

    useEffect(() => {
        dispatch(getMovieDetail(id))
        dispatch(getMovieCasts(id))

        return () => {
            dispatch({ type: 'SET_MOVIE_DETAIL', payload: [] })
            dispatch({ type: 'SET_MOVIE_CAST', payload: [] })
        }
    }, [dispatch, id])

    return (
        <>
            <div className="w-100 header-detail">
                <div className="w-100 h-100 header-detail-overlay">
                </div>
                {
                    detail.movieDetailData.backdrop_path && <img className='w-100 h-100' src={`https://image.tmdb.org/t/p/w500/${detail.movieDetailData.backdrop_path}`} alt="" />

                }
                <div className="header-detail-content mt-4 container">
                    <HeaderMovieDetail
                        item={detail.movieDetailData}
                    />
                    {
                        detail.movieCasts && detail.movieCasts.length > 0 && (
                            <>
                                <h3 className="mb-0 mt-4">Casts</h3>
                                <div className="row">
                                    {detail.movieCasts.map((item) => (
                                        <div className="col-12 col-sm-6 col-md-4 mt-3">
                                            <CastDetail item={item} />
                                        </div>
                                    ))}
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}