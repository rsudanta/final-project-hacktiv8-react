import Star from '../atoms/Star'
import './style.css'
import { Link } from "react-router-dom"
import NoPhoto from "../../assets/no_photo.jpg"

export default function MovieCard({ isTopMovie = false, item }) {
    return (
        <>
            <Link to={`movie/detail/${item.id}`}>
                <div className="card card-movie">
                    <img src={item.poster_path ? `https://image.tmdb.org/t/p/w500${item.poster_path}` : NoPhoto} className="card-img h-100" alt={`Movie poster for '${item.title}'`} />
                    {item.vote_average ? <div className='card-rating px-2 py-2'>
                        <Star rate={item.vote_average} />
                    </div> : <></>}
                    {isTopMovie ? <div className="card-top-picks px-2 py-2 fw-medium">
                        <h5 className='mb-0'>#1</h5>
                    </div> : <></>}
                    <div className="card-overlay">
                        <div className="px-3 py-3">
                            <div className='text-break fw-medium mb-1'>{item.title}</div>
                            <small style={{ color: 'lightgrey' }}>{item.release_date ? new Date(item.release_date).getFullYear() : '-'}</small>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}