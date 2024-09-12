import Star from "../atoms/Star";

export default function SearchCard() {
    return (<>
        <div className="card">
            <div className="card-body">
                <div className="d-flex align-items-center">
                    <img className="search-card-img"
                        src="https://image.tmdb.org/t/p/w500//3E53WEZJqP6aM84D8CckXx4pIHw.jpg" alt="" />
                    <div className="ms-3">
                        <div className="d-flex">
                            <h5 className="text-break mb-0">Deadpool</h5>
                            <div className="ms-2">
                                <Star rate={7.3} />
                            </div>
                        </div>
                        <small>2024</small>
                    </div>
                </div>
            </div>
        </div></>)
}