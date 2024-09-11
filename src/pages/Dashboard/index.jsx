import { useEffect, useState } from "react";
import MovieCard from "../../components/molecules/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { getNowPlayingMovie, setLoading } from "../../redux/action";

export default function DashboardPage() {
    const movies = useSelector((state) => state.movieReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setLoading(true))
        dispatch(getNowPlayingMovie())
    }, [])

    return (
        <>
            <div className="container">
                {/* <section className="mt-4">
                    <div className="row">
                        <div className="col-lg-8">
                            <MovieCard isTopMovie={true} />
                        </div>
                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <div className="card" style={{ height: '100%', color: "white", backgroundColor: '#141414' }}>
                                <div className="px-4 pt-3 pb-2" style={{ backgroundColor: '#eb1c24' }}>
                                    <h4><b>Top Rated Movie</b></h4>
                                </div>
                                <div className="d-flex flex-column justify-content-between" style={{ height: '100%' }}>
                                    <hr className="my-0" />
                                    <TopItemList />
                                    <hr className="my-0" />
                                    <TopItemList />
                                    <hr className="my-0" />
                                    <TopItemList />
                                    <hr className="my-0" />
                                    <TopItemList />
                                    <hr className="my-0" style={{ borderTop: '0' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <section className="mt-4">
                    <div className="d-flex align-items-end">
                        <h2 className="fw-bold mb-0" style={{ width: '25%' }}>POPULAR NOW</h2>
                        <div style={{ color: 'grey', width: '100%', borderBottom: 'solid 2px grey' }} />
                    </div>
                    <div className="row">
                        {movies.nowPlaying.map((item, idx) => (
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