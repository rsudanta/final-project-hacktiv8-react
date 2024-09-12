import star from "../../assets/Star.png"
import './style.css'

export default function Headeritem({ item }) {
    return (
        <>
            <div className="row">
                <div className="col-12 col-md-4">
                    <div className="card">
                        <img className='w-100' src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-8 mt-3 mt-lg-0">
                    <h1>{item.title}</h1>
                    <p>{new Date(item.release_date).getFullYear()}</p>

                    <p className='mt-4'>{item.overview}
                    </p>
                    <hr />

                    <h5>Genre</h5>
                    <p>{item.genres && item.genres.map(genre => genre.name).join(', ')}</p>
                    <hr />

                    <h5>Duration</h5>
                    <p>{item.runtime} minutes</p>
                    <hr />

                    <h5>Rating</h5>
                    <div className="d-flex align-items-center">
                        <img style={{ height: '18px' }} src={star} alt="" />
                        <div className='ms-1'>{item.vote_average ? item.vote_average.toFixed(1) : '-'}<span style={{ color: 'gray' }}>/10</span></div>
                    </div>
                    <hr />

                    <h5>Language</h5>
                    <p> {item.spoken_languages && item.spoken_languages.length > 0
                        ? item.spoken_languages.map(language => language.english_name).join(', ')
                        : '-'}</p>
                    <hr />
                </div>
            </div>
        </>
    )
}