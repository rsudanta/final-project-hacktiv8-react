import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../../components/molecules/MovieCard";
import TopRatedMovieList from "../../components/molecules/TopRatedMovieList";
import { getNowPlayingMovie, getTopMovie, setLoading } from "../../redux/action";

export default function DashboardPage() {
    const dispatch = useDispatch()
    const { nowPlayingMovie, hasMore, page, topMovie } = useSelector((state) => state.movieReducer);
    const { isLoading } = useSelector((state) => state.globalReducer);
    const loader = useRef(null);

    useEffect(() => {
        if (page === 1) {
            dispatch(setLoading(true))
            dispatch(getNowPlayingMovie(page));
            dispatch(getTopMovie())
        }

        console.log(topMovie)

    }, [dispatch, page]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore && !isLoading) {
                    dispatch(getNowPlayingMovie(page));
                }
            },
            { threshold: 0.9 }
        );

        if (loader.current) {
            observer.observe(loader.current);
        }

        return () => {
            if (loader.current) {
                observer.unobserve(loader.current);
            }
        };
    }, [dispatch, hasMore, page]);

    const loadMore = () => {
        dispatch(getNowPlayingMovie(page))
    }

    return (
        <>
            <div className="container">
                {
                    topMovie.length > 0 && (<section className="mt-4">
                        <div className="row">
                            <div className="col-lg-8">
                                <MovieCard isTopMovie={true} item={topMovie[0]} />
                            </div>
                            <div className="col-lg-4 mt-4 mt-lg-0">
                                <div className="card" style={{ height: '100%', color: "white", backgroundColor: '#141414' }}>
                                    <div className="px-4 pt-3 pb-2" style={{ backgroundColor: '#eb1c24' }}>
                                        <h4><b>Top Rated Movie</b></h4>
                                    </div>
                                    <div className="d-flex flex-column justify-content-between" style={{ height: '100%' }}>
                                        <hr className="my-0" />
                                        {
                                            topMovie.map((el, idx) => (
                                                idx !== 0 && (
                                                    <>
                                                        <TopRatedMovieList item={el} rank={idx + 1} />
                                                        <hr className="my-0" />
                                                    </>
                                                )
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>)
                }
                <section className="mt-4">
                    <div className="d-flex align-items-end">
                        <h2 className="fw-bold mb-0" style={{ width: '25%' }}>POPULAR NOW</h2>
                        <div style={{ color: 'grey', width: '100%', borderBottom: 'solid 2px grey' }} />
                    </div>
                    <div className="row">
                        {nowPlayingMovie.map((item, idx) => (
                            <div key={idx} className="col-6 col-md-3 col-lg-2 mt-3">
                                <MovieCard item={item} />
                            </div>
                        ))}
                    </div>
                </section>
                {
                    !isLoading && hasMore && (<div className="my-4 text-center">
                        <button ref={loader} onClick={loadMore} className="btn btn-sm btn-outline-danger px-5">Load More</button>
                    </div>)
                }

            </div>
        </>
    )
}