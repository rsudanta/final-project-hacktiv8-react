import { useEffect, useState } from "react";
import MovieCard from "../../components/molecules/MovieCard";

export default function Watchlist() {
    const [watchlist, setWatchlist] = useState([])
    useEffect(() => {
        let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
        setWatchlist(watchlist)
    }, [])
    return (<>
        <section className="mt-4 container">
            <div className="d-flex align-items-end">
                <h2 className="fw-bold mb-0" style={{ width: '25%' }}>WATCHLIST</h2>
                <div style={{ color: 'grey', width: '100%', borderBottom: 'solid 2px grey' }} />
            </div>
            {watchlist.length > 0 ? (<div className="row">
                {watchlist.map((item, idx) => (
                    <div key={idx} className="col-6 col-md-3 col-lg-2 mt-3">
                        <MovieCard item={item} />
                    </div>
                ))}
            </div>) : <h5 className="text-center mt-5">Empty Data</h5>}
        </section>
    </>)
}