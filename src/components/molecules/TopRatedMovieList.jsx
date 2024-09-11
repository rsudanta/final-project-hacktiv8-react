export default function TopRatedMovieList() {
    return (
        <>
            <a href="">
                <div className="row py-2 px-4 align-items-center item-list">
                    <div className="col-2 col-lg-2 text-center">
                        <h5 className="mb-0">#2</h5>
                    </div>
                    <div className="col-lg-2 d-none d-lg-block">
                        <img src="https://image.tmdb.org/t/p/w500/865DntZzOdX6rLMd405R0nFkLmL.jpg" style={{ borderRadius: '4px' }}
                            className="w-100  " alt="..." />
                    </div>
                    <div className="col-10 col-lg-8">
                        <span className="fw-medium">Borderland</span>
                        <hr className="my-1" />
                        <small>2024</small>
                    </div>
                </div>
            </a>
        </>
    )
}