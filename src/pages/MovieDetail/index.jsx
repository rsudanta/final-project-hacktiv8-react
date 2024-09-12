import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CastDetail from "../../components/molecules/CastDetail";
import HeaderMovieDetail from "../../components/molecules/HeaderMovieDetail";
import { getMovieCasts, getMovieDetail } from "../../redux/action";

export default function MovieDetailPage() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const detail = useSelector((state) => state.detailReducer)
    const navigate = useNavigate()

    useEffect(() => {
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

    return (
        <>
            <div className="w-100 header-detail">
                <div className="w-100 h-100 header-detail-overlay">
                </div>
                {
                    detail.movieDetailData.backdrop_path && <img className='w-100 h-100' src={`https://image.tmdb.org/t/p/w500/${detail.movieDetailData.backdrop_path}`} alt="" />

                }
                <div className="header-detail-content mt-4 container mb-5">
                    <p><a onClick={onBack} href="#">Back </a>/ <b>{detail.movieDetailData.title}</b></p>
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
                    <div className="mt-5"></div>
                </div>
            </div>
        </>
    )
}